/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'
import { PublicUserInfo, PrivateUserInfo } from '../../misestm/v1beta1/UserInfo'
import { TxResponse } from '../../cosmos/base/abci/v1beta1/abci'
import { PublicAppInfo } from '../../misestm/v1beta1/AppInfo'
import { Coin } from '../../cosmos/base/v1beta1/coin'
import { Duration } from '../../google/protobuf/duration'
import { Timestamp } from '../../google/protobuf/timestamp'

export const protobufPackage = 'misesid.misestm.v1beta1'

export interface RestCreateDidRequest {
  misesAppid: string
  misesId: string
  pubKey: string
}

export interface RestUpdateUserInfoRequest {
  misesAppid: string
  misesUid: string
  pubInfo?: PublicUserInfo
  priInfo?: PrivateUserInfo
}

export interface RestUpdateUserRelationRequest {
  misesAppid: string
  misesUid: string
  targetId: string
  action: string
}

export interface RestQueryTxRequest {
  txhash: string
}

export interface RestTxResponse {
  /** tx_response is the queried TxResponses. */
  txResponse?: TxResponse
  code: number
}

export interface RestUpdateAppInfoRequest {
  misesAppid: string
  pubInfo?: PublicAppInfo
}

export interface AppFeeGrant {
  spendLimit?: Coin
  period?: Duration
  expiration?: Date
}

export interface RestUpdateAppFeeGrantRequest {
  misesAppid: string
  misesUid: string
  grant?: AppFeeGrant
  revoke: boolean
}

const baseRestCreateDidRequest: object = {
  misesAppid: '',
  misesId: '',
  pubKey: ''
}

export const RestCreateDidRequest = {
  encode(message: RestCreateDidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.misesAppid !== '') {
      writer.uint32(10).string(message.misesAppid)
    }
    if (message.misesId !== '') {
      writer.uint32(18).string(message.misesId)
    }
    if (message.pubKey !== '') {
      writer.uint32(26).string(message.pubKey)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestCreateDidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRestCreateDidRequest } as RestCreateDidRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesAppid = reader.string()
          break
        case 2:
          message.misesId = reader.string()
          break
        case 3:
          message.pubKey = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestCreateDidRequest {
    const message = { ...baseRestCreateDidRequest } as RestCreateDidRequest
    if (object.misesAppid !== undefined && object.misesAppid !== null) {
      message.misesAppid = String(object.misesAppid)
    } else {
      message.misesAppid = ''
    }
    if (object.misesId !== undefined && object.misesId !== null) {
      message.misesId = String(object.misesId)
    } else {
      message.misesId = ''
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey)
    } else {
      message.pubKey = ''
    }
    return message
  },

  toJSON(message: RestCreateDidRequest): unknown {
    const obj: any = {}
    message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid)
    message.misesId !== undefined && (obj.misesId = message.misesId)
    message.pubKey !== undefined && (obj.pubKey = message.pubKey)
    return obj
  },

  fromPartial(object: DeepPartial<RestCreateDidRequest>): RestCreateDidRequest {
    const message = { ...baseRestCreateDidRequest } as RestCreateDidRequest
    message.misesAppid = object.misesAppid ?? ''
    message.misesId = object.misesId ?? ''
    message.pubKey = object.pubKey ?? ''
    return message
  }
}

const baseRestUpdateUserInfoRequest: object = { misesAppid: '', misesUid: '' }

