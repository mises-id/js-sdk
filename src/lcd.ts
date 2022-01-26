// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { fromBase64, toBase64 } from '@cosmjs/encoding'
import {
  coins,
  DirectSecp256k1Wallet,
  encodePubkey,
  makeSignDoc,
  Registry,
  TxBodyEncodeObject
} from '@cosmjs/proto-signing'
import {
  StargateClient,
  BroadcastTxResponse,
  QueryClient,
  TimeoutError,
  defaultRegistryTypes
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

  public async broadcast(msg: any, wallet: DirectSecp256k1Wallet): Promise<BroadcastTxResponse> {
    // console.log('broadcast', msg, 'granter', this._feeGrantor)
    const client = await StargateClient.connect(this._config.lcdEndpoint())
    const [{ address, pubkey: pubkeyBytes }] = await wallet.getAccounts()
    const pubkey = encodePubkey({
      type: 'tendermint/PubKeySecp256k1',
      value: toBase64(pubkeyBytes)
    })
    const txBodyFields: TxBodyEncodeObject = {
      typeUrl: '/cosmos.tx.v1beta1.TxBody',
      value: {
        messages: [msg]
      }
    }
    const txBodyBytes = this._registry.encode(txBodyFields)
    const { accountNumber, sequence } = await client.getSequence(address)
    const feeAmount = coins(this._config.feeLimit(), this._config.denom())
    const gasLimit = this._config.gasLimit()
    const authInfoBytes = this.makeAuthInfoBytes([{ pubkey, sequence }], feeAmount, gasLimit)

    const chainId = await client.getChainId()
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber)
    const { signature } = await wallet.signDirect(address, signDoc)
    const txRaw = TxRaw.fromPartial({
      bodyBytes: txBodyBytes,
      authInfoBytes: authInfoBytes,
      signatures: [fromBase64(signature.signature)]
    })
    const txRawBytes = Uint8Array.from(TxRaw.encode(txRaw).finish())
    const txResult = await client.broadcastTx(txRawBytes)
    return txResult
  }
}
