/* eslint-disable */
import MSdk from './mises-js-sdk'
import { MUser } from './muser'
import { Random } from '@cosmjs/crypto'
import { toHex } from '@cosmjs/encoding'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  mockTMClient,
  mockQueryAccountResponse,
  mockRestQueryDidResponse
} from './__mocks__/tendermint-rpc'

/**
 * MSdk test
 */
describe('MUser test', () => {
  it('test activate user', async () => {
    const sdk = await MSdk.newSdk()
    const umgr = sdk.UserMgr()
    expect(umgr.findUser('did:mises:mises1s0psf4wjssssdxpf0c29vyrnudrmggvp63qmmy')).toBeUndefined()
    const user = await umgr.activateUser(
      '7fbe7f060e916f2901de4f44cea972c3083f99cd4bbcb39c0bb3e0c3f4f0f927'
    )
    expect(user.misesID()).toEqual('did:mises:mises1s0psf4wjssssdxpf0c29vyrnudrmggvp63qmmy')
    expect(umgr.findUser(user.misesID())).toBeInstanceOf(MUser)
  })

  it('test register user', async () => {
    const sdk = await MSdk.newSdk()
    const umgr = sdk.UserMgr()
    const user = await umgr.activateUser(toHex(Random.getBytes(32)))
    const did = user.misesID()
    Tendermint34Client.connect = mockTMClient(mockRestQueryDidResponse(''))
    const registed = await user.isRegistered()
    expect(registed).toBeFalsy()

    Tendermint34Client.connect = mockTMClient(mockQueryAccountResponse())

    const resp = await user.register()
    expect(resp.height).toBeGreaterThan(0)

    Tendermint34Client.connect = mockTMClient(mockRestQueryDidResponse(did))
    const registed1 = await user.isRegistered()
    expect(registed1).toBeTruthy()
  })
})
