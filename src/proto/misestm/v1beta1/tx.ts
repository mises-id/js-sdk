/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'
import { PublicUserInfo, PrivateUserInfo } from '../../misestm/v1beta1/UserInfo'
import { Metadata } from '../../cosmos/bank/v1beta1/bank'
import { Any } from '../../google/protobuf/any'

export const protobufPackage = 'misesid.misestm.v1beta1'

export interface MsgUpdateUserInfo {
  creator: string
  uid: string
  pubInfo?: PublicUserInfo
  priInfo?: PrivateUserInfo
  version: Long
}

export interface MsgUpdateUserInfoResponse {}

export interface MsgUpdateUserRelation {
  creator: string
  uidFrom: string
  uidTo: string
  isFollowing: boolean
  isBlocking: boolean
  isReferredBy: boolean
  version: Long
}

export interface MsgUpdateUserRelationResponse {}

export interface MsgUpdateAppInfo {
  creator: string
  appid: string
  name: string
  domains: string[]
  developer: string
  homeUrl: string
  iconUrl: string
  version: Long
}

export interface MsgUpdateAppInfoResponse {}

export interface MsgCreateDidRegistry {
  creator: string
  did: string
  pkeyDid: string
  pkeyType: string
  pkeyMultibase: string
  version: Long
}

export interface MsgCreateDidRegistryResponse {}

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

const baseMsgUpdateUserInfo: object = {
  creator: '',
  uid: '',
  version: Long.UZERO
}

export const MsgUpdateUserInfo = {
  encode(message: MsgUpdateUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.uid !== '') {
      writer.uint32(18).string(message.uid)
    }
    if (message.pubInfo !== undefined) {
      PublicUserInfo.encode(message.pubInfo, writer.uint32(26).fork()).ldelim()
    }
    if (message.priInfo !== undefined) {
      PrivateUserInfo.encode(message.priInfo, writer.uint32(34).fork()).ldelim()
    }
    if (!message.version.isZero()) {
      writer.uint32(40).uint64(message.version)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateUserInfo } as MsgUpdateUserInfo
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
          message.pubInfo = PublicUserInfo.decode(reader, reader.uint32())
          break
        case 4:
          message.priInfo = PrivateUserInfo.decode(reader, reader.uint32())
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

  fromJSON(object: any): MsgUpdateUserInfo {
    const message = { ...baseMsgUpdateUserInfo } as MsgUpdateUserInfo
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid)
    } else {
      message.uid = ''
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
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version)
    } else {
      message.version = Long.UZERO
    }
    return message
  },

  toJSON(message: MsgUpdateUserInfo): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.uid !== undefined && (obj.uid = message.uid)
    message.pubInfo !== undefined &&
      (obj.pubInfo = message.pubInfo ? PublicUserInfo.toJSON(message.pubInfo) : undefined)
    message.priInfo !== undefined &&
      (obj.priInfo = message.priInfo ? PrivateUserInfo.toJSON(message.priInfo) : undefined)
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString())
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateUserInfo>): MsgUpdateUserInfo {
    const message = { ...baseMsgUpdateUserInfo } as MsgUpdateUserInfo
    message.creator = object.creator ?? ''
    message.uid = object.uid ?? ''
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

const baseMsgUpdateUserInfoResponse: object = {}

export const MsgUpdateUserInfoResponse = {
  encode(_: MsgUpdateUserInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromPartial(_: DeepPartial<MsgUpdateUserInfoResponse>): MsgUpdateUserInfoResponse {
    const message = {
      ...baseMsgUpdateUserInfoResponse
    } as MsgUpdateUserInfoResponse
    return message
  }
}

const baseMsgUpdateUserRelation: object = {
  creator: '',
  uidFrom: '',
  uidTo: '',
  isFollowing: false,
  isBlocking: false,
  isReferredBy: false,
  version: Long.UZERO
}

export const MsgUpdateUserRelation = {
  encode(message: MsgUpdateUserRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserRelation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateUserRelation } as MsgUpdateUserRelation
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

  fromJSON(object: any): MsgUpdateUserRelation {
    const message = { ...baseMsgUpdateUserRelation } as MsgUpdateUserRelation
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.uidFrom !== undefined && object.uidFrom !== null) {
      message.uidFrom = String(object.uidFrom)
    } else {
      message.uidFrom = ''
    }
    if (object.uidTo !== undefined && object.uidTo !== null) {
      message.uidTo = String(object.uidTo)
    } else {
      message.uidTo = ''
    }
    if (object.isFollowing !== undefined && object.isFollowing !== null) {
      message.isFollowing = Boolean(object.isFollowing)
    } else {
      message.isFollowing = false
    }
    if (object.isBlocking !== undefined && object.isBlocking !== null) {
      message.isBlocking = Boolean(object.isBlocking)
    } else {
      message.isBlocking = false
    }
    if (object.isReferredBy !== undefined && object.isReferredBy !== null) {
      message.isReferredBy = Boolean(object.isReferredBy)
    } else {
      message.isReferredBy = false
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version)
    } else {
      message.version = Long.UZERO
    }
    return message
  },

  toJSON(message: MsgUpdateUserRelation): unknown {
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

  fromPartial(object: DeepPartial<MsgUpdateUserRelation>): MsgUpdateUserRelation {
    const message = { ...baseMsgUpdateUserRelation } as MsgUpdateUserRelation
    message.creator = object.creator ?? ''
    message.uidFrom = object.uidFrom ?? ''
    message.uidTo = object.uidTo ?? ''
    message.isFollowing = object.isFollowing ?? false
    message.isBlocking = object.isBlocking ?? false
    message.isReferredBy = object.isReferredBy ?? false
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version as Long
    } else {
      message.version = Long.UZERO
    }
    return message
  }
}

