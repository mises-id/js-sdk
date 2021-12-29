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
} from '../../src/proto/misestm/v1beta1/rest_query'
import { QueryAccountResponse } from 'cosmjs-types/cosmos/auth/v1beta1/query'
import { QueryBalanceResponse } from 'cosmjs-types/cosmos/bank/v1beta1/query'
import { Any } from 'cosmjs-types/google/protobuf/any'

export const testUserID1 = 'did:mises:mises1y53kz80x5gm2w0ype8x7a3w6sstztxxg7qkl5n'
export const testPkey1 = '37eb367cc6c16099efde2f552230fa3b04c4f3aa7b47837c4b7dccaa5a9b190d'
export const testUserPubKeyMultiBase = 'z2AGoGmCDd2d5eJYBjPDtqcAfLangm56ZHM8Ydg5YxEBvc'
export const testAppID = 'did:misesapp:mises1g3atpp5nlrzgqkzd4qfuzrdfkn8vy0a4jepr2t'
export const testAppPkey = '76530e8adc206674e462bc20e6c7e4df0d43689d13da39b7e3f98ed70a777c8f'
export const testAppPubKeyMultiBase = 'zqEs5knmSxGdrtnvU9j8eKZPWPSRvSEWMDgvTq5mRuEPM'
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

export function mockRestQueryUserResponse(name: string): Uint8Array {
  const resp = RestQueryUserResponse.fromPartial({
    pubInfo: {
      name: name
    }
  })

  return RestQueryUserResponse.encode(resp).finish()
}

export function mockRestQueryUserRelationResponse(): Uint8Array {
  const resp = RestQueryUserRelationResponse.fromPartial({
    misesList: [
      {
        misesId: testUserID1
      }
    ]
  })

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
