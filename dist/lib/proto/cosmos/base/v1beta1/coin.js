"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecProto = exports.IntProto = exports.DecCoin = exports.Coin = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'cosmos.base.v1beta1';
const baseCoin = { denom: '', amount: '' };
exports.Coin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCoin);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCoin);
        message.denom =
            object.denom !== undefined && object.denom !== null
                ? String(object.denom)
                : '';
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? String(object.amount)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCoin);
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : '';
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
const baseDecCoin = { denom: '', amount: '' };
exports.DecCoin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDecCoin);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDecCoin);
        message.denom =
            object.denom !== undefined && object.denom !== null
                ? String(object.denom)
                : '';
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? String(object.amount)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDecCoin);
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : '';
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
const baseIntProto = { int: '' };
exports.IntProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.int !== '') {
            writer.uint32(10).string(message.int);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseIntProto);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.int = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseIntProto);
        message.int =
            object.int !== undefined && object.int !== null ? String(object.int) : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.int !== undefined && (obj.int = message.int);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseIntProto);
        message.int = (_a = object.int) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
const baseDecProto = { dec: '' };
exports.DecProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dec !== '') {
            writer.uint32(10).string(message.dec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDecProto);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dec = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDecProto);
        message.dec =
            object.dec !== undefined && object.dec !== null ? String(object.dec) : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dec !== undefined && (obj.dec = message.dec);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDecProto);
        message.dec = (_a = object.dec) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=coin.js.map