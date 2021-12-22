/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'misesid.misestm.v1beta1'

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

export interface UserInfo {
  creator: string
  id: Long
  uid: string
  pubInfo?: PublicUserInfo
  priInfo?: PrivateUserInfo
  version: Long
}

const basePrivateUserInfo: object = { encData: '', iv: '' }

export const PrivateUserInfo = {
  encode(message: PrivateUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encData !== '') {
      writer.uint32(10).string(message.encData)
    }
    if (message.iv !== '') {
      writer.uint32(18).string(message.iv)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrivateUserInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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
    if (object.encData !== undefined && object.encData !== null) {
      message.encData = String(object.encData)
    } else {
      message.encData = ''
    }
    if (object.iv !== undefined && object.iv !== null) {
      message.iv = String(object.iv)
    } else {
      message.iv = ''
    }
    return message
  },

  toJSON(message: PrivateUserInfo): unknown {
    const obj: any = {}
    message.encData !== undefined && (obj.encData = message.encData)
    message.iv !== undefined && (obj.iv = message.iv)
    return obj
  },

  fromPartial(object: DeepPartial<PrivateUserInfo>): PrivateUserInfo {
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
  encode(message: PublicUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PublicUserInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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
    message.emails = []
    message.telephones = []
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = String(object.gender)
    } else {
      message.gender = ''
    }
    if (object.avatarUrl !== undefined && object.avatarUrl !== null) {
      message.avatarUrl = String(object.avatarUrl)
    } else {
      message.avatarUrl = ''
    }
    if (object.homePageUrl !== undefined && object.homePageUrl !== null) {
      message.homePageUrl = String(object.homePageUrl)
    } else {
      message.homePageUrl = ''
    }
    if (object.emails !== undefined && object.emails !== null) {
      for (const e of object.emails) {
        message.emails.push(String(e))
      }
    }
    if (object.telephones !== undefined && object.telephones !== null) {
      for (const e of object.telephones) {
        message.telephones.push(String(e))
      }
    }
    if (object.intro !== undefined && object.intro !== null) {
      message.intro = String(object.intro)
    } else {
      message.intro = ''
    }
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

  fromPartial(object: DeepPartial<PublicUserInfo>): PublicUserInfo {
    const message = { ...basePublicUserInfo } as PublicUserInfo
    message.name = object.name ?? ''
    message.gender = object.gender ?? ''
    message.avatarUrl = object.avatarUrl ?? ''
    message.homePageUrl = object.homePageUrl ?? ''
    message.emails = []
    if (object.emails !== undefined && object.emails !== null) {
      for (const e of object.emails) {
        message.emails.push(e)
      }
    }
    message.telephones = []
    if (object.telephones !== undefined && object.telephones !== null) {
      for (const e of object.telephones) {
        message.telephones.push(e)
      }
    }
    message.intro = object.intro ?? ''
    return message
  }
}

const baseUserInfo: object = {
  creator: '',
  id: Long.UZERO,
  uid: '',
  version: Long.UZERO
}

export const UserInfo = {
  encode(message: UserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.uid !== '') {
      writer.uint32(26).string(message.uid)
    }
    if (message.pubInfo !== undefined) {
      PublicUserInfo.encode(message.pubInfo, writer.uint32(34).fork()).ldelim()
    }
    if (message.priInfo !== undefined) {
      PrivateUserInfo.encode(message.priInfo, writer.uint32(42).fork()).ldelim()
    }
    if (!message.version.isZero()) {
      writer.uint32(48).uint64(message.version)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseUserInfo } as UserInfo
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
          message.pubInfo = PublicUserInfo.decode(reader, reader.uint32())
          break
        case 5:
          message.priInfo = PrivateUserInfo.decode(reader, reader.uint32())
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

  fromJSON(object: any): UserInfo {
    const message = { ...baseUserInfo } as UserInfo
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id)
    } else {
      message.id = Long.UZERO
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

  toJSON(message: UserInfo): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    message.uid !== undefined && (obj.uid = message.uid)
    message.pubInfo !== undefined &&
      (obj.pubInfo = message.pubInfo ? PublicUserInfo.toJSON(message.pubInfo) : undefined)
    message.priInfo !== undefined &&
      (obj.priInfo = message.priInfo ? PrivateUserInfo.toJSON(message.priInfo) : undefined)
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString())
    return obj
  },

  fromPartial(object: DeepPartial<UserInfo>): UserInfo {
    const message = { ...baseUserInfo } as UserInfo
    message.creator = object.creator ?? ''
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long
    } else {
      message.id = Long.UZERO
    }
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
