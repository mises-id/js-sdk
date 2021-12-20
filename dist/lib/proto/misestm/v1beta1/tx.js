"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgBurnNFTResponse = exports.MsgBurnNFT = exports.MsgUpdateNFTResponse = exports.MsgUpdateNFT = exports.MsgMintNFTResponse = exports.MsgMintNFT = exports.MsgUpdateNFTClassResponse = exports.MsgUpdateNFTClass = exports.MsgNewNFTClassResponse = exports.MsgNewNFTClass = exports.MsgNewDenomResponse = exports.MsgNewDenom = exports.MsgDeleteDidRegistryResponse = exports.MsgDeleteDidRegistry = exports.MsgUpdateDidRegistryResponse = exports.MsgUpdateDidRegistry = exports.MsgCreateDidRegistryResponse = exports.MsgCreateDidRegistry = exports.MsgDeleteAppInfoResponse = exports.MsgDeleteAppInfo = exports.MsgUpdateAppInfoResponse = exports.MsgUpdateAppInfo = exports.MsgCreateAppInfoResponse = exports.MsgCreateAppInfo = exports.MsgDeleteUserRelationResponse = exports.MsgDeleteUserRelation = exports.MsgUpdateUserRelationResponse = exports.MsgUpdateUserRelation = exports.MsgCreateUserRelationResponse = exports.MsgCreateUserRelation = exports.MsgDeleteUserInfoResponse = exports.MsgDeleteUserInfo = exports.MsgUpdateUserInfoResponse = exports.MsgUpdateUserInfo = exports.MsgCreateUserInfoResponse = exports.MsgCreateUserInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const bank_1 = require("../../cosmos/bank/v1beta1/bank");
const any_1 = require("../../google/protobuf/any");
exports.protobufPackage = 'misesid.misestm.v1beta1';
const baseMsgCreateUserInfo = {
    creator: '',
    uid: '',
    encData: '',
    iv: '',
    version: long_1.default.UZERO,
};
exports.MsgCreateUserInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.uid !== '') {
            writer.uint32(18).string(message.uid);
        }
        if (message.encData !== '') {
            writer.uint32(26).string(message.encData);
        }
        if (message.iv !== '') {
            writer.uint32(34).string(message.iv);
        }
        if (!message.version.isZero()) {
            writer.uint32(40).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateUserInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.uid = reader.string();
                    break;
                case 3:
                    message.encData = reader.string();
                    break;
                case 4:
                    message.iv = reader.string();
                    break;
                case 5:
                    message.version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateUserInfo);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.uid =
            object.uid !== undefined && object.uid !== null ? String(object.uid) : '';
        message.encData =
            object.encData !== undefined && object.encData !== null
                ? String(object.encData)
                : '';
        message.iv =
            object.iv !== undefined && object.iv !== null ? String(object.iv) : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromString(object.version)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.uid !== undefined && (obj.uid = message.uid);
        message.encData !== undefined && (obj.encData = message.encData);
        message.iv !== undefined && (obj.iv = message.iv);
        message.version !== undefined &&
            (obj.version = (message.version || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseMsgCreateUserInfo);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.uid = (_b = object.uid) !== null && _b !== void 0 ? _b : '';
        message.encData = (_c = object.encData) !== null && _c !== void 0 ? _c : '';
        message.iv = (_d = object.iv) !== null && _d !== void 0 ? _d : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromValue(object.version)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgCreateUserInfoResponse = { id: long_1.default.UZERO };
exports.MsgCreateUserInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateUserInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateUserInfoResponse);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateUserInfoResponse);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgUpdateUserInfo = {
    creator: '',
    id: long_1.default.UZERO,
    uid: '',
    encData: '',
    iv: '',
    version: long_1.default.UZERO,
};
exports.MsgUpdateUserInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.uid !== '') {
            writer.uint32(26).string(message.uid);
        }
        if (message.encData !== '') {
            writer.uint32(34).string(message.encData);
        }
        if (message.iv !== '') {
            writer.uint32(42).string(message.iv);
        }
        if (!message.version.isZero()) {
            writer.uint32(48).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateUserInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.uid = reader.string();
                    break;
                case 4:
                    message.encData = reader.string();
                    break;
                case 5:
                    message.iv = reader.string();
                    break;
                case 6:
                    message.version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateUserInfo);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        message.uid =
            object.uid !== undefined && object.uid !== null ? String(object.uid) : '';
        message.encData =
            object.encData !== undefined && object.encData !== null
                ? String(object.encData)
                : '';
        message.iv =
            object.iv !== undefined && object.iv !== null ? String(object.iv) : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromString(object.version)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.uid !== undefined && (obj.uid = message.uid);
        message.encData !== undefined && (obj.encData = message.encData);
        message.iv !== undefined && (obj.iv = message.iv);
        message.version !== undefined &&
            (obj.version = (message.version || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseMsgUpdateUserInfo);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.uid = (_b = object.uid) !== null && _b !== void 0 ? _b : '';
        message.encData = (_c = object.encData) !== null && _c !== void 0 ? _c : '';
        message.iv = (_d = object.iv) !== null && _d !== void 0 ? _d : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromValue(object.version)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgUpdateUserInfoResponse = {};
exports.MsgUpdateUserInfoResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateUserInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgUpdateUserInfoResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateUserInfoResponse);
        return message;
    },
};
const baseMsgDeleteUserInfo = { creator: '', id: long_1.default.UZERO };
exports.MsgDeleteUserInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteUserInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgDeleteUserInfo);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMsgDeleteUserInfo);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgDeleteUserInfoResponse = {};
exports.MsgDeleteUserInfoResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteUserInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgDeleteUserInfoResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgDeleteUserInfoResponse);
        return message;
    },
};
const baseMsgCreateUserRelation = {
    creator: '',
    uidFrom: '',
    uidTo: '',
    isFollowing: false,
    isBlocking: false,
    isReferredBy: false,
    version: long_1.default.UZERO,
};
exports.MsgCreateUserRelation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.uidFrom !== '') {
            writer.uint32(18).string(message.uidFrom);
        }
        if (message.uidTo !== '') {
            writer.uint32(26).string(message.uidTo);
        }
        if (message.isFollowing === true) {
            writer.uint32(32).bool(message.isFollowing);
        }
        if (message.isBlocking === true) {
            writer.uint32(40).bool(message.isBlocking);
        }
        if (message.isReferredBy === true) {
            writer.uint32(48).bool(message.isReferredBy);
        }
        if (!message.version.isZero()) {
            writer.uint32(56).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateUserRelation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.uidFrom = reader.string();
                    break;
                case 3:
                    message.uidTo = reader.string();
                    break;
                case 4:
                    message.isFollowing = reader.bool();
                    break;
                case 5:
                    message.isBlocking = reader.bool();
                    break;
                case 6:
                    message.isReferredBy = reader.bool();
                    break;
                case 7:
                    message.version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateUserRelation);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.uidFrom =
            object.uidFrom !== undefined && object.uidFrom !== null
                ? String(object.uidFrom)
                : '';
        message.uidTo =
            object.uidTo !== undefined && object.uidTo !== null
                ? String(object.uidTo)
                : '';
        message.isFollowing =
            object.isFollowing !== undefined && object.isFollowing !== null
                ? Boolean(object.isFollowing)
                : false;
        message.isBlocking =
            object.isBlocking !== undefined && object.isBlocking !== null
                ? Boolean(object.isBlocking)
                : false;
        message.isReferredBy =
            object.isReferredBy !== undefined && object.isReferredBy !== null
                ? Boolean(object.isReferredBy)
                : false;
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromString(object.version)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.uidFrom !== undefined && (obj.uidFrom = message.uidFrom);
        message.uidTo !== undefined && (obj.uidTo = message.uidTo);
        message.isFollowing !== undefined && (obj.isFollowing = message.isFollowing);
        message.isBlocking !== undefined && (obj.isBlocking = message.isBlocking);
        message.isReferredBy !== undefined &&
            (obj.isReferredBy = message.isReferredBy);
        message.version !== undefined &&
            (obj.version = (message.version || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseMsgCreateUserRelation);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.uidFrom = (_b = object.uidFrom) !== null && _b !== void 0 ? _b : '';
        message.uidTo = (_c = object.uidTo) !== null && _c !== void 0 ? _c : '';
        message.isFollowing = (_d = object.isFollowing) !== null && _d !== void 0 ? _d : false;
        message.isBlocking = (_e = object.isBlocking) !== null && _e !== void 0 ? _e : false;
        message.isReferredBy = (_f = object.isReferredBy) !== null && _f !== void 0 ? _f : false;
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromValue(object.version)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgCreateUserRelationResponse = { id: long_1.default.UZERO };
exports.MsgCreateUserRelationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateUserRelationResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateUserRelationResponse);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateUserRelationResponse);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgUpdateUserRelation = {
    creator: '',
    id: long_1.default.UZERO,
    uidFrom: '',
    uidTo: '',
    isFollowing: false,
    isBlocking: false,
    isReferredBy: false,
    version: long_1.default.UZERO,
};
exports.MsgUpdateUserRelation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.uidFrom !== '') {
            writer.uint32(26).string(message.uidFrom);
        }
        if (message.uidTo !== '') {
            writer.uint32(34).string(message.uidTo);
        }
        if (message.isFollowing === true) {
            writer.uint32(40).bool(message.isFollowing);
        }
        if (message.isBlocking === true) {
            writer.uint32(48).bool(message.isBlocking);
        }
        if (message.isReferredBy === true) {
            writer.uint32(56).bool(message.isReferredBy);
        }
        if (!message.version.isZero()) {
            writer.uint32(64).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateUserRelation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.uidFrom = reader.string();
                    break;
                case 4:
                    message.uidTo = reader.string();
                    break;
                case 5:
                    message.isFollowing = reader.bool();
                    break;
                case 6:
                    message.isBlocking = reader.bool();
                    break;
                case 7:
                    message.isReferredBy = reader.bool();
                    break;
                case 8:
                    message.version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateUserRelation);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        message.uidFrom =
            object.uidFrom !== undefined && object.uidFrom !== null
                ? String(object.uidFrom)
                : '';
        message.uidTo =
            object.uidTo !== undefined && object.uidTo !== null
                ? String(object.uidTo)
                : '';
        message.isFollowing =
            object.isFollowing !== undefined && object.isFollowing !== null
                ? Boolean(object.isFollowing)
                : false;
        message.isBlocking =
            object.isBlocking !== undefined && object.isBlocking !== null
                ? Boolean(object.isBlocking)
                : false;
        message.isReferredBy =
            object.isReferredBy !== undefined && object.isReferredBy !== null
                ? Boolean(object.isReferredBy)
                : false;
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromString(object.version)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.uidFrom !== undefined && (obj.uidFrom = message.uidFrom);
        message.uidTo !== undefined && (obj.uidTo = message.uidTo);
        message.isFollowing !== undefined && (obj.isFollowing = message.isFollowing);
        message.isBlocking !== undefined && (obj.isBlocking = message.isBlocking);
        message.isReferredBy !== undefined &&
            (obj.isReferredBy = message.isReferredBy);
        message.version !== undefined &&
            (obj.version = (message.version || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseMsgUpdateUserRelation);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.uidFrom = (_b = object.uidFrom) !== null && _b !== void 0 ? _b : '';
        message.uidTo = (_c = object.uidTo) !== null && _c !== void 0 ? _c : '';
        message.isFollowing = (_d = object.isFollowing) !== null && _d !== void 0 ? _d : false;
        message.isBlocking = (_e = object.isBlocking) !== null && _e !== void 0 ? _e : false;
        message.isReferredBy = (_f = object.isReferredBy) !== null && _f !== void 0 ? _f : false;
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromValue(object.version)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgUpdateUserRelationResponse = {};
exports.MsgUpdateUserRelationResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateUserRelationResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgUpdateUserRelationResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateUserRelationResponse);
        return message;
    },
};
const baseMsgDeleteUserRelation = { creator: '', id: long_1.default.UZERO };
exports.MsgDeleteUserRelation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteUserRelation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgDeleteUserRelation);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMsgDeleteUserRelation);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgDeleteUserRelationResponse = {};
exports.MsgDeleteUserRelationResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteUserRelationResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgDeleteUserRelationResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgDeleteUserRelationResponse);
        return message;
    },
};
const baseMsgCreateAppInfo = {
    creator: '',
    appid: '',
    name: '',
    domains: '',
    developer: '',
    homeUrl: '',
    iconUrl: '',
    version: long_1.default.UZERO,
};
exports.MsgCreateAppInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.appid !== '') {
            writer.uint32(18).string(message.appid);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        for (const v of message.domains) {
            writer.uint32(34).string(v);
        }
        if (message.developer !== '') {
            writer.uint32(42).string(message.developer);
        }
        if (message.homeUrl !== '') {
            writer.uint32(50).string(message.homeUrl);
        }
        if (message.iconUrl !== '') {
            writer.uint32(58).string(message.iconUrl);
        }
        if (!message.version.isZero()) {
            writer.uint32(64).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateAppInfo);
        message.domains = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.appid = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.domains.push(reader.string());
                    break;
                case 5:
                    message.developer = reader.string();
                    break;
                case 6:
                    message.homeUrl = reader.string();
                    break;
                case 7:
                    message.iconUrl = reader.string();
                    break;
                case 8:
                    message.version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseMsgCreateAppInfo);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.appid =
            object.appid !== undefined && object.appid !== null
                ? String(object.appid)
                : '';
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.domains = ((_a = object.domains) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.developer =
            object.developer !== undefined && object.developer !== null
                ? String(object.developer)
                : '';
        message.homeUrl =
            object.homeUrl !== undefined && object.homeUrl !== null
                ? String(object.homeUrl)
                : '';
        message.iconUrl =
            object.iconUrl !== undefined && object.iconUrl !== null
                ? String(object.iconUrl)
                : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromString(object.version)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.appid !== undefined && (obj.appid = message.appid);
        message.name !== undefined && (obj.name = message.name);
        if (message.domains) {
            obj.domains = message.domains.map((e) => e);
        }
        else {
            obj.domains = [];
        }
        message.developer !== undefined && (obj.developer = message.developer);
        message.homeUrl !== undefined && (obj.homeUrl = message.homeUrl);
        message.iconUrl !== undefined && (obj.iconUrl = message.iconUrl);
        message.version !== undefined &&
            (obj.version = (message.version || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseMsgCreateAppInfo);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.appid = (_b = object.appid) !== null && _b !== void 0 ? _b : '';
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : '';
        message.domains = ((_d = object.domains) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.developer = (_e = object.developer) !== null && _e !== void 0 ? _e : '';
        message.homeUrl = (_f = object.homeUrl) !== null && _f !== void 0 ? _f : '';
        message.iconUrl = (_g = object.iconUrl) !== null && _g !== void 0 ? _g : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromValue(object.version)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgCreateAppInfoResponse = { id: long_1.default.UZERO };
exports.MsgCreateAppInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateAppInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateAppInfoResponse);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateAppInfoResponse);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgUpdateAppInfo = {
    creator: '',
    id: long_1.default.UZERO,
    appid: '',
    name: '',
    domains: '',
    developer: '',
    homeUrl: '',
    iconUrl: '',
    version: long_1.default.UZERO,
};
exports.MsgUpdateAppInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.appid !== '') {
            writer.uint32(26).string(message.appid);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        for (const v of message.domains) {
            writer.uint32(42).string(v);
        }
        if (message.developer !== '') {
            writer.uint32(50).string(message.developer);
        }
        if (message.homeUrl !== '') {
            writer.uint32(58).string(message.homeUrl);
        }
        if (message.iconUrl !== '') {
            writer.uint32(66).string(message.iconUrl);
        }
        if (!message.version.isZero()) {
            writer.uint32(72).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateAppInfo);
        message.domains = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.appid = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.domains.push(reader.string());
                    break;
                case 6:
                    message.developer = reader.string();
                    break;
                case 7:
                    message.homeUrl = reader.string();
                    break;
                case 8:
                    message.iconUrl = reader.string();
                    break;
                case 9:
                    message.version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseMsgUpdateAppInfo);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        message.appid =
            object.appid !== undefined && object.appid !== null
                ? String(object.appid)
                : '';
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.domains = ((_a = object.domains) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.developer =
            object.developer !== undefined && object.developer !== null
                ? String(object.developer)
                : '';
        message.homeUrl =
            object.homeUrl !== undefined && object.homeUrl !== null
                ? String(object.homeUrl)
                : '';
        message.iconUrl =
            object.iconUrl !== undefined && object.iconUrl !== null
                ? String(object.iconUrl)
                : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromString(object.version)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.appid !== undefined && (obj.appid = message.appid);
        message.name !== undefined && (obj.name = message.name);
        if (message.domains) {
            obj.domains = message.domains.map((e) => e);
        }
        else {
            obj.domains = [];
        }
        message.developer !== undefined && (obj.developer = message.developer);
        message.homeUrl !== undefined && (obj.homeUrl = message.homeUrl);
        message.iconUrl !== undefined && (obj.iconUrl = message.iconUrl);
        message.version !== undefined &&
            (obj.version = (message.version || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseMsgUpdateAppInfo);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.appid = (_b = object.appid) !== null && _b !== void 0 ? _b : '';
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : '';
        message.domains = ((_d = object.domains) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.developer = (_e = object.developer) !== null && _e !== void 0 ? _e : '';
        message.homeUrl = (_f = object.homeUrl) !== null && _f !== void 0 ? _f : '';
        message.iconUrl = (_g = object.iconUrl) !== null && _g !== void 0 ? _g : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromValue(object.version)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgUpdateAppInfoResponse = {};
exports.MsgUpdateAppInfoResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateAppInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgUpdateAppInfoResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateAppInfoResponse);
        return message;
    },
};
const baseMsgDeleteAppInfo = { creator: '', id: long_1.default.UZERO };
exports.MsgDeleteAppInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteAppInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgDeleteAppInfo);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMsgDeleteAppInfo);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgDeleteAppInfoResponse = {};
exports.MsgDeleteAppInfoResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteAppInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgDeleteAppInfoResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgDeleteAppInfoResponse);
        return message;
    },
};
const baseMsgCreateDidRegistry = {
    creator: '',
    did: '',
    pkeyDid: '',
    pkeyType: '',
    pkeyMultibase: '',
    version: long_1.default.UZERO,
};
exports.MsgCreateDidRegistry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.did !== '') {
            writer.uint32(18).string(message.did);
        }
        if (message.pkeyDid !== '') {
            writer.uint32(26).string(message.pkeyDid);
        }
        if (message.pkeyType !== '') {
            writer.uint32(34).string(message.pkeyType);
        }
        if (message.pkeyMultibase !== '') {
            writer.uint32(42).string(message.pkeyMultibase);
        }
        if (!message.version.isZero()) {
            writer.uint32(48).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDidRegistry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.did = reader.string();
                    break;
                case 3:
                    message.pkeyDid = reader.string();
                    break;
                case 4:
                    message.pkeyType = reader.string();
                    break;
                case 5:
                    message.pkeyMultibase = reader.string();
                    break;
                case 6:
                    message.version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateDidRegistry);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.did =
            object.did !== undefined && object.did !== null ? String(object.did) : '';
        message.pkeyDid =
            object.pkeyDid !== undefined && object.pkeyDid !== null
                ? String(object.pkeyDid)
                : '';
        message.pkeyType =
            object.pkeyType !== undefined && object.pkeyType !== null
                ? String(object.pkeyType)
                : '';
        message.pkeyMultibase =
            object.pkeyMultibase !== undefined && object.pkeyMultibase !== null
                ? String(object.pkeyMultibase)
                : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromString(object.version)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.did !== undefined && (obj.did = message.did);
        message.pkeyDid !== undefined && (obj.pkeyDid = message.pkeyDid);
        message.pkeyType !== undefined && (obj.pkeyType = message.pkeyType);
        message.pkeyMultibase !== undefined &&
            (obj.pkeyMultibase = message.pkeyMultibase);
        message.version !== undefined &&
            (obj.version = (message.version || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseMsgCreateDidRegistry);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.did = (_b = object.did) !== null && _b !== void 0 ? _b : '';
        message.pkeyDid = (_c = object.pkeyDid) !== null && _c !== void 0 ? _c : '';
        message.pkeyType = (_d = object.pkeyType) !== null && _d !== void 0 ? _d : '';
        message.pkeyMultibase = (_e = object.pkeyMultibase) !== null && _e !== void 0 ? _e : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromValue(object.version)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgCreateDidRegistryResponse = { id: long_1.default.UZERO };
exports.MsgCreateDidRegistryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDidRegistryResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateDidRegistryResponse);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateDidRegistryResponse);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgUpdateDidRegistry = {
    creator: '',
    id: long_1.default.UZERO,
    did: '',
    pkeyDid: '',
    pkeyType: '',
    pkeyMultibase: '',
    version: long_1.default.UZERO,
};
exports.MsgUpdateDidRegistry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.did !== '') {
            writer.uint32(26).string(message.did);
        }
        if (message.pkeyDid !== '') {
            writer.uint32(34).string(message.pkeyDid);
        }
        if (message.pkeyType !== '') {
            writer.uint32(42).string(message.pkeyType);
        }
        if (message.pkeyMultibase !== '') {
            writer.uint32(50).string(message.pkeyMultibase);
        }
        if (!message.version.isZero()) {
            writer.uint32(56).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateDidRegistry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.did = reader.string();
                    break;
                case 4:
                    message.pkeyDid = reader.string();
                    break;
                case 5:
                    message.pkeyType = reader.string();
                    break;
                case 6:
                    message.pkeyMultibase = reader.string();
                    break;
                case 7:
                    message.version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateDidRegistry);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        message.did =
            object.did !== undefined && object.did !== null ? String(object.did) : '';
        message.pkeyDid =
            object.pkeyDid !== undefined && object.pkeyDid !== null
                ? String(object.pkeyDid)
                : '';
        message.pkeyType =
            object.pkeyType !== undefined && object.pkeyType !== null
                ? String(object.pkeyType)
                : '';
        message.pkeyMultibase =
            object.pkeyMultibase !== undefined && object.pkeyMultibase !== null
                ? String(object.pkeyMultibase)
                : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromString(object.version)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.did !== undefined && (obj.did = message.did);
        message.pkeyDid !== undefined && (obj.pkeyDid = message.pkeyDid);
        message.pkeyType !== undefined && (obj.pkeyType = message.pkeyType);
        message.pkeyMultibase !== undefined &&
            (obj.pkeyMultibase = message.pkeyMultibase);
        message.version !== undefined &&
            (obj.version = (message.version || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseMsgUpdateDidRegistry);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.did = (_b = object.did) !== null && _b !== void 0 ? _b : '';
        message.pkeyDid = (_c = object.pkeyDid) !== null && _c !== void 0 ? _c : '';
        message.pkeyType = (_d = object.pkeyType) !== null && _d !== void 0 ? _d : '';
        message.pkeyMultibase = (_e = object.pkeyMultibase) !== null && _e !== void 0 ? _e : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromValue(object.version)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgUpdateDidRegistryResponse = {};
exports.MsgUpdateDidRegistryResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateDidRegistryResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgUpdateDidRegistryResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateDidRegistryResponse);
        return message;
    },
};
const baseMsgDeleteDidRegistry = { creator: '', id: long_1.default.UZERO };
exports.MsgDeleteDidRegistry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteDidRegistry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgDeleteDidRegistry);
        message.creator =
            object.creator !== undefined && object.creator !== null
                ? String(object.creator)
                : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMsgDeleteDidRegistry);
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseMsgDeleteDidRegistryResponse = {};
exports.MsgDeleteDidRegistryResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteDidRegistryResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgDeleteDidRegistryResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgDeleteDidRegistryResponse);
        return message;
    },
};
const baseMsgNewDenom = {
    id: '',
    amount: '',
    sender: '',
    recipient: '',
};
exports.MsgNewDenom = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        if (message.denomMeta !== undefined) {
            bank_1.Metadata.encode(message.denomMeta, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== '') {
            writer.uint32(34).string(message.sender);
        }
        if (message.recipient !== '') {
            writer.uint32(42).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgNewDenom);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.denomMeta = bank_1.Metadata.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgNewDenom);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? String(object.amount)
                : '';
        message.denomMeta =
            object.denomMeta !== undefined && object.denomMeta !== null
                ? bank_1.Metadata.fromJSON(object.denomMeta)
                : undefined;
        message.sender =
            object.sender !== undefined && object.sender !== null
                ? String(object.sender)
                : '';
        message.recipient =
            object.recipient !== undefined && object.recipient !== null
                ? String(object.recipient)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denomMeta !== undefined &&
            (obj.denomMeta = message.denomMeta
                ? bank_1.Metadata.toJSON(message.denomMeta)
                : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseMsgNewDenom);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : '';
        message.denomMeta =
            object.denomMeta !== undefined && object.denomMeta !== null
                ? bank_1.Metadata.fromPartial(object.denomMeta)
                : undefined;
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : '';
        message.recipient = (_d = object.recipient) !== null && _d !== void 0 ? _d : '';
        return message;
    },
};
const baseMsgNewDenomResponse = {};
exports.MsgNewDenomResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgNewDenomResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgNewDenomResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgNewDenomResponse);
        return message;
    },
};
const baseMsgNewNFTClass = {
    id: '',
    name: '',
    uri: '',
    schema: '',
    symbol: '',
    sender: '',
};
exports.MsgNewNFTClass = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.uri !== '') {
            writer.uint32(26).string(message.uri);
        }
        if (message.schema !== '') {
            writer.uint32(34).string(message.schema);
        }
        if (message.symbol !== '') {
            writer.uint32(42).string(message.symbol);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(50).fork()).ldelim();
        }
        if (message.sender !== '') {
            writer.uint32(58).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgNewNFTClass);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.uri = reader.string();
                    break;
                case 4:
                    message.schema = reader.string();
                    break;
                case 5:
                    message.symbol = reader.string();
                    break;
                case 6:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgNewNFTClass);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : '';
        message.schema =
            object.schema !== undefined && object.schema !== null
                ? String(object.schema)
                : '';
        message.symbol =
            object.symbol !== undefined && object.symbol !== null
                ? String(object.symbol)
                : '';
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromJSON(object.data)
                : undefined;
        message.sender =
            object.sender !== undefined && object.sender !== null
                ? String(object.sender)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.uri !== undefined && (obj.uri = message.uri);
        message.schema !== undefined && (obj.schema = message.schema);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseMsgNewNFTClass);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : '';
        message.uri = (_c = object.uri) !== null && _c !== void 0 ? _c : '';
        message.schema = (_d = object.schema) !== null && _d !== void 0 ? _d : '';
        message.symbol = (_e = object.symbol) !== null && _e !== void 0 ? _e : '';
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromPartial(object.data)
                : undefined;
        message.sender = (_f = object.sender) !== null && _f !== void 0 ? _f : '';
        return message;
    },
};
const baseMsgNewNFTClassResponse = {};
exports.MsgNewNFTClassResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgNewNFTClassResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgNewNFTClassResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgNewNFTClassResponse);
        return message;
    },
};
const baseMsgUpdateNFTClass = {
    id: '',
    classId: '',
    name: '',
    uri: '',
    sender: '',
};
exports.MsgUpdateNFTClass = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.classId !== '') {
            writer.uint32(18).string(message.classId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(42).fork()).ldelim();
        }
        if (message.sender !== '') {
            writer.uint32(50).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateNFTClass);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                case 5:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateNFTClass);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.classId =
            object.classId !== undefined && object.classId !== null
                ? String(object.classId)
                : '';
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : '';
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromJSON(object.data)
                : undefined;
        message.sender =
            object.sender !== undefined && object.sender !== null
                ? String(object.sender)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.classId !== undefined && (obj.classId = message.classId);
        message.name !== undefined && (obj.name = message.name);
        message.uri !== undefined && (obj.uri = message.uri);
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseMsgUpdateNFTClass);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        message.classId = (_b = object.classId) !== null && _b !== void 0 ? _b : '';
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : '';
        message.uri = (_d = object.uri) !== null && _d !== void 0 ? _d : '';
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromPartial(object.data)
                : undefined;
        message.sender = (_e = object.sender) !== null && _e !== void 0 ? _e : '';
        return message;
    },
};
const baseMsgUpdateNFTClassResponse = {};
exports.MsgUpdateNFTClassResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateNFTClassResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgUpdateNFTClassResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateNFTClassResponse);
        return message;
    },
};
const baseMsgMintNFT = {
    id: '',
    classId: '',
    name: '',
    uri: '',
    sender: '',
    recipient: '',
};
exports.MsgMintNFT = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.classId !== '') {
            writer.uint32(18).string(message.classId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(42).fork()).ldelim();
        }
        if (message.sender !== '') {
            writer.uint32(50).string(message.sender);
        }
        if (message.recipient !== '') {
            writer.uint32(58).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMintNFT);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                case 5:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.sender = reader.string();
                    break;
                case 7:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgMintNFT);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.classId =
            object.classId !== undefined && object.classId !== null
                ? String(object.classId)
                : '';
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : '';
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromJSON(object.data)
                : undefined;
        message.sender =
            object.sender !== undefined && object.sender !== null
                ? String(object.sender)
                : '';
        message.recipient =
            object.recipient !== undefined && object.recipient !== null
                ? String(object.recipient)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.classId !== undefined && (obj.classId = message.classId);
        message.name !== undefined && (obj.name = message.name);
        message.uri !== undefined && (obj.uri = message.uri);
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseMsgMintNFT);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        message.classId = (_b = object.classId) !== null && _b !== void 0 ? _b : '';
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : '';
        message.uri = (_d = object.uri) !== null && _d !== void 0 ? _d : '';
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromPartial(object.data)
                : undefined;
        message.sender = (_e = object.sender) !== null && _e !== void 0 ? _e : '';
        message.recipient = (_f = object.recipient) !== null && _f !== void 0 ? _f : '';
        return message;
    },
};
const baseMsgMintNFTResponse = {};
exports.MsgMintNFTResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMintNFTResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgMintNFTResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgMintNFTResponse);
        return message;
    },
};
const baseMsgUpdateNFT = { id: '', classId: '', uri: '', sender: '' };
exports.MsgUpdateNFT = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.classId !== '') {
            writer.uint32(18).string(message.classId);
        }
        if (message.uri !== '') {
            writer.uint32(26).string(message.uri);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(34).fork()).ldelim();
        }
        if (message.sender !== '') {
            writer.uint32(42).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateNFT);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.uri = reader.string();
                    break;
                case 4:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateNFT);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.classId =
            object.classId !== undefined && object.classId !== null
                ? String(object.classId)
                : '';
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : '';
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromJSON(object.data)
                : undefined;
        message.sender =
            object.sender !== undefined && object.sender !== null
                ? String(object.sender)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.classId !== undefined && (obj.classId = message.classId);
        message.uri !== undefined && (obj.uri = message.uri);
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseMsgUpdateNFT);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        message.classId = (_b = object.classId) !== null && _b !== void 0 ? _b : '';
        message.uri = (_c = object.uri) !== null && _c !== void 0 ? _c : '';
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromPartial(object.data)
                : undefined;
        message.sender = (_d = object.sender) !== null && _d !== void 0 ? _d : '';
        return message;
    },
};
const baseMsgUpdateNFTResponse = {};
exports.MsgUpdateNFTResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateNFTResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgUpdateNFTResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateNFTResponse);
        return message;
    },
};
const baseMsgBurnNFT = { id: '', classId: '', sender: '' };
exports.MsgBurnNFT = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.classId !== '') {
            writer.uint32(18).string(message.classId);
        }
        if (message.sender !== '') {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgBurnNFT);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgBurnNFT);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.classId =
            object.classId !== undefined && object.classId !== null
                ? String(object.classId)
                : '';
        message.sender =
            object.sender !== undefined && object.sender !== null
                ? String(object.sender)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.classId !== undefined && (obj.classId = message.classId);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMsgBurnNFT);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        message.classId = (_b = object.classId) !== null && _b !== void 0 ? _b : '';
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : '';
        return message;
    },
};
const baseMsgBurnNFTResponse = {};
exports.MsgBurnNFTResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgBurnNFTResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgBurnNFTResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgBurnNFTResponse);
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.NewDenom = this.NewDenom.bind(this);
        this.NewNFTClass = this.NewNFTClass.bind(this);
        this.UpdateNFTClass = this.UpdateNFTClass.bind(this);
        this.MintNFT = this.MintNFT.bind(this);
        this.UpdateNFT = this.UpdateNFT.bind(this);
        this.BurnNFT = this.BurnNFT.bind(this);
        this.CreateUserInfo = this.CreateUserInfo.bind(this);
        this.UpdateUserInfo = this.UpdateUserInfo.bind(this);
        this.DeleteUserInfo = this.DeleteUserInfo.bind(this);
        this.CreateUserRelation = this.CreateUserRelation.bind(this);
        this.UpdateUserRelation = this.UpdateUserRelation.bind(this);
        this.DeleteUserRelation = this.DeleteUserRelation.bind(this);
        this.CreateAppInfo = this.CreateAppInfo.bind(this);
        this.UpdateAppInfo = this.UpdateAppInfo.bind(this);
        this.DeleteAppInfo = this.DeleteAppInfo.bind(this);
        this.CreateDidRegistry = this.CreateDidRegistry.bind(this);
        this.UpdateDidRegistry = this.UpdateDidRegistry.bind(this);
        this.DeleteDidRegistry = this.DeleteDidRegistry.bind(this);
    }
    NewDenom(request) {
        const data = exports.MsgNewDenom.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'NewDenom', data);
        return promise.then((data) => exports.MsgNewDenomResponse.decode(new minimal_1.default.Reader(data)));
    }
    NewNFTClass(request) {
        const data = exports.MsgNewNFTClass.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'NewNFTClass', data);
        return promise.then((data) => exports.MsgNewNFTClassResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateNFTClass(request) {
        const data = exports.MsgUpdateNFTClass.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateNFTClass', data);
        return promise.then((data) => exports.MsgUpdateNFTClassResponse.decode(new minimal_1.default.Reader(data)));
    }
    MintNFT(request) {
        const data = exports.MsgMintNFT.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'MintNFT', data);
        return promise.then((data) => exports.MsgMintNFTResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateNFT(request) {
        const data = exports.MsgUpdateNFT.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateNFT', data);
        return promise.then((data) => exports.MsgUpdateNFTResponse.decode(new minimal_1.default.Reader(data)));
    }
    BurnNFT(request) {
        const data = exports.MsgBurnNFT.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'BurnNFT', data);
        return promise.then((data) => exports.MsgBurnNFTResponse.decode(new minimal_1.default.Reader(data)));
    }
    CreateUserInfo(request) {
        const data = exports.MsgCreateUserInfo.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'CreateUserInfo', data);
        return promise.then((data) => exports.MsgCreateUserInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateUserInfo(request) {
        const data = exports.MsgUpdateUserInfo.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateUserInfo', data);
        return promise.then((data) => exports.MsgUpdateUserInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    DeleteUserInfo(request) {
        const data = exports.MsgDeleteUserInfo.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'DeleteUserInfo', data);
        return promise.then((data) => exports.MsgDeleteUserInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    CreateUserRelation(request) {
        const data = exports.MsgCreateUserRelation.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'CreateUserRelation', data);
        return promise.then((data) => exports.MsgCreateUserRelationResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateUserRelation(request) {
        const data = exports.MsgUpdateUserRelation.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateUserRelation', data);
        return promise.then((data) => exports.MsgUpdateUserRelationResponse.decode(new minimal_1.default.Reader(data)));
    }
    DeleteUserRelation(request) {
        const data = exports.MsgDeleteUserRelation.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'DeleteUserRelation', data);
        return promise.then((data) => exports.MsgDeleteUserRelationResponse.decode(new minimal_1.default.Reader(data)));
    }
    CreateAppInfo(request) {
        const data = exports.MsgCreateAppInfo.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'CreateAppInfo', data);
        return promise.then((data) => exports.MsgCreateAppInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateAppInfo(request) {
        const data = exports.MsgUpdateAppInfo.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateAppInfo', data);
        return promise.then((data) => exports.MsgUpdateAppInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    DeleteAppInfo(request) {
        const data = exports.MsgDeleteAppInfo.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'DeleteAppInfo', data);
        return promise.then((data) => exports.MsgDeleteAppInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    CreateDidRegistry(request) {
        const data = exports.MsgCreateDidRegistry.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'CreateDidRegistry', data);
        return promise.then((data) => exports.MsgCreateDidRegistryResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateDidRegistry(request) {
        const data = exports.MsgUpdateDidRegistry.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'UpdateDidRegistry', data);
        return promise.then((data) => exports.MsgUpdateDidRegistryResponse.decode(new minimal_1.default.Reader(data)));
    }
    DeleteDidRegistry(request) {
        const data = exports.MsgDeleteDidRegistry.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Msg', 'DeleteDidRegistry', data);
        return promise.then((data) => exports.MsgDeleteDidRegistryResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=tx.js.map