/* eslint-disable */
import MSdk from './mises-js-sdk'
import { MUser } from './muser'
import { Random } from '@cosmjs/crypto'
import { toHex } from '@cosmjs/encoding'
import {
  Tendermint34Client,
  AbciQueryResponse,
  StatusResponse,
  BroadcastTxSyncResponse,
  TxSearchResponse
} from '@cosmjs/tendermint-rpc'
import {
  RestQueryUserResponse,
  RestQueryUserRelationResponse,
  RestQueryDidResponse
} from './proto/misestm/v1beta1/rest_query'
import { QueryAccountResponse } from 'cosmjs-types/cosmos/auth/v1beta1/query'
import { Any } from 'cosmjs-types/google/protobuf/any'

function makeAny(object: any): Any {
  return Any.fromJSON(object)
}
function makeAnyBuf(object: any): Uint8Array {
  return Any.encode(Any.fromJSON(object)).finish()
}
function makeQueryAccountResponse(): Uint8Array {
  const resp = QueryAccountResponse.fromPartial({
    account: makeAny({
      typeUrl: '/cosmos.auth.v1beta1.BaseAccount',
      value: makeAnyBuf({
        account_number: 1,
        sequence: 1
      })
    })
  })

  return QueryAccountResponse.encode(resp).finish()
}
function makeRestQueryDidResponse(did: string): Uint8Array {
  const resp = RestQueryDidResponse.fromPartial({
    didRegistry: {
      did: did
    }
  })

  return RestQueryDidResponse.encode(resp).finish()
}
function makeTMClient(respData: Uint8Array) {
  return jest.fn().mockReturnValue({
    abciQuery: jest.fn().mockReturnValue({
      value: respData
    }),
    status: jest.fn().mockReturnValue({
      nodeInfo: {
        network: 'test'
      }
    }),
    broadcastTxSync: jest.fn().mockReturnValue({
      hash: 'mockHash'
    }),
    txSearchAll: jest.fn().mockReturnValue({
      txs: [
        {
          hash: 'mockHash',
          height: 1,
          result: {
            code: 0,
            gasUsed: 0,
            gasWanted: 0
          }
        }
      ]
    }),
    disconnect: jest.fn()
  })
}
jest.mock('@cosmjs/tendermint-rpc', () => ({
  Tendermint34Client: {
    connect: makeTMClient(new Uint8Array())
  }
}))

/**
 * MSdk test
 */
describe('MUser test', () => {
  it('test activate user', async () => {
    const sdk = await MSdk.newSdk()
    const umgr = sdk.UserMgr()
    expect(umgr.findUser('did:mises:mises1s0psf4wjssssdxpf0c29vyrnudrmggvp63qmmy')).toBeUndefined()
    const user = await umgr.activateUser(
      '7fbe7f060e916f2901de4f44cea972c3083f99cd4bbcb39c0bb3e0c3f4f0f927'
    )
    expect(user.misesID()).toEqual('did:mises:mises1s0psf4wjssssdxpf0c29vyrnudrmggvp63qmmy')
    expect(umgr.findUser(user.misesID())).toBeInstanceOf(MUser)
  })

  it('test register user', async () => {
    const sdk = await MSdk.newSdk()
    const umgr = sdk.UserMgr()
    const user = await umgr.activateUser(toHex(Random.getBytes(32)))
    const did = user.misesID()
    Tendermint34Client.connect = makeTMClient(
      RestQueryDidResponse.encode(
        RestQueryDidResponse.fromJSON({
          code: 404
        })
      ).finish()
    )
    const registed = await user.isRegistered()
    expect(registed).toBeFalsy()

    Tendermint34Client.connect = makeTMClient(makeQueryAccountResponse())

    const resp = await user.register()
    expect(resp.height).toBeGreaterThan(0)

    Tendermint34Client.connect = makeTMClient(makeRestQueryDidResponse(did))
    const registed1 = await user.isRegistered()
    expect(registed1).toBeTruthy()
  })
})
