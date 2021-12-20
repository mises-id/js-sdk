/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'
import { UserInfo } from '../../misestm/v1beta1/UserInfo'
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination'
import { UserRelation } from '../../misestm/v1beta1/UserRelation'
import { AppInfo } from '../../misestm/v1beta1/AppInfo'
import { DidRegistry } from '../../misestm/v1beta1/DidRegistry'

export const protobufPackage = 'misesid.misestm.v1beta1'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetUserInfoRequest {
  id: Long
}

export interface QueryGetUserInfoResponse {
  UserInfo?: UserInfo
}

export interface QueryAllUserInfoRequest {
  pagination?: PageRequest
}

export interface QueryAllUserInfoResponse {
  UserInfo: UserInfo[]
  pagination?: PageResponse
}

export interface QueryGetUserRelationRequest {
  id: Long
}

export interface QueryGetUserRelationResponse {
  UserRelation?: UserRelation
}

export interface QueryAllUserRelationRequest {
  pagination?: PageRequest
}

export interface QueryAllUserRelationResponse {
  UserRelation: UserRelation[]
  pagination?: PageResponse
}

export interface QueryGetAppInfoRequest {
  id: Long
}

export interface QueryGetAppInfoResponse {
  AppInfo?: AppInfo
}

export interface QueryAllAppInfoRequest {
  pagination?: PageRequest
}

export interface QueryAllAppInfoResponse {
  AppInfo: AppInfo[]
  pagination?: PageResponse
}

export interface QueryGetDidRegistryRequest {
  id: Long
}

export interface QueryGetDidRegistryResponse {
  DidRegistry?: DidRegistry
}

export interface QueryAllDidRegistryRequest {
  pagination?: PageRequest
}

export interface QueryAllDidRegistryResponse {
  DidRegistry: DidRegistry[]
  pagination?: PageResponse
}

const baseQueryGetUserInfoRequest: object = { id: Long.UZERO }

