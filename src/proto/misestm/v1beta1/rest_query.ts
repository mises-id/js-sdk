/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'
import { DidRegistry } from '../../misestm/v1beta1/DidRegistry'
import {
  PublicUserInfo,
  PrivateUserInfo,
  PublicAppInfo,
  AppFeeGrant
} from '../../misestm/v1beta1/rest_tx'
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination'

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
}

export interface RestQueryUserRelationRequest {
  misesUid: string
  filter: string
  pagination?: PageRequest
}

export interface MisesID {
  misesId: string
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
  encode(message: RestQueryDidRequest, writer: Writer = Writer.create()): Writer {
    if (message.misesId !== '') {
      writer.uint32(10).string(message.misesId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestQueryDidRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.misesId =
      object.misesId !== undefined && object.misesId !== null ? String(object.misesId) : ''
    return message
  },

  toJSON(message: RestQueryDidRequest): unknown {
    const obj: any = {}
    message.misesId !== undefined && (obj.misesId = message.misesId)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestQueryDidRequest>, I>>(
    object: I
  ): RestQueryDidRequest {
    const message = { ...baseRestQueryDidRequest } as RestQueryDidRequest
    message.misesId = object.misesId ?? ''
    return message
  }
}

const baseRestQueryDidResponse: object = {}

export const RestQueryDidResponse = {
  encode(message: RestQueryDidResponse, writer: Writer = Writer.create()): Writer {
    if (message.didRegistry !== undefined) {
      DidRegistry.encode(message.didRegistry, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestQueryDidResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.didRegistry =
      object.didRegistry !== undefined && object.didRegistry !== null
        ? DidRegistry.fromJSON(object.didRegistry)
        : undefined
    return message
  },

  toJSON(message: RestQueryDidResponse): unknown {
    const obj: any = {}
    message.didRegistry !== undefined &&
      (obj.didRegistry = message.didRegistry ? DidRegistry.toJSON(message.didRegistry) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestQueryDidResponse>, I>>(
    object: I
  ): RestQueryDidResponse {
    const message = { ...baseRestQueryDidResponse } as RestQueryDidResponse
    message.didRegistry =
      object.didRegistry !== undefined && object.didRegistry !== null
        ? DidRegistry.fromPartial(object.didRegistry)
        : undefined
    return message
  }
}

const baseRestQueryUserRequest: object = { misesUid: '' }

export const RestQueryUserRequest = {
  encode(message: RestQueryUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.misesUid !== '') {
      writer.uint32(10).string(message.misesUid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestQueryUserRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.misesUid =
      object.misesUid !== undefined && object.misesUid !== null ? String(object.misesUid) : ''
    return message
  },

  toJSON(message: RestQueryUserRequest): unknown {
    const obj: any = {}
    message.misesUid !== undefined && (obj.misesUid = message.misesUid)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestQueryUserRequest>, I>>(
    object: I
  ): RestQueryUserRequest {
    const message = { ...baseRestQueryUserRequest } as RestQueryUserRequest
    message.misesUid = object.misesUid ?? ''
    return message
  }
}

const baseRestQueryUserResponse: object = {}

export const RestQueryUserResponse = {
  encode(message: RestQueryUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.pubInfo !== undefined) {
      PublicUserInfo.encode(message.pubInfo, writer.uint32(10).fork()).ldelim()
    }
    if (message.priInfo !== undefined) {
      PrivateUserInfo.encode(message.priInfo, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestQueryUserResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
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
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RestQueryUserResponse {
    const message = { ...baseRestQueryUserResponse } as RestQueryUserResponse
    message.pubInfo =
      object.pubInfo !== undefined && object.pubInfo !== null
        ? PublicUserInfo.fromJSON(object.pubInfo)
        : undefined
    message.priInfo =
      object.priInfo !== undefined && object.priInfo !== null
        ? PrivateUserInfo.fromJSON(object.priInfo)
        : undefined
    return message
  },

  toJSON(message: RestQueryUserResponse): unknown {
    const obj: any = {}
    message.pubInfo !== undefined &&
      (obj.pubInfo = message.pubInfo ? PublicUserInfo.toJSON(message.pubInfo) : undefined)
    message.priInfo !== undefined &&
      (obj.priInfo = message.priInfo ? PrivateUserInfo.toJSON(message.priInfo) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestQueryUserResponse>, I>>(
    object: I
  ): RestQueryUserResponse {
    const message = { ...baseRestQueryUserResponse } as RestQueryUserResponse
    message.pubInfo =
      object.pubInfo !== undefined && object.pubInfo !== null
        ? PublicUserInfo.fromPartial(object.pubInfo)
        : undefined
    message.priInfo =
      object.priInfo !== undefined && object.priInfo !== null
        ? PrivateUserInfo.fromPartial(object.priInfo)
        : undefined
    return message
  }
}

const baseRestQueryUserRelationRequest: object = { misesUid: '', filter: '' }

export const RestQueryUserRelationRequest = {
  encode(message: RestQueryUserRelationRequest, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): RestQueryUserRelationRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.misesUid =
      object.misesUid !== undefined && object.misesUid !== null ? String(object.misesUid) : ''
    message.filter =
      object.filter !== undefined && object.filter !== null ? String(object.filter) : ''
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined
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

  fromPartial<I extends Exact<DeepPartial<RestQueryUserRelationRequest>, I>>(
    object: I
  ): RestQueryUserRelationRequest {
    const message = {
      ...baseRestQueryUserRelationRequest
    } as RestQueryUserRelationRequest
    message.misesUid = object.misesUid ?? ''
    message.filter = object.filter ?? ''
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined
    return message
  }
}

const baseMisesID: object = { misesId: '' }

export const MisesID = {
  encode(message: MisesID, writer: Writer = Writer.create()): Writer {
    if (message.misesId !== '') {
      writer.uint32(10).string(message.misesId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MisesID {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMisesID } as MisesID
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

  fromJSON(object: any): MisesID {
    const message = { ...baseMisesID } as MisesID
    message.misesId =
      object.misesId !== undefined && object.misesId !== null ? String(object.misesId) : ''
    return message
  },

  toJSON(message: MisesID): unknown {
    const obj: any = {}
    message.misesId !== undefined && (obj.misesId = message.misesId)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MisesID>, I>>(object: I): MisesID {
    const message = { ...baseMisesID } as MisesID
    message.misesId = object.misesId ?? ''
    return message
  }
}

const baseRestQueryUserRelationResponse: object = {}

export const RestQueryUserRelationResponse = {
  encode(message: RestQueryUserRelationResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.misesList) {
      MisesID.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestQueryUserRelationResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.misesList = (object.misesList ?? []).map((e: any) => MisesID.fromJSON(e))
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined
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

  fromPartial<I extends Exact<DeepPartial<RestQueryUserRelationResponse>, I>>(
    object: I
  ): RestQueryUserRelationResponse {
    const message = {
      ...baseRestQueryUserRelationResponse
    } as RestQueryUserRelationResponse
    message.misesList = object.misesList?.map(e => MisesID.fromPartial(e)) || []
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined
    return message
  }
}

const baseRestQueryAppRequest: object = { misesAppid: '' }

export const RestQueryAppRequest = {
  encode(message: RestQueryAppRequest, writer: Writer = Writer.create()): Writer {
    if (message.misesAppid !== '') {
      writer.uint32(10).string(message.misesAppid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestQueryAppRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.misesAppid =
      object.misesAppid !== undefined && object.misesAppid !== null ? String(object.misesAppid) : ''
    return message
  },

  toJSON(message: RestQueryAppRequest): unknown {
    const obj: any = {}
    message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestQueryAppRequest>, I>>(
    object: I
  ): RestQueryAppRequest {
    const message = { ...baseRestQueryAppRequest } as RestQueryAppRequest
    message.misesAppid = object.misesAppid ?? ''
    return message
  }
}

const baseRestQueryAppResponse: object = {}

export const RestQueryAppResponse = {
  encode(message: RestQueryAppResponse, writer: Writer = Writer.create()): Writer {
    if (message.pubInfo !== undefined) {
      PublicAppInfo.encode(message.pubInfo, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestQueryAppResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRestQueryAppResponse } as RestQueryAppResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pubInfo = PublicAppInfo.decode(reader, reader.uint32())
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
    message.pubInfo =
      object.pubInfo !== undefined && object.pubInfo !== null
        ? PublicAppInfo.fromJSON(object.pubInfo)
        : undefined
    return message
  },

  toJSON(message: RestQueryAppResponse): unknown {
    const obj: any = {}
    message.pubInfo !== undefined &&
      (obj.pubInfo = message.pubInfo ? PublicAppInfo.toJSON(message.pubInfo) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestQueryAppResponse>, I>>(
    object: I
  ): RestQueryAppResponse {
    const message = { ...baseRestQueryAppResponse } as RestQueryAppResponse
    message.pubInfo =
      object.pubInfo !== undefined && object.pubInfo !== null
        ? PublicAppInfo.fromPartial(object.pubInfo)
        : undefined
    return message
  }
}

const baseRestQueryAppFeeGrantRequest: object = { misesAppid: '', misesUid: '' }

export const RestQueryAppFeeGrantRequest = {
  encode(message: RestQueryAppFeeGrantRequest, writer: Writer = Writer.create()): Writer {
    if (message.misesAppid !== '') {
      writer.uint32(10).string(message.misesAppid)
    }
    if (message.misesUid !== '') {
      writer.uint32(18).string(message.misesUid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestQueryAppFeeGrantRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.misesAppid =
      object.misesAppid !== undefined && object.misesAppid !== null ? String(object.misesAppid) : ''
    message.misesUid =
      object.misesUid !== undefined && object.misesUid !== null ? String(object.misesUid) : ''
    return message
  },

  toJSON(message: RestQueryAppFeeGrantRequest): unknown {
    const obj: any = {}
    message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid)
    message.misesUid !== undefined && (obj.misesUid = message.misesUid)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestQueryAppFeeGrantRequest>, I>>(
    object: I
  ): RestQueryAppFeeGrantRequest {
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
  encode(message: RestQueryAppFeeGrantResponse, writer: Writer = Writer.create()): Writer {
    if (message.grant !== undefined) {
      AppFeeGrant.encode(message.grant, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestQueryAppFeeGrantResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.grant =
      object.grant !== undefined && object.grant !== null
        ? AppFeeGrant.fromJSON(object.grant)
        : undefined
    return message
  },

  toJSON(message: RestQueryAppFeeGrantResponse): unknown {
    const obj: any = {}
    message.grant !== undefined &&
      (obj.grant = message.grant ? AppFeeGrant.toJSON(message.grant) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestQueryAppFeeGrantResponse>, I>>(
    object: I
  ): RestQueryAppFeeGrantResponse {
    const message = {
      ...baseRestQueryAppFeeGrantResponse
    } as RestQueryAppFeeGrantResponse
    message.grant =
      object.grant !== undefined && object.grant !== null
        ? AppFeeGrant.fromPartial(object.grant)
        : undefined
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
    return promise.then(data => RestQueryDidResponse.decode(new Reader(data)))
  }

  QueryUser(request: RestQueryUserRequest): Promise<RestQueryUserResponse> {
    const data = RestQueryUserRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryUser', data)
    return promise.then(data => RestQueryUserResponse.decode(new Reader(data)))
  }

  QueryUserRelation(request: RestQueryUserRelationRequest): Promise<RestQueryUserRelationResponse> {
    const data = RestQueryUserRelationRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryUserRelation', data)
    return promise.then(data => RestQueryUserRelationResponse.decode(new Reader(data)))
  }

  QueryApp(request: RestQueryAppRequest): Promise<RestQueryAppResponse> {
    const data = RestQueryAppRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryApp', data)
    return promise.then(data => RestQueryAppResponse.decode(new Reader(data)))
  }

  QueryAppFeeGrant(request: RestQueryAppFeeGrantRequest): Promise<RestQueryAppFeeGrantResponse> {
    const data = RestQueryAppFeeGrantRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryAppFeeGrant', data)
    return promise.then(data => RestQueryAppFeeGrantResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
