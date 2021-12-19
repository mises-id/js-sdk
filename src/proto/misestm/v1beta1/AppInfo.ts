/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

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
  encode(message: AppInfo, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): AppInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
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

  fromPartial<I extends Exact<DeepPartial<AppInfo>, I>>(object: I): AppInfo {
    const message = { ...baseAppInfo } as AppInfo
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
