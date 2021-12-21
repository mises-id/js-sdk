// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { fromBase64, toBase64 } from '@cosmjs/encoding'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import {
  coins,
  DirectSecp256k1Wallet,
  encodePubkey,
  makeAuthInfoBytes,
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
import { MsgCreateDidRegistry } from './proto/misestm/v1beta1/tx'
import Long from 'long'

export class LCDConnection {
  private _lcdEndpoint: string
  private _registry = new Registry([...defaultRegistryTypes])
  constructor(endpoint: string) {
    this._lcdEndpoint = endpoint

    this._registry.register('/misesid.misestm.v1beta1.MsgCreateDidRegistry', MsgCreateDidRegistry)
  }
  private async makeClient(rpcUrl: string): Promise<[QueryClient, Tendermint34Client]> {
    const tmClient = await Tendermint34Client.connect(rpcUrl)
    return [QueryClient.withExtensions(tmClient), tmClient]
  }

  public createPagination(paginationKey?: Uint8Array): PageRequest {
    return PageRequest.fromPartial({
      key: paginationKey,
      offset: Long.fromNumber(0, true),
      limit: Long.fromNumber(0, true),
      countTotal: false,
      reverse: false
    })
  }

  public async query(path: string, requset: Uint8Array): Promise<Uint8Array> {
    const [client, tmClient] = await this.makeClient(this._lcdEndpoint)

    const data = await client.queryUnverified(path, requset)

    tmClient.disconnect()

    return data
  }
  public async broadcast(msg: any, wallet: DirectSecp256k1Wallet): Promise<BroadcastTxResponse> {
    const client = await StargateClient.connect(this._lcdEndpoint)
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
    const feeAmount = coins(2000, 'umis')
    const gasLimit = 200000
    const authInfoBytes = makeAuthInfoBytes([{ pubkey, sequence }], feeAmount, gasLimit)

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
