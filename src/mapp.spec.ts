/* eslint-disable */
import MSdk from './mises-js-sdk'
import { MApp } from './mapp'
import { Random } from '@cosmjs/crypto'
import { toHex } from '@cosmjs/encoding'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
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
    const amgr = sdk.AppMgr()
    const mockAppID = 'did:misesapp:mises1s0psf4wjssssdxpf0c29vyrnudrmggvp63qmmy'
    expect(amgr.findApp(mockAppID)).toBeUndefined()

    Tendermint34Client.connect = mockTMClient(mockRestQueryAppResponse('mock.site'))
    const app = await amgr.ensureApp(mockAppID, 'mock.site')
    expect(app.misesID()).toEqual(mockAppID)
    expect(amgr.findApp(mockAppID)).toBeInstanceOf(MApp)
  })

  it('test connect app', async () => {
    const sdk = await MSdk.newSdk()
    const amgr = sdk.AppMgr()
    const mockAppID = 'did:misesapp:mises1s0psf4wjssssdxpf0c29vyrnudrmggvp63qmmy'
    const mockUserID = 'did:mises:mises1s0psf4wjssssdxpf0c29vyrnudrmggvp63qmmy'
    expect(amgr.findApp(mockAppID)).toBeUndefined()

    Tendermint34Client.connect = mockTMClient(mockRestQueryAppResponse('mock.site'))
    const app = await amgr.ensureApp(mockAppID, 'mock.site')
    Tendermint34Client.connect = mockTMClient(new Uint8Array())
    const app1 = await amgr.ensureApp(mockAppID, 'mock.site')
    expect(app1.misesID()).toEqual(mockAppID)

    expect(app1.connect(mockUserID, [])).toBeTruthy()
    expect(app1.disconnect(mockUserID)).toBeFalsy()
    expect(app1.connectedUsers()).toBeDefined()
  })
})
