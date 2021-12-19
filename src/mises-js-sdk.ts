// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { fromBase64, toBase64 } from '@cosmjs/encoding'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import {
  coins,
  DirectSecp256k1Wallet,
  encodePubkey,
  makeAuthInfoBytes,
  makeSignDoc,
  Registry,
  TxBodyEncodeObject
} from '@cosmjs/proto-signing'
import { StargateClient, BroadcastTxResponse, QueryClient, TimeoutError } from '@cosmjs/stargate'

import { Tendermint34Client } from '@cosmjs/tendermint-rpc'

import {
  RestQueryUserRequest,
  RestQueryUserResponse,
  RestQueryUserRelationRequest,
  RestQueryUserRelationResponse,
  RestQueryDidRequest,
  RestQueryDidResponse,
  RestQueryAppRequest,
  RestQueryAppResponse
} from './proto/misestm/v1beta1/rest_query'
import { PageRequest } from './proto/cosmos/base/query/v1beta1/pagination'

import { PublicAppInfo, PublicUserInfo } from './proto/misestm/v1beta1/rest_tx'
import Long from 'long'
import { appendFileSync } from 'fs'

export class MUserInfo {
  name: string
  gender: string
  avatarURL: string
  homePageURL: string
  emails: string[]
  telephones: string[]
  intro: string
  constructor(info: PublicUserInfo) {
    this.name = info.name
    this.gender = info.gender
    this.avatarURL = info.avatarUrl
    this.homePageURL = info.homePageUrl
    this.emails = info.emails
    this.telephones = info.telephones
    this.intro = info.intro
  }
}
export class MAppInfo {
  name: string
  iconURL: string
  homePageURL: string
  domains: string[]
  developer: string
  version: Long
  constructor(info: PublicAppInfo) {
    this.name = info.name
    this.developer = info.developer
    this.iconURL = info.iconUrl
    this.homePageURL = info.homeUrl
    this.domains = info.domains
    this.version = info.version
  }
}

function createPagination(paginationKey?: Uint8Array): PageRequest {
  return PageRequest.fromPartial({
    key: paginationKey,
    offset: Long.fromNumber(0, true),
    limit: Long.fromNumber(0, true),
    countTotal: false,
    reverse: false
  })
}

class LCDConnection {
  private _lcdEndpoint: string
  constructor(endpoint: string) {
    this._lcdEndpoint = endpoint
  }
  private async makeClient(rpcUrl: string): Promise<[QueryClient, Tendermint34Client]> {
    const tmClient = await Tendermint34Client.connect(rpcUrl)
    return [QueryClient.withExtensions(tmClient), tmClient]
  }

  public async query(path: string, requset: Uint8Array): Promise<Uint8Array> {
    const [client, tmClient] = await this.makeClient(this._lcdEndpoint)

    const data = await client.queryUnverified(path, requset)

    tmClient.disconnect()

    return data
  }
  public async broadcast(msg: any, wallet: DirectSecp256k1Wallet): Promise<BroadcastTxResponse> {
    const client = await StargateClient.connect(this._lcdEndpoint)
    const [{ address, pubkey: pubkeyBytes }] = await wallet.getAccounts()
    const pubkey = encodePubkey({
      type: 'tendermint/PubKeySecp256k1',
      value: toBase64(pubkeyBytes)
    })
    const registry = new Registry()
    const txBodyFields: TxBodyEncodeObject = {
      typeUrl: '/cosmos.tx.v1beta1.TxBody',
      value: {
        messages: [msg]
      }
    }
    const txBodyBytes = registry.encode(txBodyFields)
    const { accountNumber, sequence } = (await client.getSequence(address))!
    const feeAmount = coins(2000, 'umis')
    const gasLimit = 200000
    const authInfoBytes = makeAuthInfoBytes([{ pubkey, sequence }], feeAmount, gasLimit)

    const chainId = await client.getChainId()
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber)
    const { signature } = await wallet.signDirect(address, signDoc)
    const txRaw = TxRaw.fromPartial({
      bodyBytes: txBodyBytes,
      authInfoBytes: authInfoBytes,
      signatures: [fromBase64(signature.signature)]
    })
    const txRawBytes = Uint8Array.from(TxRaw.encode(txRaw).finish())
    const txResult = await client.broadcastTx(txRawBytes)
    return txResult
  }
}

