// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { fromHex } from '@cosmjs/encoding'
import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing'
import { BroadcastTxResponse } from '@cosmjs/stargate'

import { Tendermint34Client } from '@cosmjs/tendermint-rpc'

import {
  RestQueryUserRequest,
  RestQueryUserResponse,
  RestQueryUserRelationRequest,
  RestQueryUserRelationResponse,
  RestQueryDidRequest,
  RestQueryDidResponse
} from './proto/misestm/v1beta1/rest_query'
import { LCDConnection } from './lcd'

import { PublicUserInfo } from './proto/misestm/v1beta1/UserInfo'

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

export class MUser {
  private _connectedApps: string[] = []

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
  public async getFollowing(): Promise<string[]> {
    const lcd = this.makeLCDConnection()
    const requestData = Uint8Array.from(
      RestQueryUserRelationRequest.encode({
        misesUid: this.misesID(),
        filter: '',
        pagination: lcd.createPagination(new Uint8Array())
      }).finish()
    )
    const respData = await lcd.query(
      `/misesid.misestm.v1beta1.RestQuery/QueryUserRelation`,
      requestData
    )
    const response = RestQueryUserRelationResponse.decode(respData)
    let ids: string[] = []
    response.misesList.forEach(u => {
      ids.push(u.misesId)
    })
    return ids
  }
  public follow(followingId: string): Promise<BroadcastTxResponse> {
    const lcd = this.makeLCDConnection()
    const msg = {
      typeUrl: '/misesid.misestm.v1beta1.MsgUpdateUserRelation',
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
      typeUrl: '/misesid.misestm.v1beta1.MsgUpdateUserRelation',
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
    return response.didRegistry !== undefined && response.didRegistry.did === this.misesID()
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

  public connect(appid: string, permissions: string[]): string {
    if (this._connectedApps.find(x => x === appid)) {
      return this.misesID()
    }
    this._connectedApps.push(appid)
    return this.misesID()
  }
  public disconnect(appid: string): boolean {
    this._connectedApps = this._connectedApps.filter(x => x !== appid)
    return true
  }

  public connectedApps(): string[] {
    return this._connectedApps
  }
}
export class MUserMgr {
  private _users: Map<string, MUser> = new Map()
  private _activeUid: string | null = null
  public activeUser(): MUser | undefined {
    if (this._activeUid === null) {
      return
    }
    return this.findUser(this._activeUid)
  }

  public findUser(uid: string): MUser | undefined {
    return this._users.get(uid)
  }

  public async activateUser(priKeyHex: string): Promise<MUser> {
    const priKey = fromHex(priKeyHex)
    const wallet = await DirectSecp256k1Wallet.fromKey(priKey, 'mises')
    const [{ address, pubkey: pubkeyBytes }] = await wallet.getAccounts()

    const newUser = new MUser(wallet, address, pubkeyBytes)
    const oldUser = this.findUser(newUser.misesID())
    if (oldUser) {
      this._activeUid = oldUser.misesID()
      return oldUser
    }
    const uid = newUser.misesID()
    this._users.set(uid, newUser)
    this._activeUid = uid
    return newUser
  }

  public lockAll() {
    this._users = new Map()
    this._activeUid = null
  }
}
