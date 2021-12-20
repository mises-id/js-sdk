"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestTxClientImpl = exports.RestUpdateAppFeeGrantRequest = exports.AppFeeGrant = exports.RestUpdateAppInfoRequest = exports.PublicAppInfo = exports.RestTxResponse = exports.RestQueryTxRequest = exports.RestUpdateUserRelationRequest = exports.RestUpdateUserInfoRequest = exports.PublicUserInfo = exports.PrivateUserInfo = exports.RestCreateDidRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const abci_1 = require("../../cosmos/base/abci/v1beta1/abci");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const duration_1 = require("../../google/protobuf/duration");
const timestamp_1 = require("../../google/protobuf/timestamp");
exports.protobufPackage = 'misesid.misestm.v1beta1';
const baseRestCreateDidRequest = {
    misesAppid: '',
    misesId: '',
    pubKey: '',
};
exports.RestCreateDidRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.misesAppid !== '') {
            writer.uint32(10).string(message.misesAppid);
        }
        if (message.misesId !== '') {
            writer.uint32(18).string(message.misesId);
        }
        if (message.pubKey !== '') {
            writer.uint32(26).string(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestCreateDidRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesAppid = reader.string();
                    break;
                case 2:
                    message.misesId = reader.string();
                    break;
                case 3:
                    message.pubKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestCreateDidRequest);
        message.misesAppid =
            object.misesAppid !== undefined && object.misesAppid !== null
                ? String(object.misesAppid)
                : '';
        message.misesId =
            object.misesId !== undefined && object.misesId !== null
                ? String(object.misesId)
                : '';
        message.pubKey =
            object.pubKey !== undefined && object.pubKey !== null
                ? String(object.pubKey)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid);
        message.misesId !== undefined && (obj.misesId = message.misesId);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRestCreateDidRequest);
        message.misesAppid = (_a = object.misesAppid) !== null && _a !== void 0 ? _a : '';
        message.misesId = (_b = object.misesId) !== null && _b !== void 0 ? _b : '';
        message.pubKey = (_c = object.pubKey) !== null && _c !== void 0 ? _c : '';
        return message;
    },
};
const basePrivateUserInfo = { encData: '', iv: '' };
exports.PrivateUserInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.encData !== '') {
            writer.uint32(10).string(message.encData);
        }
        if (message.iv !== '') {
            writer.uint32(18).string(message.iv);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePrivateUserInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encData = reader.string();
                    break;
                case 2:
                    message.iv = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePrivateUserInfo);
        message.encData =
            object.encData !== undefined && object.encData !== null
                ? String(object.encData)
                : '';
        message.iv =
            object.iv !== undefined && object.iv !== null ? String(object.iv) : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.encData !== undefined && (obj.encData = message.encData);
        message.iv !== undefined && (obj.iv = message.iv);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePrivateUserInfo);
        message.encData = (_a = object.encData) !== null && _a !== void 0 ? _a : '';
        message.iv = (_b = object.iv) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
