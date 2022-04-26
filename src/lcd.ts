// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { fromBase64, toBase64, toHex } from '@cosmjs/encoding'
import { sleep } from '@cosmjs/utils'
import {
  DirectSecp256k1Wallet,
  encodePubkey,
  makeSignDoc,
  Registry,
  TxBodyEncodeObject,
  EncodeObject
} from '@cosmjs/proto-signing'
import {
  SigningStargateClient,
  StargateClient,
  DeliverTxResponse,
  QueryClient,
  calculateFee,
  IndexedTx,
  defaultRegistryTypes,
  TimeoutError
} from '@cosmjs/stargate'

import { Tendermint34Client } from '@cosmjs/tendermint-rpc'

import { PageRequest } from './proto/cosmos/base/query/v1beta1/pagination'
import {
  MsgCreateDidRegistry,
  MsgUpdateAppInfo,
  MsgUpdateUserInfo,
  MsgUpdateUserRelation
} from './proto/misestm/v1beta1/tx'
import { MsgGrantAllowance } from './proto/cosmos/feegrant/v1beta1/tx'
import { Coin } from 'cosmjs-types/cosmos/base/v1beta1/coin'
import { SignMode } from 'cosmjs-types/cosmos/tx/signing/v1beta1/signing'
import { AuthInfo, SignDoc, SignerInfo, TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { Any } from 'cosmjs-types/google/protobuf/any'
import Long from 'long'
import { MisesConfig } from './mises'

export class TxSearchParam {
  minHeight: number | undefined
  maxHeight: number | undefined
  page: number | undefined
}
export class TxSearchResp {
  totalCount: number | undefined
  txs: IndexedTx[] | undefined
}

export class LCDConnection {
  private _config: MisesConfig
  private _registry = new Registry([...defaultRegistryTypes])
  private _feeGrantor: string | undefined
  constructor(config: MisesConfig) {
    this._config = config
    this._registry.register('/misesid.misestm.v1beta1.MsgCreateDidRegistry', MsgCreateDidRegistry)
    this._registry.register('/misesid.misestm.v1beta1.MsgUpdateUserInfo', MsgUpdateUserInfo)
    this._registry.register('/misesid.misestm.v1beta1.MsgUpdateUserRelation', MsgUpdateUserRelation)
    this._registry.register('/misesid.misestm.v1beta1.MsgUpdateAppInfo', MsgUpdateAppInfo)
    this._registry.register('/cosmos.feegrant.v1beta1.MsgGrantAllowance', MsgGrantAllowance)
  }
  private async makeClient(rpcUrl: string): Promise<[QueryClient, Tendermint34Client]> {
    const tmClient = await Tendermint34Client.connect(rpcUrl)
    return [QueryClient.withExtensions(tmClient), tmClient]
  }

  public setFeeGrantor(address: string) {
    this._feeGrantor = address
  }

  public createPagination(paginationKey?: Uint8Array): PageRequest {
    return PageRequest.fromPartial({
      key: paginationKey,
      offset: Long.fromNumber(0, true),
      limit: Long.fromNumber(20, true),
      countTotal: false,
      reverse: false
    })
  }
  public async stargate(): Promise<StargateClient> {
    const client = await StargateClient.connect(this._config.lcdEndpoint())
    return client
  }

  public async query(path: string, requset: Uint8Array): Promise<Uint8Array> {
    const [client, tmClient] = await this.makeClient(this._config.lcdEndpoint())

    const data = await client.queryUnverified(path, requset)

    tmClient.disconnect()

    return data
  }

  public makeSignerInfos(
    signers: ReadonlyArray<{ readonly pubkey: Any; readonly sequence: number }>,
    signMode: SignMode
  ): SignerInfo[] {
    return signers.map(
      ({ pubkey, sequence }): SignerInfo => ({
        publicKey: pubkey,
        modeInfo: {
          single: { mode: signMode }
        },
        sequence: Long.fromNumber(sequence)
      })
    )
  }
  public makeAuthInfoBytes(
    signers: ReadonlyArray<{ readonly pubkey: Any; readonly sequence: number }>,
    feeAmount: readonly Coin[],
    gasLimit: number,
    signMode = SignMode.SIGN_MODE_DIRECT
  ): Uint8Array {
    if (this._feeGrantor) {
      const authInfo = {
        signerInfos: this.makeSignerInfos(signers, signMode),
        fee: {
          amount: [...feeAmount],
          gasLimit: Long.fromNumber(gasLimit),
          granter: this._feeGrantor
        }
      }

      return AuthInfo.encode(AuthInfo.fromPartial(authInfo)).finish()
    } else {
      const authInfo = {
        signerInfos: this.makeSignerInfos(signers, signMode),
        fee: {
          amount: [...feeAmount],
          gasLimit: Long.fromNumber(gasLimit)
        }
      }

      return AuthInfo.encode(AuthInfo.fromPartial(authInfo)).finish()
    }
  }
  public async simulate(
    signerAddress: string,
    messages: readonly EncodeObject[],
    wallet: DirectSecp256k1Wallet
  ): Promise<number> {
    const client = await SigningStargateClient.connectWithSigner(
      this._config.lcdEndpoint(),
      wallet,
      { registry: this._registry }
    )
    return client.simulate(signerAddress, messages, undefined)
  }

  public async broadcast(
    msg: any,
    wallet: DirectSecp256k1Wallet,
    simulate: Boolean = false,
    memo: string = ''
  ): Promise<DeliverTxResponse> {
    const [{ address, pubkey: pubkeyBytes }] = await wallet.getAccounts()
    const pubkey = encodePubkey({
      type: 'tendermint/PubKeySecp256k1',
      value: toBase64(pubkeyBytes)
    })
    const txBodyFields: TxBodyEncodeObject = {
      typeUrl: '/cosmos.tx.v1beta1.TxBody',
      value: {
        messages: [msg],
        memo: memo
      }
    }
    const txBodyBytes = this._registry.encode(txBodyFields)
    let gasEstimation
    try {
      gasEstimation = await this.simulate(address, [msg], wallet)
    } catch (_err) {
      gasEstimation = 100000
    }
    if (simulate) {
      return {
        height: 0,
        code: 0,
        transactionHash: '',
        gasWanted: Math.round(gasEstimation * 1.3),
        gasUsed: Math.round(gasEstimation * 1.05)
      }
    }

    const fee = calculateFee(
      Math.round(gasEstimation * 1.05),
      this._config.gasPrice() + this._config.denom()
    )

    // const feeAmount = coins(this._config.feeLimit(), this._config.denom())
    const gasLimit = Math.max(this._config.gasLimit(), gasEstimation * 1.3)

    const client = await this.stargate()
    const { accountNumber, sequence } = await client.getSequence(address)
    const authInfoBytes = this.makeAuthInfoBytes([{ pubkey, sequence }], fee.amount, gasLimit)

    const chainId = await client.getChainId()
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber)
    const { signature } = await wallet.signDirect(address, signDoc)
    const txRaw = TxRaw.fromPartial({
      bodyBytes: txBodyBytes,
      authInfoBytes: authInfoBytes,
      signatures: [fromBase64(signature.signature)]
    })
    const txRawBytes = Uint8Array.from(TxRaw.encode(txRaw).finish())
    const txResult = await this.broadcastTx(txRawBytes)
    client.disconnect()
    return txResult
  }

  public async txsQuery(query: string, param: TxSearchParam): Promise<TxSearchResp> {
    const [client, tmClient] = await this.makeClient(this._config.lcdEndpoint())
    const minHeight = param.minHeight || 0
    const maxHeight = param.maxHeight || Number.MAX_SAFE_INTEGER
    const page = param.page || 1
    function withFilters(originalQuery: string): string {
      return `${originalQuery} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`
    }
    let results
    try {
      results = await tmClient.txSearch({ query: withFilters(query), page })
    } catch (_err) {
      results = {
        totalCount: 0,
        txs: []
      }
    }
    tmClient.disconnect()
    return {
      totalCount: results.totalCount,
      txs: results.txs.map(tx => {
        return {
          height: tx.height,
          hash: toHex(tx.hash).toUpperCase(),
          code: tx.result.code,
          rawLog: tx.result.log || '',
          tx: tx.tx,
          gasUsed: tx.result.gasUsed,
          gasWanted: tx.result.gasWanted
        }
      })
    }
  }
  public async getTx(id: string): Promise<IndexedTx | null> {
    const results = await this.txsQuery(`tx.hash='${id}'`, {
      minHeight: 0,
      maxHeight: undefined,
      page: 1
    })
    if (results.totalCount === 0 || !results.txs) {
      return null
    }
    return results.txs[0]
  }

  public async broadcastTx(
    tx: Uint8Array,
    timeoutMs: number = 30000,
    pollIntervalMs: number = 3000
  ): Promise<DeliverTxResponse> {
    let timedOut = false
    const txPollTimeout = setTimeout(() => {
      timedOut = true
    }, timeoutMs)

    const pollForTx = async (txId: string): Promise<DeliverTxResponse> => {
      if (timedOut) {
        throw new TimeoutError(
          `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later.`,
          txId
        )
      }
      await sleep(pollIntervalMs)
      const result = await this.getTx(txId)
      return result
        ? {
            code: result.code,
            height: result.height,
            rawLog: result.rawLog,
            transactionHash: txId,
            gasUsed: result.gasUsed,
            gasWanted: result.gasWanted
          }
        : pollForTx(txId)
    }

    const [client, tmClient] = await this.makeClient(this._config.lcdEndpoint())
    const broadcasted = await tmClient.broadcastTxSync({ tx })
    if (broadcasted.code) {
      throw new Error(
        `Broadcasting transaction failed with code ${broadcasted.code} (codespace: ${broadcasted.codeSpace}). Log: ${broadcasted.log}`
      )
    }
    const transactionId = toHex(broadcasted.hash).toUpperCase()
    return new Promise((resolve, reject) =>
      pollForTx(transactionId).then(
        value => {
          clearTimeout(txPollTimeout)
          resolve(value)
        },
        error => {
          clearTimeout(txPollTimeout)
          reject(error)
        }
      )
    )
  }
}
