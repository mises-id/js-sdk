// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { fromHex } from '@cosmjs/encoding'
import { RestQueryAppRequest, RestQueryAppResponse } from './proto/misestm/v1beta1/rest_query'
import { BroadcastTxResponse } from '@cosmjs/stargate'
import { PublicAppInfo } from './proto/misestm/v1beta1/AppInfo'
import { PublicUserInfo } from './proto/misestm/v1beta1/UserInfo'
import { AllowedMsgAllowance, BasicAllowance } from './proto/cosmos/feegrant/v1beta1/feegrant'

import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing'
import Long from 'long'
import { LCDConnection } from './lcd'
import { MisesConfig } from './mises'
import { version } from 'prettier'

export class MAppInfo {
  name: string
  iconURL: string
  homePageURL: string
  domains: string[]
  developer: string
  version: Long
  constructor(info: PublicAppInfo, version: Long) {
    this.name = info.name
    this.developer = info.developer
    this.iconURL = info.iconUrl
    this.homePageURL = info.homeUrl
    this.domains = info.domains
    this.version = version
  }
}

export class MApp {
  private _connectedUsers: string[] = []
  private _address: string
  private _info: MAppInfo | null = null
  private _config: MisesConfig
  constructor(address: string, config: MisesConfig) {
    this._address = address
    this._config = config
  }

  public static appFromID(appid: string, config: MisesConfig): MApp {
    const address = MApp.addressOf(appid)
    return new MApp(address, config)
  }
  public static addressOf(misesID: string): string {
    return misesID.replace('did:misesapp:', '')
  }

  private makeLCDConnection(): LCDConnection {
    return new LCDConnection(this._config.lcdEndpoint())
  }
  public address(): string {
    return this._address
  }
  public misesID(): string {
    return 'did:misesapp:' + this._address
  }

  public async info(): Promise<MAppInfo> {
    if (this._info !== null) {
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
    this._info = new MAppInfo(response.pubInfo!, Long.UZERO)
    return this._info
  }
  public connect(uid: string, permissions: string[]): boolean {
    if (this._connectedUsers.find(x => x === uid)) {
      return false
    }
    this._connectedUsers.push(uid)
    return true
  }
  public disconnect(uid: string): boolean {
    this._connectedUsers = this._connectedUsers.filter(x => x !== uid)
    return true
  }
  public connectedUsers(): string[] {
    return this._connectedUsers
  }

  public async registerUser(
    appPriKey: string,
    userMisesID: string,
    userPubKeyMultibase: string
  ): Promise<BroadcastTxResponse> {
    const priKey = fromHex(appPriKey)
    const wallet = await DirectSecp256k1Wallet.fromKey(priKey, this._config.prefix())
    const lcd = this.makeLCDConnection()
    const msg = {
      typeUrl: '/misesid.misestm.v1beta1.MsgCreateDidRegistry',
      value: {
        creator: this._address,
        did: userMisesID,
        pkeyDid: userMisesID + '#key0',
        pkeyType: 'EcdsaSecp256k1VerificationKey2019',
        pkeyMultibase: userPubKeyMultibase
      }
    }
    return lcd.broadcast(msg, wallet)
  }

  public async grantFeeForUser(
    appPriKey: string,
    userMisesID: string
  ): Promise<BroadcastTxResponse> {
    const priKey = fromHex(appPriKey)
    const wallet = await DirectSecp256k1Wallet.fromKey(priKey, this._config.prefix())
    const lcd = this.makeLCDConnection()
    const basicAllowance = BasicAllowance.fromPartial({
      spendLimit: [
        {
          denom: 'umis',
          amount: '10000'
        }
      ],
      expiration: undefined
    })
    const allowance = AllowedMsgAllowance.fromPartial({
      allowance: {
        typeUrl: '/cosmos.feegrant.v1beta1.FeeAllowanceI',
        value: Uint8Array.from(BasicAllowance.encode(basicAllowance).finish())
      },
      allowedMessages: []
    })
    const msg = {
      typeUrl: '/cosmos.feegrant.v1beta1.MsgGrantAllowance',
      value: {
        granter: this._address,
        grantee: userMisesID.replace('did:mises:', ''),
        allowance: allowance
      }
    }
    return lcd.broadcast(msg, wallet)
  }
}
export class MAppMgr {
  private _apps: Map<string, MApp> = new Map()

  private _config: MisesConfig

  constructor(config: MisesConfig) {
    this._config = config
  }

  public async ensureApp(appid: string, domain: string): Promise<MApp> {
    const oldApp = this.findApp(appid)
    if (oldApp) {
      return oldApp
    }
    const app = MApp.appFromID(appid, this._config)
    const appinfo = await app.info()
    if (appinfo.domains.indexOf(domain) >= 0) {
      this._apps.set(appid, app)
    }

    return app
  }
  public findApp(appid: string): MApp | undefined {
    return this._apps.get(appid)
  }
}