const basePublicUserInfo = {
    name: '',
    gender: '',
    avatarUrl: '',
    homePageUrl: '',
    emails: '',
    telephones: '',
    intro: '',
};
exports.PublicUserInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.gender !== '') {
            writer.uint32(18).string(message.gender);
        }
        if (message.avatarUrl !== '') {
            writer.uint32(26).string(message.avatarUrl);
        }
        if (message.homePageUrl !== '') {
            writer.uint32(34).string(message.homePageUrl);
        }
        for (const v of message.emails) {
            writer.uint32(42).string(v);
        }
        for (const v of message.telephones) {
            writer.uint32(50).string(v);
        }
        if (message.intro !== '') {
            writer.uint32(58).string(message.intro);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePublicUserInfo);
        message.emails = [];
        message.telephones = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.gender = reader.string();
                    break;
                case 3:
                    message.avatarUrl = reader.string();
                    break;
                case 4:
                    message.homePageUrl = reader.string();
                    break;
                case 5:
                    message.emails.push(reader.string());
                    break;
                case 6:
                    message.telephones.push(reader.string());
                    break;
                case 7:
                    message.intro = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, basePublicUserInfo);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.gender =
            object.gender !== undefined && object.gender !== null
                ? String(object.gender)
                : '';
        message.avatarUrl =
            object.avatarUrl !== undefined && object.avatarUrl !== null
                ? String(object.avatarUrl)
                : '';
        message.homePageUrl =
            object.homePageUrl !== undefined && object.homePageUrl !== null
                ? String(object.homePageUrl)
                : '';
        message.emails = ((_a = object.emails) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.telephones = ((_b = object.telephones) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.intro =
            object.intro !== undefined && object.intro !== null
                ? String(object.intro)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.gender !== undefined && (obj.gender = message.gender);
        message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
        message.homePageUrl !== undefined && (obj.homePageUrl = message.homePageUrl);
        if (message.emails) {
            obj.emails = message.emails.map((e) => e);
        }
        else {
            obj.emails = [];
        }
        if (message.telephones) {
            obj.telephones = message.telephones.map((e) => e);
        }
        else {
            obj.telephones = [];
        }
        message.intro !== undefined && (obj.intro = message.intro);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, basePublicUserInfo);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.gender = (_b = object.gender) !== null && _b !== void 0 ? _b : '';
        message.avatarUrl = (_c = object.avatarUrl) !== null && _c !== void 0 ? _c : '';
        message.homePageUrl = (_d = object.homePageUrl) !== null && _d !== void 0 ? _d : '';
        message.emails = ((_e = object.emails) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.telephones = ((_f = object.telephones) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.intro = (_g = object.intro) !== null && _g !== void 0 ? _g : '';
        return message;
    },
};
const baseRestUpdateUserInfoRequest = { misesAppid: '', misesUid: '' };
exports.RestUpdateUserInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.misesAppid !== '') {
            writer.uint32(10).string(message.misesAppid);
        }
        if (message.misesUid !== '') {
            writer.uint32(18).string(message.misesUid);
        }
        if (message.pubInfo !== undefined) {
            exports.PublicUserInfo.encode(message.pubInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.priInfo !== undefined) {
            exports.PrivateUserInfo.encode(message.priInfo, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestUpdateUserInfoRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesAppid = reader.string();
                    break;
                case 2:
                    message.misesUid = reader.string();
                    break;
                case 3:
                    message.pubInfo = exports.PublicUserInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.priInfo = exports.PrivateUserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestUpdateUserInfoRequest);
        message.misesAppid =
            object.misesAppid !== undefined && object.misesAppid !== null
                ? String(object.misesAppid)
                : '';
        message.misesUid =
            object.misesUid !== undefined && object.misesUid !== null
                ? String(object.misesUid)
                : '';
        message.pubInfo =
            object.pubInfo !== undefined && object.pubInfo !== null
                ? exports.PublicUserInfo.fromJSON(object.pubInfo)
                : undefined;
        message.priInfo =
            object.priInfo !== undefined && object.priInfo !== null
                ? exports.PrivateUserInfo.fromJSON(object.priInfo)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid);
        message.misesUid !== undefined && (obj.misesUid = message.misesUid);
        message.pubInfo !== undefined &&
            (obj.pubInfo = message.pubInfo
                ? exports.PublicUserInfo.toJSON(message.pubInfo)
                : undefined);
        message.priInfo !== undefined &&
            (obj.priInfo = message.priInfo
                ? exports.PrivateUserInfo.toJSON(message.priInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRestUpdateUserInfoRequest);
        message.misesAppid = (_a = object.misesAppid) !== null && _a !== void 0 ? _a : '';
        message.misesUid = (_b = object.misesUid) !== null && _b !== void 0 ? _b : '';
        message.pubInfo =
            object.pubInfo !== undefined && object.pubInfo !== null
                ? exports.PublicUserInfo.fromPartial(object.pubInfo)
                : undefined;
        message.priInfo =
            object.priInfo !== undefined && object.priInfo !== null
                ? exports.PrivateUserInfo.fromPartial(object.priInfo)
                : undefined;
        return message;
    },
};
const baseRestUpdateUserRelationRequest = {
    misesAppid: '',
    misesUid: '',
    targetId: '',
    action: '',
};
exports.RestUpdateUserRelationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.misesAppid !== '') {
            writer.uint32(10).string(message.misesAppid);
        }
        if (message.misesUid !== '') {
            writer.uint32(18).string(message.misesUid);
        }
        if (message.targetId !== '') {
            writer.uint32(26).string(message.targetId);
        }
        if (message.action !== '') {
            writer.uint32(34).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestUpdateUserRelationRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesAppid = reader.string();
                    break;
                case 2:
                    message.misesUid = reader.string();
                    break;
                case 3:
                    message.targetId = reader.string();
                    break;
                case 4:
                    message.action = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestUpdateUserRelationRequest);
        message.misesAppid =
            object.misesAppid !== undefined && object.misesAppid !== null
                ? String(object.misesAppid)
                : '';
        message.misesUid =
            object.misesUid !== undefined && object.misesUid !== null
                ? String(object.misesUid)
                : '';
        message.targetId =
            object.targetId !== undefined && object.targetId !== null
                ? String(object.targetId)
                : '';
        message.action =
            object.action !== undefined && object.action !== null
                ? String(object.action)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid);
        message.misesUid !== undefined && (obj.misesUid = message.misesUid);
        message.targetId !== undefined && (obj.targetId = message.targetId);
        message.action !== undefined && (obj.action = message.action);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseRestUpdateUserRelationRequest);
        message.misesAppid = (_a = object.misesAppid) !== null && _a !== void 0 ? _a : '';
        message.misesUid = (_b = object.misesUid) !== null && _b !== void 0 ? _b : '';
        message.targetId = (_c = object.targetId) !== null && _c !== void 0 ? _c : '';
        message.action = (_d = object.action) !== null && _d !== void 0 ? _d : '';
        return message;
    },
};
const baseRestQueryTxRequest = { txhash: '' };
exports.RestQueryTxRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.txhash !== '') {
            writer.uint32(10).string(message.txhash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestQueryTxRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txhash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestQueryTxRequest);
        message.txhash =
            object.txhash !== undefined && object.txhash !== null
                ? String(object.txhash)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.txhash !== undefined && (obj.txhash = message.txhash);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRestQueryTxRequest);
        message.txhash = (_a = object.txhash) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
