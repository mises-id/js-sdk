/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'

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
  encode(message: UserRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRelation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
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

  fromPartial(object: DeepPartial<UserRelation>): UserRelation {
    const message = { ...baseUserRelation } as UserRelation
    message.creator = object.creator ?? ''
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long
    } else {
      message.id = Long.UZERO
    }
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
