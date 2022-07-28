/* eslint-disable */
import { MSdk } from '../src/msdk'
import { MApp } from '../src/mapp'
import { MisesConfig } from '../src/mises'
import { Random } from '@cosmjs/crypto'
import { toHex } from '@cosmjs/encoding'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  testAppID,
  testUserID1,
  startMock,
  mockTM,
  mockRestQueryAppResponse,
  mockRestQueryDidResponse
} from './__mocks__/tendermint-rpc'

/**
 * MSdk test
 */
describe('MApp test', () => {
  startMock()
  it('test find app', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const amgr = sdk.appMgr()
    expect(amgr.findApp(testAppID)).toBeUndefined()

    mockTM(mockRestQueryAppResponse('mises.site'))
    const app = await amgr.ensureApp(testAppID, 'mises.site')
    expect(app.misesID()).toEqual(testAppID)
    expect(amgr.findApp(testAppID)).toBeInstanceOf(MApp)
  })

  it('test connect app', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const amgr = sdk.appMgr()
    expect(amgr.findApp(testAppID)).toBeUndefined()

    mockTM(mockRestQueryAppResponse('mises.site'))
    const app = await amgr.ensureApp(testAppID, 'mises.site')
    mockTM(new Uint8Array())
    const app1 = await amgr.ensureApp(testAppID, 'mises.site')
    expect(app1.misesID()).toEqual(testAppID)
    expect(app1.address()).toBeDefined()

    expect(app1.connect(testUserID1, [])).toBeTruthy()
    expect(app1.disconnect(testUserID1)).toBeTruthy()
    expect(app1.connectedUsers()).toBeDefined()
  })

  it('test app get info ', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const amgr = sdk.appMgr()
    expect(amgr.findApp(testAppID)).toBeUndefined()

    mockTM(mockRestQueryAppResponse('mises.site'))
    const app = await amgr.ensureApp(testAppID, 'mises.site')
    const app_info = await app.info()
    expect(app_info.domains).toEqual(['mises.site'])
  })
})