export const RestUpdateUserInfoRequest = {
  encode(message: RestUpdateUserInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.misesAppid !== '') {
      writer.uint32(10).string(message.misesAppid)
    }
    if (message.misesUid !== '') {
      writer.uint32(18).string(message.misesUid)
    }
    if (message.pubInfo !== undefined) {
      PublicUserInfo.encode(message.pubInfo, writer.uint32(26).fork()).ldelim()
    }
    if (message.priInfo !== undefined) {
      PrivateUserInfo.encode(message.priInfo, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestUpdateUserInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseRestUpdateUserInfoRequest
    } as RestUpdateUserInfoRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesAppid = reader.string()
          break
        case 2:
          message.misesUid = reader.string()
          break
        case 3:
          message.pubInfo = PublicUserInfo.decode(reader, reader.uint32())
          break
        case 4:
          message.priInfo = PrivateUserInfo.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestUpdateUserInfoRequest {
    const message = {
      ...baseRestUpdateUserInfoRequest
    } as RestUpdateUserInfoRequest
    if (object.misesAppid !== undefined && object.misesAppid !== null) {
      message.misesAppid = String(object.misesAppid)
    } else {
      message.misesAppid = ''
    }
    if (object.misesUid !== undefined && object.misesUid !== null) {
      message.misesUid = String(object.misesUid)
    } else {
      message.misesUid = ''
    }
    if (object.pubInfo !== undefined && object.pubInfo !== null) {
      message.pubInfo = PublicUserInfo.fromJSON(object.pubInfo)
    } else {
      message.pubInfo = undefined
    }
    if (object.priInfo !== undefined && object.priInfo !== null) {
      message.priInfo = PrivateUserInfo.fromJSON(object.priInfo)
    } else {
      message.priInfo = undefined
    }
    return message
  },

  toJSON(message: RestUpdateUserInfoRequest): unknown {
    const obj: any = {}
    message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid)
    message.misesUid !== undefined && (obj.misesUid = message.misesUid)
    message.pubInfo !== undefined &&
      (obj.pubInfo = message.pubInfo ? PublicUserInfo.toJSON(message.pubInfo) : undefined)
    message.priInfo !== undefined &&
      (obj.priInfo = message.priInfo ? PrivateUserInfo.toJSON(message.priInfo) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<RestUpdateUserInfoRequest>): RestUpdateUserInfoRequest {
    const message = {
      ...baseRestUpdateUserInfoRequest
    } as RestUpdateUserInfoRequest
    message.misesAppid = object.misesAppid ?? ''
    message.misesUid = object.misesUid ?? ''
    if (object.pubInfo !== undefined && object.pubInfo !== null) {
      message.pubInfo = PublicUserInfo.fromPartial(object.pubInfo)
    } else {
      message.pubInfo = undefined
    }
    if (object.priInfo !== undefined && object.priInfo !== null) {
      message.priInfo = PrivateUserInfo.fromPartial(object.priInfo)
    } else {
      message.priInfo = undefined
    }
    return message
  }
}

const baseRestUpdateUserRelationRequest: object = {
  misesAppid: '',
  misesUid: '',
  targetId: '',
  action: ''
}

export const RestUpdateUserRelationRequest = {
  encode(
    message: RestUpdateUserRelationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.misesAppid !== '') {
      writer.uint32(10).string(message.misesAppid)
    }
    if (message.misesUid !== '') {
      writer.uint32(18).string(message.misesUid)
    }
    if (message.targetId !== '') {
      writer.uint32(26).string(message.targetId)
    }
    if (message.action !== '') {
      writer.uint32(34).string(message.action)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestUpdateUserRelationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseRestUpdateUserRelationRequest
    } as RestUpdateUserRelationRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesAppid = reader.string()
          break
        case 2:
          message.misesUid = reader.string()
          break
        case 3:
          message.targetId = reader.string()
          break
        case 4:
          message.action = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestUpdateUserRelationRequest {
    const message = {
      ...baseRestUpdateUserRelationRequest
    } as RestUpdateUserRelationRequest
    if (object.misesAppid !== undefined && object.misesAppid !== null) {
      message.misesAppid = String(object.misesAppid)
    } else {
      message.misesAppid = ''
    }
    if (object.misesUid !== undefined && object.misesUid !== null) {
      message.misesUid = String(object.misesUid)
    } else {
      message.misesUid = ''
    }
    if (object.targetId !== undefined && object.targetId !== null) {
      message.targetId = String(object.targetId)
    } else {
      message.targetId = ''
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action)
    } else {
      message.action = ''
    }
    return message
  },

  toJSON(message: RestUpdateUserRelationRequest): unknown {
    const obj: any = {}
    message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid)
    message.misesUid !== undefined && (obj.misesUid = message.misesUid)
    message.targetId !== undefined && (obj.targetId = message.targetId)
    message.action !== undefined && (obj.action = message.action)
    return obj
  },

  fromPartial(object: DeepPartial<RestUpdateUserRelationRequest>): RestUpdateUserRelationRequest {
    const message = {
      ...baseRestUpdateUserRelationRequest
    } as RestUpdateUserRelationRequest
    message.misesAppid = object.misesAppid ?? ''
    message.misesUid = object.misesUid ?? ''
    message.targetId = object.targetId ?? ''
    message.action = object.action ?? ''
    return message
  }
}