const baseMsgUpdateUserRelationResponse: object = {}

export const MsgUpdateUserRelationResponse = {
  encode(_: MsgUpdateUserRelationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserRelationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromPartial(_: DeepPartial<MsgUpdateUserRelationResponse>): MsgUpdateUserRelationResponse {
    const message = {
      ...baseMsgUpdateUserRelationResponse
    } as MsgUpdateUserRelationResponse
    return message
  }
}

const baseMsgUpdateAppInfo: object = {
  creator: '',
  appid: '',
  name: '',
  domains: '',
  developer: '',
  homeUrl: '',
  iconUrl: '',
  version: Long.UZERO
}

export const MsgUpdateAppInfo = {
  encode(message: MsgUpdateAppInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAppInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromJSON(object: any): MsgUpdateAppInfo {
    const message = { ...baseMsgUpdateAppInfo } as MsgUpdateAppInfo
    message.domains = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.appid !== undefined && object.appid !== null) {
      message.appid = String(object.appid)
    } else {
      message.appid = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.domains !== undefined && object.domains !== null) {
      for (const e of object.domains) {
        message.domains.push(String(e))
      }
    }
    if (object.developer !== undefined && object.developer !== null) {
      message.developer = String(object.developer)
    } else {
      message.developer = ''
    }
    if (object.homeUrl !== undefined && object.homeUrl !== null) {
      message.homeUrl = String(object.homeUrl)
    } else {
      message.homeUrl = ''
    }
    if (object.iconUrl !== undefined && object.iconUrl !== null) {
      message.iconUrl = String(object.iconUrl)
    } else {
      message.iconUrl = ''
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version)
    } else {
      message.version = Long.UZERO
    }
    return message
  },

  toJSON(message: MsgUpdateAppInfo): unknown {
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

  fromPartial(object: DeepPartial<MsgUpdateAppInfo>): MsgUpdateAppInfo {
    const message = { ...baseMsgUpdateAppInfo } as MsgUpdateAppInfo
    message.creator = object.creator ?? ''
    message.appid = object.appid ?? ''
    message.name = object.name ?? ''
    message.domains = []
    if (object.domains !== undefined && object.domains !== null) {
      for (const e of object.domains) {
        message.domains.push(e)
      }
    }
    message.developer = object.developer ?? ''
    message.homeUrl = object.homeUrl ?? ''
    message.iconUrl = object.iconUrl ?? ''
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version as Long
    } else {
      message.version = Long.UZERO
    }
    return message
  }
}

