/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'
import { TxResponse } from '../../cosmos/base/abci/v1beta1/abci'
import { Coin } from '../../cosmos/base/v1beta1/coin'
import { Duration } from '../../google/protobuf/duration'
import { Timestamp } from '../../google/protobuf/timestamp'

export const protobufPackage = 'misesid.misestm.v1beta1'

export interface RestCreateDidRequest {
  misesAppid: string
  misesId: string
  pubKey: string
}

export interface PrivateUserInfo {
  encData: string
  iv: string
}

export interface PublicUserInfo {
  name: string
  gender: string
  avatarUrl: string
  homePageUrl: string
  emails: string[]
  telephones: string[]
  intro: string
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

export interface PublicAppInfo {
  name: string
  domains: string[]
  developer: string
  homeUrl: string
  iconUrl: string
  version: Long
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
  encode(message: RestCreateDidRequest, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): RestCreateDidRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.misesAppid =
      object.misesAppid !== undefined && object.misesAppid !== null ? String(object.misesAppid) : ''
    message.misesId =
      object.misesId !== undefined && object.misesId !== null ? String(object.misesId) : ''
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null ? String(object.pubKey) : ''
    return message
  },

  toJSON(message: RestCreateDidRequest): unknown {
    const obj: any = {}
    message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid)
    message.misesId !== undefined && (obj.misesId = message.misesId)
    message.pubKey !== undefined && (obj.pubKey = message.pubKey)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestCreateDidRequest>, I>>(
    object: I
  ): RestCreateDidRequest {
    const message = { ...baseRestCreateDidRequest } as RestCreateDidRequest
    message.misesAppid = object.misesAppid ?? ''
    message.misesId = object.misesId ?? ''
    message.pubKey = object.pubKey ?? ''
    return message
  }
}

const basePrivateUserInfo: object = { encData: '', iv: '' }

