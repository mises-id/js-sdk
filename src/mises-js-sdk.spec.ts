/* eslint-disable */
import MSdk from './mises-js-sdk'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  mockTMClient,
  mockRestQueryAppResponse,
  mockRestQueryDidResponse
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

  it('connect', async () => {
    const sdk = await MSdk.newSdk()
    expect(sdk).toBeInstanceOf(MSdk)
    const mockAppID = 'did:misesapp:mises1s0psf4wjssssdxpf0c29vyrnudrmggvp63qmmy'
    const mockUserID = 'did:mises:mises1s0psf4wjssssdxpf0c29vyrnudrmggvp63qmmy'
    expect(await sdk.connect('mock.site', mockAppID, mockUserID, [])).toEqual('') // no user

    const umgr = sdk.UserMgr()
    const user = await umgr.activateUser(
      '7fbe7f060e916f2901de4f44cea972c3083f99cd4bbcb39c0bb3e0c3f4f0f927'
    )

    Tendermint34Client.connect = mockTMClient(mockRestQueryAppResponse('mock.site'))
    expect(await sdk.connect('mock.site', mockAppID, mockUserID, [])).toEqual('')

    expect(sdk.connectedApps(mockUserID)).toEqual([mockAppID])
    expect(sdk.connectedUsers(mockAppID)).toEqual([mockUserID])
  })
})
