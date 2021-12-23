// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { fromHex, toHex } from '@cosmjs/encoding'
import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing'
import { BroadcastTxResponse } from '@cosmjs/stargate'
import { sha256, Secp256k1 } from '@cosmjs/crypto'
import { base58btc } from 'multiformats/bases/base58'

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

import { MisesConfig } from './mises'
import { Coin } from 'cosmjs-types/cosmos/base/v1beta1/coin'
import { PublicUserInfo } from './proto/misestm/v1beta1/UserInfo'
import Long from 'long'

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
  private _prikey: Uint8Array
  private _pubkey: Uint8Array
  private _config: MisesConfig
  constructor(
    wallet: DirectSecp256k1Wallet,
    address: string,
    prikey: Uint8Array,
    pubkey: Uint8Array,
    config: MisesConfig
  ) {
    this._wallet = wallet
    this._address = address
    this._prikey = prikey
    this._pubkey = pubkey
    this._config = config
  }
  private makeLCDConnection(): LCDConnection {
    return new LCDConnection(this._config.lcdEndpoint())
  }
  public address(): string {
    return this._address
  }
  public misesID(): string {
    return 'did:mises:' + this._address
  }

  public static addressOf(misesID: string): string {
    return misesID.replace('did:mises:', '')
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
    try {
      const respData = await lcd.query(`/misesid.misestm.v1beta1.RestQuery/QueryDid`, requestData)
      const response = RestQueryDidResponse.decode(respData)
      return response.didRegistry !== undefined && response.didRegistry.did === this.misesID()
    } catch (error) {
      return false
    }
  }

  public pubkeyMultibase(): string {
    return base58btc.encoder.encode(this._pubkey)
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

  public async signMsg(msg: string): Promise<string> {
    const hashedMessage = sha256(new TextEncoder().encode(msg))
    const sig = await Secp256k1.createSignature(hashedMessage, this._prikey)
    const der = sig.toDer()
    return toHex(der)
  }

  public async getBalance(): Promise<Long> {
    const lcd = this.makeLCDConnection()
    const stargate = await lcd.stargate()
    const coin = await stargate.getBalance(this._address, this._config.denom())
    return Long.fromString(coin.amount)
  }
  public async sendUMIS(toMisesUID: string, amount: Long): Promise<BroadcastTxResponse> {
    const lcd = this.makeLCDConnection()
    const coin = Coin.fromPartial({
      denom: this._config.denom(),
      amount: amount.toString()
    })
    const msg = {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: this._address,
        toAddress: MUser.addressOf(toMisesUID),
        amount: [coin]
      }
    }
    return lcd.broadcast(msg, this._wallet)
  }
}
export class MUserMgr {
  private _users: Map<string, MUser> = new Map()
  private _activeUid: string | null = null
  private _config: MisesConfig

  constructor(config: MisesConfig) {
    this._config = config
  }

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
    const wallet = await DirectSecp256k1Wallet.fromKey(priKey, this._config.prefix())
    const [{ address, pubkey: pubkeyBytes }] = await wallet.getAccounts()

    const newUser = new MUser(wallet, address, priKey, pubkeyBytes, this._config)
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
