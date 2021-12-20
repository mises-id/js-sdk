import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DidRegistry } from '../../misestm/v1beta1/DidRegistry';
import { PublicUserInfo, PrivateUserInfo, PublicAppInfo, AppFeeGrant } from '../../misestm/v1beta1/rest_tx';
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "misesid.misestm.v1beta1";
export interface RestQueryDidRequest {
    misesId: string;
}
export interface RestQueryDidResponse {
    didRegistry?: DidRegistry;
}
export interface RestQueryUserRequest {
    misesUid: string;
}
export interface RestQueryUserResponse {
    pubInfo?: PublicUserInfo;
    priInfo?: PrivateUserInfo;
}
export interface RestQueryUserRelationRequest {
    misesUid: string;
    filter: string;
    pagination?: PageRequest;
}
export interface MisesID {
    misesId: string;
}
export interface RestQueryUserRelationResponse {
    misesList: MisesID[];
    pagination?: PageResponse;
}
export interface RestQueryAppRequest {
    misesAppid: string;
}
export interface RestQueryAppResponse {
    pubInfo?: PublicAppInfo;
}
export interface RestQueryAppFeeGrantRequest {
    misesAppid: string;
    misesUid: string;
}
export interface RestQueryAppFeeGrantResponse {
    grant?: AppFeeGrant;
}
export declare const RestQueryDidRequest: {
    encode(message: RestQueryDidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestQueryDidRequest;
    fromJSON(object: any): RestQueryDidRequest;
    toJSON(message: RestQueryDidRequest): unknown;
    fromPartial<I extends {
        misesId?: string | undefined;
    } & {
        misesId?: string | undefined;
    } & Record<Exclude<keyof I, "misesId">, never>>(object: I): RestQueryDidRequest;
};
export declare const RestQueryDidResponse: {
    encode(message: RestQueryDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestQueryDidResponse;
    fromJSON(object: any): RestQueryDidResponse;
    toJSON(message: RestQueryDidResponse): unknown;
    fromPartial<I extends {
        didRegistry?: {
            creator?: string | undefined;
            id?: string | number | Long.Long | undefined;
            did?: string | undefined;
            pkeyDid?: string | undefined;
            pkeyType?: string | undefined;
            pkeyMultibase?: string | undefined;
            version?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        didRegistry?: ({
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
            } & Record<Exclude<keyof I["didRegistry"]["id"], keyof Long.Long>, never>) | undefined;
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
            } & Record<Exclude<keyof I["didRegistry"]["version"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["didRegistry"], keyof DidRegistry>, never>) | undefined;
    } & Record<Exclude<keyof I, "didRegistry">, never>>(object: I): RestQueryDidResponse;
};
export declare const RestQueryUserRequest: {
    encode(message: RestQueryUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestQueryUserRequest;
    fromJSON(object: any): RestQueryUserRequest;
    toJSON(message: RestQueryUserRequest): unknown;
    fromPartial<I extends {
        misesUid?: string | undefined;
    } & {
        misesUid?: string | undefined;
    } & Record<Exclude<keyof I, "misesUid">, never>>(object: I): RestQueryUserRequest;
};
export declare const RestQueryUserResponse: {
    encode(message: RestQueryUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestQueryUserResponse;
    fromJSON(object: any): RestQueryUserResponse;
    toJSON(message: RestQueryUserResponse): unknown;
    fromPartial<I extends {
        pubInfo?: {
            name?: string | undefined;
            gender?: string | undefined;
            avatarUrl?: string | undefined;
            homePageUrl?: string | undefined;
            emails?: string[] | undefined;
            telephones?: string[] | undefined;
            intro?: string | undefined;
        } | undefined;
        priInfo?: {
            encData?: string | undefined;
            iv?: string | undefined;
        } | undefined;
    } & {
        pubInfo?: ({
            name?: string | undefined;
            gender?: string | undefined;
            avatarUrl?: string | undefined;
            homePageUrl?: string | undefined;
            emails?: string[] | undefined;
            telephones?: string[] | undefined;
            intro?: string | undefined;
        } & {
            name?: string | undefined;
            gender?: string | undefined;
            avatarUrl?: string | undefined;
            homePageUrl?: string | undefined;
            emails?: (string[] & string[] & Record<Exclude<keyof I["pubInfo"]["emails"], keyof string[]>, never>) | undefined;
            telephones?: (string[] & string[] & Record<Exclude<keyof I["pubInfo"]["telephones"], keyof string[]>, never>) | undefined;
            intro?: string | undefined;
        } & Record<Exclude<keyof I["pubInfo"], keyof PublicUserInfo>, never>) | undefined;
        priInfo?: ({
            encData?: string | undefined;
            iv?: string | undefined;
        } & {
            encData?: string | undefined;
            iv?: string | undefined;
        } & Record<Exclude<keyof I["priInfo"], keyof PrivateUserInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RestQueryUserResponse>, never>>(object: I): RestQueryUserResponse;
};
export declare const RestQueryUserRelationRequest: {
    encode(message: RestQueryUserRelationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestQueryUserRelationRequest;
    fromJSON(object: any): RestQueryUserRelationRequest;
    toJSON(message: RestQueryUserRelationRequest): unknown;
    fromPartial<I extends {
        misesUid?: string | undefined;
        filter?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        misesUid?: string | undefined;
        filter?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["offset"], keyof Long.Long>, never>) | undefined;
            limit?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["limit"], keyof Long.Long>, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RestQueryUserRelationRequest>, never>>(object: I): RestQueryUserRelationRequest;
};
export declare const MisesID: {
    encode(message: MisesID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MisesID;
    fromJSON(object: any): MisesID;
    toJSON(message: MisesID): unknown;
    fromPartial<I extends {
        misesId?: string | undefined;
    } & {
        misesId?: string | undefined;
    } & Record<Exclude<keyof I, "misesId">, never>>(object: I): MisesID;
};
export declare const RestQueryUserRelationResponse: {
    encode(message: RestQueryUserRelationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestQueryUserRelationResponse;
    fromJSON(object: any): RestQueryUserRelationResponse;
    toJSON(message: RestQueryUserRelationResponse): unknown;
    fromPartial<I extends {
        misesList?: {
            misesId?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        misesList?: ({
            misesId?: string | undefined;
        }[] & ({
            misesId?: string | undefined;
        } & {
            misesId?: string | undefined;
        } & Record<Exclude<keyof I["misesList"][number], "misesId">, never>)[] & Record<Exclude<keyof I["misesList"], keyof {
            misesId?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["total"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RestQueryUserRelationResponse>, never>>(object: I): RestQueryUserRelationResponse;
};
export declare const RestQueryAppRequest: {
    encode(message: RestQueryAppRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestQueryAppRequest;
    fromJSON(object: any): RestQueryAppRequest;
    toJSON(message: RestQueryAppRequest): unknown;
    fromPartial<I extends {
        misesAppid?: string | undefined;
    } & {
        misesAppid?: string | undefined;
    } & Record<Exclude<keyof I, "misesAppid">, never>>(object: I): RestQueryAppRequest;
};
export declare const RestQueryAppResponse: {
    encode(message: RestQueryAppResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestQueryAppResponse;
    fromJSON(object: any): RestQueryAppResponse;
    toJSON(message: RestQueryAppResponse): unknown;
    fromPartial<I extends {
        pubInfo?: {
            name?: string | undefined;
            domains?: string[] | undefined;
            developer?: string | undefined;
            homeUrl?: string | undefined;
            iconUrl?: string | undefined;
            version?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        pubInfo?: ({
            name?: string | undefined;
            domains?: string[] | undefined;
            developer?: string | undefined;
            homeUrl?: string | undefined;
            iconUrl?: string | undefined;
            version?: string | number | Long.Long | undefined;
        } & {
            name?: string | undefined;
            domains?: (string[] & string[] & Record<Exclude<keyof I["pubInfo"]["domains"], keyof string[]>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pubInfo"]["version"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["pubInfo"], keyof PublicAppInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, "pubInfo">, never>>(object: I): RestQueryAppResponse;
};
export declare const RestQueryAppFeeGrantRequest: {
    encode(message: RestQueryAppFeeGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestQueryAppFeeGrantRequest;
    fromJSON(object: any): RestQueryAppFeeGrantRequest;
    toJSON(message: RestQueryAppFeeGrantRequest): unknown;
    fromPartial<I extends {
        misesAppid?: string | undefined;
        misesUid?: string | undefined;
    } & {
        misesAppid?: string | undefined;
        misesUid?: string | undefined;
    } & Record<Exclude<keyof I, keyof RestQueryAppFeeGrantRequest>, never>>(object: I): RestQueryAppFeeGrantRequest;
};
export declare const RestQueryAppFeeGrantResponse: {
    encode(message: RestQueryAppFeeGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestQueryAppFeeGrantResponse;
    fromJSON(object: any): RestQueryAppFeeGrantResponse;
    toJSON(message: RestQueryAppFeeGrantResponse): unknown;
    fromPartial<I extends {
        grant?: {
            spendLimit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            period?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            expiration?: Date | undefined;
        } | undefined;
    } & {
        grant?: ({
            spendLimit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            period?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            expiration?: Date | undefined;
        } & {
            spendLimit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["grant"]["spendLimit"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            period?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["grant"]["period"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["grant"]["period"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            expiration?: Date | undefined;
        } & Record<Exclude<keyof I["grant"], keyof AppFeeGrant>, never>) | undefined;
    } & Record<Exclude<keyof I, "grant">, never>>(object: I): RestQueryAppFeeGrantResponse;
};
/** Rest defines the gRPC rest service. */
export interface RestQuery {
    /** query a did */
    QueryDid(request: RestQueryDidRequest): Promise<RestQueryDidResponse>;
    /** query a user info */
    QueryUser(request: RestQueryUserRequest): Promise<RestQueryUserResponse>;
    /** query user relations */
    QueryUserRelation(request: RestQueryUserRelationRequest): Promise<RestQueryUserRelationResponse>;
    /** query app info */
    QueryApp(request: RestQueryAppRequest): Promise<RestQueryAppResponse>;
    /** query app info */
    QueryAppFeeGrant(request: RestQueryAppFeeGrantRequest): Promise<RestQueryAppFeeGrantResponse>;
}
export declare class RestQueryClientImpl implements RestQuery {
    private readonly rpc;
    constructor(rpc: Rpc);
    QueryDid(request: RestQueryDidRequest): Promise<RestQueryDidResponse>;
    QueryUser(request: RestQueryUserRequest): Promise<RestQueryUserResponse>;
    QueryUserRelation(request: RestQueryUserRelationRequest): Promise<RestQueryUserRelationResponse>;
    QueryApp(request: RestQueryAppRequest): Promise<RestQueryAppResponse>;
    QueryAppFeeGrant(request: RestQueryAppFeeGrantRequest): Promise<RestQueryAppFeeGrantResponse>;
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
