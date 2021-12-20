"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DidRegistry = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'misesid.misestm.v1beta1';
const baseDidRegistry = {
    creator: '',
    id: long_1.default.UZERO,
    did: '',
    pkeyDid: '',
    pkeyType: '',
    pkeyMultibase: '',
    version: long_1.default.UZERO,
};
exports.DidRegistry = {
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
        const message = Object.assign({}, baseDidRegistry);
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
        const message = Object.assign({}, baseDidRegistry);
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
        const message = Object.assign({}, baseDidRegistry);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=DidRegistry.js.map