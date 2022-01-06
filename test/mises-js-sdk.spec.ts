/* eslint-disable */
import MSdk from '../src/mises-js-sdk'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  testAppID,
  testUserID1,
  testPkey1,
  startMock,
  mockTM,
  mockRestQueryAppResponse,
  mockQueryAccountResponse
} from './__mocks__/tendermint-rpc'
import { MisesCoin, MisesConfig } from '../src/mises'
import Long from 'long'

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
    const umis = MisesCoin.toCoinUMIS(Long.fromValue(100001))
    expect(umis.denom).toEqual('umis')
    expect(umis.amount).toEqual('100001')
    const mmis = MisesCoin.toCoinMMIS(Long.fromValue(100001))
    expect(mmis.denom).toEqual('mmis')
    expect(mmis.amount).toEqual('100.001')

    const mis = MisesCoin.toCoinMIS(Long.fromValue(100001))
    expect(mis.denom).toEqual('mis')
    expect(mis.amount).toEqual('0.100001')

    const umisLong = MisesCoin.fromCoin(mis)
    expect(umisLong.toString()).toEqual('100001')

    const mmisLong = MisesCoin.fromCoin(mmis)
    expect(mmisLong.toString()).toEqual('100001')

    const misLong = MisesCoin.fromCoin(mis)
    expect(misLong.toString()).toEqual('100001')
  })
})