export class MUser {
  private _connectedAppID: string | null = null

  private _wallet: DirectSecp256k1Wallet
  private _address: string
  private _pkey: Uint8Array
  constructor(wallet: DirectSecp256k1Wallet, address: string, pkey: Uint8Array) {
    this._wallet = wallet
    this._address = address
    this._pkey = pkey
  }
  private makeLCDConnection(): LCDConnection {
    return new LCDConnection('tcp://127.0.0.1:26657')
  }
  public address(): string {
    return this._address
  }
  public misesID(): string {
    if (this._wallet == null) {
      return ''
    }
    return 'did:mises:' + this._address
  }

  public async info(): Promise<MUserInfo> {
    const lcd = this.makeLCDConnection()
    const requestData = Uint8Array.from(
      RestQueryUserRequest.encode({ misesUid: this.misesID() }).finish()
    )
    const respData = await lcd.query(
      `/misesid.misestm.v1beta1.RestQuery/QueryUserRelation`,
      requestData
    )
    const response = RestQueryUserResponse.decode(respData)

    return new MUserInfo(response.pubInfo!)
  }
  public setInfo(info: MUserInfo): Promise<BroadcastTxResponse> {
    const lcd = this.makeLCDConnection()
    const msg = {
      typeUrl: '/misesid.misestm.v1beta1.MsgUpdateUserInfo',
      value: {
        creator: this._address,
        id: '-1',
        uid: this.misesID(),
        pub_data: info,
        enc_data: '',
        iv: ''
      }
    }
    return lcd.broadcast(msg, this._wallet)
  }
  public async getFollowing(appDid: string): Promise<string[]> {
    const lcd = this.makeLCDConnection()
    const requestData = Uint8Array.from(
      RestQueryUserRelationRequest.encode({
        misesUid: this.misesID(),
        filter: '',
        pagination: createPagination(new Uint8Array())
      }).finish()
    )
    const respData = await lcd.query(
      `/misesid.misestm.v1beta1.RestQuery/QueryUserRelation`,
      requestData
    )
    const response = RestQueryUserRelationResponse.decode(respData)
    var ids: string[] = []
    response.misesList.forEach(u => {
      ids.push(u.misesId)
    })
    return ids
  }
  public follow(followingId: string): Promise<BroadcastTxResponse> {
    const lcd = this.makeLCDConnection()
    const msg = {
      typeUrl: '/misesid.misestm.v1beta1.MsgCreateUserRelation',
      value: {
        creator: this._address,
        uid_from: this.misesID(),
        uid_to: followingId,
        isFollowing: true
      }
    }
    return lcd.broadcast(msg, this._wallet)
  }
  public unfollow(unfollowingId: string): Promise<BroadcastTxResponse> {
    const lcd = this.makeLCDConnection()
    const msg = {
      typeUrl: '/misesid.misestm.v1beta1.MsgCreateUserRelation',
      value: {
        creator: this._address,
        uid_from: this.misesID(),
        uid_to: unfollowingId,
        isFollowing: false
      }
    }
    return lcd.broadcast(msg, this._wallet)
  }
  public async isRegistered(): Promise<boolean> {
    const lcd = this.makeLCDConnection()
    const requestData = Uint8Array.from(
      RestQueryDidRequest.encode({
        misesId: this.misesID()
      }).finish()
    )
    const respData = await lcd.query(`/misesid.misestm.v1beta1.RestQuery/QueryDid`, requestData)
    const response = RestQueryDidResponse.decode(respData)
    return response.didRegistry!.did == this.misesID()
  }
  public register(): Promise<BroadcastTxResponse> {
    const lcd = this.makeLCDConnection()
    const msg = {
      typeUrl: '/misesid.misestm.v1beta1.MsgCreateDidRegistry',
      value: {
        creator: this._address,
        did: this.misesID(),
        pkey_did: this.misesID() + '#key0',
        pkey_type: 'EcdsaSecp256k1VerificationKey2019',
        pkey_multibase: this._pkey,
        action: 'unfollow'
      }
    }
    return lcd.broadcast(msg, this._wallet)
  }
}
export class MUserMgr {
  private _users: MUser[] = []
  private _activeUserAddress: string | null = null
  public activeUser(): MUser | null {
    if (this._activeUserAddress == null) {
      return null
    }
    return this.findUser(this._activeUserAddress)
  }

