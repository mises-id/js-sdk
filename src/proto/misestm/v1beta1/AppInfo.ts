/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'misesid.misestm.v1beta1'

export interface AppInfo {
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

const baseAppInfo: object = {
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

export const AppInfo = {
  encode(message: AppInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AppInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAppInfo } as AppInfo
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

  fromJSON(object: any): AppInfo {
    const message = { ...baseAppInfo } as AppInfo
    message.domains = []
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

  toJSON(message: AppInfo): unknown {
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

  fromPartial(object: DeepPartial<AppInfo>): AppInfo {
    const message = { ...baseAppInfo } as AppInfo
    message.creator = object.creator ?? ''
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long
    } else {
      message.id = Long.UZERO
    }
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
