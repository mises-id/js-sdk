// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

export class MisesConfig {
  private _lcdEndpoint: string = 'http://127.0.0.1:26657'
  private _logLevel: number = 0
  public setLCDEndpoint(endpoint: string): void {
    this._lcdEndpoint = endpoint
  }
  public setLogLevel(level: number): void {
    this._logLevel = level
  }
  public lcdEndpoint(): string {
    return this._lcdEndpoint
  }
  public prefix(): string {
    return 'mises'
  }
  public denom(): string {
    return 'umis'
  }
}