export const PrivateUserInfo = {
  encode(message: PrivateUserInfo, writer: Writer = Writer.create()): Writer {
    if (message.encData !== '') {
      writer.uint32(10).string(message.encData)
    }
    if (message.iv !== '') {
      writer.uint32(18).string(message.iv)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PrivateUserInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePrivateUserInfo } as PrivateUserInfo
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.encData = reader.string()
          break
        case 2:
          message.iv = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PrivateUserInfo {
    const message = { ...basePrivateUserInfo } as PrivateUserInfo
    message.encData =
      object.encData !== undefined && object.encData !== null ? String(object.encData) : ''
    message.iv = object.iv !== undefined && object.iv !== null ? String(object.iv) : ''
    return message
  },

  toJSON(message: PrivateUserInfo): unknown {
    const obj: any = {}
    message.encData !== undefined && (obj.encData = message.encData)
    message.iv !== undefined && (obj.iv = message.iv)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PrivateUserInfo>, I>>(object: I): PrivateUserInfo {
    const message = { ...basePrivateUserInfo } as PrivateUserInfo
    message.encData = object.encData ?? ''
    message.iv = object.iv ?? ''
    return message
  }
}

const basePublicUserInfo: object = {
  name: '',
  gender: '',
  avatarUrl: '',
  homePageUrl: '',
  emails: '',
  telephones: '',
  intro: ''
}

export const PublicUserInfo = {
  encode(message: PublicUserInfo, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.gender !== '') {
      writer.uint32(18).string(message.gender)
    }
    if (message.avatarUrl !== '') {
      writer.uint32(26).string(message.avatarUrl)
    }
    if (message.homePageUrl !== '') {
      writer.uint32(34).string(message.homePageUrl)
    }
    for (const v of message.emails) {
      writer.uint32(42).string(v!)
    }
    for (const v of message.telephones) {
      writer.uint32(50).string(v!)
    }
    if (message.intro !== '') {
      writer.uint32(58).string(message.intro)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PublicUserInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePublicUserInfo } as PublicUserInfo
    message.emails = []
    message.telephones = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.gender = reader.string()
          break
        case 3:
          message.avatarUrl = reader.string()
          break
        case 4:
          message.homePageUrl = reader.string()
          break
        case 5:
          message.emails.push(reader.string())
          break
        case 6:
          message.telephones.push(reader.string())
          break
        case 7:
          message.intro = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PublicUserInfo {
    const message = { ...basePublicUserInfo } as PublicUserInfo
    message.name = object.name !== undefined && object.name !== null ? String(object.name) : ''
    message.gender =
      object.gender !== undefined && object.gender !== null ? String(object.gender) : ''
    message.avatarUrl =
      object.avatarUrl !== undefined && object.avatarUrl !== null ? String(object.avatarUrl) : ''
    message.homePageUrl =
      object.homePageUrl !== undefined && object.homePageUrl !== null
        ? String(object.homePageUrl)
        : ''
    message.emails = (object.emails ?? []).map((e: any) => String(e))
    message.telephones = (object.telephones ?? []).map((e: any) => String(e))
    message.intro = object.intro !== undefined && object.intro !== null ? String(object.intro) : ''
    return message
  },

  toJSON(message: PublicUserInfo): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.gender !== undefined && (obj.gender = message.gender)
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl)
    message.homePageUrl !== undefined && (obj.homePageUrl = message.homePageUrl)
    if (message.emails) {
      obj.emails = message.emails.map(e => e)
    } else {
      obj.emails = []
    }
    if (message.telephones) {
      obj.telephones = message.telephones.map(e => e)
    } else {
      obj.telephones = []
    }
    message.intro !== undefined && (obj.intro = message.intro)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PublicUserInfo>, I>>(object: I): PublicUserInfo {
    const message = { ...basePublicUserInfo } as PublicUserInfo
    message.name = object.name ?? ''
    message.gender = object.gender ?? ''
    message.avatarUrl = object.avatarUrl ?? ''
    message.homePageUrl = object.homePageUrl ?? ''
    message.emails = object.emails?.map(e => e) || []
    message.telephones = object.telephones?.map(e => e) || []
    message.intro = object.intro ?? ''
    return message
  }
}

const baseRestUpdateUserInfoRequest: object = { misesAppid: '', misesUid: '' }

export const RestUpdateUserInfoRequest = {
  encode(message: RestUpdateUserInfoRequest, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): RestUpdateUserInfoRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.misesAppid =
      object.misesAppid !== undefined && object.misesAppid !== null ? String(object.misesAppid) : ''
    message.misesUid =
      object.misesUid !== undefined && object.misesUid !== null ? String(object.misesUid) : ''
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

  fromPartial<I extends Exact<DeepPartial<RestUpdateUserInfoRequest>, I>>(
    object: I
  ): RestUpdateUserInfoRequest {
    const message = {
      ...baseRestUpdateUserInfoRequest
    } as RestUpdateUserInfoRequest
    message.misesAppid = object.misesAppid ?? ''
    message.misesUid = object.misesUid ?? ''
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

const baseRestUpdateUserRelationRequest: object = {
  misesAppid: '',
  misesUid: '',
  targetId: '',
  action: ''
}

export const RestUpdateUserRelationRequest = {
  encode(message: RestUpdateUserRelationRequest, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): RestUpdateUserRelationRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.misesAppid =
      object.misesAppid !== undefined && object.misesAppid !== null ? String(object.misesAppid) : ''
    message.misesUid =
      object.misesUid !== undefined && object.misesUid !== null ? String(object.misesUid) : ''
    message.targetId =
      object.targetId !== undefined && object.targetId !== null ? String(object.targetId) : ''
    message.action =
      object.action !== undefined && object.action !== null ? String(object.action) : ''
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

  fromPartial<I extends Exact<DeepPartial<RestUpdateUserRelationRequest>, I>>(
    object: I
  ): RestUpdateUserRelationRequest {
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
  encode(message: RestQueryTxRequest, writer: Writer = Writer.create()): Writer {
    if (message.txhash !== '') {
      writer.uint32(10).string(message.txhash)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestQueryTxRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.txhash =
      object.txhash !== undefined && object.txhash !== null ? String(object.txhash) : ''
    return message
  },

  toJSON(message: RestQueryTxRequest): unknown {
    const obj: any = {}
    message.txhash !== undefined && (obj.txhash = message.txhash)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestQueryTxRequest>, I>>(object: I): RestQueryTxRequest {
    const message = { ...baseRestQueryTxRequest } as RestQueryTxRequest
    message.txhash = object.txhash ?? ''
    return message
  }
}

const baseRestTxResponse: object = { code: 0 }

export const RestTxResponse = {
  encode(message: RestTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim()
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestTxResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.txResponse =
      object.txResponse !== undefined && object.txResponse !== null
        ? TxResponse.fromJSON(object.txResponse)
        : undefined
    message.code = object.code !== undefined && object.code !== null ? Number(object.code) : 0
    return message
  },

  toJSON(message: RestTxResponse): unknown {
    const obj: any = {}
    message.txResponse !== undefined &&
      (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined)
    message.code !== undefined && (obj.code = Math.round(message.code))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestTxResponse>, I>>(object: I): RestTxResponse {
    const message = { ...baseRestTxResponse } as RestTxResponse
    message.txResponse =
      object.txResponse !== undefined && object.txResponse !== null
        ? TxResponse.fromPartial(object.txResponse)
        : undefined
    message.code = object.code ?? 0
    return message
  }
}

const basePublicAppInfo: object = {
  name: '',
  domains: '',
  developer: '',
  homeUrl: '',
  iconUrl: '',
  version: Long.UZERO
}

export const PublicAppInfo = {
  encode(message: PublicAppInfo, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    for (const v of message.domains) {
      writer.uint32(18).string(v!)
    }
    if (message.developer !== '') {
      writer.uint32(26).string(message.developer)
    }
    if (message.homeUrl !== '') {
      writer.uint32(34).string(message.homeUrl)
    }
    if (message.iconUrl !== '') {
      writer.uint32(42).string(message.iconUrl)
    }
    if (!message.version.isZero()) {
      writer.uint32(48).uint64(message.version)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PublicAppInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePublicAppInfo } as PublicAppInfo
    message.domains = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.domains.push(reader.string())
          break
        case 3:
          message.developer = reader.string()
          break
        case 4:
          message.homeUrl = reader.string()
          break
        case 5:
          message.iconUrl = reader.string()
          break
        case 6:
          message.version = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PublicAppInfo {
    const message = { ...basePublicAppInfo } as PublicAppInfo
    message.name = object.name !== undefined && object.name !== null ? String(object.name) : ''
    message.domains = (object.domains ?? []).map((e: any) => String(e))
    message.developer =
      object.developer !== undefined && object.developer !== null ? String(object.developer) : ''
    message.homeUrl =
      object.homeUrl !== undefined && object.homeUrl !== null ? String(object.homeUrl) : ''
    message.iconUrl =
      object.iconUrl !== undefined && object.iconUrl !== null ? String(object.iconUrl) : ''
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO
    return message
  },

  toJSON(message: PublicAppInfo): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    if (message.domains) {
      obj.domains = message.domains.map(e => e)
    } else {
      obj.domains = []
    }
    message.developer !== undefined && (obj.developer = message.developer)
    message.homeUrl !== undefined && (obj.homeUrl = message.homeUrl)
    message.iconUrl !== undefined && (obj.iconUrl = message.iconUrl)
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PublicAppInfo>, I>>(object: I): PublicAppInfo {
    const message = { ...basePublicAppInfo } as PublicAppInfo
    message.name = object.name ?? ''
    message.domains = object.domains?.map(e => e) || []
    message.developer = object.developer ?? ''
    message.homeUrl = object.homeUrl ?? ''
    message.iconUrl = object.iconUrl ?? ''
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO
    return message
  }
}

const baseRestUpdateAppInfoRequest: object = { misesAppid: '' }

export const RestUpdateAppInfoRequest = {
  encode(message: RestUpdateAppInfoRequest, writer: Writer = Writer.create()): Writer {
    if (message.misesAppid !== '') {
      writer.uint32(10).string(message.misesAppid)
    }
    if (message.pubInfo !== undefined) {
      PublicAppInfo.encode(message.pubInfo, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RestUpdateAppInfoRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.misesAppid =
      object.misesAppid !== undefined && object.misesAppid !== null ? String(object.misesAppid) : ''
    message.pubInfo =
      object.pubInfo !== undefined && object.pubInfo !== null
        ? PublicAppInfo.fromJSON(object.pubInfo)
        : undefined
    return message
  },

  toJSON(message: RestUpdateAppInfoRequest): unknown {
    const obj: any = {}
    message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid)
    message.pubInfo !== undefined &&
      (obj.pubInfo = message.pubInfo ? PublicAppInfo.toJSON(message.pubInfo) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RestUpdateAppInfoRequest>, I>>(
    object: I
  ): RestUpdateAppInfoRequest {
    const message = {
      ...baseRestUpdateAppInfoRequest
    } as RestUpdateAppInfoRequest
    message.misesAppid = object.misesAppid ?? ''
    message.pubInfo =
      object.pubInfo !== undefined && object.pubInfo !== null
        ? PublicAppInfo.fromPartial(object.pubInfo)
        : undefined
    return message
  }
}

const baseAppFeeGrant: object = {}

export const AppFeeGrant = {
  encode(message: AppFeeGrant, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): AppFeeGrant {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.spendLimit =
      object.spendLimit !== undefined && object.spendLimit !== null
        ? Coin.fromJSON(object.spendLimit)
        : undefined
    message.period =
      object.period !== undefined && object.period !== null
        ? Duration.fromJSON(object.period)
        : undefined
    message.expiration =
      object.expiration !== undefined && object.expiration !== null
        ? fromJsonTimestamp(object.expiration)
        : undefined
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

  fromPartial<I extends Exact<DeepPartial<AppFeeGrant>, I>>(object: I): AppFeeGrant {
    const message = { ...baseAppFeeGrant } as AppFeeGrant
    message.spendLimit =
      object.spendLimit !== undefined && object.spendLimit !== null
        ? Coin.fromPartial(object.spendLimit)
        : undefined
    message.period =
      object.period !== undefined && object.period !== null
        ? Duration.fromPartial(object.period)
        : undefined
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
  encode(message: RestUpdateAppFeeGrantRequest, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): RestUpdateAppFeeGrantRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
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
    message.misesAppid =
      object.misesAppid !== undefined && object.misesAppid !== null ? String(object.misesAppid) : ''
    message.misesUid =
      object.misesUid !== undefined && object.misesUid !== null ? String(object.misesUid) : ''
    message.grant =
      object.grant !== undefined && object.grant !== null
        ? AppFeeGrant.fromJSON(object.grant)
        : undefined
    message.revoke =
      object.revoke !== undefined && object.revoke !== null ? Boolean(object.revoke) : false
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

  fromPartial<I extends Exact<DeepPartial<RestUpdateAppFeeGrantRequest>, I>>(
    object: I
  ): RestUpdateAppFeeGrantRequest {
    const message = {
      ...baseRestUpdateAppFeeGrantRequest
    } as RestUpdateAppFeeGrantRequest
    message.misesAppid = object.misesAppid ?? ''
    message.misesUid = object.misesUid ?? ''
    message.grant =
      object.grant !== undefined && object.grant !== null
        ? AppFeeGrant.fromPartial(object.grant)
        : undefined
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
    return promise.then(data => RestTxResponse.decode(new Reader(data)))
  }

  UpdateUserInfo(request: RestUpdateUserInfoRequest): Promise<RestTxResponse> {
    const data = RestUpdateUserInfoRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateUserInfo', data)
    return promise.then(data => RestTxResponse.decode(new Reader(data)))
  }

  UpdateUserRelation(request: RestUpdateUserRelationRequest): Promise<RestTxResponse> {
    const data = RestUpdateUserRelationRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateUserRelation', data)
    return promise.then(data => RestTxResponse.decode(new Reader(data)))
  }

  QueryTx(request: RestQueryTxRequest): Promise<RestTxResponse> {
    const data = RestQueryTxRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'QueryTx', data)
    return promise.then(data => RestTxResponse.decode(new Reader(data)))
  }

  UpdateAppInfo(request: RestUpdateAppInfoRequest): Promise<RestTxResponse> {
    const data = RestUpdateAppInfoRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateAppInfo', data)
    return promise.then(data => RestTxResponse.decode(new Reader(data)))
  }

  UpdateAppFeeGrant(request: RestUpdateAppFeeGrantRequest): Promise<RestTxResponse> {
    const data = RestUpdateAppFeeGrantRequest.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateAppFeeGrant', data)
    return promise.then(data => RestTxResponse.decode(new Reader(data)))
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
