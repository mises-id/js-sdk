/* eslint-disable */
import { MSdk } from '../src/mises-js-sdk'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  testAppID,
  testUserID1,
  testPkey1,
  startMock,
  mockTM,
  mockErrorTM,
  mockRestQueryAppResponse,
  mockQueryAccountResponse
} from './__mocks__/tendermint-rpc'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { MisesCoin, MisesConfig, MsgReader } from '../src/mises'
import { LCDConnection } from '../src/lcd'

import Long from 'long'
import { TimeoutError } from '@cosmjs/stargate'

/**
 * MSdk test
 */
describe('MSdk test', () => {
  startMock()
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('MSdk is instantiable', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    expect(sdk).toBeInstanceOf(MSdk)
  })

  it('set log', async () => {
    const config = new MisesConfig()
    config.setLCDEndpoint('http://localhost:26657')
    config.setLogLevel(1)
    const sdk = await MSdk.newSdk(config)
    expect(sdk).toBeInstanceOf(MSdk)
  })

  it('testlcd connection', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    expect(sdk).toBeInstanceOf(MSdk)
    mockTM(mockQueryAccountResponse())
    await sdk.testLCDConnection()
  })

  it('connect', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    expect(sdk).toBeInstanceOf(MSdk)
    expect(await sdk.connect('mises.site', testAppID, testUserID1, [])).toEqual('') // no user

    const umgr = sdk.userMgr()

    expect(sdk.connectedApps(testUserID1)).toEqual([])
    expect(sdk.connectedUsers(testAppID)).toEqual([])
    const user = await umgr.activateUser(testPkey1)
    expect(user.misesID()).toEqual(testUserID1)

    mockTM(mockRestQueryAppResponse('mises.site'))
    expect(await sdk.connect('mises.site', testAppID, testUserID1, [])).toEqual(testUserID1)

    expect(sdk.connectedApps(testUserID1)).toEqual([testAppID])
    expect(sdk.connectedUsers(testAppID)).toEqual([testUserID1])

    expect(await sdk.connect('mises.site', testAppID, testUserID1, [])).toEqual(testUserID1)
    expect(sdk.connectedApps(testUserID1)).toEqual([testAppID])
    expect(sdk.connectedUsers(testAppID)).toEqual([testUserID1])

    expect(sdk.disconnect(testAppID, testUserID1)).toBeTruthy()
    expect(sdk.connectedApps(testUserID1)).toEqual([])
    expect(sdk.connectedUsers(testAppID)).toEqual([])
  })

  it('coin test', async () => {
    const coinDef = await MSdk.newCoinDefine()
    await coinDef.load()
    const umis = coinDef.toCoinUMIS(Long.fromValue(100001))
    expect(umis.denom).toEqual('umis')
    expect(umis.amount).toEqual('100001')
    const mmis = coinDef.toCoinMMIS(Long.fromValue(100001))
    expect(mmis.denom).toEqual('mmis')
    expect(mmis.amount).toEqual('100.001')

    const mis = coinDef.toCoinMIS(Long.fromValue(100001))
    expect(mis.denom).toEqual('mis')
    expect(mis.amount).toEqual('0.100001')

    const umisLong = coinDef.fromCoin(mis)
    expect(umisLong.toString()).toEqual('100001')

    const mmisLong = coinDef.fromCoin(mmis)
    expect(mmisLong.toString()).toEqual('100001')

    const misLong = coinDef.fromCoin(mis)
    expect(misLong.toString()).toEqual('100001')

    expect(() => {
      coinDef.coin('invalid', '')
    }).toThrow('Invalid unsigned integer string format')

    const c = coinDef.coin('1', '')
    expect(c.amount).toEqual('1')
  })

  it('gas test', async () => {
    const config = new MisesConfig()
    expect(config.feeLimit()).toEqual(2000)
    expect(config.setGasPriceAndLimit(0, 0)).toEqual(false)
    expect(config.setGasPriceAndLimit(0, 1)).toEqual(false)
    expect(config.setGasPriceAndLimit(0, 1000)).toEqual(false)
    expect(config.setGasPriceAndLimit(0, 4999)).toEqual(false)
    expect(config.setGasPriceAndLimit(0, 10000)).toEqual(true)
    expect(config.feeLimit()).toEqual(1)
  })

  it('lcd test', async () => {
    const config = new MisesConfig()
    const client = new LCDConnection(config)

    mockErrorTM()
    const nullTx = await client.getTx('')
    expect(nullTx).toEqual(null)

    const tx = TxRaw.encode(TxRaw.fromPartial({})).finish()
    await expect(client.broadcastTx(Uint8Array.from(tx), 1, 1)).rejects.toThrow(TimeoutError)
  })

  it('msg reader test', async () => {
    const reader = new MsgReader()

    expect(reader.summary({})).toEqual('')
    expect(
      reader.summary({
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
          fromAddress: 'addr_from',
          toAddress: 'addr_to',
          amount: [{ denom: 'umis', amount: '100' }]
        }
      })
    ).toEqual('Send 100umis to addr_to')
    expect(
      reader.summary({
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value: {
          delegatorDddress: 'addr_from',
          validatorAddress: 'addr_to',
          amount: { denom: 'umis', amount: '100' }
        }
      })
    ).toEqual('Delegate 100umis to addr_to')
    expect(
      reader.summary({
        typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
        value: {
          validatorSrcAddress: 'addr_from',
          validatorDstAddress: 'addr_to',
          amount: { denom: 'umis', amount: '100' }
        }
      })
    ).toEqual('Redelegate 100umis from addr_from to addr_to')
    expect(
      reader.summary({
        typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
        value: {
          validatorAddress: 'addr_from',
          amount: { denom: 'umis', amount: '100' }
        }
      })
    ).toEqual('Undelegate 100umis from addr_from')
    expect(
      reader.summary({
        typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
        value: {
          validatorAddress: 'addr_from'
        }
      })
    ).toEqual('Withdraw rewards from addr_from')
    expect(
      reader.summary({
        typeUrl: '/cosmos.gov.v1beta1.MsgDeposit',
        value: {
          proposal_id: 3000,
          amount: [{ denom: 'umis', amount: '100' }]
        }
      })
    ).toEqual('Deposit 100umis to proposal 3000')
    expect(
      reader.summary({
        typeUrl: '/cosmos.gov.v1beta1.MsgVote',
        value: {
          proposal_id: 3000,
          option: 1
        }
      })
    ).toEqual('Vote YES on proposal 3000')
    expect(
      reader.summary({
        typeUrl: '/cosmos.gov.v1beta1.MsgSubmitProposal',
        value: {
          content: {
            typeUrl: '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
            value: {}
          }
        }
      })
    ).toEqual('Submit a community pool spend proposal')
    expect(
      reader.summary({
        typeUrl: '/cosmos.gov.v1beta1.MsgSubmitProposal',
        value: {
          content: {
            typeUrl: '/cosmos.gov.v1beta1.TextProposal',
            value: {}
          }
        }
      })
    ).toEqual('Submit a text proposal')
    expect(
      reader.summary({
        typeUrl: '/cosmos.gov.v1beta1.MsgSubmitProposal',
        value: {
          content: {
            typeUrl: '/cosmos.params.v1beta1.ParameterChangeProposal',
            value: {}
          }
        }
      })
    ).toEqual('Submit a parameter change proposal')
    expect(
      reader.summary({
        typeUrl: '/cosmos.gov.v1beta1.MsgSubmitProposal',
        value: {
          content: {
            typeUrl: '/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal',
            value: {}
          }
        }
      })
    ).toEqual('Submit a cancel software upgrade proposal')
    expect(
      reader.summary({
        typeUrl: '/cosmos.gov.v1beta1.MsgSubmitProposal',
        value: {
          content: {
            typeUrl: '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal',
            value: {}
          }
        }
      })
    ).toEqual('Submit a software upgrade proposal')
  })
})
