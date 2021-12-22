/* eslint-disable */
import MSdk from '../src/mises-js-sdk'
import { MApp } from '../src/mapp'
import { Random } from '@cosmjs/crypto'
import { toHex } from '@cosmjs/encoding'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  testAppID,
  testUserID1,
  mockTMClient,
  mockRestQueryAppResponse,
  mockRestQueryDidResponse
} from './__mocks__/tendermint-rpc'

/**
 * MSdk test
 */
describe('MApp test', () => {
  it('test find app', async () => {
    const sdk = await MSdk.newSdk()
    const amgr = sdk.appMgr()
    expect(amgr.findApp(testAppID)).toBeUndefined()

    Tendermint34Client.connect = mockTMClient(mockRestQueryAppResponse('mock.site'))
    const app = await amgr.ensureApp(testAppID, 'mock.site')
    expect(app.misesID()).toEqual(testAppID)
    expect(amgr.findApp(testAppID)).toBeInstanceOf(MApp)
  })

  it('test connect app', async () => {
    const sdk = await MSdk.newSdk()
    const amgr = sdk.appMgr()
    expect(amgr.findApp(testAppID)).toBeUndefined()

    Tendermint34Client.connect = mockTMClient(mockRestQueryAppResponse('mock.site'))
    const app = await amgr.ensureApp(testAppID, 'mock.site')
    Tendermint34Client.connect = mockTMClient(new Uint8Array())
    const app1 = await amgr.ensureApp(testAppID, 'mock.site')
    expect(app1.misesID()).toEqual(testAppID)
    expect(app1.address()).toBeDefined()

    expect(app1.connect(testUserID1, [])).toBeTruthy()
    expect(app1.disconnect(testUserID1)).toBeTruthy()
    expect(app1.connectedUsers()).toBeDefined()
  })

  it('test app get info ', async () => {
    const sdk = await MSdk.newSdk()
    const amgr = sdk.appMgr()
    expect(amgr.findApp(testAppID)).toBeUndefined()

    Tendermint34Client.connect = mockTMClient(mockRestQueryAppResponse('mock.site'))
    const app = await amgr.ensureApp(testAppID, 'mock.site')
    const app_info = await app.info()
    expect(app_info.domains).toEqual(['mock.site'])
  })
})