const baseRestTxResponse = { code: 0 };
exports.RestTxResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.txResponse !== undefined) {
            abci_1.TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
        }
        if (message.code !== 0) {
            writer.uint32(16).uint32(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestTxResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txResponse = abci_1.TxResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.code = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestTxResponse);
        message.txResponse =
            object.txResponse !== undefined && object.txResponse !== null
                ? abci_1.TxResponse.fromJSON(object.txResponse)
                : undefined;
        message.code =
            object.code !== undefined && object.code !== null
                ? Number(object.code)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.txResponse !== undefined &&
            (obj.txResponse = message.txResponse
                ? abci_1.TxResponse.toJSON(message.txResponse)
                : undefined);
        message.code !== undefined && (obj.code = Math.round(message.code));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRestTxResponse);
        message.txResponse =
            object.txResponse !== undefined && object.txResponse !== null
                ? abci_1.TxResponse.fromPartial(object.txResponse)
                : undefined;
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
const basePublicAppInfo = {
    name: '',
    domains: '',
    developer: '',
    homeUrl: '',
    iconUrl: '',
    version: long_1.default.UZERO,
};
exports.PublicAppInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.domains) {
            writer.uint32(18).string(v);
        }
        if (message.developer !== '') {
            writer.uint32(26).string(message.developer);
        }
        if (message.homeUrl !== '') {
            writer.uint32(34).string(message.homeUrl);
        }
        if (message.iconUrl !== '') {
            writer.uint32(42).string(message.iconUrl);
        }
        if (!message.version.isZero()) {
            writer.uint32(48).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePublicAppInfo);
        message.domains = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.domains.push(reader.string());
                    break;
                case 3:
                    message.developer = reader.string();
                    break;
                case 4:
                    message.homeUrl = reader.string();
                    break;
                case 5:
                    message.iconUrl = reader.string();
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
        var _a;
        const message = Object.assign({}, basePublicAppInfo);
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
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, basePublicAppInfo);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.domains = ((_b = object.domains) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.developer = (_c = object.developer) !== null && _c !== void 0 ? _c : '';
        message.homeUrl = (_d = object.homeUrl) !== null && _d !== void 0 ? _d : '';
        message.iconUrl = (_e = object.iconUrl) !== null && _e !== void 0 ? _e : '';
        message.version =
            object.version !== undefined && object.version !== null
                ? long_1.default.fromValue(object.version)
                : long_1.default.UZERO;
        return message;
    },
};
const baseRestUpdateAppInfoRequest = { misesAppid: '' };
exports.RestUpdateAppInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.misesAppid !== '') {
            writer.uint32(10).string(message.misesAppid);
        }
        if (message.pubInfo !== undefined) {
            exports.PublicAppInfo.encode(message.pubInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestUpdateAppInfoRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesAppid = reader.string();
                    break;
                case 2:
                    message.pubInfo = exports.PublicAppInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestUpdateAppInfoRequest);
        message.misesAppid =
            object.misesAppid !== undefined && object.misesAppid !== null
                ? String(object.misesAppid)
                : '';
        message.pubInfo =
            object.pubInfo !== undefined && object.pubInfo !== null
                ? exports.PublicAppInfo.fromJSON(object.pubInfo)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid);
        message.pubInfo !== undefined &&
            (obj.pubInfo = message.pubInfo
                ? exports.PublicAppInfo.toJSON(message.pubInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRestUpdateAppInfoRequest);
        message.misesAppid = (_a = object.misesAppid) !== null && _a !== void 0 ? _a : '';
        message.pubInfo =
            object.pubInfo !== undefined && object.pubInfo !== null
                ? exports.PublicAppInfo.fromPartial(object.pubInfo)
                : undefined;
        return message;
    },
};
const baseAppFeeGrant = {};
exports.AppFeeGrant = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.spendLimit !== undefined) {
            coin_1.Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== undefined) {
            duration_1.Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiration), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAppFeeGrant);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expiration = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAppFeeGrant);
        message.spendLimit =
            object.spendLimit !== undefined && object.spendLimit !== null
                ? coin_1.Coin.fromJSON(object.spendLimit)
                : undefined;
        message.period =
            object.period !== undefined && object.period !== null
                ? duration_1.Duration.fromJSON(object.period)
                : undefined;
        message.expiration =
            object.expiration !== undefined && object.expiration !== null
                ? fromJsonTimestamp(object.expiration)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.spendLimit !== undefined &&
            (obj.spendLimit = message.spendLimit
                ? coin_1.Coin.toJSON(message.spendLimit)
                : undefined);
        message.period !== undefined &&
            (obj.period = message.period
                ? duration_1.Duration.toJSON(message.period)
                : undefined);
        message.expiration !== undefined &&
            (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAppFeeGrant);
        message.spendLimit =
            object.spendLimit !== undefined && object.spendLimit !== null
                ? coin_1.Coin.fromPartial(object.spendLimit)
                : undefined;
        message.period =
            object.period !== undefined && object.period !== null
                ? duration_1.Duration.fromPartial(object.period)
                : undefined;
        message.expiration = (_a = object.expiration) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
