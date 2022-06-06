// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { Coin, EncodeObject } from '@cosmjs/proto-signing'
import { Uint53, Uint64 } from '@cosmjs/math'
import Long from 'long'
import { sentenceCase } from 'sentence-case'

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
        throw new Error(
          'Given amount is not a safe integer. Consider using a string instead to overcome the limitations of JS numbers.'
        )
      }
    } else {
      if (!amount.match(/^[0-9]+$/)) {
        throw new Error('Invalid unsigned integer string format')
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

export const formatCoins = (data: any) => data.map(formatCoin).join(',')
export const formatCoin = ({ amount, denom }: any) => `${amount}${denom}`

export const defaultMessage = (type: string) => {
  const result = type.split('.')
  return sentenceCase(result[result.length - 1].replace('Msg', ''))
}
export class MsgReader {
  public summary(msg: any): string {
    try {
      const msgEnc: EncodeObject = msg
      const msgType = msgEnc.typeUrl
      const data = msgEnc.value

      switch (msgType) {
        case '/cosmos.bank.v1beta1.MsgSend': {
          const { amount, toAddress } = data
          return `Send ${formatCoins(amount)} to ${toAddress}`
        }

        case '/cosmos.staking.v1beta1.MsgDelegate': {
          const { amount, validatorAddress } = data
          return `Delegate ${formatCoin(amount)} to ${validatorAddress}`
        }

        case '/cosmos.staking.v1beta1.MsgBeginRedelegate': {
          const { amount, validatorDstAddress, validatorSrcAddress } = data
          return `Redelegate ${formatCoin(
            amount
          )} from ${validatorSrcAddress} to ${validatorDstAddress}`
        }

        case '/cosmos.staking.v1beta1.MsgUndelegate': {
          const { amount, validatorAddress } = data
          return `Undelegate ${formatCoin(amount)} from ${validatorAddress}`
        }

        case '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward': {
          const { validatorAddress } = data
          return `Withdraw rewards from ${validatorAddress}`
        }

        case '/cosmos.gov.v1beta1.MsgDeposit': {
          const { amount, proposal_id } = data
          return `Deposit ${formatCoins(amount)} to proposal ${proposal_id}`
        }

        case '/cosmos.gov.v1beta1.MsgVote': {
          const { proposal_id, option } = data
          const VoteOptiona = [
            'VOTE_OPTION_UNSPECIFIED',
            'VOTE_OPTION_YES',
            'VOTE_OPTION_ABSTAIN',
            'VOTE_OPTION_NO',
            'VOTE_OPTION_NO_WITH_VETO'
          ]
          const voteOption = VoteOptiona[option]
          return `Vote ${voteOption.replace('VOTE_OPTION_', '')} on proposal ${proposal_id}`
        }
        case '/cosmos.gov.v1beta1.MsgSubmitProposal': {
          const { content } = data
          const type = content['typeUrl']

          if (type === '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal') {
            return 'Submit a community pool spend proposal'
          } else if (type === '/cosmos.gov.v1beta1.TextProposal') {
            return 'Submit a text proposal'
          } else if (type === '/cosmos.params.v1beta1.ParameterChangeProposal') {
            return 'Submit a parameter change proposal'
          } else if (type === '/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal') {
            return 'Submit a cancel software upgrade proposal'
          } else if (type === '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal') {
            return 'Submit a software upgrade proposal'
          }

          return defaultMessage(msgType)
        }

        default:
          return defaultMessage(msgType)
      }
    } catch {
      return ''
    }
  }
}
