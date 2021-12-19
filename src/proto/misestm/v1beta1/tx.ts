/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'
import { Metadata } from '../../cosmos/bank/v1beta1/bank'
import { Any } from '../../google/protobuf/any'

export const protobufPackage = 'misesid.misestm.v1beta1'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateUserInfo {
  creator: string
  uid: string
  encData: string
  iv: string
  version: Long
}

export interface MsgCreateUserInfoResponse {
  id: Long
}

export interface MsgUpdateUserInfo {
  creator: string
  id: Long
  uid: string
  encData: string
  iv: string
  version: Long
}

export interface MsgUpdateUserInfoResponse {}

export interface MsgDeleteUserInfo {
  creator: string
  id: Long
}

export interface MsgDeleteUserInfoResponse {}

export interface MsgCreateUserRelation {
  creator: string
  uidFrom: string
  uidTo: string
  isFollowing: boolean
  isBlocking: boolean
  isReferredBy: boolean
  version: Long
}

export interface MsgCreateUserRelationResponse {
  id: Long
}

export interface MsgUpdateUserRelation {
  creator: string
  id: Long
  uidFrom: string
  uidTo: string
  isFollowing: boolean
  isBlocking: boolean
  isReferredBy: boolean
  version: Long
}

export interface MsgUpdateUserRelationResponse {}

export interface MsgDeleteUserRelation {
  creator: string
  id: Long
}

export interface MsgDeleteUserRelationResponse {}

export interface MsgCreateAppInfo {
  creator: string
  appid: string
  name: string
  domains: string[]
  developer: string
  homeUrl: string
  iconUrl: string
  version: Long
}

export interface MsgCreateAppInfoResponse {
  id: Long
}

export interface MsgUpdateAppInfo {
  creator: string
  id: Long
  appid: string
  name: string
  domains: string[]
  developer: string
  homeUrl: string
  iconUrl: string
  version: Long
}

export interface MsgUpdateAppInfoResponse {}

export interface MsgDeleteAppInfo {
  creator: string
  id: Long
}

export interface MsgDeleteAppInfoResponse {}

export interface MsgCreateDidRegistry {
  creator: string
  did: string
  pkeyDid: string
  pkeyType: string
  pkeyMultibase: string
  version: Long
}

export interface MsgCreateDidRegistryResponse {
  id: Long
}

export interface MsgUpdateDidRegistry {
  creator: string
  id: Long
  did: string
  pkeyDid: string
  pkeyType: string
  pkeyMultibase: string
  version: Long
}

export interface MsgUpdateDidRegistryResponse {}

export interface MsgDeleteDidRegistry {
  creator: string
  id: Long
}

export interface MsgDeleteDidRegistryResponse {}

/** MsgNewDenom defines an SDK message for creating a new denom. */
export interface MsgNewDenom {
  id: string
  amount: string
  denomMeta?: Metadata
  sender: string
  recipient: string
}

/** MsgNewDenomResponse defines the MsgNewDenom response type. */
export interface MsgNewDenomResponse {}

/** MsgNewNFTClass defines an SDK message for creating a new NFTClass. */
export interface MsgNewNFTClass {
  id: string
  name: string
  uri: string
  schema: string
  symbol: string
  data?: Any
  sender: string
}

/** MsgNewNFTClassResponse defines the MsgNewNFTClass response type. */
export interface MsgNewNFTClassResponse {}

/** MsgUpdateNFTClass defines an SDK message for editing a nft class. */
export interface MsgUpdateNFTClass {
  id: string
  classId: string
  name: string
  uri: string
  data?: Any
  sender: string
}

/** MsgUpdateNFTClassResponse defines the MsgUpdateNFTClass response type. */
export interface MsgUpdateNFTClassResponse {}

/** MsgMintNFT defines an SDK message for creating a new NFT. */
export interface MsgMintNFT {
  id: string
  classId: string
  name: string
  uri: string
  data?: Any
  sender: string
  recipient: string
}

/** MsgMintNFTResponse defines the Msg/MintNFT response type. */
export interface MsgMintNFTResponse {}

/** MsgUpdateNFT defines an SDK message for update a NFT. */
export interface MsgUpdateNFT {
  id: string
  classId: string
  uri: string
  data?: Any
  sender: string
}

/** MsgUpdateNFTResponse defines the MsgUpdateNFT response type. */
export interface MsgUpdateNFTResponse {}

/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFT {
  id: string
  classId: string
  sender: string
}

/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponse {}

const baseMsgCreateUserInfo: object = {
  creator: '',
  uid: '',
  encData: '',
  iv: '',
  version: Long.UZERO
}

export const MsgCreateUserInfo = {
  encode(message: MsgCreateUserInfo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.uid !== '') {
      writer.uint32(18).string(message.uid)
    }
    if (message.encData !== '') {
      writer.uint32(26).string(message.encData)
    }
    if (message.iv !== '') {
      writer.uint32(34).string(message.iv)
    }
    if (!message.version.isZero()) {
      writer.uint32(40).uint64(message.version)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateUserInfo } as MsgCreateUserInfo
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.uid = reader.string()
          break
        case 3:
          message.encData = reader.string()
          break
        case 4:
          message.iv = reader.string()
          break
        case 5:
          message.version = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateUserInfo {
    const message = { ...baseMsgCreateUserInfo } as MsgCreateUserInfo
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.uid = object.uid !== undefined && object.uid !== null ? String(object.uid) : ''
    message.encData =
      object.encData !== undefined && object.encData !== null ? String(object.encData) : ''
    message.iv = object.iv !== undefined && object.iv !== null ? String(object.iv) : ''
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO
    return message
  },

  toJSON(message: MsgCreateUserInfo): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.uid !== undefined && (obj.uid = message.uid)
    message.encData !== undefined && (obj.encData = message.encData)
    message.iv !== undefined && (obj.iv = message.iv)
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUserInfo>, I>>(object: I): MsgCreateUserInfo {
    const message = { ...baseMsgCreateUserInfo } as MsgCreateUserInfo
    message.creator = object.creator ?? ''
    message.uid = object.uid ?? ''
    message.encData = object.encData ?? ''
    message.iv = object.iv ?? ''
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO
    return message
  }
}

const baseMsgCreateUserInfoResponse: object = { id: Long.UZERO }