const baseMsgUpdateAppInfoResponse: object = {}

export const MsgUpdateAppInfoResponse = {
  encode(_: MsgUpdateAppInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAppInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromPartial(_: DeepPartial<MsgUpdateAppInfoResponse>): MsgUpdateAppInfoResponse {
    const message = {
      ...baseMsgUpdateAppInfoResponse
    } as MsgUpdateAppInfoResponse
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
  encode(message: MsgCreateDidRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidRegistry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did)
    } else {
      message.did = ''
    }
    if (object.pkeyDid !== undefined && object.pkeyDid !== null) {
      message.pkeyDid = String(object.pkeyDid)
    } else {
      message.pkeyDid = ''
    }
    if (object.pkeyType !== undefined && object.pkeyType !== null) {
      message.pkeyType = String(object.pkeyType)
    } else {
      message.pkeyType = ''
    }
    if (object.pkeyMultibase !== undefined && object.pkeyMultibase !== null) {
      message.pkeyMultibase = String(object.pkeyMultibase)
    } else {
      message.pkeyMultibase = ''
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version)
    } else {
      message.version = Long.UZERO
    }
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

  fromPartial(object: DeepPartial<MsgCreateDidRegistry>): MsgCreateDidRegistry {
    const message = { ...baseMsgCreateDidRegistry } as MsgCreateDidRegistry
    message.creator = object.creator ?? ''
    message.did = object.did ?? ''
    message.pkeyDid = object.pkeyDid ?? ''
    message.pkeyType = object.pkeyType ?? ''
    message.pkeyMultibase = object.pkeyMultibase ?? ''
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version as Long
    } else {
      message.version = Long.UZERO
    }
    return message
  }
}

const baseMsgCreateDidRegistryResponse: object = {}

export const MsgCreateDidRegistryResponse = {
  encode(_: MsgCreateDidRegistryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidRegistryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateDidRegistryResponse
    } as MsgCreateDidRegistryResponse
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

  fromJSON(_: any): MsgCreateDidRegistryResponse {
    const message = {
      ...baseMsgCreateDidRegistryResponse
    } as MsgCreateDidRegistryResponse
    return message
  },

  toJSON(_: MsgCreateDidRegistryResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateDidRegistryResponse>): MsgCreateDidRegistryResponse {
    const message = {
      ...baseMsgCreateDidRegistryResponse
    } as MsgCreateDidRegistryResponse
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
  encode(message: MsgNewDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.denomMeta !== undefined && object.denomMeta !== null) {
      message.denomMeta = Metadata.fromJSON(object.denomMeta)
    } else {
      message.denomMeta = undefined
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient)
    } else {
      message.recipient = ''
    }
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

  fromPartial(object: DeepPartial<MsgNewDenom>): MsgNewDenom {
    const message = { ...baseMsgNewDenom } as MsgNewDenom
    message.id = object.id ?? ''
    message.amount = object.amount ?? ''
    if (object.denomMeta !== undefined && object.denomMeta !== null) {
      message.denomMeta = Metadata.fromPartial(object.denomMeta)
    } else {
      message.denomMeta = undefined
    }
    message.sender = object.sender ?? ''
    message.recipient = object.recipient ?? ''
    return message
  }
}

const baseMsgNewDenomResponse: object = {}

export const MsgNewDenomResponse = {
  encode(_: MsgNewDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromPartial(_: DeepPartial<MsgNewDenomResponse>): MsgNewDenomResponse {
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
  encode(message: MsgNewNFTClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewNFTClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri)
    } else {
      message.uri = ''
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = String(object.schema)
    } else {
      message.schema = ''
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol)
    } else {
      message.symbol = ''
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data)
    } else {
      message.data = undefined
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
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

  fromPartial(object: DeepPartial<MsgNewNFTClass>): MsgNewNFTClass {
    const message = { ...baseMsgNewNFTClass } as MsgNewNFTClass
    message.id = object.id ?? ''
    message.name = object.name ?? ''
    message.uri = object.uri ?? ''
    message.schema = object.schema ?? ''
    message.symbol = object.symbol ?? ''
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data)
    } else {
      message.data = undefined
    }
    message.sender = object.sender ?? ''
    return message
  }
}

