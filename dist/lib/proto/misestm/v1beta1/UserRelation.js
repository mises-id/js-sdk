"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelation = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'misesid.misestm.v1beta1';
const baseUserRelation = {
    creator: '',
    id: long_1.default.UZERO,
    uidFrom: '',
    uidTo: '',
    isFollowing: false,
    isBlocking: false,
    isReferredBy: false,
    version: long_1.default.UZERO,
};
exports.UserRelation = {
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
        const message = Object.assign({}, baseUserRelation);
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
        const message = Object.assign({}, baseUserRelation);
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
        const message = Object.assign({}, baseUserRelation);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=UserRelation.js.map