/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'misesid.misestm.v1beta1'

export interface UserRelation {
  creator: string
  id: Long
  uidFrom: string
  uidTo: string
  isFollowing: boolean
  isBlocking: boolean
  isReferredBy: boolean
  version: Long
}

const baseUserRelation: object = {
  creator: '',
  id: Long.UZERO,
  uidFrom: '',
  uidTo: '',
  isFollowing: false,
  isBlocking: false,
  isReferredBy: false,
  version: Long.UZERO
}

export const UserRelation = {
  encode(message: UserRelation, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): UserRelation {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseUserRelation } as UserRelation
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

  fromJSON(object: any): UserRelation {
    const message = { ...baseUserRelation } as UserRelation
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

  toJSON(message: UserRelation): unknown {
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

  fromPartial<I extends Exact<DeepPartial<UserRelation>, I>>(object: I): UserRelation {
    const message = { ...baseUserRelation } as UserRelation
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