const baseMsgNewNFTClassResponse: object = {}

export const MsgNewNFTClassResponse = {
  encode(_: MsgNewNFTClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewNFTClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromPartial(_: DeepPartial<MsgNewNFTClassResponse>): MsgNewNFTClassResponse {
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
  encode(message: MsgUpdateNFTClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNFTClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId)
    } else {
      message.classId = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri)
    } else {
      message.uri = ''
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data)
    } else {
      message.data = undefined
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
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

  fromPartial(object: DeepPartial<MsgUpdateNFTClass>): MsgUpdateNFTClass {
    const message = { ...baseMsgUpdateNFTClass } as MsgUpdateNFTClass
    message.id = object.id ?? ''
    message.classId = object.classId ?? ''
    message.name = object.name ?? ''
    message.uri = object.uri ?? ''
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data)
    } else {
      message.data = undefined
    }
    message.sender = object.sender ?? ''
    return message
  }
}

const baseMsgUpdateNFTClassResponse: object = {}

export const MsgUpdateNFTClassResponse = {
  encode(_: MsgUpdateNFTClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNFTClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromPartial(_: DeepPartial<MsgUpdateNFTClassResponse>): MsgUpdateNFTClassResponse {
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
  encode(message: MsgMintNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId)
    } else {
      message.classId = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri)
    } else {
      message.uri = ''
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data)
    } else {
      message.data = undefined
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient)
    } else {
      message.recipient = ''
    }
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

  fromPartial(object: DeepPartial<MsgMintNFT>): MsgMintNFT {
    const message = { ...baseMsgMintNFT } as MsgMintNFT
    message.id = object.id ?? ''
    message.classId = object.classId ?? ''
    message.name = object.name ?? ''
    message.uri = object.uri ?? ''
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data)
    } else {
      message.data = undefined
    }
    message.sender = object.sender ?? ''
    message.recipient = object.recipient ?? ''
    return message
  }
}

const baseMsgMintNFTResponse: object = {}

export const MsgMintNFTResponse = {
  encode(_: MsgMintNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromPartial(_: DeepPartial<MsgMintNFTResponse>): MsgMintNFTResponse {
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse
    return message
  }
}

const baseMsgUpdateNFT: object = { id: '', classId: '', uri: '', sender: '' }

export const MsgUpdateNFT = {
  encode(message: MsgUpdateNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId)
    } else {
      message.classId = ''
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri)
    } else {
      message.uri = ''
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data)
    } else {
      message.data = undefined
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
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

  fromPartial(object: DeepPartial<MsgUpdateNFT>): MsgUpdateNFT {
    const message = { ...baseMsgUpdateNFT } as MsgUpdateNFT
    message.id = object.id ?? ''
    message.classId = object.classId ?? ''
    message.uri = object.uri ?? ''
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data)
    } else {
      message.data = undefined
    }
    message.sender = object.sender ?? ''
    return message
  }
}

const baseMsgUpdateNFTResponse: object = {}

export const MsgUpdateNFTResponse = {
  encode(_: MsgUpdateNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromPartial(_: DeepPartial<MsgUpdateNFTResponse>): MsgUpdateNFTResponse {
    const message = { ...baseMsgUpdateNFTResponse } as MsgUpdateNFTResponse
    return message
  }
}

const baseMsgBurnNFT: object = { id: '', classId: '', sender: '' }

export const MsgBurnNFT = {
  encode(message: MsgBurnNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId)
    } else {
      message.classId = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    return message
  },

  toJSON(message: MsgBurnNFT): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.classId !== undefined && (obj.classId = message.classId)
    message.sender !== undefined && (obj.sender = message.sender)
    return obj
  },

  fromPartial(object: DeepPartial<MsgBurnNFT>): MsgBurnNFT {
    const message = { ...baseMsgBurnNFT } as MsgBurnNFT
    message.id = object.id ?? ''
    message.classId = object.classId ?? ''
    message.sender = object.sender ?? ''
    return message
  }
}