const baseRestQueryTxRequest: object = { txhash: '' }

export const RestQueryTxRequest = {
  encode(message: RestQueryTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txhash !== '') {
      writer.uint32(10).string(message.txhash)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestQueryTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRestQueryTxRequest } as RestQueryTxRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.txhash = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryTxRequest {
    const message = { ...baseRestQueryTxRequest } as RestQueryTxRequest
    if (object.txhash !== undefined && object.txhash !== null) {
      message.txhash = String(object.txhash)
    } else {
      message.txhash = ''
    }
    return message
  },

  toJSON(message: RestQueryTxRequest): unknown {
    const obj: any = {}
    message.txhash !== undefined && (obj.txhash = message.txhash)
    return obj
  },

  fromPartial(object: DeepPartial<RestQueryTxRequest>): RestQueryTxRequest {
    const message = { ...baseRestQueryTxRequest } as RestQueryTxRequest
    message.txhash = object.txhash ?? ''
    return message
  }
}

const baseRestTxResponse: object = { code: 0 }

export const RestTxResponse = {
  encode(message: RestTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim()
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRestTxResponse } as RestTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.txResponse = TxResponse.decode(reader, reader.uint32())
          break
        case 2:
          message.code = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestTxResponse {
    const message = { ...baseRestTxResponse } as RestTxResponse
    if (object.txResponse !== undefined && object.txResponse !== null) {
      message.txResponse = TxResponse.fromJSON(object.txResponse)
    } else {
      message.txResponse = undefined
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code)
    } else {
      message.code = 0
    }
    return message
  },

  toJSON(message: RestTxResponse): unknown {
    const obj: any = {}
    message.txResponse !== undefined &&
      (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined)
    message.code !== undefined && (obj.code = message.code)
    return obj
  },

  fromPartial(object: DeepPartial<RestTxResponse>): RestTxResponse {
    const message = { ...baseRestTxResponse } as RestTxResponse
    if (object.txResponse !== undefined && object.txResponse !== null) {
      message.txResponse = TxResponse.fromPartial(object.txResponse)
    } else {
      message.txResponse = undefined
    }
    message.code = object.code ?? 0
    return message
  }
}

const baseRestUpdateAppInfoRequest: object = { misesAppid: '' }

