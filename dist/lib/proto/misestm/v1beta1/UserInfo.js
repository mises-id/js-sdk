"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'misesid.misestm.v1beta1';
const baseUserInfo = {
    creator: '',
    id: long_1.default.UZERO,
    uid: '',
    encData: '',
    iv: '',
    version: long_1.default.UZERO,
};
exports.UserInfo = {
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
        const message = Object.assign({}, baseUserInfo);
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
        const message = Object.assign({}, baseUserInfo);
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
        const message = Object.assign({}, baseUserInfo);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=UserInfo.js.map