  public findUser(address: string): MUser | null {
    var found: MUser | null = null
    this._users.forEach(u => {
      if (u.address() == address) {
        found = u
      }
    })
    return found
  }

  public async activateUser(priKey: Uint8Array): Promise<MUser> {
    const wallet = await DirectSecp256k1Wallet.fromKey(priKey, 'mises')
    const [{ address, pubkey: pubkeyBytes }] = await wallet.getAccounts()
    this._activeUserAddress = address
    const oldUser = this.findUser(address)
    if (oldUser != null) {
      return oldUser
    }
    const newUser = new MUser(wallet, address, pubkeyBytes)
    return newUser
  }

  public lockAll() {
    this._users = []
  }
}

export class MApp {
  private _address: string
  private _info: MAppInfo | null = null
  constructor(address: string) {
    this._address = address
  }

  public static appFromID(appid: string): MApp {
    const address = appid.replace('did:misesapp:', '')
    return new MApp(address)
  }
  private makeLCDConnection(): LCDConnection {
    return new LCDConnection('tcp://127.0.0.1:26657')
  }
  public address(): string {
    return this._address
  }
  public misesID(): string {
    return 'did:misesapp:' + this._address
  }

  public async info(): Promise<MAppInfo> {
    if (this._info != null) {
      return this._info
    }
    const lcd = this.makeLCDConnection()
    const requestData = Uint8Array.from(
      RestQueryAppRequest.encode({
        misesAppid: this.misesID()
      }).finish()
    )
    const respData = await lcd.query(`/misesid.misestm.v1beta1.RestQuery/QueryApp`, requestData)
    const response = RestQueryAppResponse.decode(respData)
    this._info = new MAppInfo(response.pubInfo!)
    return this._info
  }
  public connect(uid: string, permissions: string[]): boolean {
    return false
  }
  public disconnect(uid: string): boolean {
    return false
  }
}
export class MAppMgr {
  private _apps: MApp[] = []

  public async addApp(appid: string, domain: string): Promise<MApp> {
    const app = MApp.appFromID(appid)
    const appinfo = await app.info()
    if (appinfo.domains.indexOf(domain) >= 0) {
      this._apps.push(app)
    }

    return app
  }
  public findApp(appid: string): MApp | null {
    var found: MApp | null = null
    this._apps.forEach(u => {
      if (u.misesID() == appid) {
        found = u
      }
    })
    return found
  }
}

export default class MSdk {
  public static async newSdk(): Promise<MSdk> {
    return new MSdk()
  }
  private _lcdEndpoint: string = 'http://127.0.0.1:26657'
  private _userMgr: MUserMgr = new MUserMgr()
  private _appMgr: MAppMgr = new MAppMgr()

  public setLCDEndpoint(endpoint: string): void {
    this._lcdEndpoint = endpoint
  }
  public async testLCDConnection(): Promise<void> {
    const client = await StargateClient.connect(this._lcdEndpoint)
    client.disconnect()
  }
  public setLogLevel(level: number): void {}
  public UserMgr(): MUserMgr {
    return this._userMgr
  }
  public AppMgr(): MAppMgr {
    return this._appMgr
  }

  public async connect(domain: string, appid: string, permissions: string[]): Promise<boolean> {
    const user = this._userMgr.activeUser()
    if (user == null) {
      return false
    }
    const app = await this._appMgr.findApp(appid)
    if (app) {
      return app.connect(user.misesID(), permissions)
    } else {
      const app = await this._appMgr.addApp(appid, domain)
      return app.connect(user.misesID(), permissions)
    }
  }
}
