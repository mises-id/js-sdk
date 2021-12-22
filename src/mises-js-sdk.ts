// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { MUserMgr } from './muser'
import { MAppMgr } from './mapp'

export default class MSdk {
  public static async newSdk(): Promise<MSdk> {
    return new MSdk()
  }
  private _lcdEndpoint: string = 'tcp://127.0.0.1:26657'
  private _userMgr: MUserMgr = new MUserMgr()
  private _appMgr: MAppMgr = new MAppMgr()

  public setLCDEndpoint(endpoint: string): void {
    this._lcdEndpoint = endpoint
  }
  public async testLCDConnection(): Promise<void> {
    const tmClient = await Tendermint34Client.connect(this._lcdEndpoint)
    tmClient.disconnect()
  }
  public setLogLevel(level: number): void {
    return
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
    if (user === undefined) {
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
    if (app == undefined) {
      return []
    }
    return app.connectedUsers()
  }
  public connectedApps(uid: string): string[] {
    const user = this._userMgr.findUser(uid)
    if (user === undefined) {
      return []
    }
    return user.connectedApps()
  }
}
