/* eslint-disable */
import MSdk from '../src/mises-js-sdk'
import { MUser } from '../src/muser'
import { MisesConfig } from '../src/mises'
import { Random } from '@cosmjs/crypto'
import { toHex } from '@cosmjs/encoding'
import { BroadcastTxSuccess } from '@cosmjs/stargate'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  testUserID1,
  testUserPubKeyBase58,
  testPkey1,
  testAppID,
  testAppPubKeyBase58,
  testAppPkey,
  startMock,
  mockTM,
  mockQueryAccountResponse,
  mockRestQueryDidResponse,
  mockRestQueryUserResponse,
  mockRestQueryUserRelationResponse,
  mockQueryBalanceResponse,
  mockRestQueryAppResponse
} from './__mocks__/tendermint-rpc'
import Long from 'long'
/**
 * MSdk test
 */
describe('MUser test', () => {
  startMock()
  it('test activate user', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
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

  it('test pubkeyMultibase', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(testPkey1)
    expect(user.pubkeyMultibase()).toEqual(testUserPubKeyBase58)
    const app = await umgr.activateUser(testAppPkey)
    expect(app.pubkeyMultibase()).toEqual(testAppPubKeyBase58)
  })

  it('test signMsg', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(testPkey1)
    const sig = await user.signMsg('mises_id=' + user.misesID() + '&nonce=001')
    expect(sig).toEqual(
      '304402200e2df48ee9954c94edd0b569ee2dbcb052f318bcfe83c72e98f9c560dd2ca32d02200b815ede104c6c95ef8df0c7bc2e555e0cac24a03dad6efe6235eb87816e448f'
    )
  })

  it('test lock', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(testPkey1)
    umgr.lockAll()
    expect(umgr.findUser(user.misesID())).toBeUndefined()
  })

  it('test register user', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const amgr = sdk.appMgr()
    const prikey = toHex(Random.getBytes(32))
    const user = await umgr.activateUser(prikey)
    const did = user.misesID()
    mockTM(mockRestQueryDidResponse(''))
    const registed = await user.isRegistered()
    expect(registed).toBeFalsy()

    mockTM(mockRestQueryAppResponse('mock.site'))
    const app = await amgr.ensureApp(testAppID, 'mock.site')

    mockTM(mockQueryAccountResponse())

    const resp = await app.registerUser(testAppPkey, user.misesID(), user.pubkeyMultibase())
    expect(resp as BroadcastTxSuccess).toBeDefined()
    expect(resp.height).toBeGreaterThan(0)

    mockTM(mockRestQueryDidResponse(did))
    const registed1 = await user.isRegistered()
    expect(registed1).toBeTruthy()
  })

  it('test user info ', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(toHex(Random.getBytes(32)))
    const did = user.misesID()
    mockTM(mockRestQueryUserResponse('mockName'))
    const info = await user.info()
    expect(info.name).toEqual('mockName')

    mockTM(mockQueryAccountResponse())

    info.intro = 'mock intro'
    const resp = await user.setInfo(info)
    expect(resp.height).toBeGreaterThan(0)
  })

  it('test user follow ', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(toHex(Random.getBytes(32)))
    mockTM(mockRestQueryUserRelationResponse())
    const followings = await user.getFollowing()
    expect(followings).toEqual([testUserID1])

    mockTM(mockQueryAccountResponse())
    const resp = await user.follow(testUserID1)
    expect(resp.height).toBeGreaterThan(0)
  })

  it('test user unfollow ', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(toHex(Random.getBytes(32)))
    mockTM(mockRestQueryUserRelationResponse())
    const followings = await user.getFollowing()
    expect(followings).toEqual([testUserID1])

    mockTM(mockQueryAccountResponse())
    const resp1 = await user.unfollow(testUserID1)
    expect(resp1.height).toBeGreaterThan(0)
  })

  it('test user query balance ', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(toHex(Random.getBytes(32)))
    const did = user.misesID()
    mockTM(mockQueryBalanceResponse(Long.fromValue(1)))
    const balance = await user.getBalance()
    expect(balance).toEqual(Long.fromValue(1))
  })

  it('test user transfer umis ', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(toHex(Random.getBytes(32)))

    mockTM(mockQueryAccountResponse())
    const resp1 = await user.sendUMIS(testUserID1, Long.fromString('1'))
    expect(resp1.height).toBeGreaterThan(0)
  })
})
