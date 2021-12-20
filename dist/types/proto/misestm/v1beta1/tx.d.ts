import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Metadata } from '../../cosmos/bank/v1beta1/bank';
import { Any } from '../../google/protobuf/any';
export declare const protobufPackage = "misesid.misestm.v1beta1";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateUserInfo {
    creator: string;
    uid: string;
    encData: string;
    iv: string;
    version: Long;
}
export interface MsgCreateUserInfoResponse {
    id: Long;
}
export interface MsgUpdateUserInfo {
    creator: string;
    id: Long;
    uid: string;
    encData: string;
    iv: string;
    version: Long;
}
export interface MsgUpdateUserInfoResponse {
}
export interface MsgDeleteUserInfo {
    creator: string;
    id: Long;
}
export interface MsgDeleteUserInfoResponse {
}
export interface MsgCreateUserRelation {
    creator: string;
    uidFrom: string;
    uidTo: string;
    isFollowing: boolean;
    isBlocking: boolean;
    isReferredBy: boolean;
    version: Long;
}
export interface MsgCreateUserRelationResponse {
    id: Long;
}
export interface MsgUpdateUserRelation {
    creator: string;
    id: Long;
    uidFrom: string;
    uidTo: string;
    isFollowing: boolean;
    isBlocking: boolean;
    isReferredBy: boolean;
    version: Long;
}
export interface MsgUpdateUserRelationResponse {
}
export interface MsgDeleteUserRelation {
    creator: string;
    id: Long;
}
export interface MsgDeleteUserRelationResponse {
}
export interface MsgCreateAppInfo {
    creator: string;
    appid: string;
    name: string;
    domains: string[];
    developer: string;
    homeUrl: string;
    iconUrl: string;
    version: Long;
}
export interface MsgCreateAppInfoResponse {
    id: Long;
}
export interface MsgUpdateAppInfo {
    creator: string;
    id: Long;
    appid: string;
    name: string;
    domains: string[];
    developer: string;
    homeUrl: string;
    iconUrl: string;
    version: Long;
}
export interface MsgUpdateAppInfoResponse {
}
export interface MsgDeleteAppInfo {
    creator: string;
    id: Long;
}
export interface MsgDeleteAppInfoResponse {
}
export interface MsgCreateDidRegistry {
    creator: string;
    did: string;
    pkeyDid: string;
    pkeyType: string;
    pkeyMultibase: string;
    version: Long;
}
export interface MsgCreateDidRegistryResponse {
    id: Long;
}
export interface MsgUpdateDidRegistry {
    creator: string;
    id: Long;
    did: string;
    pkeyDid: string;
    pkeyType: string;
    pkeyMultibase: string;
    version: Long;
}
export interface MsgUpdateDidRegistryResponse {
}
export interface MsgDeleteDidRegistry {
    creator: string;
    id: Long;
}
export interface MsgDeleteDidRegistryResponse {
}
/** MsgNewDenom defines an SDK message for creating a new denom. */
export interface MsgNewDenom {
    id: string;
    amount: string;
    denomMeta?: Metadata;
    sender: string;
    recipient: string;
}
/** MsgNewDenomResponse defines the MsgNewDenom response type. */
export interface MsgNewDenomResponse {
}
/** MsgNewNFTClass defines an SDK message for creating a new NFTClass. */
export interface MsgNewNFTClass {
    id: string;
    name: string;
    uri: string;
    schema: string;
    symbol: string;
    data?: Any;
    sender: string;
}
/** MsgNewNFTClassResponse defines the MsgNewNFTClass response type. */
export interface MsgNewNFTClassResponse {
}
/** MsgUpdateNFTClass defines an SDK message for editing a nft class. */
export interface MsgUpdateNFTClass {
    id: string;
    classId: string;
    name: string;
    uri: string;
    data?: Any;
    sender: string;
}
/** MsgUpdateNFTClassResponse defines the MsgUpdateNFTClass response type. */
export interface MsgUpdateNFTClassResponse {
}
/** MsgMintNFT defines an SDK message for creating a new NFT. */
export interface MsgMintNFT {
    id: string;
    classId: string;
    name: string;
    uri: string;
    data?: Any;
    sender: string;
    recipient: string;
}
/** MsgMintNFTResponse defines the Msg/MintNFT response type. */
export interface MsgMintNFTResponse {
}
/** MsgUpdateNFT defines an SDK message for update a NFT. */
export interface MsgUpdateNFT {
    id: string;
    classId: string;
    uri: string;
    data?: Any;
    sender: string;
}
/** MsgUpdateNFTResponse defines the MsgUpdateNFT response type. */
export interface MsgUpdateNFTResponse {
}
/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFT {
    id: string;
    classId: string;
    sender: string;
}
/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponse {
}
export declare const MsgCreateUserInfo: {
    encode(message: MsgCreateUserInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateUserInfo;
    fromJSON(object: any): MsgCreateUserInfo;
    toJSON(message: MsgCreateUserInfo): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        uid?: string | undefined;
        encData?: string | undefined;
        iv?: string | undefined;
        version?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        uid?: string | undefined;
        encData?: string | undefined;
        iv?: string | undefined;
        version?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["version"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateUserInfo>, never>>(object: I): MsgCreateUserInfo;
};
export declare const MsgCreateUserInfoResponse: {
    encode(message: MsgCreateUserInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateUserInfoResponse;
    fromJSON(object: any): MsgCreateUserInfoResponse;
    toJSON(message: MsgCreateUserInfoResponse): unknown;
    fromPartial<I extends {
        id?: string | number | Long.Long | undefined;
    } & {
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): MsgCreateUserInfoResponse;
};
export declare const MsgUpdateUserInfo: {
    encode(message: MsgUpdateUserInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateUserInfo;
    fromJSON(object: any): MsgUpdateUserInfo;
    toJSON(message: MsgUpdateUserInfo): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | number | Long.Long | undefined;
        uid?: string | undefined;
        encData?: string | undefined;
        iv?: string | undefined;
        version?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
        uid?: string | undefined;
        encData?: string | undefined;
        iv?: string | undefined;
        version?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["version"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateUserInfo>, never>>(object: I): MsgUpdateUserInfo;
};
export declare const MsgUpdateUserInfoResponse: {
    encode(_: MsgUpdateUserInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateUserInfoResponse;
    fromJSON(_: any): MsgUpdateUserInfoResponse;
    toJSON(_: MsgUpdateUserInfoResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateUserInfoResponse;
};
export declare const MsgDeleteUserInfo: {
    encode(message: MsgDeleteUserInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDeleteUserInfo;
    fromJSON(object: any): MsgDeleteUserInfo;
    toJSON(message: MsgDeleteUserInfo): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgDeleteUserInfo>, never>>(object: I): MsgDeleteUserInfo;
};
export declare const MsgDeleteUserInfoResponse: {
    encode(_: MsgDeleteUserInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDeleteUserInfoResponse;
    fromJSON(_: any): MsgDeleteUserInfoResponse;
    toJSON(_: MsgDeleteUserInfoResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDeleteUserInfoResponse;
};
export declare const MsgCreateUserRelation: {
    encode(message: MsgCreateUserRelation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateUserRelation;
    fromJSON(object: any): MsgCreateUserRelation;
    toJSON(message: MsgCreateUserRelation): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        uidFrom?: string | undefined;
        uidTo?: string | undefined;
        isFollowing?: boolean | undefined;
        isBlocking?: boolean | undefined;
        isReferredBy?: boolean | undefined;
        version?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        uidFrom?: string | undefined;
        uidTo?: string | undefined;
        isFollowing?: boolean | undefined;
        isBlocking?: boolean | undefined;
        isReferredBy?: boolean | undefined;
        version?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["version"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateUserRelation>, never>>(object: I): MsgCreateUserRelation;
};
export declare const MsgCreateUserRelationResponse: {
    encode(message: MsgCreateUserRelationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateUserRelationResponse;
    fromJSON(object: any): MsgCreateUserRelationResponse;
    toJSON(message: MsgCreateUserRelationResponse): unknown;
    fromPartial<I extends {
        id?: string | number | Long.Long | undefined;
    } & {
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): MsgCreateUserRelationResponse;
};
export declare const MsgUpdateUserRelation: {
    encode(message: MsgUpdateUserRelation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateUserRelation;
    fromJSON(object: any): MsgUpdateUserRelation;
    toJSON(message: MsgUpdateUserRelation): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | number | Long.Long | undefined;
        uidFrom?: string | undefined;
        uidTo?: string | undefined;
        isFollowing?: boolean | undefined;
        isBlocking?: boolean | undefined;
        isReferredBy?: boolean | undefined;
        version?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
        uidFrom?: string | undefined;
        uidTo?: string | undefined;
        isFollowing?: boolean | undefined;
        isBlocking?: boolean | undefined;
        isReferredBy?: boolean | undefined;
        version?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["version"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateUserRelation>, never>>(object: I): MsgUpdateUserRelation;
};
export declare const MsgUpdateUserRelationResponse: {
    encode(_: MsgUpdateUserRelationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateUserRelationResponse;
    fromJSON(_: any): MsgUpdateUserRelationResponse;
    toJSON(_: MsgUpdateUserRelationResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateUserRelationResponse;
};
export declare const MsgDeleteUserRelation: {
    encode(message: MsgDeleteUserRelation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDeleteUserRelation;
    fromJSON(object: any): MsgDeleteUserRelation;
    toJSON(message: MsgDeleteUserRelation): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgDeleteUserRelation>, never>>(object: I): MsgDeleteUserRelation;
};
export declare const MsgDeleteUserRelationResponse: {
    encode(_: MsgDeleteUserRelationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDeleteUserRelationResponse;
    fromJSON(_: any): MsgDeleteUserRelationResponse;
    toJSON(_: MsgDeleteUserRelationResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDeleteUserRelationResponse;
};
export declare const MsgCreateAppInfo: {
    encode(message: MsgCreateAppInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateAppInfo;
    fromJSON(object: any): MsgCreateAppInfo;
    toJSON(message: MsgCreateAppInfo): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        appid?: string | undefined;
        name?: string | undefined;
        domains?: string[] | undefined;
        developer?: string | undefined;
        homeUrl?: string | undefined;
        iconUrl?: string | undefined;
        version?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        appid?: string | undefined;
        name?: string | undefined;
        domains?: (string[] & string[] & Record<Exclude<keyof I["domains"], keyof string[]>, never>) | undefined;
        developer?: string | undefined;
        homeUrl?: string | undefined;
        iconUrl?: string | undefined;
        version?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["version"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateAppInfo>, never>>(object: I): MsgCreateAppInfo;
};
export declare const MsgCreateAppInfoResponse: {
    encode(message: MsgCreateAppInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateAppInfoResponse;
    fromJSON(object: any): MsgCreateAppInfoResponse;
    toJSON(message: MsgCreateAppInfoResponse): unknown;
    fromPartial<I extends {
        id?: string | number | Long.Long | undefined;
    } & {
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): MsgCreateAppInfoResponse;
};
export declare const MsgUpdateAppInfo: {
    encode(message: MsgUpdateAppInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateAppInfo;
    fromJSON(object: any): MsgUpdateAppInfo;
    toJSON(message: MsgUpdateAppInfo): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | number | Long.Long | undefined;
        appid?: string | undefined;
        name?: string | undefined;
        domains?: string[] | undefined;
        developer?: string | undefined;
        homeUrl?: string | undefined;
        iconUrl?: string | undefined;
        version?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
        appid?: string | undefined;
        name?: string | undefined;
        domains?: (string[] & string[] & Record<Exclude<keyof I["domains"], keyof string[]>, never>) | undefined;
        developer?: string | undefined;
        homeUrl?: string | undefined;
        iconUrl?: string | undefined;
        version?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["version"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateAppInfo>, never>>(object: I): MsgUpdateAppInfo;
};
export declare const MsgUpdateAppInfoResponse: {
    encode(_: MsgUpdateAppInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateAppInfoResponse;
    fromJSON(_: any): MsgUpdateAppInfoResponse;
    toJSON(_: MsgUpdateAppInfoResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateAppInfoResponse;
};
export declare const MsgDeleteAppInfo: {
    encode(message: MsgDeleteAppInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDeleteAppInfo;
    fromJSON(object: any): MsgDeleteAppInfo;
    toJSON(message: MsgDeleteAppInfo): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgDeleteAppInfo>, never>>(object: I): MsgDeleteAppInfo;
};
export declare const MsgDeleteAppInfoResponse: {
    encode(_: MsgDeleteAppInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDeleteAppInfoResponse;
    fromJSON(_: any): MsgDeleteAppInfoResponse;
    toJSON(_: MsgDeleteAppInfoResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDeleteAppInfoResponse;
};
export declare const MsgCreateDidRegistry: {
    encode(message: MsgCreateDidRegistry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateDidRegistry;
    fromJSON(object: any): MsgCreateDidRegistry;
    toJSON(message: MsgCreateDidRegistry): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        did?: string | undefined;
        pkeyDid?: string | undefined;
        pkeyType?: string | undefined;
        pkeyMultibase?: string | undefined;
        version?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        did?: string | undefined;
        pkeyDid?: string | undefined;
        pkeyType?: string | undefined;
        pkeyMultibase?: string | undefined;
        version?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["version"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateDidRegistry>, never>>(object: I): MsgCreateDidRegistry;
};
export declare const MsgCreateDidRegistryResponse: {
    encode(message: MsgCreateDidRegistryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateDidRegistryResponse;
    fromJSON(object: any): MsgCreateDidRegistryResponse;
    toJSON(message: MsgCreateDidRegistryResponse): unknown;
    fromPartial<I extends {
        id?: string | number | Long.Long | undefined;
    } & {
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): MsgCreateDidRegistryResponse;
};
export declare const MsgUpdateDidRegistry: {
    encode(message: MsgUpdateDidRegistry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateDidRegistry;
    fromJSON(object: any): MsgUpdateDidRegistry;
    toJSON(message: MsgUpdateDidRegistry): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | number | Long.Long | undefined;
        did?: string | undefined;
        pkeyDid?: string | undefined;
        pkeyType?: string | undefined;
        pkeyMultibase?: string | undefined;
        version?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
        did?: string | undefined;
        pkeyDid?: string | undefined;
        pkeyType?: string | undefined;
        pkeyMultibase?: string | undefined;
        version?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["version"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateDidRegistry>, never>>(object: I): MsgUpdateDidRegistry;
};
export declare const MsgUpdateDidRegistryResponse: {
    encode(_: MsgUpdateDidRegistryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateDidRegistryResponse;
    fromJSON(_: any): MsgUpdateDidRegistryResponse;
    toJSON(_: MsgUpdateDidRegistryResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateDidRegistryResponse;
};
export declare const MsgDeleteDidRegistry: {
    encode(message: MsgDeleteDidRegistry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDeleteDidRegistry;
    fromJSON(object: any): MsgDeleteDidRegistry;
    toJSON(message: MsgDeleteDidRegistry): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | number | Long.Long | undefined;
    } & {
        creator?: string | undefined;
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgDeleteDidRegistry>, never>>(object: I): MsgDeleteDidRegistry;
};
export declare const MsgDeleteDidRegistryResponse: {
    encode(_: MsgDeleteDidRegistryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDeleteDidRegistryResponse;
    fromJSON(_: any): MsgDeleteDidRegistryResponse;
    toJSON(_: MsgDeleteDidRegistryResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDeleteDidRegistryResponse;
};
export declare const MsgNewDenom: {
    encode(message: MsgNewDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgNewDenom;
    fromJSON(object: any): MsgNewDenom;
    toJSON(message: MsgNewDenom): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        amount?: string | undefined;
        denomMeta?: {
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
        } | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & {
        id?: string | undefined;
        amount?: string | undefined;
        denomMeta?: ({
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
        } & {
            description?: string | undefined;
            denomUnits?: ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] & ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            } & {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: (string[] & string[] & Record<Exclude<keyof I["denomMeta"]["denomUnits"][number]["aliases"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["denomMeta"]["denomUnits"][number], keyof import("../../cosmos/bank/v1beta1/bank").DenomUnit>, never>)[] & Record<Exclude<keyof I["denomMeta"]["denomUnits"], keyof {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[]>, never>) | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
        } & Record<Exclude<keyof I["denomMeta"], keyof Metadata>, never>) | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgNewDenom>, never>>(object: I): MsgNewDenom;
};
export declare const MsgNewDenomResponse: {
    encode(_: MsgNewDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgNewDenomResponse;
    fromJSON(_: any): MsgNewDenomResponse;
    toJSON(_: MsgNewDenomResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgNewDenomResponse;
};
export declare const MsgNewNFTClass: {
    encode(message: MsgNewNFTClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgNewNFTClass;
    fromJSON(object: any): MsgNewNFTClass;
    toJSON(message: MsgNewNFTClass): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        schema?: string | undefined;
        symbol?: string | undefined;
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        schema?: string | undefined;
        symbol?: string | undefined;
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["data"], keyof Any>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgNewNFTClass>, never>>(object: I): MsgNewNFTClass;
};
export declare const MsgNewNFTClassResponse: {
    encode(_: MsgNewNFTClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgNewNFTClassResponse;
    fromJSON(_: any): MsgNewNFTClassResponse;
    toJSON(_: MsgNewNFTClassResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgNewNFTClassResponse;
};
export declare const MsgUpdateNFTClass: {
    encode(message: MsgUpdateNFTClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateNFTClass;
    fromJSON(object: any): MsgUpdateNFTClass;
    toJSON(message: MsgUpdateNFTClass): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        classId?: string | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        id?: string | undefined;
        classId?: string | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["data"], keyof Any>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateNFTClass>, never>>(object: I): MsgUpdateNFTClass;
};
export declare const MsgUpdateNFTClassResponse: {
    encode(_: MsgUpdateNFTClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateNFTClassResponse;
    fromJSON(_: any): MsgUpdateNFTClassResponse;
    toJSON(_: MsgUpdateNFTClassResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateNFTClassResponse;
};
export declare const MsgMintNFT: {
    encode(message: MsgMintNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgMintNFT;
    fromJSON(object: any): MsgMintNFT;
    toJSON(message: MsgMintNFT): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        classId?: string | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & {
        id?: string | undefined;
        classId?: string | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["data"], keyof Any>, never>) | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgMintNFT>, never>>(object: I): MsgMintNFT;
};
export declare const MsgMintNFTResponse: {
    encode(_: MsgMintNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgMintNFTResponse;
    fromJSON(_: any): MsgMintNFTResponse;
    toJSON(_: MsgMintNFTResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgMintNFTResponse;
};
export declare const MsgUpdateNFT: {
    encode(message: MsgUpdateNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateNFT;
    fromJSON(object: any): MsgUpdateNFT;
    toJSON(message: MsgUpdateNFT): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        classId?: string | undefined;
        uri?: string | undefined;
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        id?: string | undefined;
        classId?: string | undefined;
        uri?: string | undefined;
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["data"], keyof Any>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateNFT>, never>>(object: I): MsgUpdateNFT;
};
export declare const MsgUpdateNFTResponse: {
    encode(_: MsgUpdateNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateNFTResponse;
    fromJSON(_: any): MsgUpdateNFTResponse;
    toJSON(_: MsgUpdateNFTResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateNFTResponse;
};
export declare const MsgBurnNFT: {
    encode(message: MsgBurnNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgBurnNFT;
    fromJSON(object: any): MsgBurnNFT;
    toJSON(message: MsgBurnNFT): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        classId?: string | undefined;
        sender?: string | undefined;
    } & {
        id?: string | undefined;
        classId?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgBurnNFT>, never>>(object: I): MsgBurnNFT;
};
export declare const MsgBurnNFTResponse: {
    encode(_: MsgBurnNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgBurnNFTResponse;
    fromJSON(_: any): MsgBurnNFTResponse;
    toJSON(_: MsgBurnNFTResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgBurnNFTResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** NewDenom defines a method for create a new denom. */
    NewDenom(request: MsgNewDenom): Promise<MsgNewDenomResponse>;
    NewNFTClass(request: MsgNewNFTClass): Promise<MsgNewNFTClassResponse>;
    UpdateNFTClass(request: MsgUpdateNFTClass): Promise<MsgUpdateNFTClassResponse>;
    /** MintNFT defines a method for mint a new nft */
    MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
    /** UpdateNFT defines a method for editing a nft. */
    UpdateNFT(request: MsgUpdateNFT): Promise<MsgUpdateNFTResponse>;
    /** BurnNFT defines a method for burning a nft. */
    BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateUserInfo(request: MsgCreateUserInfo): Promise<MsgCreateUserInfoResponse>;
    UpdateUserInfo(request: MsgUpdateUserInfo): Promise<MsgUpdateUserInfoResponse>;
    DeleteUserInfo(request: MsgDeleteUserInfo): Promise<MsgDeleteUserInfoResponse>;
    CreateUserRelation(request: MsgCreateUserRelation): Promise<MsgCreateUserRelationResponse>;
    UpdateUserRelation(request: MsgUpdateUserRelation): Promise<MsgUpdateUserRelationResponse>;
    DeleteUserRelation(request: MsgDeleteUserRelation): Promise<MsgDeleteUserRelationResponse>;
    CreateAppInfo(request: MsgCreateAppInfo): Promise<MsgCreateAppInfoResponse>;
    UpdateAppInfo(request: MsgUpdateAppInfo): Promise<MsgUpdateAppInfoResponse>;
    DeleteAppInfo(request: MsgDeleteAppInfo): Promise<MsgDeleteAppInfoResponse>;
    CreateDidRegistry(request: MsgCreateDidRegistry): Promise<MsgCreateDidRegistryResponse>;
    UpdateDidRegistry(request: MsgUpdateDidRegistry): Promise<MsgUpdateDidRegistryResponse>;
    DeleteDidRegistry(request: MsgDeleteDidRegistry): Promise<MsgDeleteDidRegistryResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    NewDenom(request: MsgNewDenom): Promise<MsgNewDenomResponse>;
    NewNFTClass(request: MsgNewNFTClass): Promise<MsgNewNFTClassResponse>;
    UpdateNFTClass(request: MsgUpdateNFTClass): Promise<MsgUpdateNFTClassResponse>;
    MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
    UpdateNFT(request: MsgUpdateNFT): Promise<MsgUpdateNFTResponse>;
    BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
    CreateUserInfo(request: MsgCreateUserInfo): Promise<MsgCreateUserInfoResponse>;
    UpdateUserInfo(request: MsgUpdateUserInfo): Promise<MsgUpdateUserInfoResponse>;
    DeleteUserInfo(request: MsgDeleteUserInfo): Promise<MsgDeleteUserInfoResponse>;
    CreateUserRelation(request: MsgCreateUserRelation): Promise<MsgCreateUserRelationResponse>;
    UpdateUserRelation(request: MsgUpdateUserRelation): Promise<MsgUpdateUserRelationResponse>;
    DeleteUserRelation(request: MsgDeleteUserRelation): Promise<MsgDeleteUserRelationResponse>;
    CreateAppInfo(request: MsgCreateAppInfo): Promise<MsgCreateAppInfoResponse>;
    UpdateAppInfo(request: MsgUpdateAppInfo): Promise<MsgUpdateAppInfoResponse>;
    DeleteAppInfo(request: MsgDeleteAppInfo): Promise<MsgDeleteAppInfoResponse>;
    CreateDidRegistry(request: MsgCreateDidRegistry): Promise<MsgCreateDidRegistryResponse>;
    UpdateDidRegistry(request: MsgUpdateDidRegistry): Promise<MsgUpdateDidRegistryResponse>;
    DeleteDidRegistry(request: MsgDeleteDidRegistry): Promise<MsgDeleteDidRegistryResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
