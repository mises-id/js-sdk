// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { fromHex, toHex, Bech32 } from '@cosmjs/encoding'
import { DirectSecp256k1Wallet, decodeTxRaw } from '@cosmjs/proto-signing'
import { DeliverTxResponse, IndexedTx, SearchBySentFromOrToQuery } from '@cosmjs/stargate'
import { sha256, Secp256k1 } from '@cosmjs/crypto'
import * as multiformats from 'multiformats/bases/base58'

import { Tendermint34Client, TxSearchParams } from '@cosmjs/tendermint-rpc'

import {
  RestQueryUserRequest,
  RestQueryUserResponse,
  RestQueryUserRelationRequest,
  RestQueryUserRelationResponse,
  RestQueryDidRequest,
  RestQueryDidResponse
} from './proto/misestm/v1beta1/rest_query'

import { MsgUpdateUserInfo } from './proto/misestm/v1beta1/tx'

import { LCDConnection, TxSearchParam, TxSearchResp } from './lcd'

import { MisesConfig } from './mises'
import { Coin } from 'cosmjs-types/cosmos/base/v1beta1/coin'
import { PublicUserInfo } from './proto/misestm/v1beta1/UserInfo'
import Long from 'long'
import { Any } from './proto/google/protobuf/any'

export class MUserInfo {
  name: string | undefined
  gender: string | undefined
  avatarUrl: string | undefined
  homePageUrl: string | undefined
  emails: string[] | undefined
  telephones: string[] | undefined
  intro: string | undefined
  version: Long
  constructor(info: PublicUserInfo | undefined, version: Long) {
    if (info) {
      this.name = info.name
      this.gender = info.gender
      this.avatarUrl = info.avatarUrl
      this.homePageUrl = info.homePageUrl
      this.emails = info.emails
      this.telephones = info.telephones
      this.intro = info.intro
    }
    this.version = version
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
  private makeLCDConnection(withFeeGrantor: boolean): LCDConnection {
    const conn = new LCDConnection(this._config)
    if (this._connectedApps.length > 0 && withFeeGrantor) {
      conn.setFeeGrantor(this._connectedApps[0].replace('did:misesapp:', ''))
    }
    return conn
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
    const lcd = this.makeLCDConnection(false)
    const requestData = Uint8Array.from(
      RestQueryUserRequest.encode({ misesUid: this.misesID() }).finish()
    )
    const respData = await lcd.query(`/misesid.misestm.v1beta1.RestQuery/QueryUser`, requestData)
    const response = RestQueryUserResponse.decode(respData)

    return new MUserInfo(response.pubInfo, response.version)
  }
  public setInfo(info: MUserInfo): Promise<DeliverTxResponse> {
    const lcd = this.makeLCDConnection(true)
    const msg = {
      typeUrl: '/misesid.misestm.v1beta1.MsgUpdateUserInfo',
      value: {
        creator: this._address,
        uid: this.misesID(),
        pubInfo: info,
        priInfo: {
          encData: '',
          iv: ''
        },
        version: info.version
      }
    }
    return lcd.broadcast([msg], this._wallet)
  }
  public async getFollowing(): Promise<string[]> {
    const lcd = this.makeLCDConnection(false)
    const requestData = Uint8Array.from(
      RestQueryUserRelationRequest.encode({
        misesUid: this.misesID(),
        filter: 'following',
        pagination: lcd.createPagination()
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
  public async isFollowing(toUid: string): Promise<boolean> {
    const lcd = this.makeLCDConnection(false)
    const requestData = Uint8Array.from(
      RestQueryUserRelationRequest.encode({
        misesUid: this.misesID(),
        filter: toUid,
        pagination: lcd.createPagination()
      }).finish()
    )
    const respData = await lcd.query(
      `/misesid.misestm.v1beta1.RestQuery/QueryUserRelation`,
      requestData
    )
    const response = RestQueryUserRelationResponse.decode(respData)
    let ids: string[] = []
    response.misesList.forEach(u => {
      if (u.relType.indexOf('following') >= 0) {
        ids.push(u.misesId)
      }
    })
    return ids.length > 0
  }
  public follow(toUid: string): Promise<DeliverTxResponse> {
    const lcd = this.makeLCDConnection(true)
    const msg = {
      typeUrl: '/misesid.misestm.v1beta1.MsgUpdateUserRelation',
      value: {
        creator: this._address,
        uidFrom: this.misesID(),
        uidTo: toUid,
        isFollowing: true,
        isBlocking: false
      }
    }
    return lcd.broadcast([msg], this._wallet)
  }
  public unfollow(toUid: string): Promise<DeliverTxResponse> {
    const lcd = this.makeLCDConnection(true)
    const msg = {
      typeUrl: '/misesid.misestm.v1beta1.MsgUpdateUserRelation',
      value: {
        creator: this._address,
        uidFrom: this.misesID(),
        uidTo: toUid,
        isFollowing: false,
        isBlocking: false
      }
    }
    return lcd.broadcast([msg], this._wallet)
  }

  public block(toUid: string): Promise<DeliverTxResponse> {
    const lcd = this.makeLCDConnection(true)
    const msg = {
      typeUrl: '/misesid.misestm.v1beta1.MsgUpdateUserRelation',
      value: {
        creator: this._address,
        uidFrom: this.misesID(),
        uidTo: toUid,
        isFollowing: false,
        isBlocking: true
      }
    }
    return lcd.broadcast([msg], this._wallet)
  }
  public unblock(toUid: string): Promise<DeliverTxResponse> {
    const lcd = this.makeLCDConnection(true)
    const msg = {
      typeUrl: '/misesid.misestm.v1beta1.MsgUpdateUserRelation',
      value: {
        creator: this._address,
        uidFrom: this.misesID(),
        uidTo: toUid,
        isBlocking: false,
        isFollowing: false
      }
    }
    return lcd.broadcast([msg], this._wallet)
  }
  public async isBlocking(toUid: string): Promise<boolean> {
    const lcd = this.makeLCDConnection(false)
    const requestData = Uint8Array.from(
      RestQueryUserRelationRequest.encode({
        misesUid: this.misesID(),
        filter: toUid,
        pagination: lcd.createPagination()
      }).finish()
    )
    const respData = await lcd.query(
      `/misesid.misestm.v1beta1.RestQuery/QueryUserRelation`,
      requestData
    )
    const response = RestQueryUserRelationResponse.decode(respData)
    let ids: string[] = []
    response.misesList.forEach(u => {
      if (u.relType.indexOf('blocking') >= 0) {
        ids.push(u.misesId)
      }
    })
    return ids.length > 0
  }
  public async isRegistered(): Promise<boolean> {
    const lcd = this.makeLCDConnection(false)
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
    return multiformats.base58btc.encoder.encode(this._pubkey)
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

  public async generateAuth(nonce: string): Promise<string> {
    const misesID = this.misesID()
    const signMsg = 'mises_id=' + misesID + '&nonce=' + nonce
    const sig = await this.signMsg(signMsg)
    return signMsg + '&sig=' + sig + '&pubkey=' + toHex(this._pubkey)
  }

  public async getBalanceUMIS(): Promise<Long> {
    const lcd = this.makeLCDConnection(false)
    const stargate = await lcd.stargate()
    const coin = await stargate.getBalance(this._address, this._config.denom())
    stargate.disconnect()
    return Long.fromString(coin.amount)
  }
  public async sendUMIS(
    toMisesUID: string,
    amount: Long,
    simulate: Boolean,
    memo: string
  ): Promise<DeliverTxResponse> {
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
    return this.postTx([msg], simulate, memo)
  }

  public async postTx(msgs: any[], simulate: Boolean, memo: string): Promise<DeliverTxResponse> {
    const lcd = this.makeLCDConnection(false)
    return lcd.broadcast(msgs, this._wallet, simulate, memo)
  }

  public async searchSendTransactions(param: TxSearchParam): Promise<TxSearchResp> {
    const lcd = this.makeLCDConnection(false)
    const query = {
      tags: [
        { key: 'message.module', value: 'bank' },
        { key: 'transfer.sender', value: this._address }
      ]
    }
    const rawQuery = query.tags.map(t => `${t.key}='${t.value}'`).join(' AND ')

    return lcd.txsQuery(rawQuery, param)
  }
  public async searchRecvTransactions(param: TxSearchParam): Promise<TxSearchResp> {
    const lcd = this.makeLCDConnection(false)
    const query = {
      tags: [
        { key: 'message.module', value: 'bank' },
        { key: 'transfer.recipient', value: this._address }
      ]
    }
    const rawQuery = query.tags.map(t => `${t.key}='${t.value}'`).join(' AND ')

    return lcd.txsQuery(rawQuery, param)
  }
  public async recentTransactions(fromHeight: number | undefined): Promise<readonly IndexedTx[]> {
    const lcd = this.makeLCDConnection(false)
    const stargate = await lcd.stargate()
    let txs
    const currentHeight = await stargate.getHeight()
    if (!fromHeight) {
      if (currentHeight > 50000) {
        fromHeight = currentHeight - 50000
      }
    }

    const sentQuery = {
      tags: [
        { key: 'message.module', value: 'bank' },
        { key: 'transfer.sender', value: this._address }
      ]
    }
    const receivedQuery = {
      tags: [
        { key: 'message.module', value: 'bank' },
        { key: 'transfer.recipient', value: this._address }
      ]
    }

    const [sent, received] = await Promise.all(
      [sentQuery, receivedQuery].map(rawQuery =>
        stargate.searchTx(rawQuery, { minHeight: fromHeight }).catch(_error => [])
      )
    )
    const sentHashes = sent.map(t => t.hash)
    txs = [...sent, ...received.filter(t => !sentHashes.includes(t.hash))]

    stargate.disconnect()
    return txs
  }
}
export class MUserMgr {
  private _users: Map<string, MUser> = new Map()
  private _activeUid: string | null = null
  private _config: MisesConfig

  constructor(config: MisesConfig) {
    this._config = config
  }
  public verifyAddress(address: string): boolean {
    try {
      const { prefix, data } = Bech32.decode(address)
      if (prefix !== 'mises') {
        return false
      }
      return data.length === 20
    } catch {
      return false
    }
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
    const user = await this.getUser(priKeyHex)
    this._activeUid = user.misesID()
    return user
  }

  public async getUser(priKeyHex: string): Promise<MUser> {
    const priKey = fromHex(priKeyHex)
    const wallet = await DirectSecp256k1Wallet.fromKey(priKey, this._config.prefix())
    const [{ address, pubkey: pubkeyBytes }] = await wallet.getAccounts()

    const newUser = new MUser(wallet, address, priKey, pubkeyBytes, this._config)
    const oldUser = this.findUser(newUser.misesID())
    if (oldUser) {
      return oldUser
    }
    const uid = newUser.misesID()
    this._users.set(uid, newUser)
    return newUser
  }

  public lockAll() {
    this._users = new Map()
    this._activeUid = null
  }
}
