/* eslint-disable */
import { Random } from '@cosmjs/crypto'
import { toHex } from '@cosmjs/encoding'
import {
  Tendermint34Client,
  AbciQueryResponse,
  StatusResponse,
  BroadcastTxSyncResponse,
  TxSearchResponse,
  AbciQueryParams
} from '@cosmjs/tendermint-rpc'
import {
  RestQueryUserResponse,
  RestQueryUserRelationResponse,
  RestQueryAppResponse,
  RestQueryDidResponse
} from '../../src/proto/misestm/v1beta1/rest_query'
import { QueryAccountResponse } from 'cosmjs-types/cosmos/auth/v1beta1/query'
import { QueryBalanceResponse } from 'cosmjs-types/cosmos/bank/v1beta1/query'
import { SimulateResponse } from 'cosmjs-types/cosmos/tx/v1beta1/service'
import { Any } from 'cosmjs-types/google/protobuf/any'
import Long from 'long'

export const testUserID1 = 'did:mises:mises1y53kz80x5gm2w0ype8x7a3w6sstztxxg7qkl5n'
export const testPkey1 = '37eb367cc6c16099efde2f552230fa3b04c4f3aa7b47837c4b7dccaa5a9b190d'
export const testUserPubKeyMultiBase = 'z2AGoGmCDd2d5eJYBjPDtqcAfLangm56ZHM8Ydg5YxEBvc'
export const testAppID = 'did:misesapp:mises1gdr4gsf568tnnvyk0pjfy0efeau4733c3m4lry'
export const testAppPkey = 'fb3c4533b0cad15efa2e3bc8ce3a2e7313d461e1345d3593d35ffd72c7f21548'
export const testAppPubKeyMultiBase = 'z22HJ23affV7soJt5MZWx1syh4z6zyAXgkEC9usYqrAsJu'
export const mockEnabled = true

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
export function mockSimulateResponse(): Uint8Array {
  const resp = SimulateResponse.fromPartial({
    gasInfo: {
      gasUsed: '100',
      gasWanted: '101'
    }
  })

  return SimulateResponse.encode(resp).finish()
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
    },
    version: Long.fromNumber(0)
  })

  return RestQueryAppResponse.encode(resp).finish()
}

export function mockRestQueryUserResponse(name: string): Uint8Array {
  const resp = RestQueryUserResponse.fromPartial({
    pubInfo: {
      name: name
    },
    version: Long.fromNumber(0)
  })

  return RestQueryUserResponse.encode(resp).finish()
}

export function mockRestQueryUserRelationResponse(
  uid: string | undefined,
  rel: string | undefined
): Uint8Array {
  var resp: RestQueryUserRelationResponse
  if (!uid) {
    resp = RestQueryUserRelationResponse.fromPartial({
      misesList: []
    })
  } else {
    resp = RestQueryUserRelationResponse.fromPartial({
      misesList: [
        {
          misesId: uid,
          relType: rel
        }
      ]
    })
  }

  return RestQueryUserRelationResponse.encode(resp).finish()
}
export function mockQueryBalanceResponse(amount: Long): Uint8Array {
  const resp = QueryBalanceResponse.fromPartial({
    balance: {
      denom: 'umis',
      amount: amount.toString()
    }
  })

  return QueryBalanceResponse.encode(resp).finish()
}
export function mockTM(respData: Uint8Array) {
  if (mockEnabled) {
    Tendermint34Client.connect = mockTMClient(respData)
  }
}

export function mockErrorTM() {
  if (mockEnabled) {
    Tendermint34Client.connect = mockExceptionTMClient()
  }
}

export function mockTMClient(respData: Uint8Array) {
  return jest.fn().mockReturnValue({
    abciQuery: function(params: AbciQueryParams) {
      if (params.path == '/cosmos.auth.v1beta1.Query/Account') {
        return {
          value: mockQueryAccountResponse()
        }
      }
      if (params.path == '/cosmos.tx.v1beta1.Service/Simulate') {
        return {
          value: mockSimulateResponse()
        }
      }
      return {
        value: respData
      }
    },
    status: jest.fn().mockReturnValue({
      nodeInfo: {
        network: 'test'
      },
      syncInfo: {
        latestBlockHeight: 100
      }
    }),
    broadcastTxSync: jest.fn().mockReturnValue({
      hash: 'mockHash'
    }),
    txSearchAll: jest.fn().mockReturnValue({
      totalCount: 1,
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
    txSearch: jest.fn().mockReturnValue({
      totalCount: 1,
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

export function mockExceptionTMClient() {
  return jest.fn().mockReturnValue({
    abciQuery: jest.fn().mockRejectedValue(new Error('mock error abciQuery')),
    status: jest.fn().mockReturnValue({
      nodeInfo: {
        network: 'test'
      },
      syncInfo: {
        latestBlockHeight: 100
      }
    }),
    broadcastTxSync: jest.fn().mockReturnValue({
      hash: 'mockHash'
    }),
    txSearchAll: jest.fn().mockRejectedValue(new Error('mock error txSearchAll')),
    txSearch: jest.fn().mockRejectedValue(new Error('mock error txSearch')),
    disconnect: jest.fn()
  })
}

export function startMock() {
  if (!mockEnabled) {
    return
  }
  jest.mock('@cosmjs/tendermint-rpc', () => ({
    Tendermint34Client: {
      connect: mockTMClient(new Uint8Array())
    }
  }))
}