export const RestUpdateAppInfoRequest = {
  encode(message: RestUpdateAppInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.misesAppid !== '') {
      writer.uint32(10).string(message.misesAppid)
    }
    if (message.pubInfo !== undefined) {
      PublicAppInfo.encode(message.pubInfo, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestUpdateAppInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseRestUpdateAppInfoRequest
    } as RestUpdateAppInfoRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesAppid = reader.string()
          break
        case 2:
          message.pubInfo = PublicAppInfo.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestUpdateAppInfoRequest {
    const message = {
      ...baseRestUpdateAppInfoRequest
    } as RestUpdateAppInfoRequest
    if (object.misesAppid !== undefined && object.misesAppid !== null) {
      message.misesAppid = String(object.misesAppid)
    } else {
      message.misesAppid = ''
    }
    if (object.pubInfo !== undefined && object.pubInfo !== null) {
      message.pubInfo = PublicAppInfo.fromJSON(object.pubInfo)
    } else {
      message.pubInfo = undefined
    }
    return message
  },

  toJSON(message: RestUpdateAppInfoRequest): unknown {
    const obj: any = {}
    message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid)
    message.pubInfo !== undefined &&
      (obj.pubInfo = message.pubInfo ? PublicAppInfo.toJSON(message.pubInfo) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<RestUpdateAppInfoRequest>): RestUpdateAppInfoRequest {
    const message = {
      ...baseRestUpdateAppInfoRequest
    } as RestUpdateAppInfoRequest
    message.misesAppid = object.misesAppid ?? ''
    if (object.pubInfo !== undefined && object.pubInfo !== null) {
      message.pubInfo = PublicAppInfo.fromPartial(object.pubInfo)
    } else {
      message.pubInfo = undefined
    }
    return message
  }
}

const baseAppFeeGrant: object = {}

export const AppFeeGrant = {
  encode(message: AppFeeGrant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spendLimit !== undefined) {
      Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim()
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(18).fork()).ldelim()
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppFeeGrant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAppFeeGrant } as AppFeeGrant
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spendLimit = Coin.decode(reader, reader.uint32())
          break
        case 2:
          message.period = Duration.decode(reader, reader.uint32())
          break
        case 3:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AppFeeGrant {
    const message = { ...baseAppFeeGrant } as AppFeeGrant
    if (object.spendLimit !== undefined && object.spendLimit !== null) {
      message.spendLimit = Coin.fromJSON(object.spendLimit)
    } else {
      message.spendLimit = undefined
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = Duration.fromJSON(object.period)
    } else {
      message.period = undefined
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromJsonTimestamp(object.expiration)
    } else {
      message.expiration = undefined
    }
    return message
  },

  toJSON(message: AppFeeGrant): unknown {
    const obj: any = {}
    message.spendLimit !== undefined &&
      (obj.spendLimit = message.spendLimit ? Coin.toJSON(message.spendLimit) : undefined)
    message.period !== undefined &&
      (obj.period = message.period ? Duration.toJSON(message.period) : undefined)
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString())
    return obj
  },

  fromPartial(object: DeepPartial<AppFeeGrant>): AppFeeGrant {
    const message = { ...baseAppFeeGrant } as AppFeeGrant
    if (object.spendLimit !== undefined && object.spendLimit !== null) {
      message.spendLimit = Coin.fromPartial(object.spendLimit)
    } else {
      message.spendLimit = undefined
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = Duration.fromPartial(object.period)
    } else {
      message.period = undefined
    }
    message.expiration = object.expiration ?? undefined
    return message
  }
}

const baseRestUpdateAppFeeGrantRequest: object = {
  misesAppid: '',
  misesUid: '',
  revoke: false
}

export const RestUpdateAppFeeGrantRequest = {
  encode(
    message: RestUpdateAppFeeGrantRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.misesAppid !== '') {
      writer.uint32(10).string(message.misesAppid)
    }
    if (message.misesUid !== '') {
      writer.uint32(18).string(message.misesUid)
    }
    if (message.grant !== undefined) {
      AppFeeGrant.encode(message.grant, writer.uint32(26).fork()).ldelim()
    }
    if (message.revoke === true) {
      writer.uint32(32).bool(message.revoke)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestUpdateAppFeeGrantRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseRestUpdateAppFeeGrantRequest
    } as RestUpdateAppFeeGrantRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesAppid = reader.string()
          break
        case 2:
          message.misesUid = reader.string()
          break
        case 3:
          message.grant = AppFeeGrant.decode(reader, reader.uint32())
          break
        case 4:
          message.revoke = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestUpdateAppFeeGrantRequest {
    const message = {
      ...baseRestUpdateAppFeeGrantRequest
    } as RestUpdateAppFeeGrantRequest
    if (object.misesAppid !== undefined && object.misesAppid !== null) {
      message.misesAppid = String(object.misesAppid)
    } else {
      message.misesAppid = ''
    }
    if (object.misesUid !== undefined && object.misesUid !== null) {
      message.misesUid = String(object.misesUid)
    } else {
      message.misesUid = ''
    }
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = AppFeeGrant.fromJSON(object.grant)
    } else {
      message.grant = undefined
    }
    if (object.revoke !== undefined && object.revoke !== null) {
      message.revoke = Boolean(object.revoke)
    } else {
      message.revoke = false
    }
    return message
  },

  toJSON(message: RestUpdateAppFeeGrantRequest): unknown {
    const obj: any = {}
    message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid)
    message.misesUid !== undefined && (obj.misesUid = message.misesUid)
    message.grant !== undefined &&
      (obj.grant = message.grant ? AppFeeGrant.toJSON(message.grant) : undefined)
    message.revoke !== undefined && (obj.revoke = message.revoke)
    return obj
  },

  fromPartial(object: DeepPartial<RestUpdateAppFeeGrantRequest>): RestUpdateAppFeeGrantRequest {
    const message = {
      ...baseRestUpdateAppFeeGrantRequest
    } as RestUpdateAppFeeGrantRequest
    message.misesAppid = object.misesAppid ?? ''
    message.misesUid = object.misesUid ?? ''
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = AppFeeGrant.fromPartial(object.grant)
    } else {
      message.grant = undefined
    }
    message.revoke = object.revoke ?? false
    return message
  }
}

