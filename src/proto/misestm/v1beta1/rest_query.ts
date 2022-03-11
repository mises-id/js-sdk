/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'
import { DidRegistry } from '../../misestm/v1beta1/DidRegistry'
import { PublicUserInfo, PrivateUserInfo } from '../../misestm/v1beta1/UserInfo'
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination'
import { PublicAppInfo } from '../../misestm/v1beta1/AppInfo'
import { AppFeeGrant } from '../../misestm/v1beta1/rest_tx'

export const protobufPackage = 'misesid.misestm.v1beta1'

export interface RestQueryDidRequest {
  misesId: string
}

export interface RestQueryDidResponse {
  didRegistry?: DidRegistry
}

export interface RestQueryUserRequest {
  misesUid: string
}

export interface RestQueryUserResponse {
  pubInfo?: PublicUserInfo
  priInfo?: PrivateUserInfo
  version: Long
}

export interface RestQueryUserRelationRequest {
  misesUid: string
  filter: string
  pagination?: PageRequest
}

export interface MisesID {
  misesId: string
  relType: string
}

export interface RestQueryUserRelationResponse {
  misesList: MisesID[]
  pagination?: PageResponse
}

export interface RestQueryAppRequest {
  misesAppid: string
}

export interface RestQueryAppResponse {
  pubInfo?: PublicAppInfo
  version: Long
}

export interface RestQueryAppFeeGrantRequest {
  misesAppid: string
  misesUid: string
}

export interface RestQueryAppFeeGrantResponse {
  grant?: AppFeeGrant
}

const baseRestQueryDidRequest: object = { misesId: '' }

export const RestQueryDidRequest = {
  encode(message: RestQueryDidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.misesId !== '') {
      writer.uint32(10).string(message.misesId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestQueryDidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRestQueryDidRequest } as RestQueryDidRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryDidRequest {
    const message = { ...baseRestQueryDidRequest } as RestQueryDidRequest
    if (object.misesId !== undefined && object.misesId !== null) {
      message.misesId = String(object.misesId)
    } else {
      message.misesId = ''
    }
    return message
  },

  toJSON(message: RestQueryDidRequest): unknown {
    const obj: any = {}
    message.misesId !== undefined && (obj.misesId = message.misesId)
    return obj
  },

  fromPartial(object: DeepPartial<RestQueryDidRequest>): RestQueryDidRequest {
    const message = { ...baseRestQueryDidRequest } as RestQueryDidRequest
    message.misesId = object.misesId ?? ''
    return message
  }
}

const baseRestQueryDidResponse: object = {}

export const RestQueryDidResponse = {
  encode(message: RestQueryDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didRegistry !== undefined) {
      DidRegistry.encode(message.didRegistry, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestQueryDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRestQueryDidResponse } as RestQueryDidResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.didRegistry = DidRegistry.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryDidResponse {
    const message = { ...baseRestQueryDidResponse } as RestQueryDidResponse
    if (object.didRegistry !== undefined && object.didRegistry !== null) {
      message.didRegistry = DidRegistry.fromJSON(object.didRegistry)
    } else {
      message.didRegistry = undefined
    }
    return message
  },

  toJSON(message: RestQueryDidResponse): unknown {
    const obj: any = {}
    message.didRegistry !== undefined &&
      (obj.didRegistry = message.didRegistry ? DidRegistry.toJSON(message.didRegistry) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<RestQueryDidResponse>): RestQueryDidResponse {
    const message = { ...baseRestQueryDidResponse } as RestQueryDidResponse
    if (object.didRegistry !== undefined && object.didRegistry !== null) {
      message.didRegistry = DidRegistry.fromPartial(object.didRegistry)
    } else {
      message.didRegistry = undefined
    }
    return message
  }
}

const baseRestQueryUserRequest: object = { misesUid: '' }

export const RestQueryUserRequest = {
  encode(message: RestQueryUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.misesUid !== '') {
      writer.uint32(10).string(message.misesUid)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestQueryUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRestQueryUserRequest } as RestQueryUserRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesUid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryUserRequest {
    const message = { ...baseRestQueryUserRequest } as RestQueryUserRequest
    if (object.misesUid !== undefined && object.misesUid !== null) {
      message.misesUid = String(object.misesUid)
    } else {
      message.misesUid = ''
    }
    return message
  },

  toJSON(message: RestQueryUserRequest): unknown {
    const obj: any = {}
    message.misesUid !== undefined && (obj.misesUid = message.misesUid)
    return obj
  },

  fromPartial(object: DeepPartial<RestQueryUserRequest>): RestQueryUserRequest {
    const message = { ...baseRestQueryUserRequest } as RestQueryUserRequest
    message.misesUid = object.misesUid ?? ''
    return message
  }
}

const baseRestQueryUserResponse: object = { version: Long.UZERO }

export const RestQueryUserResponse = {
  encode(message: RestQueryUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubInfo !== undefined) {
      PublicUserInfo.encode(message.pubInfo, writer.uint32(10).fork()).ldelim()
    }
    if (message.priInfo !== undefined) {
      PrivateUserInfo.encode(message.priInfo, writer.uint32(18).fork()).ldelim()
    }
    if (!message.version.isZero()) {
      writer.uint32(24).uint64(message.version)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestQueryUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRestQueryUserResponse } as RestQueryUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pubInfo = PublicUserInfo.decode(reader, reader.uint32())
          break
        case 2:
          message.priInfo = PrivateUserInfo.decode(reader, reader.uint32())
          break
        case 3:
          message.version = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryUserResponse {
    const message = { ...baseRestQueryUserResponse } as RestQueryUserResponse
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
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version)
    } else {
      message.version = Long.UZERO
    }
    return message
  },

  toJSON(message: RestQueryUserResponse): unknown {
    const obj: any = {}
    message.pubInfo !== undefined &&
      (obj.pubInfo = message.pubInfo ? PublicUserInfo.toJSON(message.pubInfo) : undefined)
    message.priInfo !== undefined &&
      (obj.priInfo = message.priInfo ? PrivateUserInfo.toJSON(message.priInfo) : undefined)
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString())
    return obj
  },

  fromPartial(object: DeepPartial<RestQueryUserResponse>): RestQueryUserResponse {
    const message = { ...baseRestQueryUserResponse } as RestQueryUserResponse
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
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version as Long
    } else {
      message.version = Long.UZERO
    }
    return message
  }
}