export const MsgCreateUserInfoResponse = {
  encode(message: MsgCreateUserInfoResponse, writer: Writer = Writer.create()): Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserInfoResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateUserInfoResponse
    } as MsgCreateUserInfoResponse
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

  fromJSON(object: any): MsgCreateUserInfoResponse {
    const message = {
      ...baseMsgCreateUserInfoResponse
    } as MsgCreateUserInfoResponse
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: MsgCreateUserInfoResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUserInfoResponse>, I>>(
    object: I
  ): MsgCreateUserInfoResponse {
    const message = {
      ...baseMsgCreateUserInfoResponse
    } as MsgCreateUserInfoResponse
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseMsgUpdateUserInfo: object = {
  creator: '',
  id: Long.UZERO,
  uid: '',
  encData: '',
  iv: '',
  version: Long.UZERO
}

export const MsgUpdateUserInfo = {
  encode(message: MsgUpdateUserInfo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.uid !== '') {
      writer.uint32(26).string(message.uid)
    }
    if (message.encData !== '') {
      writer.uint32(34).string(message.encData)
    }
    if (message.iv !== '') {
      writer.uint32(42).string(message.iv)
    }
    if (!message.version.isZero()) {
      writer.uint32(48).uint64(message.version)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateUserInfo } as MsgUpdateUserInfo
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.uint64() as Long
          break
        case 3:
          message.uid = reader.string()
          break
        case 4:
          message.encData = reader.string()
          break
        case 5:
          message.iv = reader.string()
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

  fromJSON(object: any): MsgUpdateUserInfo {
    const message = { ...baseMsgUpdateUserInfo } as MsgUpdateUserInfo
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    message.uid = object.uid !== undefined && object.uid !== null ? String(object.uid) : ''
    message.encData =
      object.encData !== undefined && object.encData !== null ? String(object.encData) : ''
    message.iv = object.iv !== undefined && object.iv !== null ? String(object.iv) : ''
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO
    return message
  },

  toJSON(message: MsgUpdateUserInfo): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    message.uid !== undefined && (obj.uid = message.uid)
    message.encData !== undefined && (obj.encData = message.encData)
    message.iv !== undefined && (obj.iv = message.iv)
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateUserInfo>, I>>(object: I): MsgUpdateUserInfo {
    const message = { ...baseMsgUpdateUserInfo } as MsgUpdateUserInfo
    message.creator = object.creator ?? ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    message.uid = object.uid ?? ''
    message.encData = object.encData ?? ''
    message.iv = object.iv ?? ''
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO
    return message
  }
}

const baseMsgUpdateUserInfoResponse: object = {}

export const MsgUpdateUserInfoResponse = {
  encode(_: MsgUpdateUserInfoResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserInfoResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateUserInfoResponse
    } as MsgUpdateUserInfoResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateUserInfoResponse {
    const message = {
      ...baseMsgUpdateUserInfoResponse
    } as MsgUpdateUserInfoResponse
    return message
  },

  toJSON(_: MsgUpdateUserInfoResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateUserInfoResponse>, I>>(
    _: I
  ): MsgUpdateUserInfoResponse {
    const message = {
      ...baseMsgUpdateUserInfoResponse
    } as MsgUpdateUserInfoResponse
    return message
  }
}

const baseMsgDeleteUserInfo: object = { creator: '', id: Long.UZERO }

export const MsgDeleteUserInfo = {
  encode(message: MsgDeleteUserInfo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteUserInfo } as MsgDeleteUserInfo
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteUserInfo {
    const message = { ...baseMsgDeleteUserInfo } as MsgDeleteUserInfo
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: MsgDeleteUserInfo): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUserInfo>, I>>(object: I): MsgDeleteUserInfo {
    const message = { ...baseMsgDeleteUserInfo } as MsgDeleteUserInfo
    message.creator = object.creator ?? ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseMsgDeleteUserInfoResponse: object = {}

export const MsgDeleteUserInfoResponse = {
  encode(_: MsgDeleteUserInfoResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserInfoResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgDeleteUserInfoResponse
    } as MsgDeleteUserInfoResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteUserInfoResponse {
    const message = {
      ...baseMsgDeleteUserInfoResponse
    } as MsgDeleteUserInfoResponse
    return message
  },

  toJSON(_: MsgDeleteUserInfoResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUserInfoResponse>, I>>(
    _: I
  ): MsgDeleteUserInfoResponse {
    const message = {
      ...baseMsgDeleteUserInfoResponse
    } as MsgDeleteUserInfoResponse
    return message
  }
}

const baseMsgCreateUserRelation: object = {
  creator: '',
  uidFrom: '',
  uidTo: '',
  isFollowing: false,
  isBlocking: false,
  isReferredBy: false,
  version: Long.UZERO
}

export const MsgCreateUserRelation = {
  encode(message: MsgCreateUserRelation, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.uidFrom !== '') {
      writer.uint32(18).string(message.uidFrom)
    }
    if (message.uidTo !== '') {
      writer.uint32(26).string(message.uidTo)
    }
    if (message.isFollowing === true) {
      writer.uint32(32).bool(message.isFollowing)
    }
    if (message.isBlocking === true) {
      writer.uint32(40).bool(message.isBlocking)
    }
    if (message.isReferredBy === true) {
      writer.uint32(48).bool(message.isReferredBy)
    }
    if (!message.version.isZero()) {
      writer.uint32(56).uint64(message.version)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserRelation {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateUserRelation } as MsgCreateUserRelation
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.uidFrom = reader.string()
          break
        case 3:
          message.uidTo = reader.string()
          break
        case 4:
          message.isFollowing = reader.bool()
          break
        case 5:
          message.isBlocking = reader.bool()
          break
        case 6:
          message.isReferredBy = reader.bool()
          break
        case 7:
          message.version = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateUserRelation {
    const message = { ...baseMsgCreateUserRelation } as MsgCreateUserRelation
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.uidFrom =
      object.uidFrom !== undefined && object.uidFrom !== null ? String(object.uidFrom) : ''
    message.uidTo = object.uidTo !== undefined && object.uidTo !== null ? String(object.uidTo) : ''
    message.isFollowing =
      object.isFollowing !== undefined && object.isFollowing !== null
        ? Boolean(object.isFollowing)
        : false
    message.isBlocking =
      object.isBlocking !== undefined && object.isBlocking !== null
        ? Boolean(object.isBlocking)
        : false
    message.isReferredBy =
      object.isReferredBy !== undefined && object.isReferredBy !== null
        ? Boolean(object.isReferredBy)
        : false
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO
    return message
  },

  toJSON(message: MsgCreateUserRelation): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.uidFrom !== undefined && (obj.uidFrom = message.uidFrom)
    message.uidTo !== undefined && (obj.uidTo = message.uidTo)
    message.isFollowing !== undefined && (obj.isFollowing = message.isFollowing)
    message.isBlocking !== undefined && (obj.isBlocking = message.isBlocking)
    message.isReferredBy !== undefined && (obj.isReferredBy = message.isReferredBy)
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUserRelation>, I>>(
    object: I
  ): MsgCreateUserRelation {
    const message = { ...baseMsgCreateUserRelation } as MsgCreateUserRelation
    message.creator = object.creator ?? ''
    message.uidFrom = object.uidFrom ?? ''
    message.uidTo = object.uidTo ?? ''
    message.isFollowing = object.isFollowing ?? false
    message.isBlocking = object.isBlocking ?? false
    message.isReferredBy = object.isReferredBy ?? false
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO
    return message
  }
}

const baseMsgCreateUserRelationResponse: object = { id: Long.UZERO }

export const MsgCreateUserRelationResponse = {
  encode(message: MsgCreateUserRelationResponse, writer: Writer = Writer.create()): Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserRelationResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateUserRelationResponse
    } as MsgCreateUserRelationResponse
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

  fromJSON(object: any): MsgCreateUserRelationResponse {
    const message = {
      ...baseMsgCreateUserRelationResponse
    } as MsgCreateUserRelationResponse
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: MsgCreateUserRelationResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUserRelationResponse>, I>>(
    object: I
  ): MsgCreateUserRelationResponse {
    const message = {
      ...baseMsgCreateUserRelationResponse
    } as MsgCreateUserRelationResponse
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseMsgUpdateUserRelation: object = {
  creator: '',
  id: Long.UZERO,
  uidFrom: '',
  uidTo: '',
  isFollowing: false,
  isBlocking: false,
  isReferredBy: false,
  version: Long.UZERO
}

export const MsgUpdateUserRelation = {
  encode(message: MsgUpdateUserRelation, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.uidFrom !== '') {
      writer.uint32(26).string(message.uidFrom)
    }
    if (message.uidTo !== '') {
      writer.uint32(34).string(message.uidTo)
    }
    if (message.isFollowing === true) {
      writer.uint32(40).bool(message.isFollowing)
    }
    if (message.isBlocking === true) {
      writer.uint32(48).bool(message.isBlocking)
    }
    if (message.isReferredBy === true) {
      writer.uint32(56).bool(message.isReferredBy)
    }
    if (!message.version.isZero()) {
      writer.uint32(64).uint64(message.version)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserRelation {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateUserRelation } as MsgUpdateUserRelation
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.uint64() as Long
          break
        case 3:
          message.uidFrom = reader.string()
          break
        case 4:
          message.uidTo = reader.string()
          break
        case 5:
          message.isFollowing = reader.bool()
          break
        case 6:
          message.isBlocking = reader.bool()
          break
        case 7:
          message.isReferredBy = reader.bool()
          break
        case 8:
          message.version = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateUserRelation {
    const message = { ...baseMsgUpdateUserRelation } as MsgUpdateUserRelation
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    message.uidFrom =
      object.uidFrom !== undefined && object.uidFrom !== null ? String(object.uidFrom) : ''
    message.uidTo = object.uidTo !== undefined && object.uidTo !== null ? String(object.uidTo) : ''
    message.isFollowing =
      object.isFollowing !== undefined && object.isFollowing !== null
        ? Boolean(object.isFollowing)
        : false
    message.isBlocking =
      object.isBlocking !== undefined && object.isBlocking !== null
        ? Boolean(object.isBlocking)
        : false
    message.isReferredBy =
      object.isReferredBy !== undefined && object.isReferredBy !== null
        ? Boolean(object.isReferredBy)
        : false
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO
    return message
  },

  toJSON(message: MsgUpdateUserRelation): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    message.uidFrom !== undefined && (obj.uidFrom = message.uidFrom)
    message.uidTo !== undefined && (obj.uidTo = message.uidTo)
    message.isFollowing !== undefined && (obj.isFollowing = message.isFollowing)
    message.isBlocking !== undefined && (obj.isBlocking = message.isBlocking)
    message.isReferredBy !== undefined && (obj.isReferredBy = message.isReferredBy)
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateUserRelation>, I>>(
    object: I
  ): MsgUpdateUserRelation {
    const message = { ...baseMsgUpdateUserRelation } as MsgUpdateUserRelation
    message.creator = object.creator ?? ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    message.uidFrom = object.uidFrom ?? ''
    message.uidTo = object.uidTo ?? ''
    message.isFollowing = object.isFollowing ?? false
    message.isBlocking = object.isBlocking ?? false
    message.isReferredBy = object.isReferredBy ?? false
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO
    return message
  }
}

const baseMsgUpdateUserRelationResponse: object = {}

export const MsgUpdateUserRelationResponse = {
  encode(_: MsgUpdateUserRelationResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserRelationResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateUserRelationResponse
    } as MsgUpdateUserRelationResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateUserRelationResponse {
    const message = {
      ...baseMsgUpdateUserRelationResponse
    } as MsgUpdateUserRelationResponse
    return message
  },

  toJSON(_: MsgUpdateUserRelationResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateUserRelationResponse>, I>>(
    _: I
  ): MsgUpdateUserRelationResponse {
    const message = {
      ...baseMsgUpdateUserRelationResponse
    } as MsgUpdateUserRelationResponse
    return message
  }
}

const baseMsgDeleteUserRelation: object = { creator: '', id: Long.UZERO }

export const MsgDeleteUserRelation = {
  encode(message: MsgDeleteUserRelation, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserRelation {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteUserRelation } as MsgDeleteUserRelation
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteUserRelation {
    const message = { ...baseMsgDeleteUserRelation } as MsgDeleteUserRelation
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: MsgDeleteUserRelation): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUserRelation>, I>>(
    object: I
  ): MsgDeleteUserRelation {
    const message = { ...baseMsgDeleteUserRelation } as MsgDeleteUserRelation
    message.creator = object.creator ?? ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseMsgDeleteUserRelationResponse: object = {}

export const MsgDeleteUserRelationResponse = {
  encode(_: MsgDeleteUserRelationResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserRelationResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgDeleteUserRelationResponse
    } as MsgDeleteUserRelationResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteUserRelationResponse {
    const message = {
      ...baseMsgDeleteUserRelationResponse
    } as MsgDeleteUserRelationResponse
    return message
  },

  toJSON(_: MsgDeleteUserRelationResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUserRelationResponse>, I>>(
    _: I
  ): MsgDeleteUserRelationResponse {
    const message = {
      ...baseMsgDeleteUserRelationResponse
    } as MsgDeleteUserRelationResponse
    return message
  }
}

const baseMsgCreateAppInfo: object = {
  creator: '',
  appid: '',
  name: '',
  domains: '',
  developer: '',
  homeUrl: '',
  iconUrl: '',
  version: Long.UZERO
}

export const MsgCreateAppInfo = {
  encode(message: MsgCreateAppInfo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.appid !== '') {
      writer.uint32(18).string(message.appid)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    for (const v of message.domains) {
      writer.uint32(34).string(v!)
    }
    if (message.developer !== '') {
      writer.uint32(42).string(message.developer)
    }
    if (message.homeUrl !== '') {
      writer.uint32(50).string(message.homeUrl)
    }
    if (message.iconUrl !== '') {
      writer.uint32(58).string(message.iconUrl)
    }
    if (!message.version.isZero()) {
      writer.uint32(64).uint64(message.version)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAppInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateAppInfo } as MsgCreateAppInfo
    message.domains = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.appid = reader.string()
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.domains.push(reader.string())
          break
        case 5:
          message.developer = reader.string()
          break
        case 6:
          message.homeUrl = reader.string()
          break
        case 7:
          message.iconUrl = reader.string()
          break
        case 8:
          message.version = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateAppInfo {
    const message = { ...baseMsgCreateAppInfo } as MsgCreateAppInfo
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.appid = object.appid !== undefined && object.appid !== null ? String(object.appid) : ''
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

  toJSON(message: MsgCreateAppInfo): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.appid !== undefined && (obj.appid = message.appid)
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

  fromPartial<I extends Exact<DeepPartial<MsgCreateAppInfo>, I>>(object: I): MsgCreateAppInfo {
    const message = { ...baseMsgCreateAppInfo } as MsgCreateAppInfo
    message.creator = object.creator ?? ''
    message.appid = object.appid ?? ''
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

const baseMsgCreateAppInfoResponse: object = { id: Long.UZERO }

export const MsgCreateAppInfoResponse = {
  encode(message: MsgCreateAppInfoResponse, writer: Writer = Writer.create()): Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAppInfoResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateAppInfoResponse
    } as MsgCreateAppInfoResponse
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

  fromJSON(object: any): MsgCreateAppInfoResponse {
    const message = {
      ...baseMsgCreateAppInfoResponse
    } as MsgCreateAppInfoResponse
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: MsgCreateAppInfoResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAppInfoResponse>, I>>(
    object: I
  ): MsgCreateAppInfoResponse {
    const message = {
      ...baseMsgCreateAppInfoResponse
    } as MsgCreateAppInfoResponse
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseMsgUpdateAppInfo: object = {
  creator: '',
  id: Long.UZERO,
  appid: '',
  name: '',
  domains: '',
  developer: '',
  homeUrl: '',
  iconUrl: '',
  version: Long.UZERO
}

export const MsgUpdateAppInfo = {
  encode(message: MsgUpdateAppInfo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.appid !== '') {
      writer.uint32(26).string(message.appid)
    }
    if (message.name !== '') {
      writer.uint32(34).string(message.name)
    }
    for (const v of message.domains) {
      writer.uint32(42).string(v!)
    }
    if (message.developer !== '') {
      writer.uint32(50).string(message.developer)
    }
    if (message.homeUrl !== '') {
      writer.uint32(58).string(message.homeUrl)
    }
    if (message.iconUrl !== '') {
      writer.uint32(66).string(message.iconUrl)
    }
    if (!message.version.isZero()) {
      writer.uint32(72).uint64(message.version)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAppInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateAppInfo } as MsgUpdateAppInfo
    message.domains = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.uint64() as Long
          break
        case 3:
          message.appid = reader.string()
          break
        case 4:
          message.name = reader.string()
          break
        case 5:
          message.domains.push(reader.string())
          break
        case 6:
          message.developer = reader.string()
          break
        case 7:
          message.homeUrl = reader.string()
          break
        case 8:
          message.iconUrl = reader.string()
          break
        case 9:
          message.version = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateAppInfo {
    const message = { ...baseMsgUpdateAppInfo } as MsgUpdateAppInfo
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    message.appid = object.appid !== undefined && object.appid !== null ? String(object.appid) : ''
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

  toJSON(message: MsgUpdateAppInfo): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    message.appid !== undefined && (obj.appid = message.appid)
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAppInfo>, I>>(object: I): MsgUpdateAppInfo {
    const message = { ...baseMsgUpdateAppInfo } as MsgUpdateAppInfo
    message.creator = object.creator ?? ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    message.appid = object.appid ?? ''
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

const baseMsgUpdateAppInfoResponse: object = {}

export const MsgUpdateAppInfoResponse = {
  encode(_: MsgUpdateAppInfoResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAppInfoResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateAppInfoResponse
    } as MsgUpdateAppInfoResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateAppInfoResponse {
    const message = {
      ...baseMsgUpdateAppInfoResponse
    } as MsgUpdateAppInfoResponse
    return message
  },

  toJSON(_: MsgUpdateAppInfoResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAppInfoResponse>, I>>(
    _: I
  ): MsgUpdateAppInfoResponse {
    const message = {
      ...baseMsgUpdateAppInfoResponse
    } as MsgUpdateAppInfoResponse
    return message
  }
}

const baseMsgDeleteAppInfo: object = { creator: '', id: Long.UZERO }

export const MsgDeleteAppInfo = {
  encode(message: MsgDeleteAppInfo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAppInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteAppInfo } as MsgDeleteAppInfo
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteAppInfo {
    const message = { ...baseMsgDeleteAppInfo } as MsgDeleteAppInfo
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: MsgDeleteAppInfo): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAppInfo>, I>>(object: I): MsgDeleteAppInfo {
    const message = { ...baseMsgDeleteAppInfo } as MsgDeleteAppInfo
    message.creator = object.creator ?? ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseMsgDeleteAppInfoResponse: object = {}

export const MsgDeleteAppInfoResponse = {
  encode(_: MsgDeleteAppInfoResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAppInfoResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgDeleteAppInfoResponse
    } as MsgDeleteAppInfoResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteAppInfoResponse {
    const message = {
      ...baseMsgDeleteAppInfoResponse
    } as MsgDeleteAppInfoResponse
    return message
  },

  toJSON(_: MsgDeleteAppInfoResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAppInfoResponse>, I>>(
    _: I
  ): MsgDeleteAppInfoResponse {
    const message = {
      ...baseMsgDeleteAppInfoResponse
    } as MsgDeleteAppInfoResponse
    return message
  }
}

const baseMsgCreateDidRegistry: object = {
  creator: '',
  did: '',
  pkeyDid: '',
  pkeyType: '',
  pkeyMultibase: '',
  version: Long.UZERO
}

export const MsgCreateDidRegistry = {
  encode(message: MsgCreateDidRegistry, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.did !== '') {
      writer.uint32(18).string(message.did)
    }
    if (message.pkeyDid !== '') {
      writer.uint32(26).string(message.pkeyDid)
    }
    if (message.pkeyType !== '') {
      writer.uint32(34).string(message.pkeyType)
    }
    if (message.pkeyMultibase !== '') {
      writer.uint32(42).string(message.pkeyMultibase)
    }
    if (!message.version.isZero()) {
      writer.uint32(48).uint64(message.version)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDidRegistry {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateDidRegistry } as MsgCreateDidRegistry
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.did = reader.string()
          break
        case 3:
          message.pkeyDid = reader.string()
          break
        case 4:
          message.pkeyType = reader.string()
          break
        case 5:
          message.pkeyMultibase = reader.string()
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

  fromJSON(object: any): MsgCreateDidRegistry {
    const message = { ...baseMsgCreateDidRegistry } as MsgCreateDidRegistry
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.did = object.did !== undefined && object.did !== null ? String(object.did) : ''
    message.pkeyDid =
      object.pkeyDid !== undefined && object.pkeyDid !== null ? String(object.pkeyDid) : ''
    message.pkeyType =
      object.pkeyType !== undefined && object.pkeyType !== null ? String(object.pkeyType) : ''
    message.pkeyMultibase =
      object.pkeyMultibase !== undefined && object.pkeyMultibase !== null
        ? String(object.pkeyMultibase)
        : ''
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO
    return message
  },

  toJSON(message: MsgCreateDidRegistry): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.did !== undefined && (obj.did = message.did)
    message.pkeyDid !== undefined && (obj.pkeyDid = message.pkeyDid)
    message.pkeyType !== undefined && (obj.pkeyType = message.pkeyType)
    message.pkeyMultibase !== undefined && (obj.pkeyMultibase = message.pkeyMultibase)
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDidRegistry>, I>>(
    object: I
  ): MsgCreateDidRegistry {
    const message = { ...baseMsgCreateDidRegistry } as MsgCreateDidRegistry
    message.creator = object.creator ?? ''
    message.did = object.did ?? ''
    message.pkeyDid = object.pkeyDid ?? ''
    message.pkeyType = object.pkeyType ?? ''
    message.pkeyMultibase = object.pkeyMultibase ?? ''
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO
    return message
  }
}

const baseMsgCreateDidRegistryResponse: object = { id: Long.UZERO }

export const MsgCreateDidRegistryResponse = {
  encode(message: MsgCreateDidRegistryResponse, writer: Writer = Writer.create()): Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDidRegistryResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateDidRegistryResponse
    } as MsgCreateDidRegistryResponse
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

  fromJSON(object: any): MsgCreateDidRegistryResponse {
    const message = {
      ...baseMsgCreateDidRegistryResponse
    } as MsgCreateDidRegistryResponse
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: MsgCreateDidRegistryResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDidRegistryResponse>, I>>(
    object: I
  ): MsgCreateDidRegistryResponse {
    const message = {
      ...baseMsgCreateDidRegistryResponse
    } as MsgCreateDidRegistryResponse
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseMsgUpdateDidRegistry: object = {
  creator: '',
  id: Long.UZERO,
  did: '',
  pkeyDid: '',
  pkeyType: '',
  pkeyMultibase: '',
  version: Long.UZERO
}

export const MsgUpdateDidRegistry = {
  encode(message: MsgUpdateDidRegistry, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.did !== '') {
      writer.uint32(26).string(message.did)
    }
    if (message.pkeyDid !== '') {
      writer.uint32(34).string(message.pkeyDid)
    }
    if (message.pkeyType !== '') {
      writer.uint32(42).string(message.pkeyType)
    }
    if (message.pkeyMultibase !== '') {
      writer.uint32(50).string(message.pkeyMultibase)
    }
    if (!message.version.isZero()) {
      writer.uint32(56).uint64(message.version)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDidRegistry {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateDidRegistry } as MsgUpdateDidRegistry
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.uint64() as Long
          break
        case 3:
          message.did = reader.string()
          break
        case 4:
          message.pkeyDid = reader.string()
          break
        case 5:
          message.pkeyType = reader.string()
          break
        case 6:
          message.pkeyMultibase = reader.string()
          break
        case 7:
          message.version = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateDidRegistry {
    const message = { ...baseMsgUpdateDidRegistry } as MsgUpdateDidRegistry
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    message.did = object.did !== undefined && object.did !== null ? String(object.did) : ''
    message.pkeyDid =
      object.pkeyDid !== undefined && object.pkeyDid !== null ? String(object.pkeyDid) : ''
    message.pkeyType =
      object.pkeyType !== undefined && object.pkeyType !== null ? String(object.pkeyType) : ''
    message.pkeyMultibase =
      object.pkeyMultibase !== undefined && object.pkeyMultibase !== null
        ? String(object.pkeyMultibase)
        : ''
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO
    return message
  },

  toJSON(message: MsgUpdateDidRegistry): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    message.did !== undefined && (obj.did = message.did)
    message.pkeyDid !== undefined && (obj.pkeyDid = message.pkeyDid)
    message.pkeyType !== undefined && (obj.pkeyType = message.pkeyType)
    message.pkeyMultibase !== undefined && (obj.pkeyMultibase = message.pkeyMultibase)
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDidRegistry>, I>>(
    object: I
  ): MsgUpdateDidRegistry {
    const message = { ...baseMsgUpdateDidRegistry } as MsgUpdateDidRegistry
    message.creator = object.creator ?? ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    message.did = object.did ?? ''
    message.pkeyDid = object.pkeyDid ?? ''
    message.pkeyType = object.pkeyType ?? ''
    message.pkeyMultibase = object.pkeyMultibase ?? ''
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO
    return message
  }
}

const baseMsgUpdateDidRegistryResponse: object = {}

export const MsgUpdateDidRegistryResponse = {
  encode(_: MsgUpdateDidRegistryResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDidRegistryResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateDidRegistryResponse
    } as MsgUpdateDidRegistryResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateDidRegistryResponse {
    const message = {
      ...baseMsgUpdateDidRegistryResponse
    } as MsgUpdateDidRegistryResponse
    return message
  },

  toJSON(_: MsgUpdateDidRegistryResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDidRegistryResponse>, I>>(
    _: I
  ): MsgUpdateDidRegistryResponse {
    const message = {
      ...baseMsgUpdateDidRegistryResponse
    } as MsgUpdateDidRegistryResponse
    return message
  }
}

const baseMsgDeleteDidRegistry: object = { creator: '', id: Long.UZERO }

export const MsgDeleteDidRegistry = {
  encode(message: MsgDeleteDidRegistry, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDidRegistry {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteDidRegistry } as MsgDeleteDidRegistry
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteDidRegistry {
    const message = { ...baseMsgDeleteDidRegistry } as MsgDeleteDidRegistry
    message.creator =
      object.creator !== undefined && object.creator !== null ? String(object.creator) : ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO
    return message
  },

  toJSON(message: MsgDeleteDidRegistry): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDidRegistry>, I>>(
    object: I
  ): MsgDeleteDidRegistry {
    const message = { ...baseMsgDeleteDidRegistry } as MsgDeleteDidRegistry
    message.creator = object.creator ?? ''
    message.id =
      object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  }
}

const baseMsgDeleteDidRegistryResponse: object = {}

export const MsgDeleteDidRegistryResponse = {
  encode(_: MsgDeleteDidRegistryResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDidRegistryResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgDeleteDidRegistryResponse
    } as MsgDeleteDidRegistryResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteDidRegistryResponse {
    const message = {
      ...baseMsgDeleteDidRegistryResponse
    } as MsgDeleteDidRegistryResponse
    return message
  },

  toJSON(_: MsgDeleteDidRegistryResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDidRegistryResponse>, I>>(
    _: I
  ): MsgDeleteDidRegistryResponse {
    const message = {
      ...baseMsgDeleteDidRegistryResponse
    } as MsgDeleteDidRegistryResponse
    return message
  }
}

const baseMsgNewDenom: object = {
  id: '',
  amount: '',
  sender: '',
  recipient: ''
}

export const MsgNewDenom = {
  encode(message: MsgNewDenom, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    if (message.amount !== '') {
      writer.uint32(18).string(message.amount)
    }
    if (message.denomMeta !== undefined) {
      Metadata.encode(message.denomMeta, writer.uint32(26).fork()).ldelim()
    }
    if (message.sender !== '') {
      writer.uint32(34).string(message.sender)
    }
    if (message.recipient !== '') {
      writer.uint32(42).string(message.recipient)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgNewDenom {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgNewDenom } as MsgNewDenom
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.amount = reader.string()
          break
        case 3:
          message.denomMeta = Metadata.decode(reader, reader.uint32())
          break
        case 4:
          message.sender = reader.string()
          break
        case 5:
          message.recipient = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgNewDenom {
    const message = { ...baseMsgNewDenom } as MsgNewDenom
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : ''
    message.amount =
      object.amount !== undefined && object.amount !== null ? String(object.amount) : ''
    message.denomMeta =
      object.denomMeta !== undefined && object.denomMeta !== null
        ? Metadata.fromJSON(object.denomMeta)
        : undefined
    message.sender =
      object.sender !== undefined && object.sender !== null ? String(object.sender) : ''
    message.recipient =
      object.recipient !== undefined && object.recipient !== null ? String(object.recipient) : ''
    return message
  },

  toJSON(message: MsgNewDenom): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.amount !== undefined && (obj.amount = message.amount)
    message.denomMeta !== undefined &&
      (obj.denomMeta = message.denomMeta ? Metadata.toJSON(message.denomMeta) : undefined)
    message.sender !== undefined && (obj.sender = message.sender)
    message.recipient !== undefined && (obj.recipient = message.recipient)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewDenom>, I>>(object: I): MsgNewDenom {
    const message = { ...baseMsgNewDenom } as MsgNewDenom
    message.id = object.id ?? ''
    message.amount = object.amount ?? ''
    message.denomMeta =
      object.denomMeta !== undefined && object.denomMeta !== null
        ? Metadata.fromPartial(object.denomMeta)
        : undefined
    message.sender = object.sender ?? ''
    message.recipient = object.recipient ?? ''
    return message
  }
}

const baseMsgNewDenomResponse: object = {}

export const MsgNewDenomResponse = {
  encode(_: MsgNewDenomResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgNewDenomResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgNewDenomResponse } as MsgNewDenomResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgNewDenomResponse {
    const message = { ...baseMsgNewDenomResponse } as MsgNewDenomResponse
    return message
  },

  toJSON(_: MsgNewDenomResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewDenomResponse>, I>>(_: I): MsgNewDenomResponse {
    const message = { ...baseMsgNewDenomResponse } as MsgNewDenomResponse
    return message
  }
}

const baseMsgNewNFTClass: object = {
  id: '',
  name: '',
  uri: '',
  schema: '',
  symbol: '',
  sender: ''
}

export const MsgNewNFTClass = {
  encode(message: MsgNewNFTClass, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.uri !== '') {
      writer.uint32(26).string(message.uri)
    }
    if (message.schema !== '') {
      writer.uint32(34).string(message.schema)
    }
    if (message.symbol !== '') {
      writer.uint32(42).string(message.symbol)
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(50).fork()).ldelim()
    }
    if (message.sender !== '') {
      writer.uint32(58).string(message.sender)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgNewNFTClass {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgNewNFTClass } as MsgNewNFTClass
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.uri = reader.string()
          break
        case 4:
          message.schema = reader.string()
          break
        case 5:
          message.symbol = reader.string()
          break
        case 6:
          message.data = Any.decode(reader, reader.uint32())
          break
        case 7:
          message.sender = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgNewNFTClass {
    const message = { ...baseMsgNewNFTClass } as MsgNewNFTClass
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : ''
    message.name = object.name !== undefined && object.name !== null ? String(object.name) : ''
    message.uri = object.uri !== undefined && object.uri !== null ? String(object.uri) : ''
    message.schema =
      object.schema !== undefined && object.schema !== null ? String(object.schema) : ''
    message.symbol =
      object.symbol !== undefined && object.symbol !== null ? String(object.symbol) : ''
    message.data =
      object.data !== undefined && object.data !== null ? Any.fromJSON(object.data) : undefined
    message.sender =
      object.sender !== undefined && object.sender !== null ? String(object.sender) : ''
    return message
  },

  toJSON(message: MsgNewNFTClass): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    message.uri !== undefined && (obj.uri = message.uri)
    message.schema !== undefined && (obj.schema = message.schema)
    message.symbol !== undefined && (obj.symbol = message.symbol)
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined)
    message.sender !== undefined && (obj.sender = message.sender)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewNFTClass>, I>>(object: I): MsgNewNFTClass {
    const message = { ...baseMsgNewNFTClass } as MsgNewNFTClass
    message.id = object.id ?? ''
    message.name = object.name ?? ''
    message.uri = object.uri ?? ''
    message.schema = object.schema ?? ''
    message.symbol = object.symbol ?? ''
    message.data =
      object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined
    message.sender = object.sender ?? ''
    return message
  }
}

const baseMsgNewNFTClassResponse: object = {}

export const MsgNewNFTClassResponse = {
  encode(_: MsgNewNFTClassResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgNewNFTClassResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgNewNFTClassResponse } as MsgNewNFTClassResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgNewNFTClassResponse {
    const message = { ...baseMsgNewNFTClassResponse } as MsgNewNFTClassResponse
    return message
  },

  toJSON(_: MsgNewNFTClassResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewNFTClassResponse>, I>>(
    _: I
  ): MsgNewNFTClassResponse {
    const message = { ...baseMsgNewNFTClassResponse } as MsgNewNFTClassResponse
    return message
  }
}

const baseMsgUpdateNFTClass: object = {
  id: '',
  classId: '',
  name: '',
  uri: '',
  sender: ''
}

export const MsgUpdateNFTClass = {
  encode(message: MsgUpdateNFTClass, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    if (message.classId !== '') {
      writer.uint32(18).string(message.classId)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.uri !== '') {
      writer.uint32(34).string(message.uri)
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(42).fork()).ldelim()
    }
    if (message.sender !== '') {
      writer.uint32(50).string(message.sender)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNFTClass {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateNFTClass } as MsgUpdateNFTClass
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.classId = reader.string()
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.uri = reader.string()
          break
        case 5:
          message.data = Any.decode(reader, reader.uint32())
          break
        case 6:
          message.sender = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateNFTClass {
    const message = { ...baseMsgUpdateNFTClass } as MsgUpdateNFTClass
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : ''
    message.classId =
      object.classId !== undefined && object.classId !== null ? String(object.classId) : ''
    message.name = object.name !== undefined && object.name !== null ? String(object.name) : ''
    message.uri = object.uri !== undefined && object.uri !== null ? String(object.uri) : ''
    message.data =
      object.data !== undefined && object.data !== null ? Any.fromJSON(object.data) : undefined
    message.sender =
      object.sender !== undefined && object.sender !== null ? String(object.sender) : ''
    return message
  },

  toJSON(message: MsgUpdateNFTClass): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.classId !== undefined && (obj.classId = message.classId)
    message.name !== undefined && (obj.name = message.name)
    message.uri !== undefined && (obj.uri = message.uri)
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined)
    message.sender !== undefined && (obj.sender = message.sender)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateNFTClass>, I>>(object: I): MsgUpdateNFTClass {
    const message = { ...baseMsgUpdateNFTClass } as MsgUpdateNFTClass
    message.id = object.id ?? ''
    message.classId = object.classId ?? ''
    message.name = object.name ?? ''
    message.uri = object.uri ?? ''
    message.data =
      object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined
    message.sender = object.sender ?? ''
    return message
  }
}

const baseMsgUpdateNFTClassResponse: object = {}

export const MsgUpdateNFTClassResponse = {
  encode(_: MsgUpdateNFTClassResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNFTClassResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateNFTClassResponse
    } as MsgUpdateNFTClassResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateNFTClassResponse {
    const message = {
      ...baseMsgUpdateNFTClassResponse
    } as MsgUpdateNFTClassResponse
    return message
  },

  toJSON(_: MsgUpdateNFTClassResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateNFTClassResponse>, I>>(
    _: I
  ): MsgUpdateNFTClassResponse {
    const message = {
      ...baseMsgUpdateNFTClassResponse
    } as MsgUpdateNFTClassResponse
    return message
  }
}

const baseMsgMintNFT: object = {
  id: '',
  classId: '',
  name: '',
  uri: '',
  sender: '',
  recipient: ''
}

export const MsgMintNFT = {
  encode(message: MsgMintNFT, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    if (message.classId !== '') {
      writer.uint32(18).string(message.classId)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.uri !== '') {
      writer.uint32(34).string(message.uri)
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(42).fork()).ldelim()
    }
    if (message.sender !== '') {
      writer.uint32(50).string(message.sender)
    }
    if (message.recipient !== '') {
      writer.uint32(58).string(message.recipient)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMintNFT } as MsgMintNFT
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.classId = reader.string()
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.uri = reader.string()
          break
        case 5:
          message.data = Any.decode(reader, reader.uint32())
          break
        case 6:
          message.sender = reader.string()
          break
        case 7:
          message.recipient = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgMintNFT {
    const message = { ...baseMsgMintNFT } as MsgMintNFT
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : ''
    message.classId =
      object.classId !== undefined && object.classId !== null ? String(object.classId) : ''
    message.name = object.name !== undefined && object.name !== null ? String(object.name) : ''
    message.uri = object.uri !== undefined && object.uri !== null ? String(object.uri) : ''
    message.data =
      object.data !== undefined && object.data !== null ? Any.fromJSON(object.data) : undefined
    message.sender =
      object.sender !== undefined && object.sender !== null ? String(object.sender) : ''
    message.recipient =
      object.recipient !== undefined && object.recipient !== null ? String(object.recipient) : ''
    return message
  },

  toJSON(message: MsgMintNFT): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.classId !== undefined && (obj.classId = message.classId)
    message.name !== undefined && (obj.name = message.name)
    message.uri !== undefined && (obj.uri = message.uri)
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined)
    message.sender !== undefined && (obj.sender = message.sender)
    message.recipient !== undefined && (obj.recipient = message.recipient)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFT>, I>>(object: I): MsgMintNFT {
    const message = { ...baseMsgMintNFT } as MsgMintNFT
    message.id = object.id ?? ''
    message.classId = object.classId ?? ''
    message.name = object.name ?? ''
    message.uri = object.uri ?? ''
    message.data =
      object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined
    message.sender = object.sender ?? ''
    message.recipient = object.recipient ?? ''
    return message
  }
}

const baseMsgMintNFTResponse: object = {}

export const MsgMintNFTResponse = {
  encode(_: MsgMintNFTResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgMintNFTResponse {
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse
    return message
  },

  toJSON(_: MsgMintNFTResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFTResponse>, I>>(_: I): MsgMintNFTResponse {
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse
    return message
  }
}

const baseMsgUpdateNFT: object = { id: '', classId: '', uri: '', sender: '' }

export const MsgUpdateNFT = {
  encode(message: MsgUpdateNFT, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    if (message.classId !== '') {
      writer.uint32(18).string(message.classId)
    }
    if (message.uri !== '') {
      writer.uint32(26).string(message.uri)
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(34).fork()).ldelim()
    }
    if (message.sender !== '') {
      writer.uint32(42).string(message.sender)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNFT {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateNFT } as MsgUpdateNFT
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.classId = reader.string()
          break
        case 3:
          message.uri = reader.string()
          break
        case 4:
          message.data = Any.decode(reader, reader.uint32())
          break
        case 5:
          message.sender = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateNFT {
    const message = { ...baseMsgUpdateNFT } as MsgUpdateNFT
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : ''
    message.classId =
      object.classId !== undefined && object.classId !== null ? String(object.classId) : ''
    message.uri = object.uri !== undefined && object.uri !== null ? String(object.uri) : ''
    message.data =
      object.data !== undefined && object.data !== null ? Any.fromJSON(object.data) : undefined
    message.sender =
      object.sender !== undefined && object.sender !== null ? String(object.sender) : ''
    return message
  },

  toJSON(message: MsgUpdateNFT): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.classId !== undefined && (obj.classId = message.classId)
    message.uri !== undefined && (obj.uri = message.uri)
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined)
    message.sender !== undefined && (obj.sender = message.sender)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateNFT>, I>>(object: I): MsgUpdateNFT {
    const message = { ...baseMsgUpdateNFT } as MsgUpdateNFT
    message.id = object.id ?? ''
    message.classId = object.classId ?? ''
    message.uri = object.uri ?? ''
    message.data =
      object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined
    message.sender = object.sender ?? ''
    return message
  }
}

const baseMsgUpdateNFTResponse: object = {}

export const MsgUpdateNFTResponse = {
  encode(_: MsgUpdateNFTResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNFTResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateNFTResponse } as MsgUpdateNFTResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateNFTResponse {
    const message = { ...baseMsgUpdateNFTResponse } as MsgUpdateNFTResponse
    return message
  },

  toJSON(_: MsgUpdateNFTResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateNFTResponse>, I>>(_: I): MsgUpdateNFTResponse {
    const message = { ...baseMsgUpdateNFTResponse } as MsgUpdateNFTResponse
    return message
  }
}

const baseMsgBurnNFT: object = { id: '', classId: '', sender: '' }

export const MsgBurnNFT = {
  encode(message: MsgBurnNFT, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    if (message.classId !== '') {
      writer.uint32(18).string(message.classId)
    }
    if (message.sender !== '') {
      writer.uint32(26).string(message.sender)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnNFT {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBurnNFT } as MsgBurnNFT
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.classId = reader.string()
          break
        case 3:
          message.sender = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgBurnNFT {
    const message = { ...baseMsgBurnNFT } as MsgBurnNFT
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : ''
    message.classId =
      object.classId !== undefined && object.classId !== null ? String(object.classId) : ''
    message.sender =
      object.sender !== undefined && object.sender !== null ? String(object.sender) : ''
    return message
  },

  toJSON(message: MsgBurnNFT): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.classId !== undefined && (obj.classId = message.classId)
    message.sender !== undefined && (obj.sender = message.sender)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFT>, I>>(object: I): MsgBurnNFT {
    const message = { ...baseMsgBurnNFT } as MsgBurnNFT
    message.id = object.id ?? ''
    message.classId = object.classId ?? ''
    message.sender = object.sender ?? ''
    return message
  }
}

const baseMsgBurnNFTResponse: object = {}

export const MsgBurnNFTResponse = {
  encode(_: MsgBurnNFTResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnNFTResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBurnNFTResponse } as MsgBurnNFTResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgBurnNFTResponse {
    const message = { ...baseMsgBurnNFTResponse } as MsgBurnNFTResponse
    return message
  },

  toJSON(_: MsgBurnNFTResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFTResponse>, I>>(_: I): MsgBurnNFTResponse {
    const message = { ...baseMsgBurnNFTResponse } as MsgBurnNFTResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** NewDenom defines a method for create a new denom. */
  NewDenom(request: MsgNewDenom): Promise<MsgNewDenomResponse>
  NewNFTClass(request: MsgNewNFTClass): Promise<MsgNewNFTClassResponse>
  UpdateNFTClass(request: MsgUpdateNFTClass): Promise<MsgUpdateNFTClassResponse>
  /** MintNFT defines a method for mint a new nft */
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>
  /** UpdateNFT defines a method for editing a nft. */
  UpdateNFT(request: MsgUpdateNFT): Promise<MsgUpdateNFTResponse>
  /** BurnNFT defines a method for burning a nft. */
  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateUserInfo(request: MsgCreateUserInfo): Promise<MsgCreateUserInfoResponse>
  UpdateUserInfo(request: MsgUpdateUserInfo): Promise<MsgUpdateUserInfoResponse>
  DeleteUserInfo(request: MsgDeleteUserInfo): Promise<MsgDeleteUserInfoResponse>
  CreateUserRelation(request: MsgCreateUserRelation): Promise<MsgCreateUserRelationResponse>
  UpdateUserRelation(request: MsgUpdateUserRelation): Promise<MsgUpdateUserRelationResponse>
  DeleteUserRelation(request: MsgDeleteUserRelation): Promise<MsgDeleteUserRelationResponse>
  CreateAppInfo(request: MsgCreateAppInfo): Promise<MsgCreateAppInfoResponse>
  UpdateAppInfo(request: MsgUpdateAppInfo): Promise<MsgUpdateAppInfoResponse>
  DeleteAppInfo(request: MsgDeleteAppInfo): Promise<MsgDeleteAppInfoResponse>
  CreateDidRegistry(request: MsgCreateDidRegistry): Promise<MsgCreateDidRegistryResponse>
  UpdateDidRegistry(request: MsgUpdateDidRegistry): Promise<MsgUpdateDidRegistryResponse>
  DeleteDidRegistry(request: MsgDeleteDidRegistry): Promise<MsgDeleteDidRegistryResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.NewDenom = this.NewDenom.bind(this)
    this.NewNFTClass = this.NewNFTClass.bind(this)
    this.UpdateNFTClass = this.UpdateNFTClass.bind(this)
    this.MintNFT = this.MintNFT.bind(this)
    this.UpdateNFT = this.UpdateNFT.bind(this)
    this.BurnNFT = this.BurnNFT.bind(this)
    this.CreateUserInfo = this.CreateUserInfo.bind(this)
    this.UpdateUserInfo = this.UpdateUserInfo.bind(this)
    this.DeleteUserInfo = this.DeleteUserInfo.bind(this)
    this.CreateUserRelation = this.CreateUserRelation.bind(this)
    this.UpdateUserRelation = this.UpdateUserRelation.bind(this)
    this.DeleteUserRelation = this.DeleteUserRelation.bind(this)
    this.CreateAppInfo = this.CreateAppInfo.bind(this)
    this.UpdateAppInfo = this.UpdateAppInfo.bind(this)
    this.DeleteAppInfo = this.DeleteAppInfo.bind(this)
    this.CreateDidRegistry = this.CreateDidRegistry.bind(this)
    this.UpdateDidRegistry = this.UpdateDidRegistry.bind(this)
    this.DeleteDidRegistry = this.DeleteDidRegistry.bind(this)
  }
  NewDenom(request: MsgNewDenom): Promise<MsgNewDenomResponse> {
    const data = MsgNewDenom.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'NewDenom', data)
    return promise.then(data => MsgNewDenomResponse.decode(new Reader(data)))
  }

  NewNFTClass(request: MsgNewNFTClass): Promise<MsgNewNFTClassResponse> {
    const data = MsgNewNFTClass.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'NewNFTClass', data)
    return promise.then(data => MsgNewNFTClassResponse.decode(new Reader(data)))
  }

  UpdateNFTClass(request: MsgUpdateNFTClass): Promise<MsgUpdateNFTClassResponse> {
    const data = MsgUpdateNFTClass.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateNFTClass', data)
    return promise.then(data => MsgUpdateNFTClassResponse.decode(new Reader(data)))
  }

  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'MintNFT', data)
    return promise.then(data => MsgMintNFTResponse.decode(new Reader(data)))
  }

  UpdateNFT(request: MsgUpdateNFT): Promise<MsgUpdateNFTResponse> {
    const data = MsgUpdateNFT.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateNFT', data)
    return promise.then(data => MsgUpdateNFTResponse.decode(new Reader(data)))
  }

  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'BurnNFT', data)
    return promise.then(data => MsgBurnNFTResponse.decode(new Reader(data)))
  }

  CreateUserInfo(request: MsgCreateUserInfo): Promise<MsgCreateUserInfoResponse> {
    const data = MsgCreateUserInfo.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'CreateUserInfo', data)
    return promise.then(data => MsgCreateUserInfoResponse.decode(new Reader(data)))
  }

  UpdateUserInfo(request: MsgUpdateUserInfo): Promise<MsgUpdateUserInfoResponse> {
    const data = MsgUpdateUserInfo.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateUserInfo', data)
    return promise.then(data => MsgUpdateUserInfoResponse.decode(new Reader(data)))
  }

  DeleteUserInfo(request: MsgDeleteUserInfo): Promise<MsgDeleteUserInfoResponse> {
    const data = MsgDeleteUserInfo.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'DeleteUserInfo', data)
    return promise.then(data => MsgDeleteUserInfoResponse.decode(new Reader(data)))
  }

  CreateUserRelation(request: MsgCreateUserRelation): Promise<MsgCreateUserRelationResponse> {
    const data = MsgCreateUserRelation.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'CreateUserRelation', data)
    return promise.then(data => MsgCreateUserRelationResponse.decode(new Reader(data)))
  }

  UpdateUserRelation(request: MsgUpdateUserRelation): Promise<MsgUpdateUserRelationResponse> {
    const data = MsgUpdateUserRelation.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateUserRelation', data)
    return promise.then(data => MsgUpdateUserRelationResponse.decode(new Reader(data)))
  }

  DeleteUserRelation(request: MsgDeleteUserRelation): Promise<MsgDeleteUserRelationResponse> {
    const data = MsgDeleteUserRelation.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'DeleteUserRelation', data)
    return promise.then(data => MsgDeleteUserRelationResponse.decode(new Reader(data)))
  }

  CreateAppInfo(request: MsgCreateAppInfo): Promise<MsgCreateAppInfoResponse> {
    const data = MsgCreateAppInfo.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'CreateAppInfo', data)
    return promise.then(data => MsgCreateAppInfoResponse.decode(new Reader(data)))
  }

  UpdateAppInfo(request: MsgUpdateAppInfo): Promise<MsgUpdateAppInfoResponse> {
    const data = MsgUpdateAppInfo.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateAppInfo', data)
    return promise.then(data => MsgUpdateAppInfoResponse.decode(new Reader(data)))
  }

  DeleteAppInfo(request: MsgDeleteAppInfo): Promise<MsgDeleteAppInfoResponse> {
    const data = MsgDeleteAppInfo.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'DeleteAppInfo', data)
    return promise.then(data => MsgDeleteAppInfoResponse.decode(new Reader(data)))
  }

  CreateDidRegistry(request: MsgCreateDidRegistry): Promise<MsgCreateDidRegistryResponse> {
    const data = MsgCreateDidRegistry.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'CreateDidRegistry', data)
    return promise.then(data => MsgCreateDidRegistryResponse.decode(new Reader(data)))
  }

  UpdateDidRegistry(request: MsgUpdateDidRegistry): Promise<MsgUpdateDidRegistryResponse> {
    const data = MsgUpdateDidRegistry.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateDidRegistry', data)
    return promise.then(data => MsgUpdateDidRegistryResponse.decode(new Reader(data)))
  }

  DeleteDidRegistry(request: MsgDeleteDidRegistry): Promise<MsgDeleteDidRegistryResponse> {
    const data = MsgDeleteDidRegistry.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'DeleteDidRegistry', data)
    return promise.then(data => MsgDeleteDidRegistryResponse.decode(new Reader(data)))
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
