/* eslint-disable */
import MSdk from '../src/mises-js-sdk'
import { MUser } from '../src/muser'
import { Random } from '@cosmjs/crypto'
import { toHex } from '@cosmjs/encoding'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  testUserID1,
  testPkey1,
  mockTMClient,
  mockQueryAccountResponse,
  mockRestQueryDidResponse,
  mockRestQueryUserResponse,
  mockRestQueryUserRelationResponse
} from './__mocks__/tendermint-rpc'

/**
 * MSdk test
 */
describe('MUser test', () => {
  it('test activate user', async () => {
    const sdk = await MSdk.newSdk()
    const umgr = sdk.userMgr()
    expect(umgr.findUser(testUserID1)).toBeUndefined()
    expect(umgr.activeUser()).toBeUndefined()
    const user = await umgr.activateUser(testPkey1)

    expect(user.misesID()).toEqual(testUserID1)
    const added_user = umgr.findUser(testUserID1)
    expect(added_user!).toBeInstanceOf(MUser)
    expect(added_user!.misesID()).toEqual(testUserID1)
    expect(added_user!.address()).toBeDefined()

    const active_user = umgr.activeUser()
    expect(active_user!).toBeInstanceOf(MUser)
    expect(active_user!.misesID()).toEqual(testUserID1)

    const user1 = await umgr.activateUser(testPkey1)
    expect(user1.misesID()).toEqual(testUserID1)
  })

  it('test lock', async () => {
    const sdk = await MSdk.newSdk()
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(testPkey1)
    umgr.lockAll()
    expect(umgr.findUser(user.misesID())).toBeUndefined()
  })

  it('test register user', async () => {
    const sdk = await MSdk.newSdk()
    const umgr = sdk.userMgr()
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

  it('test user info ', async () => {
    const sdk = await MSdk.newSdk()
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(toHex(Random.getBytes(32)))
    const did = user.misesID()
    Tendermint34Client.connect = mockTMClient(mockRestQueryUserResponse('mockName'))
    const info = await user.info()
    expect(info.name).toEqual('mockName')

    Tendermint34Client.connect = mockTMClient(mockQueryAccountResponse())

    info.intro = 'mock intro'
    const resp = await user.setInfo(info)
    expect(resp.height).toBeGreaterThan(0)
  })

  it('test user follow ', async () => {
    const sdk = await MSdk.newSdk()
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(toHex(Random.getBytes(32)))
    const did = user.misesID()
    Tendermint34Client.connect = mockTMClient(mockRestQueryUserRelationResponse())
    const followings = await user.getFollowing()
    expect(followings).toEqual([testUserID1])

    Tendermint34Client.connect = mockTMClient(mockQueryAccountResponse())
    const resp = await user.follow(testUserID1)
    expect(resp.height).toBeGreaterThan(0)
  })

  it('test user unfollow ', async () => {
    const sdk = await MSdk.newSdk()
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(toHex(Random.getBytes(32)))
    const did = user.misesID()
    Tendermint34Client.connect = mockTMClient(mockRestQueryUserRelationResponse())
    const followings = await user.getFollowing()
    expect(followings).toEqual([testUserID1])

    Tendermint34Client.connect = mockTMClient(mockQueryAccountResponse())
    const resp1 = await user.unfollow(testUserID1)
    expect(resp1.height).toBeGreaterThan(0)
  })
})