const baseMsgBurnNFTResponse: object = {}

export const MsgBurnNFTResponse = {
  encode(_: MsgBurnNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromPartial(_: DeepPartial<MsgBurnNFTResponse>): MsgBurnNFTResponse {
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
  UpdateUserInfo(request: MsgUpdateUserInfo): Promise<MsgUpdateUserInfoResponse>
  UpdateUserRelation(request: MsgUpdateUserRelation): Promise<MsgUpdateUserRelationResponse>
  UpdateAppInfo(request: MsgUpdateAppInfo): Promise<MsgUpdateAppInfoResponse>
  CreateDidRegistry(request: MsgCreateDidRegistry): Promise<MsgCreateDidRegistryResponse>
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
    this.UpdateUserInfo = this.UpdateUserInfo.bind(this)
    this.UpdateUserRelation = this.UpdateUserRelation.bind(this)
    this.UpdateAppInfo = this.UpdateAppInfo.bind(this)
    this.CreateDidRegistry = this.CreateDidRegistry.bind(this)
  }
  NewDenom(request: MsgNewDenom): Promise<MsgNewDenomResponse> {
    const data = MsgNewDenom.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'NewDenom', data)
    return promise.then(data => MsgNewDenomResponse.decode(new _m0.Reader(data)))
  }

  NewNFTClass(request: MsgNewNFTClass): Promise<MsgNewNFTClassResponse> {
    const data = MsgNewNFTClass.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'NewNFTClass', data)
    return promise.then(data => MsgNewNFTClassResponse.decode(new _m0.Reader(data)))
  }

  UpdateNFTClass(request: MsgUpdateNFTClass): Promise<MsgUpdateNFTClassResponse> {
    const data = MsgUpdateNFTClass.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateNFTClass', data)
    return promise.then(data => MsgUpdateNFTClassResponse.decode(new _m0.Reader(data)))
  }

  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'MintNFT', data)
    return promise.then(data => MsgMintNFTResponse.decode(new _m0.Reader(data)))
  }

  UpdateNFT(request: MsgUpdateNFT): Promise<MsgUpdateNFTResponse> {
    const data = MsgUpdateNFT.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateNFT', data)
    return promise.then(data => MsgUpdateNFTResponse.decode(new _m0.Reader(data)))
  }

  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'BurnNFT', data)
    return promise.then(data => MsgBurnNFTResponse.decode(new _m0.Reader(data)))
  }

  UpdateUserInfo(request: MsgUpdateUserInfo): Promise<MsgUpdateUserInfoResponse> {
    const data = MsgUpdateUserInfo.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateUserInfo', data)
    return promise.then(data => MsgUpdateUserInfoResponse.decode(new _m0.Reader(data)))
  }

  UpdateUserRelation(request: MsgUpdateUserRelation): Promise<MsgUpdateUserRelationResponse> {
    const data = MsgUpdateUserRelation.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateUserRelation', data)
    return promise.then(data => MsgUpdateUserRelationResponse.decode(new _m0.Reader(data)))
  }

  UpdateAppInfo(request: MsgUpdateAppInfo): Promise<MsgUpdateAppInfoResponse> {
    const data = MsgUpdateAppInfo.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateAppInfo', data)
    return promise.then(data => MsgUpdateAppInfoResponse.decode(new _m0.Reader(data)))
  }

  CreateDidRegistry(request: MsgCreateDidRegistry): Promise<MsgCreateDidRegistryResponse> {
    const data = MsgCreateDidRegistry.encode(request).finish()
    const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'CreateDidRegistry', data)
    return promise.then(data => MsgCreateDidRegistryResponse.decode(new _m0.Reader(data)))
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
