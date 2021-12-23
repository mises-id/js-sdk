// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { MUserMgr } from './muser'
import { MAppMgr } from './mapp'
import { MisesConfig } from './mises'

export default class MSdk {
  public static async newSdk(config: MisesConfig): Promise<MSdk> {
    return new MSdk(config)
  }

  private _userMgr: MUserMgr
  private _appMgr: MAppMgr
  private _config: MisesConfig

  constructor(config: MisesConfig) {
    this._config = config
    this._userMgr = new MUserMgr(config)
    this._appMgr = new MAppMgr(config)
  }

  public async testLCDConnection(): Promise<void> {
    const tmClient = await Tendermint34Client.connect(this._config.lcdEndpoint())
    tmClient.disconnect()
  }

  public userMgr(): MUserMgr {
    return this._userMgr
  }
  public appMgr(): MAppMgr {
    return this._appMgr
  }

  public async connect(
    domain: string,
    appid: string,
    uid: string,
    permissions: string[]
  ): Promise<string> {
    const user = this._userMgr.findUser(uid)
    if (!user) {
      return ''
    }
    const app = this._appMgr.findApp(appid)
    if (app) {
      app.connect(user.misesID(), permissions)
      return user.connect(app.misesID(), permissions)
    } else {
      const app = await this._appMgr.ensureApp(appid, domain)
      app.connect(user.misesID(), permissions)
      return user.connect(app.misesID(), permissions)
    }
  }

  public disconnect(appid: string, uid: string): boolean {
    let ret = false
    const user = this._userMgr.findUser(uid)
    const app = this._appMgr.findApp(appid)
    if (user && app) {
      ret = app.disconnect(user.misesID()) && user.disconnect(app.misesID())
    }
    return ret
  }

  public connectedUsers(appid: string): string[] {
    const app = this._appMgr.findApp(appid)
    if (!app) {
      return []
    }
    return app.connectedUsers()
  }
  public connectedApps(uid: string): string[] {
    const user = this._userMgr.findUser(uid)
    if (!user) {
      return []
    }
    return user.connectedApps()
  }
}
