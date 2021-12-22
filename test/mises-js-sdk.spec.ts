/* eslint-disable */
import MSdk from '../src/mises-js-sdk'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  testAppID,
  testUserID1,
  testPkey1,
  mockTMClient,
  mockRestQueryAppResponse,
  mockQueryAccountResponse
} from './__mocks__/tendermint-rpc'

/**
 * MSdk test
 */
describe('MSdk test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('MSdk is instantiable', async () => {
    const sdk = await MSdk.newSdk()
    expect(sdk).toBeInstanceOf(MSdk)
  })

  it('set log', async () => {
    const sdk = await MSdk.newSdk()
    expect(sdk).toBeInstanceOf(MSdk)
    sdk.setLogLevel(0)
  })

  it('testlcd connection', async () => {
    const sdk = await MSdk.newSdk()
    expect(sdk).toBeInstanceOf(MSdk)
    sdk.setLCDEndpoint('tcp://127.0.0.1:26657')
    Tendermint34Client.connect = mockTMClient(mockQueryAccountResponse())
    await sdk.testLCDConnection()
  })

  it('connect', async () => {
    const sdk = await MSdk.newSdk()
    expect(sdk).toBeInstanceOf(MSdk)
    expect(await sdk.connect('mock.site', testAppID, testUserID1, [])).toEqual('') // no user

    const umgr = sdk.userMgr()

    expect(sdk.connectedApps(testUserID1)).toEqual([])
    expect(sdk.connectedUsers(testAppID)).toEqual([])
    const user = await umgr.activateUser(testPkey1)
    expect(user.misesID()).toEqual(testUserID1)

    Tendermint34Client.connect = mockTMClient(mockRestQueryAppResponse('mock.site'))
    expect(await sdk.connect('mock.site', testAppID, testUserID1, [])).toEqual(testUserID1)

    expect(sdk.connectedApps(testUserID1)).toEqual([testAppID])
    expect(sdk.connectedUsers(testAppID)).toEqual([testUserID1])

    expect(await sdk.connect('mock.site', testAppID, testUserID1, [])).toEqual(testUserID1)
    expect(sdk.connectedApps(testUserID1)).toEqual([testAppID])
    expect(sdk.connectedUsers(testAppID)).toEqual([testUserID1])

    expect(sdk.disconnect(testAppID, testUserID1)).toBeTruthy()
    expect(sdk.connectedApps(testUserID1)).toEqual([])
    expect(sdk.connectedUsers(testAppID)).toEqual([])
  })
})