export const QueryGetUserInfoRequest = {
  encode(message: QueryGetUserInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetUserInfoRequest
    } as QueryGetUserInfoRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetUserInfoRequest {
    const message = {
      ...baseQueryGetUserInfoRequest
    } as QueryGetUserInfoRequest
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: QueryGetUserInfoRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUserInfoRequest>, I>>(
    object: I
  ): QueryGetUserInfoRequest {
    const message = {
      ...baseQueryGetUserInfoRequest
    } as QueryGetUserInfoRequest
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseQueryGetUserInfoResponse: object = {}

export const QueryGetUserInfoResponse = {
  encode(message: QueryGetUserInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.UserInfo !== undefined) {
      UserInfo.encode(message.UserInfo, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetUserInfoResponse
    } as QueryGetUserInfoResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.UserInfo = UserInfo.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetUserInfoResponse {
    const message = {
      ...baseQueryGetUserInfoResponse
    } as QueryGetUserInfoResponse
    message.UserInfo =
      object.UserInfo !== undefined && object.UserInfo !== null
        ? UserInfo.fromJSON(object.UserInfo)
        : undefined
    return message
  },

  toJSON(message: QueryGetUserInfoResponse): unknown {
    const obj: any = {}
    message.UserInfo !== undefined &&
      (obj.UserInfo = message.UserInfo ? UserInfo.toJSON(message.UserInfo) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUserInfoResponse>, I>>(
    object: I
  ): QueryGetUserInfoResponse {
    const message = {
      ...baseQueryGetUserInfoResponse
    } as QueryGetUserInfoResponse
    message.UserInfo =
      object.UserInfo !== undefined && object.UserInfo !== null
        ? UserInfo.fromPartial(object.UserInfo)
        : undefined
    return message
  }
}

const baseQueryAllUserInfoRequest: object = {}

export const QueryAllUserInfoRequest = {
  encode(message: QueryAllUserInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllUserInfoRequest
    } as QueryAllUserInfoRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllUserInfoRequest {
    const message = {
      ...baseQueryAllUserInfoRequest
    } as QueryAllUserInfoRequest
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined
    return message
  },

  toJSON(message: QueryAllUserInfoRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserInfoRequest>, I>>(
    object: I
  ): QueryAllUserInfoRequest {
    const message = {
      ...baseQueryAllUserInfoRequest
    } as QueryAllUserInfoRequest
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined
    return message
  }
}

const baseQueryAllUserInfoResponse: object = {}

export const QueryAllUserInfoResponse = {
  encode(message: QueryAllUserInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.UserInfo) {
      UserInfo.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllUserInfoResponse
    } as QueryAllUserInfoResponse
    message.UserInfo = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.UserInfo.push(UserInfo.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllUserInfoResponse {
    const message = {
      ...baseQueryAllUserInfoResponse
    } as QueryAllUserInfoResponse
    message.UserInfo = (object.UserInfo ?? []).map((e: any) => UserInfo.fromJSON(e))
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined
    return message
  },

  toJSON(message: QueryAllUserInfoResponse): unknown {
    const obj: any = {}
    if (message.UserInfo) {
      obj.UserInfo = message.UserInfo.map(e => (e ? UserInfo.toJSON(e) : undefined))
    } else {
      obj.UserInfo = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserInfoResponse>, I>>(
    object: I
  ): QueryAllUserInfoResponse {
    const message = {
      ...baseQueryAllUserInfoResponse
    } as QueryAllUserInfoResponse
    message.UserInfo = object.UserInfo?.map(e => UserInfo.fromPartial(e)) || []
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined
    return message
  }
}

const baseQueryGetUserRelationRequest: object = { id: Long.UZERO }

export const QueryGetUserRelationRequest = {
  encode(
    message: QueryGetUserRelationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRelationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetUserRelationRequest
    } as QueryGetUserRelationRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetUserRelationRequest {
    const message = {
      ...baseQueryGetUserRelationRequest
    } as QueryGetUserRelationRequest
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: QueryGetUserRelationRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUserRelationRequest>, I>>(
    object: I
  ): QueryGetUserRelationRequest {
    const message = {
      ...baseQueryGetUserRelationRequest
    } as QueryGetUserRelationRequest
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseQueryGetUserRelationResponse: object = {}

export const QueryGetUserRelationResponse = {
  encode(
    message: QueryGetUserRelationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserRelation !== undefined) {
      UserRelation.encode(message.UserRelation, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRelationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetUserRelationResponse
    } as QueryGetUserRelationResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.UserRelation = UserRelation.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetUserRelationResponse {
    const message = {
      ...baseQueryGetUserRelationResponse
    } as QueryGetUserRelationResponse
    message.UserRelation =
      object.UserRelation !== undefined && object.UserRelation !== null
        ? UserRelation.fromJSON(object.UserRelation)
        : undefined
    return message
  },

  toJSON(message: QueryGetUserRelationResponse): unknown {
    const obj: any = {}
    message.UserRelation !== undefined &&
      (obj.UserRelation = message.UserRelation
        ? UserRelation.toJSON(message.UserRelation)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUserRelationResponse>, I>>(
    object: I
  ): QueryGetUserRelationResponse {
    const message = {
      ...baseQueryGetUserRelationResponse
    } as QueryGetUserRelationResponse
    message.UserRelation =
      object.UserRelation !== undefined && object.UserRelation !== null
        ? UserRelation.fromPartial(object.UserRelation)
        : undefined
    return message
  }
}

const baseQueryAllUserRelationRequest: object = {}

export const QueryAllUserRelationRequest = {
  encode(
    message: QueryAllUserRelationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRelationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllUserRelationRequest
    } as QueryAllUserRelationRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllUserRelationRequest {
    const message = {
      ...baseQueryAllUserRelationRequest
    } as QueryAllUserRelationRequest
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined
    return message
  },

  toJSON(message: QueryAllUserRelationRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserRelationRequest>, I>>(
    object: I
  ): QueryAllUserRelationRequest {
    const message = {
      ...baseQueryAllUserRelationRequest
    } as QueryAllUserRelationRequest
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined
    return message
  }
}

const baseQueryAllUserRelationResponse: object = {}

export const QueryAllUserRelationResponse = {
  encode(
    message: QueryAllUserRelationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.UserRelation) {
      UserRelation.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRelationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllUserRelationResponse
    } as QueryAllUserRelationResponse
    message.UserRelation = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.UserRelation.push(UserRelation.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllUserRelationResponse {
    const message = {
      ...baseQueryAllUserRelationResponse
    } as QueryAllUserRelationResponse
    message.UserRelation = (object.UserRelation ?? []).map((e: any) => UserRelation.fromJSON(e))
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined
    return message
  },

  toJSON(message: QueryAllUserRelationResponse): unknown {
    const obj: any = {}
    if (message.UserRelation) {
      obj.UserRelation = message.UserRelation.map(e => (e ? UserRelation.toJSON(e) : undefined))
    } else {
      obj.UserRelation = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserRelationResponse>, I>>(
    object: I
  ): QueryAllUserRelationResponse {
    const message = {
      ...baseQueryAllUserRelationResponse
    } as QueryAllUserRelationResponse
    message.UserRelation = object.UserRelation?.map(e => UserRelation.fromPartial(e)) || []
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined
    return message
  }
}

const baseQueryGetAppInfoRequest: object = { id: Long.UZERO }

export const QueryGetAppInfoRequest = {
  encode(message: QueryGetAppInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAppInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAppInfoRequest } as QueryGetAppInfoRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetAppInfoRequest {
    const message = { ...baseQueryGetAppInfoRequest } as QueryGetAppInfoRequest
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: QueryGetAppInfoRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAppInfoRequest>, I>>(
    object: I
  ): QueryGetAppInfoRequest {
    const message = { ...baseQueryGetAppInfoRequest } as QueryGetAppInfoRequest
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseQueryGetAppInfoResponse: object = {}

export const QueryGetAppInfoResponse = {
  encode(message: QueryGetAppInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AppInfo !== undefined) {
      AppInfo.encode(message.AppInfo, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAppInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetAppInfoResponse
    } as QueryGetAppInfoResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.AppInfo = AppInfo.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetAppInfoResponse {
    const message = {
      ...baseQueryGetAppInfoResponse
    } as QueryGetAppInfoResponse
    message.AppInfo =
      object.AppInfo !== undefined && object.AppInfo !== null
        ? AppInfo.fromJSON(object.AppInfo)
        : undefined
    return message
  },

  toJSON(message: QueryGetAppInfoResponse): unknown {
    const obj: any = {}
    message.AppInfo !== undefined &&
      (obj.AppInfo = message.AppInfo ? AppInfo.toJSON(message.AppInfo) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAppInfoResponse>, I>>(
    object: I
  ): QueryGetAppInfoResponse {
    const message = {
      ...baseQueryGetAppInfoResponse
    } as QueryGetAppInfoResponse
    message.AppInfo =
      object.AppInfo !== undefined && object.AppInfo !== null
        ? AppInfo.fromPartial(object.AppInfo)
        : undefined
    return message
  }
}

const baseQueryAllAppInfoRequest: object = {}

export const QueryAllAppInfoRequest = {
  encode(message: QueryAllAppInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAppInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllAppInfoRequest } as QueryAllAppInfoRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllAppInfoRequest {
    const message = { ...baseQueryAllAppInfoRequest } as QueryAllAppInfoRequest
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined
    return message
  },

  toJSON(message: QueryAllAppInfoRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAppInfoRequest>, I>>(
    object: I
  ): QueryAllAppInfoRequest {
    const message = { ...baseQueryAllAppInfoRequest } as QueryAllAppInfoRequest
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined
    return message
  }
}

const baseQueryAllAppInfoResponse: object = {}

export const QueryAllAppInfoResponse = {
  encode(message: QueryAllAppInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.AppInfo) {
      AppInfo.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAppInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllAppInfoResponse
    } as QueryAllAppInfoResponse
    message.AppInfo = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.AppInfo.push(AppInfo.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllAppInfoResponse {
    const message = {
      ...baseQueryAllAppInfoResponse
    } as QueryAllAppInfoResponse
    message.AppInfo = (object.AppInfo ?? []).map((e: any) => AppInfo.fromJSON(e))
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined
    return message
  },

  toJSON(message: QueryAllAppInfoResponse): unknown {
    const obj: any = {}
    if (message.AppInfo) {
      obj.AppInfo = message.AppInfo.map(e => (e ? AppInfo.toJSON(e) : undefined))
    } else {
      obj.AppInfo = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAppInfoResponse>, I>>(
    object: I
  ): QueryAllAppInfoResponse {
    const message = {
      ...baseQueryAllAppInfoResponse
    } as QueryAllAppInfoResponse
    message.AppInfo = object.AppInfo?.map(e => AppInfo.fromPartial(e)) || []
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined
    return message
  }
}

const baseQueryGetDidRegistryRequest: object = { id: Long.UZERO }

export const QueryGetDidRegistryRequest = {
  encode(
    message: QueryGetDidRegistryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetDidRegistryRequest
    } as QueryGetDidRegistryRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetDidRegistryRequest {
    const message = {
      ...baseQueryGetDidRegistryRequest
    } as QueryGetDidRegistryRequest
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: QueryGetDidRegistryRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidRegistryRequest>, I>>(
    object: I
  ): QueryGetDidRegistryRequest {
    const message = {
      ...baseQueryGetDidRegistryRequest
    } as QueryGetDidRegistryRequest
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseQueryGetDidRegistryResponse: object = {}

export const QueryGetDidRegistryResponse = {
  encode(
    message: QueryGetDidRegistryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.DidRegistry !== undefined) {
      DidRegistry.encode(message.DidRegistry, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidRegistryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetDidRegistryResponse
    } as QueryGetDidRegistryResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.DidRegistry = DidRegistry.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetDidRegistryResponse {
    const message = {
      ...baseQueryGetDidRegistryResponse
    } as QueryGetDidRegistryResponse
    message.DidRegistry =
      object.DidRegistry !== undefined && object.DidRegistry !== null
        ? DidRegistry.fromJSON(object.DidRegistry)
        : undefined
    return message
  },

  toJSON(message: QueryGetDidRegistryResponse): unknown {
    const obj: any = {}
    message.DidRegistry !== undefined &&
      (obj.DidRegistry = message.DidRegistry ? DidRegistry.toJSON(message.DidRegistry) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidRegistryResponse>, I>>(
    object: I
  ): QueryGetDidRegistryResponse {
    const message = {
      ...baseQueryGetDidRegistryResponse
    } as QueryGetDidRegistryResponse
    message.DidRegistry =
      object.DidRegistry !== undefined && object.DidRegistry !== null
        ? DidRegistry.fromPartial(object.DidRegistry)
        : undefined
    return message
  }
}

const baseQueryAllDidRegistryRequest: object = {}

export const QueryAllDidRegistryRequest = {
  encode(
    message: QueryAllDidRegistryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllDidRegistryRequest
    } as QueryAllDidRegistryRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllDidRegistryRequest {
    const message = {
      ...baseQueryAllDidRegistryRequest
    } as QueryAllDidRegistryRequest
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined
    return message
  },

  toJSON(message: QueryAllDidRegistryRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDidRegistryRequest>, I>>(
    object: I
  ): QueryAllDidRegistryRequest {
    const message = {
      ...baseQueryAllDidRegistryRequest
    } as QueryAllDidRegistryRequest
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined
    return message
  }
}

const baseQueryAllDidRegistryResponse: object = {}

export const QueryAllDidRegistryResponse = {
  encode(
    message: QueryAllDidRegistryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.DidRegistry) {
      DidRegistry.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidRegistryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllDidRegistryResponse
    } as QueryAllDidRegistryResponse
    message.DidRegistry = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.DidRegistry.push(DidRegistry.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllDidRegistryResponse {
    const message = {
      ...baseQueryAllDidRegistryResponse
    } as QueryAllDidRegistryResponse
    message.DidRegistry = (object.DidRegistry ?? []).map((e: any) => DidRegistry.fromJSON(e))
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined
    return message
  },

  toJSON(message: QueryAllDidRegistryResponse): unknown {
    const obj: any = {}
    if (message.DidRegistry) {
      obj.DidRegistry = message.DidRegistry.map(e => (e ? DidRegistry.toJSON(e) : undefined))
    } else {
      obj.DidRegistry = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDidRegistryResponse>, I>>(
    object: I
  ): QueryAllDidRegistryResponse {
    const message = {
      ...baseQueryAllDidRegistryResponse
    } as QueryAllDidRegistryResponse
    message.DidRegistry = object.DidRegistry?.map(e => DidRegistry.fromPartial(e)) || []
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a UserInfo by id. */
  UserInfo(request: QueryGetUserInfoRequest): Promise<QueryGetUserInfoResponse>
  /** Queries a list of UserInfo items. */
  UserInfoAll(request: QueryAllUserInfoRequest): Promise<QueryAllUserInfoResponse>
  /** Queries a UserRelation by id. */
  UserRelation(request: QueryGetUserRelationRequest): Promise<QueryGetUserRelationResponse>
  /** Queries a list of UserRelation items. */
  UserRelationAll(request: QueryAllUserRelationRequest): Promise<QueryAllUserRelationResponse>
  /** Queries a AppInfo by id. */
  AppInfo(request: QueryGetAppInfoRequest): Promise<QueryGetAppInfoResponse>
  /** Queries a list of AppInfo items. */
  AppInfoAll(request: QueryAllAppInfoRequest): Promise<QueryAllAppInfoResponse>
  /** Queries a DidRegistry by id. */
  DidRegistry(request: QueryGetDidRegistryRequest): Promise<QueryGetDidRegistryResponse>
  /** Queries a list of DidRegistry items. */
  DidRegistryAll(request: QueryAllDidRegistryRequest): Promise<QueryAllDidRegistryResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.UserInfo = this.UserInfo.bind(this)
    this.UserInfoAll = this.UserInfoAll.bind(this)
    this.UserRelation = this.UserRelation.bind(this)
    this.UserRelationAll = this.UserRelationAll.bind(this)
    this.AppInfo = this.AppInfo.bind(this)
    this.AppInfoAll = this.AppInfoAll.bind(this)
    this.DidRegistry = this.DidRegistry.bind(this)
    this.DidRegistryAll = this.DidRegistryAll.bind(this)
  }
  UserInfo(request: QueryGetUserInfoRequest): Promise<QueryGetUserInfoResponse> {
    const data = QueryGetUserInfoRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'UserInfo', data)
    return promise.then(data => QueryGetUserInfoResponse.decode(new _m0.Reader(data)))
  }

  UserInfoAll(request: QueryAllUserInfoRequest): Promise<QueryAllUserInfoResponse> {
    const data = QueryAllUserInfoRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'UserInfoAll', data)
    return promise.then(data => QueryAllUserInfoResponse.decode(new _m0.Reader(data)))
  }

  UserRelation(request: QueryGetUserRelationRequest): Promise<QueryGetUserRelationResponse> {
    const data = QueryGetUserRelationRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'UserRelation', data)
    return promise.then(data => QueryGetUserRelationResponse.decode(new _m0.Reader(data)))
  }

  UserRelationAll(request: QueryAllUserRelationRequest): Promise<QueryAllUserRelationResponse> {
    const data = QueryAllUserRelationRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'UserRelationAll', data)
    return promise.then(data => QueryAllUserRelationResponse.decode(new _m0.Reader(data)))
  }

  AppInfo(request: QueryGetAppInfoRequest): Promise<QueryGetAppInfoResponse> {
    const data = QueryGetAppInfoRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'AppInfo', data)
    return promise.then(data => QueryGetAppInfoResponse.decode(new _m0.Reader(data)))
  }

  AppInfoAll(request: QueryAllAppInfoRequest): Promise<QueryAllAppInfoResponse> {
    const data = QueryAllAppInfoRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'AppInfoAll', data)
    return promise.then(data => QueryAllAppInfoResponse.decode(new _m0.Reader(data)))
  }

  DidRegistry(request: QueryGetDidRegistryRequest): Promise<QueryGetDidRegistryResponse> {
    const data = QueryGetDidRegistryRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'DidRegistry', data)
    return promise.then(data => QueryGetDidRegistryResponse.decode(new _m0.Reader(data)))
  }

  DidRegistryAll(request: QueryAllDidRegistryRequest): Promise<QueryAllDidRegistryResponse> {
    const data = QueryAllDidRegistryRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'DidRegistryAll', data)
    return promise.then(data => QueryAllDidRegistryResponse.decode(new _m0.Reader(data)))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
