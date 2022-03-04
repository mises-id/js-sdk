// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { Coin } from '@cosmjs/proto-signing'
import { Uint53, Uint64 } from '@cosmjs/math'
import Long from 'long'

function precisionRound(n: number, p: number): number {
  let factor = Math.pow(10, p)
  return Math.round(n * factor) / factor
}

export class MisesConfig {
  private _lcdEndpoint: string = 'http://127.0.0.1:26657'
  private _logLevel: number = 0
  private _gasPrice: number = 0.01 // umis
  private _gasLimit: number = 200000
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

  public setGasPriceAndLimit(gp: number, limit: number): boolean {
    if (gp < 0.0001) {
      gp = 0.0001
    }
    gp = precisionRound(gp, 4)
    limit = precisionRound(limit, 0)
    if (precisionRound(gp * limit, 0) > 0) {
      this._gasPrice = gp
      this._gasLimit = limit
      return true
    }
    return false
  }

  public gasPrice(): number {
    return this._gasPrice
  }
  public feeLimit(): number {
    return precisionRound(this._gasPrice * this._gasLimit, 0)
  }
  public gasLimit(): number {
    return this._gasLimit
  }
}

export class MisesCoin {
  public async load(): Promise<void> {
    return
  }

  public coin(amount: number | string, denom: string): Coin {
    let outAmount: string
    if (typeof amount === 'number') {
      try {
        outAmount = new Uint53(amount).toString()
      } catch (_err) {
        throw 'Given amount is not a safe integer. Consider using a string instead to overcome the limitations of JS numbers.'
      }
    } else {
      if (!amount.match(/^[0-9]+$/)) {
        throw 'Invalid unsigned integer string format'
      }
      outAmount = amount.replace(/^0*/, '') || '0'
    }
    return {
      amount: outAmount,
      denom: denom
    }
  }
  public toCoinUMIS(umis: Long): Coin {
    return this.coin(umis.toNumber(), 'umis')
  }

  public toCoinMMIS(umis: Long): Coin {
    return {
      amount: precisionRound(umis.toNumber() / 1000, 3).toString(),
      denom: 'mmis'
    }
  }

  public toCoinMIS(umis: Long): Coin {
    return {
      amount: precisionRound(umis.toNumber() / 1000000, 6).toString(),
      denom: 'mis'
    }
  }

  public fromCoin(coin: Coin): Long {
    let res: number = Number.parseFloat(coin.amount)
    if (coin.denom.toLowerCase() === 'mis') {
      res = res * 1000000
    } else if (coin.denom.toLowerCase() === 'mmis') {
      res = res * 1000
    }
    return Long.fromNumber(res)
  }
}
