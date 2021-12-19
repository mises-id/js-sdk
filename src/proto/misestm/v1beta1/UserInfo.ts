/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

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
  encode(message: UserInfo, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): UserInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
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

  fromPartial<I extends Exact<DeepPartial<UserInfo>, I>>(object: I): UserInfo {
    const message = { ...baseUserInfo } as UserInfo
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
