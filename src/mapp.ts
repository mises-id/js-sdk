// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { RestQueryAppRequest, RestQueryAppResponse } from './proto/misestm/v1beta1/rest_query'

import { PublicAppInfo, PublicUserInfo } from './proto/misestm/v1beta1/rest_tx'
import Long from 'long'
import { LCDConnection } from './lcd'

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

export class MApp {
  private _connectedUsers: string[] = []
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
    this._info = new MAppInfo(response.pubInfo!)
    return this._info
  }
  public connect(uid: string, permissions: string[]): boolean {
    return false
  }
  public disconnect(uid: string): boolean {
    return false
  }
  public connectedUsers(): string[] {
    return []
  }
}
export class MAppMgr {
  private _apps: Map<string, MApp> = new Map()

  public async ensureApp(appid: string, domain: string): Promise<MApp> {
    const oldApp = this.findApp(appid)
    if (oldApp) {
      return oldApp
    }
    const app = MApp.appFromID(appid)
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