const baseRestQueryUserRelationRequest: object = { misesUid: '', filter: '' }

export const RestQueryUserRelationRequest = {
  encode(
    message: RestQueryUserRelationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.misesUid !== '') {
      writer.uint32(10).string(message.misesUid)
    }
    if (message.filter !== '') {
      writer.uint32(18).string(message.filter)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestQueryUserRelationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseRestQueryUserRelationRequest
    } as RestQueryUserRelationRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesUid = reader.string()
          break
        case 2:
          message.filter = reader.string()
          break
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryUserRelationRequest {
    const message = {
      ...baseRestQueryUserRelationRequest
    } as RestQueryUserRelationRequest
    if (object.misesUid !== undefined && object.misesUid !== null) {
      message.misesUid = String(object.misesUid)
    } else {
      message.misesUid = ''
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = String(object.filter)
    } else {
      message.filter = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: RestQueryUserRelationRequest): unknown {
    const obj: any = {}
    message.misesUid !== undefined && (obj.misesUid = message.misesUid)
    message.filter !== undefined && (obj.filter = message.filter)
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<RestQueryUserRelationRequest>): RestQueryUserRelationRequest {
    const message = {
      ...baseRestQueryUserRelationRequest
    } as RestQueryUserRelationRequest
    message.misesUid = object.misesUid ?? ''
    message.filter = object.filter ?? ''
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseMisesID: object = { misesId: '', relType: '' }

export const MisesID = {
  encode(message: MisesID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.misesId !== '') {
      writer.uint32(10).string(message.misesId)
    }
    if (message.relType !== '') {
      writer.uint32(18).string(message.relType)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MisesID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMisesID } as MisesID
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesId = reader.string()
          break
        case 2:
          message.relType = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MisesID {
    const message = { ...baseMisesID } as MisesID
    if (object.misesId !== undefined && object.misesId !== null) {
      message.misesId = String(object.misesId)
    } else {
      message.misesId = ''
    }
    if (object.relType !== undefined && object.relType !== null) {
      message.relType = String(object.relType)
    } else {
      message.relType = ''
    }
    return message
  },

  toJSON(message: MisesID): unknown {
    const obj: any = {}
    message.misesId !== undefined && (obj.misesId = message.misesId)
    message.relType !== undefined && (obj.relType = message.relType)
    return obj
  },

  fromPartial(object: DeepPartial<MisesID>): MisesID {
    const message = { ...baseMisesID } as MisesID
    message.misesId = object.misesId ?? ''
    message.relType = object.relType ?? ''
    return message
  }
}

const baseRestQueryUserRelationResponse: object = {}

export const RestQueryUserRelationResponse = {
  encode(
    message: RestQueryUserRelationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.misesList) {
      MisesID.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestQueryUserRelationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseRestQueryUserRelationResponse
    } as RestQueryUserRelationResponse
    message.misesList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesList.push(MisesID.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryUserRelationResponse {
    const message = {
      ...baseRestQueryUserRelationResponse
    } as RestQueryUserRelationResponse
    message.misesList = []
    if (object.misesList !== undefined && object.misesList !== null) {
      for (const e of object.misesList) {
        message.misesList.push(MisesID.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: RestQueryUserRelationResponse): unknown {
    const obj: any = {}
    if (message.misesList) {
      obj.misesList = message.misesList.map(e => (e ? MisesID.toJSON(e) : undefined))
    } else {
      obj.misesList = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<RestQueryUserRelationResponse>): RestQueryUserRelationResponse {
    const message = {
      ...baseRestQueryUserRelationResponse
    } as RestQueryUserRelationResponse
    message.misesList = []
    if (object.misesList !== undefined && object.misesList !== null) {
      for (const e of object.misesList) {
        message.misesList.push(MisesID.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseRestQueryAppRequest: object = { misesAppid: '' }

export const RestQueryAppRequest = {
  encode(message: RestQueryAppRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.misesAppid !== '') {
      writer.uint32(10).string(message.misesAppid)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestQueryAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRestQueryAppRequest } as RestQueryAppRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesAppid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryAppRequest {
    const message = { ...baseRestQueryAppRequest } as RestQueryAppRequest
    if (object.misesAppid !== undefined && object.misesAppid !== null) {
      message.misesAppid = String(object.misesAppid)
    } else {
      message.misesAppid = ''
    }
    return message
  },

  toJSON(message: RestQueryAppRequest): unknown {
    const obj: any = {}
    message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid)
    return obj
  },

  fromPartial(object: DeepPartial<RestQueryAppRequest>): RestQueryAppRequest {
    const message = { ...baseRestQueryAppRequest } as RestQueryAppRequest
    message.misesAppid = object.misesAppid ?? ''
    return message
  }
}

const baseRestQueryAppResponse: object = { version: Long.UZERO }

export const RestQueryAppResponse = {
  encode(message: RestQueryAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubInfo !== undefined) {
      PublicAppInfo.encode(message.pubInfo, writer.uint32(10).fork()).ldelim()
    }
    if (!message.version.isZero()) {
      writer.uint32(16).uint64(message.version)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestQueryAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRestQueryAppResponse } as RestQueryAppResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pubInfo = PublicAppInfo.decode(reader, reader.uint32())
          break
        case 2:
          message.version = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryAppResponse {
    const message = { ...baseRestQueryAppResponse } as RestQueryAppResponse
    if (object.pubInfo !== undefined && object.pubInfo !== null) {
      message.pubInfo = PublicAppInfo.fromJSON(object.pubInfo)
    } else {
      message.pubInfo = undefined
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version)
    } else {
      message.version = Long.UZERO
    }
    return message
  },

  toJSON(message: RestQueryAppResponse): unknown {
    const obj: any = {}
    message.pubInfo !== undefined &&
      (obj.pubInfo = message.pubInfo ? PublicAppInfo.toJSON(message.pubInfo) : undefined)
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString())
    return obj
  },

  fromPartial(object: DeepPartial<RestQueryAppResponse>): RestQueryAppResponse {
    const message = { ...baseRestQueryAppResponse } as RestQueryAppResponse
    if (object.pubInfo !== undefined && object.pubInfo !== null) {
      message.pubInfo = PublicAppInfo.fromPartial(object.pubInfo)
    } else {
      message.pubInfo = undefined
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version as Long
    } else {
      message.version = Long.UZERO
    }
    return message
  }
}

const baseRestQueryAppFeeGrantRequest: object = { misesAppid: '', misesUid: '' }

export const RestQueryAppFeeGrantRequest = {
  encode(
    message: RestQueryAppFeeGrantRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.misesAppid !== '') {
      writer.uint32(10).string(message.misesAppid)
    }
    if (message.misesUid !== '') {
      writer.uint32(18).string(message.misesUid)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestQueryAppFeeGrantRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseRestQueryAppFeeGrantRequest
    } as RestQueryAppFeeGrantRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.misesAppid = reader.string()
          break
        case 2:
          message.misesUid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryAppFeeGrantRequest {
    const message = {
      ...baseRestQueryAppFeeGrantRequest
    } as RestQueryAppFeeGrantRequest
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
    return message
  },

  toJSON(message: RestQueryAppFeeGrantRequest): unknown {
    const obj: any = {}
    message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid)
    message.misesUid !== undefined && (obj.misesUid = message.misesUid)
    return obj
  },

  fromPartial(object: DeepPartial<RestQueryAppFeeGrantRequest>): RestQueryAppFeeGrantRequest {
    const message = {
      ...baseRestQueryAppFeeGrantRequest
    } as RestQueryAppFeeGrantRequest
    message.misesAppid = object.misesAppid ?? ''
    message.misesUid = object.misesUid ?? ''
    return message
  }
}

const baseRestQueryAppFeeGrantResponse: object = {}

export const RestQueryAppFeeGrantResponse = {
  encode(
    message: RestQueryAppFeeGrantResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.grant !== undefined) {
      AppFeeGrant.encode(message.grant, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestQueryAppFeeGrantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseRestQueryAppFeeGrantResponse
    } as RestQueryAppFeeGrantResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.grant = AppFeeGrant.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryAppFeeGrantResponse {
    const message = {
      ...baseRestQueryAppFeeGrantResponse
    } as RestQueryAppFeeGrantResponse
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = AppFeeGrant.fromJSON(object.grant)
    } else {
      message.grant = undefined
    }
    return message
  },

  toJSON(message: RestQueryAppFeeGrantResponse): unknown {
    const obj: any = {}
    message.grant !== undefined &&
      (obj.grant = message.grant ? AppFeeGrant.toJSON(message.grant) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<RestQueryAppFeeGrantResponse>): RestQueryAppFeeGrantResponse {
    const message = {
      ...baseRestQueryAppFeeGrantResponse
    } as RestQueryAppFeeGrantResponse
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = AppFeeGrant.fromPartial(object.grant)
    } else {
      message.grant = undefined
    }
    return message
  }
}

/** Rest defines the gRPC rest service. */
export interface RestQuery {
  /** query a did */
  QueryDid(request: RestQueryDidRequest): Promise<RestQueryDidResponse>
  /** query a user info */
  QueryUser(request: RestQueryUserRequest): Promise<RestQueryUserResponse>
  /** query user relations */
  QueryUserRelation(request: RestQueryUserRelationRequest): Promise<RestQueryUserRelationResponse>
  /** query app info */
  QueryApp(request: RestQueryAppRequest): Promise<RestQueryAppResponse>
  /** query app info */
  QueryAppFeeGrant(request: RestQueryAppFeeGrantRequest): Promise<RestQueryAppFeeGrantResponse>
}

export class RestQueryClientImpl implements RestQuery {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.QueryDid = this.QueryDid.bind(this)
    this.QueryUser = this.QueryUser.bind(this)
    this.QueryUserRelation = this.QueryUserRelation.bind(this)
    this.QueryApp = this.QueryApp.bind(this)
    this.QueryAppFeeGrant = this.QueryAppFeeGrant.bind(this)
  }
  QueryDid(request: RestQueryDidRequest): Promise<RestQueryDidResponse> {
    const data = RestQueryDidRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryDid', data)
    return promise.then(data => RestQueryDidResponse.decode(new _m0.Reader(data)))
  }

  QueryUser(request: RestQueryUserRequest): Promise<RestQueryUserResponse> {
    const data = RestQueryUserRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryUser', data)
    return promise.then(data => RestQueryUserResponse.decode(new _m0.Reader(data)))
  }

  QueryUserRelation(request: RestQueryUserRelationRequest): Promise<RestQueryUserRelationResponse> {
    const data = RestQueryUserRelationRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryUserRelation', data)
    return promise.then(data => RestQueryUserRelationResponse.decode(new _m0.Reader(data)))
  }

  QueryApp(request: RestQueryAppRequest): Promise<RestQueryAppResponse> {
    const data = RestQueryAppRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryApp', data)
    return promise.then(data => RestQueryAppResponse.decode(new _m0.Reader(data)))
  }

  QueryAppFeeGrant(request: RestQueryAppFeeGrantRequest): Promise<RestQueryAppFeeGrantResponse> {
    const data = RestQueryAppFeeGrantRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryAppFeeGrant', data)
    return promise.then(data => RestQueryAppFeeGrantResponse.decode(new _m0.Reader(data)))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
