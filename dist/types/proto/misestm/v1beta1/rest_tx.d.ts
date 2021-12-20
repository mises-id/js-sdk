import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TxResponse } from '../../cosmos/base/abci/v1beta1/abci';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Duration } from '../../google/protobuf/duration';
export declare const protobufPackage = "misesid.misestm.v1beta1";
export interface RestCreateDidRequest {
    misesAppid: string;
    misesId: string;
    pubKey: string;
}
export interface PrivateUserInfo {
    encData: string;
    iv: string;
}
export interface PublicUserInfo {
    name: string;
    gender: string;
    avatarUrl: string;
    homePageUrl: string;
    emails: string[];
    telephones: string[];
    intro: string;
}
export interface RestUpdateUserInfoRequest {
    misesAppid: string;
    misesUid: string;
    pubInfo?: PublicUserInfo;
    priInfo?: PrivateUserInfo;
}
export interface RestUpdateUserRelationRequest {
    misesAppid: string;
    misesUid: string;
    targetId: string;
    action: string;
}
export interface RestQueryTxRequest {
    txhash: string;
}
export interface RestTxResponse {
    /** tx_response is the queried TxResponses. */
    txResponse?: TxResponse;
    code: number;
}
export interface PublicAppInfo {
    name: string;
    domains: string[];
    developer: string;
    homeUrl: string;
    iconUrl: string;
    version: Long;
}
export interface RestUpdateAppInfoRequest {
    misesAppid: string;
    pubInfo?: PublicAppInfo;
}
export interface AppFeeGrant {
    spendLimit?: Coin;
    period?: Duration;
    expiration?: Date;
}
export interface RestUpdateAppFeeGrantRequest {
    misesAppid: string;
    misesUid: string;
    grant?: AppFeeGrant;
    revoke: boolean;
}
export declare const RestCreateDidRequest: {
    encode(message: RestCreateDidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestCreateDidRequest;
    fromJSON(object: any): RestCreateDidRequest;
    toJSON(message: RestCreateDidRequest): unknown;
    fromPartial<I extends {
        misesAppid?: string | undefined;
        misesId?: string | undefined;
        pubKey?: string | undefined;
    } & {
        misesAppid?: string | undefined;
        misesId?: string | undefined;
        pubKey?: string | undefined;
    } & Record<Exclude<keyof I, keyof RestCreateDidRequest>, never>>(object: I): RestCreateDidRequest;
};
export declare const PrivateUserInfo: {
    encode(message: PrivateUserInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrivateUserInfo;
    fromJSON(object: any): PrivateUserInfo;
    toJSON(message: PrivateUserInfo): unknown;
    fromPartial<I extends {
        encData?: string | undefined;
        iv?: string | undefined;
    } & {
        encData?: string | undefined;
        iv?: string | undefined;
    } & Record<Exclude<keyof I, keyof PrivateUserInfo>, never>>(object: I): PrivateUserInfo;
};
export declare const PublicUserInfo: {
    encode(message: PublicUserInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PublicUserInfo;
    fromJSON(object: any): PublicUserInfo;
    toJSON(message: PublicUserInfo): unknown;
    fromPartial<I extends {
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
        emails?: (string[] & string[] & Record<Exclude<keyof I["emails"], keyof string[]>, never>) | undefined;
        telephones?: (string[] & string[] & Record<Exclude<keyof I["telephones"], keyof string[]>, never>) | undefined;
        intro?: string | undefined;
    } & Record<Exclude<keyof I, keyof PublicUserInfo>, never>>(object: I): PublicUserInfo;
};
export declare const RestUpdateUserInfoRequest: {
    encode(message: RestUpdateUserInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestUpdateUserInfoRequest;
    fromJSON(object: any): RestUpdateUserInfoRequest;
    toJSON(message: RestUpdateUserInfoRequest): unknown;
    fromPartial<I extends {
        misesAppid?: string | undefined;
        misesUid?: string | undefined;
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
        misesAppid?: string | undefined;
        misesUid?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof RestUpdateUserInfoRequest>, never>>(object: I): RestUpdateUserInfoRequest;
};
export declare const RestUpdateUserRelationRequest: {
    encode(message: RestUpdateUserRelationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestUpdateUserRelationRequest;
    fromJSON(object: any): RestUpdateUserRelationRequest;
    toJSON(message: RestUpdateUserRelationRequest): unknown;
    fromPartial<I extends {
        misesAppid?: string | undefined;
        misesUid?: string | undefined;
        targetId?: string | undefined;
        action?: string | undefined;
    } & {
        misesAppid?: string | undefined;
        misesUid?: string | undefined;
        targetId?: string | undefined;
        action?: string | undefined;
    } & Record<Exclude<keyof I, keyof RestUpdateUserRelationRequest>, never>>(object: I): RestUpdateUserRelationRequest;
};
export declare const RestQueryTxRequest: {
    encode(message: RestQueryTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestQueryTxRequest;
    fromJSON(object: any): RestQueryTxRequest;
    toJSON(message: RestQueryTxRequest): unknown;
    fromPartial<I extends {
        txhash?: string | undefined;
    } & {
        txhash?: string | undefined;
    } & Record<Exclude<keyof I, "txhash">, never>>(object: I): RestQueryTxRequest;
};
export declare const RestTxResponse: {
    encode(message: RestTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestTxResponse;
    fromJSON(object: any): RestTxResponse;
    toJSON(message: RestTxResponse): unknown;
    fromPartial<I extends {
        txResponse?: {
            height?: string | number | Long.Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long.Long | undefined;
            gasUsed?: string | number | Long.Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        code?: number | undefined;
    } & {
        txResponse?: ({
            height?: string | number | Long.Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long.Long | undefined;
            gasUsed?: string | number | Long.Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["txResponse"]["height"], keyof Long.Long>, never>) | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"][number]["attributes"][number], keyof import("../../cosmos/base/abci/v1beta1/abci").Attribute>, never>)[] & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"][number], keyof import("../../cosmos/base/abci/v1beta1/abci").StringEvent>, never>)[] & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["txResponse"]["logs"][number], keyof import("../../cosmos/base/abci/v1beta1/abci").ABCIMessageLog>, never>)[] & Record<Exclude<keyof I["txResponse"]["logs"], keyof {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            info?: string | undefined;
            gasWanted?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["txResponse"]["gasWanted"], keyof Long.Long>, never>) | undefined;
            gasUsed?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["txResponse"]["gasUsed"], keyof Long.Long>, never>) | undefined;
            tx?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["txResponse"]["tx"], keyof import("../../google/protobuf/any").Any>, never>) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["txResponse"]["events"][number]["attributes"][number], keyof import("../../tendermint/abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["txResponse"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["txResponse"]["events"][number], keyof import("../../tendermint/abci/types").Event>, never>)[] & Record<Exclude<keyof I["txResponse"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["txResponse"], keyof TxResponse>, never>) | undefined;
        code?: number | undefined;
    } & Record<Exclude<keyof I, keyof RestTxResponse>, never>>(object: I): RestTxResponse;
};
export declare const PublicAppInfo: {
    encode(message: PublicAppInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PublicAppInfo;
    fromJSON(object: any): PublicAppInfo;
    toJSON(message: PublicAppInfo): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        domains?: string[] | undefined;
        developer?: string | undefined;
        homeUrl?: string | undefined;
        iconUrl?: string | undefined;
        version?: string | number | Long.Long | undefined;
    } & {
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
    } & Record<Exclude<keyof I, keyof PublicAppInfo>, never>>(object: I): PublicAppInfo;
};
export declare const RestUpdateAppInfoRequest: {
    encode(message: RestUpdateAppInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestUpdateAppInfoRequest;
    fromJSON(object: any): RestUpdateAppInfoRequest;
    toJSON(message: RestUpdateAppInfoRequest): unknown;
    fromPartial<I extends {
        misesAppid?: string | undefined;
        pubInfo?: {
            name?: string | undefined;
            domains?: string[] | undefined;
            developer?: string | undefined;
            homeUrl?: string | undefined;
            iconUrl?: string | undefined;
            version?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        misesAppid?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof RestUpdateAppInfoRequest>, never>>(object: I): RestUpdateAppInfoRequest;
};
export declare const AppFeeGrant: {
    encode(message: AppFeeGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AppFeeGrant;
    fromJSON(object: any): AppFeeGrant;
    toJSON(message: AppFeeGrant): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["spendLimit"], keyof Coin>, never>) | undefined;
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
            } & Record<Exclude<keyof I["period"]["seconds"], keyof Long.Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["period"], keyof Duration>, never>) | undefined;
        expiration?: Date | undefined;
    } & Record<Exclude<keyof I, keyof AppFeeGrant>, never>>(object: I): AppFeeGrant;
};
export declare const RestUpdateAppFeeGrantRequest: {
    encode(message: RestUpdateAppFeeGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestUpdateAppFeeGrantRequest;
    fromJSON(object: any): RestUpdateAppFeeGrantRequest;
    toJSON(message: RestUpdateAppFeeGrantRequest): unknown;
    fromPartial<I extends {
        misesAppid?: string | undefined;
        misesUid?: string | undefined;
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
        revoke?: boolean | undefined;
    } & {
        misesAppid?: string | undefined;
        misesUid?: string | undefined;
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
            } & Record<Exclude<keyof I["grant"]["spendLimit"], keyof Coin>, never>) | undefined;
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
            } & Record<Exclude<keyof I["grant"]["period"], keyof Duration>, never>) | undefined;
            expiration?: Date | undefined;
        } & Record<Exclude<keyof I["grant"], keyof AppFeeGrant>, never>) | undefined;
        revoke?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof RestUpdateAppFeeGrantRequest>, never>>(object: I): RestUpdateAppFeeGrantRequest;
};
/** RestTx defines the gRPC rest service. */
export interface RestTx {
    /** create a did for user or app */
    CreateDid(request: RestCreateDidRequest): Promise<RestTxResponse>;
    /** update a user info */
    UpdateUserInfo(request: RestUpdateUserInfoRequest): Promise<RestTxResponse>;
    /** update a user relation */
    UpdateUserRelation(request: RestUpdateUserRelationRequest): Promise<RestTxResponse>;
    /** query a tx result */
    QueryTx(request: RestQueryTxRequest): Promise<RestTxResponse>;
    /** update an app info */
    UpdateAppInfo(request: RestUpdateAppInfoRequest): Promise<RestTxResponse>;
    /** update the gas fee a app granted for a user */
    UpdateAppFeeGrant(request: RestUpdateAppFeeGrantRequest): Promise<RestTxResponse>;
}
export declare class RestTxClientImpl implements RestTx {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDid(request: RestCreateDidRequest): Promise<RestTxResponse>;
    UpdateUserInfo(request: RestUpdateUserInfoRequest): Promise<RestTxResponse>;
    UpdateUserRelation(request: RestUpdateUserRelationRequest): Promise<RestTxResponse>;
    QueryTx(request: RestQueryTxRequest): Promise<RestTxResponse>;
    UpdateAppInfo(request: RestUpdateAppInfoRequest): Promise<RestTxResponse>;
    UpdateAppFeeGrant(request: RestUpdateAppFeeGrantRequest): Promise<RestTxResponse>;
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
