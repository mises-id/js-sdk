/* eslint-disable */
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
  RestQueryAppResponse,
  RestQueryDidResponse
} from '../proto/misestm/v1beta1/rest_query'
import { QueryAccountResponse } from 'cosmjs-types/cosmos/auth/v1beta1/query'
import { Any } from 'cosmjs-types/google/protobuf/any'

export function makeAny(object: any): Any {
  return Any.fromJSON(object)
}
export function makeAnyBuf(object: any): Uint8Array {
  return Any.encode(Any.fromJSON(object)).finish()
}
export function mockQueryAccountResponse(): Uint8Array {
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
export function mockRestQueryDidResponse(did: string): Uint8Array {
  const resp = RestQueryDidResponse.fromPartial({
    didRegistry: {
      did: did
    }
  })

  return RestQueryDidResponse.encode(resp).finish()
}

export function mockRestQueryAppResponse(domain: string): Uint8Array {
  const resp = RestQueryAppResponse.fromPartial({
    pubInfo: {
      name: 'mock app name',
      domains: [domain]
    }
  })

  return RestQueryAppResponse.encode(resp).finish()
}

export function mockTMClient(respData: Uint8Array) {
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
    connect: mockTMClient(new Uint8Array())
  }
}))
