/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'

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
  encode(message: DidRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DidRegistry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromPartial(object: DeepPartial<DidRegistry>): DidRegistry {
    const message = { ...baseDidRegistry } as DidRegistry
    message.creator = object.creator ?? ''
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long
    } else {
      message.id = Long.UZERO
    }
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
