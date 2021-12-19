/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'misesid.misestm.v1beta1'

export interface DidRegistry {
  creator: string
  id: Long
  did: string
  pkeyDid: string
  pkeyType: string
  pkeyMultibase: string
  version: Long
}

const baseDidRegistry: object = {
  creator: '',
  id: Long.UZERO,
  did: '',
  pkeyDid: '',
  pkeyType: '',
  pkeyMultibase: '',
  version: Long.UZERO
}

export const DidRegistry = {
  encode(message: DidRegistry, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): DidRegistry {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseDidRegistry } as DidRegistry
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

  fromJSON(object: any): DidRegistry {
    const message = { ...baseDidRegistry } as DidRegistry
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

  toJSON(message: DidRegistry): unknown {
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

  fromPartial<I extends Exact<DeepPartial<DidRegistry>, I>>(object: I): DidRegistry {
    const message = { ...baseDidRegistry } as DidRegistry
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
