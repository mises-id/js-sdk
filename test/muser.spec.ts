/* eslint-disable */
import MSdk from '../src/mises-js-sdk'
import { MUser, MUserInfo } from '../src/muser'
import { MisesConfig } from '../src/mises'
import { Random } from '@cosmjs/crypto'
import { toHex } from '@cosmjs/encoding'
import { BroadcastTxSuccess } from '@cosmjs/stargate'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  testUserID1,
  testUserPubKeyMultiBase,
  testPkey1,
  testAppID,
  testAppPubKeyMultiBase,
  testAppPkey,
  startMock,
  mockTM,
  mockQueryAccountResponse,
  mockRestQueryDidResponse,
  mockRestQueryUserResponse,
  mockRestQueryUserRelationResponse,
  mockQueryBalanceResponse,
  mockRestQueryAppResponse,
  mockEnabled
} from './__mocks__/tendermint-rpc'
import Long from 'long'
/**
 * MSdk test
 */

async function randomUser(sdk: MSdk): Promise<MUser> {
  const umgr = sdk.userMgr()
  const amgr = sdk.appMgr()
  const user = await umgr.activateUser(toHex(Random.getBytes(32)))
  mockTM(mockRestQueryAppResponse('mises.site'))
  const app = await amgr.ensureApp(testAppID, 'mises.site')
  if (mockEnabled) {
    await sdk.connect('mises.site', testAppID, user.misesID(), [])
  } else {
    await app.registerUser(testAppPkey, user.misesID(), user.pubkeyMultibase())

    await app.registerUser(testAppPkey, testUserID1, testUserPubKeyMultiBase)

    const appuser = await umgr.getUser(testAppPkey)

    await appuser.sendUMIS(user.misesID(), Long.fromInt(10000))
  }

  return user
}
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

  it('test validate address', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    expect(umgr.verifyAddress('asd')).toEqual(false)
    expect(umgr.verifyAddress('mises1y53kz80x5gm2w0ype8x7a3w6sstztxxg7qkl5n')).toEqual(true)
  })

  it('test pubkeyMultibase', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(testPkey1)
    expect(user.pubkeyMultibase()).toEqual(testUserPubKeyMultiBase)
    const app = await umgr.activateUser(testAppPkey)
    expect(app.pubkeyMultibase()).toEqual(testAppPubKeyMultiBase)
  })

  it('test generateAuth', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const user = await umgr.activateUser(testPkey1)
    expect(await user.generateAuth('0123456789')).toEqual(
      'mises_id=did:mises:mises1y53kz80x5gm2w0ype8x7a3w6sstztxxg7qkl5n&nonce=0123456789&sig=304402201ada63a9dccc8ace5b3c96b00817311a36096c997e081b57f8b39b2392a51905022041e74283ec05333062a3a7180ba2775b5e203e596c3cefd8b92b775b519b7e06&pubkey=03e78b0e4bddddabd37bca173c9df270096ec55aa97bed2ba82d72c830d400c8e5'
    )
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

    mockTM(mockRestQueryAppResponse('mises.site'))
    const app = await amgr.ensureApp(testAppID, 'mises.site')

    mockTM(mockQueryAccountResponse())

    const resp = await app.registerUser(testAppPkey, user.misesID(), user.pubkeyMultibase())
    expect(resp as BroadcastTxSuccess).toBeDefined()
    expect(resp.height).toBeGreaterThan(0)

    mockTM(mockRestQueryDidResponse(did))
    const registed1 = await user.isRegistered()
    expect(registed1).toBeTruthy()
  }, 20000)

  it('test user info ', async () => {
    const sdk = MSdk.newSdk(new MisesConfig())
    const user = await randomUser(sdk)

    // mockTM(mockRestQueryAppResponse('mises.site'))
    // await sdk.connect('mises.site', testAppID, user.misesID(), [])

    mockTM(mockQueryAccountResponse())

    let newinfo = new MUserInfo(undefined, Long.fromNumber(1))
    newinfo.intro = 'mock intro'
    newinfo.name = 'mockName'
    const resp = await user.setInfo(newinfo)
    expect(resp.height).toBeGreaterThan(0)

    mockTM(mockRestQueryUserResponse('mockName'))
    const info = await user.info()
    expect(info.name).toEqual('mockName')
  }, 60000)

  it('test gas', async () => {
    const sdk = MSdk.newSdk(new MisesConfig())
    const umgr = sdk.userMgr()
    const amgr = sdk.appMgr()
    mockTM(mockRestQueryAppResponse('mises.site'))
    const app = await amgr.ensureApp(testAppID, 'mises.site')
    const user = await umgr.activateUser(
      '2c7d8a44d2f8a0cfae8ee44db8ead906f121a064960cebc7a7751ed46284528d'
    )

    await sdk.connect('mises.site', testAppID, user.misesID(), [])

    mockTM(mockRestQueryUserResponse('mockName'))
    let newinfo = await user.info()
    newinfo.intro = 'mock intro'
    newinfo.name = 'mockName'
    newinfo.version = Long.fromNumber(newinfo.version.toNumber() + 1)
    mockTM(mockQueryAccountResponse())
    const resp = await user.setInfo(newinfo)
    console.log(resp)
    expect(resp.height).toBeGreaterThan(0)

    mockTM(mockRestQueryUserResponse('mockName'))
    const info = await user.info()
    expect(info.name).toEqual('mockName')
  }, 10000)

  it('test user follow unfollow', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const user = await randomUser(sdk)

    mockTM(mockRestQueryUserRelationResponse(undefined))
    const followings_empty = await user.getFollowing()
    expect(followings_empty).toEqual([])

    mockTM(mockQueryAccountResponse())
    const resp = await user.follow(testUserID1)
    expect(resp.height).toBeGreaterThan(0)
    console.log(resp)

    mockTM(mockRestQueryUserRelationResponse(testUserID1))
    const followings = await user.getFollowing()
    expect(followings).toEqual([testUserID1])

    mockTM(mockQueryAccountResponse())
    const resp1 = await user.unfollow(testUserID1)
    expect(resp1.height).toBeGreaterThan(0)

    mockTM(mockRestQueryUserRelationResponse(undefined))
    const followings_empty1 = await user.getFollowing()
    expect(followings_empty1).toEqual([])
  }, 60000)

  it('test user block unblock', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const user = await randomUser(sdk)

    mockTM(mockRestQueryUserRelationResponse(undefined))
    const followings_empty = await user.getFollowing()
    expect(followings_empty).toEqual([])

    mockTM(mockQueryAccountResponse())
    const resp = await user.follow(testUserID1)
    expect(resp.height).toBeGreaterThan(0)
    console.log(resp)

    mockTM(mockRestQueryUserRelationResponse(testUserID1))
    const followings = await user.getFollowing()
    expect(followings).toEqual([testUserID1])

    mockTM(mockQueryAccountResponse())
    const resp1 = await user.block(testUserID1)
    expect(resp1.height).toBeGreaterThan(0)

    mockTM(mockRestQueryUserRelationResponse(undefined))
    const followings_empty1 = await user.getFollowing()
    expect(followings_empty1).toEqual([])

    mockTM(mockQueryAccountResponse())
    const resp2 = await user.unblock(testUserID1)
    expect(resp2.height).toBeGreaterThan(0)
  }, 60000)

  it('test user query balance ', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const user = await randomUser(sdk)
    const did = user.misesID()
    mockTM(mockQueryBalanceResponse(Long.fromValue(1)))
    const balance = await user.getBalanceUMIS()
    expect(balance).toEqual(Long.fromValue(1))
  }, 60000)

  it('test user transfer umis ', async () => {
    const sdk = await MSdk.newSdk(new MisesConfig())
    const user = await randomUser(sdk)

    mockTM(mockQueryAccountResponse())
    const resp1 = await user.sendUMIS(testUserID1, Long.fromString('1'))
    expect(resp1.height).toBeGreaterThan(0)

    const resp2 = await user.recentTransactions()
    expect(resp2.length).toBeGreaterThan(0)
    console.log(resp2)
  }, 60000)
})