const baseRestUpdateAppFeeGrantRequest = {
    misesAppid: '',
    misesUid: '',
    revoke: false,
};
exports.RestUpdateAppFeeGrantRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.misesAppid !== '') {
            writer.uint32(10).string(message.misesAppid);
        }
        if (message.misesUid !== '') {
            writer.uint32(18).string(message.misesUid);
        }
        if (message.grant !== undefined) {
            exports.AppFeeGrant.encode(message.grant, writer.uint32(26).fork()).ldelim();
        }
        if (message.revoke === true) {
            writer.uint32(32).bool(message.revoke);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestUpdateAppFeeGrantRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesAppid = reader.string();
                    break;
                case 2:
                    message.misesUid = reader.string();
                    break;
                case 3:
                    message.grant = exports.AppFeeGrant.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.revoke = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestUpdateAppFeeGrantRequest);
        message.misesAppid =
            object.misesAppid !== undefined && object.misesAppid !== null
                ? String(object.misesAppid)
                : '';
        message.misesUid =
            object.misesUid !== undefined && object.misesUid !== null
                ? String(object.misesUid)
                : '';
        message.grant =
            object.grant !== undefined && object.grant !== null
                ? exports.AppFeeGrant.fromJSON(object.grant)
                : undefined;
        message.revoke =
            object.revoke !== undefined && object.revoke !== null
                ? Boolean(object.revoke)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid);
        message.misesUid !== undefined && (obj.misesUid = message.misesUid);
        message.grant !== undefined &&
            (obj.grant = message.grant
                ? exports.AppFeeGrant.toJSON(message.grant)
                : undefined);
        message.revoke !== undefined && (obj.revoke = message.revoke);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRestUpdateAppFeeGrantRequest);
        message.misesAppid = (_a = object.misesAppid) !== null && _a !== void 0 ? _a : '';
        message.misesUid = (_b = object.misesUid) !== null && _b !== void 0 ? _b : '';
        message.grant =
            object.grant !== undefined && object.grant !== null
                ? exports.AppFeeGrant.fromPartial(object.grant)
                : undefined;
        message.revoke = (_c = object.revoke) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
class RestTxClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateDid = this.CreateDid.bind(this);
        this.UpdateUserInfo = this.UpdateUserInfo.bind(this);
        this.UpdateUserRelation = this.UpdateUserRelation.bind(this);
        this.QueryTx = this.QueryTx.bind(this);
        this.UpdateAppInfo = this.UpdateAppInfo.bind(this);
        this.UpdateAppFeeGrant = this.UpdateAppFeeGrant.bind(this);
    }
    CreateDid(request) {
        const data = exports.RestCreateDidRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'CreateDid', data);
        return promise.then((data) => exports.RestTxResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateUserInfo(request) {
        const data = exports.RestUpdateUserInfoRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateUserInfo', data);
        return promise.then((data) => exports.RestTxResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateUserRelation(request) {
        const data = exports.RestUpdateUserRelationRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateUserRelation', data);
        return promise.then((data) => exports.RestTxResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryTx(request) {
        const data = exports.RestQueryTxRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'QueryTx', data);
        return promise.then((data) => exports.RestTxResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateAppInfo(request) {
        const data = exports.RestUpdateAppInfoRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateAppInfo', data);
        return promise.then((data) => exports.RestTxResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateAppFeeGrant(request) {
        const data = exports.RestUpdateAppFeeGrantRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.RestTx', 'UpdateAppFeeGrant', data);
        return promise.then((data) => exports.RestTxResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.RestTxClientImpl = RestTxClientImpl;
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=rest_tx.js.map