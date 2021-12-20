"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'misesid.misestm.v1beta1';
const baseAppInfo = {
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
exports.AppInfo = {
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
        const message = Object.assign({}, baseAppInfo);
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
        const message = Object.assign({}, baseAppInfo);
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
        const message = Object.assign({}, baseAppInfo);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=AppInfo.js.map