/** RestTx defines the gRPC rest service. */
export interface RestTx {
  /** create a did for user or app */
  CreateDid(request: RestCreateDidRequest): Promise<RestTxResponse>
  /** update a user info */
  UpdateUserInfo(request: RestUpdateUserInfoRequest): Promise<RestTxResponse>
  /** update a user relation */
  UpdateUserRelation(request: RestUpdateUserRelationRequest): Promise<RestTxResponse>
  /** query a tx result */
  QueryTx(request: RestQueryTxRequest): Promise<RestTxResponse>
  /** update an app info */
  UpdateAppInfo(request: RestUpdateAppInfoRequest): Promise<RestTxResponse>
  /** update the gas fee a app granted for a user */
  UpdateAppFeeGrant(request: RestUpdateAppFeeGrantRequest): Promise<RestTxResponse>
}

export class RestTxClientImpl implements RestTx {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.CreateDid = this.CreateDid.bind(this)
    this.UpdateUserInfo = this.UpdateUserInfo.bind(this)
    this.UpdateUserRelation = this.UpdateUserRelation.bind(this)
    this.QueryTx = this.QueryTx.bind(this)
    this.UpdateAppInfo = this.UpdateAppInfo.bind(this)
    this.UpdateAppFeeGrant = this.UpdateAppFeeGrant.bind(this)
  }
  CreateDid(request: RestCreateDidRequest): Promise<RestTxResponse> {
    const data = RestCreateDidRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'CreateDid', data)
    return promise.then(data => RestTxResponse.decode(new _m0.Reader(data)))
  }

  UpdateUserInfo(request: RestUpdateUserInfoRequest): Promise<RestTxResponse> {
    const data = RestUpdateUserInfoRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateUserInfo', data)
    return promise.then(data => RestTxResponse.decode(new _m0.Reader(data)))
  }

  UpdateUserRelation(request: RestUpdateUserRelationRequest): Promise<RestTxResponse> {
    const data = RestUpdateUserRelationRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateUserRelation', data)
    return promise.then(data => RestTxResponse.decode(new _m0.Reader(data)))
  }

  QueryTx(request: RestQueryTxRequest): Promise<RestTxResponse> {
    const data = RestQueryTxRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'QueryTx', data)
    return promise.then(data => RestTxResponse.decode(new _m0.Reader(data)))
  }

  UpdateAppInfo(request: RestUpdateAppInfoRequest): Promise<RestTxResponse> {
    const data = RestUpdateAppInfoRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateAppInfo', data)
    return promise.then(data => RestTxResponse.decode(new _m0.Reader(data)))
  }

  UpdateAppFeeGrant(request: RestUpdateAppFeeGrantRequest): Promise<RestTxResponse> {
    const data = RestUpdateAppFeeGrantRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateAppFeeGrant', data)
    return promise.then(data => RestTxResponse.decode(new _m0.Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000)
  const nanos = (date.getTime() % 1_000) * 1_000_000
  return { seconds, nanos }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000
  millis += t.nanos / 1_000_000
  return new Date(millis)
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o
  } else if (typeof o === 'string') {
    return new Date(o)
  } else {
    return fromTimestamp(Timestamp.fromJSON(o))
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number)
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
