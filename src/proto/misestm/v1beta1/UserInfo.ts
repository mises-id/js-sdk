/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'misesid.misestm.v1beta1'

export interface UserInfo {
  creator: string
  id: Long
  uid: string
  encData: string
  iv: string
  version: Long
}

const baseUserInfo: object = {
  creator: '',
  id: Long.UZERO,
  uid: '',
  encData: '',
  iv: '',
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
    message.encData !== undefined && (obj.encData = message.encData)
    message.iv !== undefined && (obj.iv = message.iv)
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
    message.encData = object.encData ?? ''
    message.iv = object.iv ?? ''
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
