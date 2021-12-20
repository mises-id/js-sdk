"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAllDidRegistryResponse = exports.QueryAllDidRegistryRequest = exports.QueryGetDidRegistryResponse = exports.QueryGetDidRegistryRequest = exports.QueryAllAppInfoResponse = exports.QueryAllAppInfoRequest = exports.QueryGetAppInfoResponse = exports.QueryGetAppInfoRequest = exports.QueryAllUserRelationResponse = exports.QueryAllUserRelationRequest = exports.QueryGetUserRelationResponse = exports.QueryGetUserRelationRequest = exports.QueryAllUserInfoResponse = exports.QueryAllUserInfoRequest = exports.QueryGetUserInfoResponse = exports.QueryGetUserInfoRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const UserInfo_1 = require("../../misestm/v1beta1/UserInfo");
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const UserRelation_1 = require("../../misestm/v1beta1/UserRelation");
const AppInfo_1 = require("../../misestm/v1beta1/AppInfo");
const DidRegistry_1 = require("../../misestm/v1beta1/DidRegistry");
exports.protobufPackage = 'misesid.misestm.v1beta1';
const baseQueryGetUserInfoRequest = { id: long_1.default.UZERO };
exports.QueryGetUserInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryGetUserInfoRequest);
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
        const message = Object.assign({}, baseQueryGetUserInfoRequest);
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
        const message = Object.assign({}, baseQueryGetUserInfoRequest);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseQueryGetUserInfoResponse = {};
exports.QueryGetUserInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.UserInfo !== undefined) {
            UserInfo_1.UserInfo.encode(message.UserInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryGetUserInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.UserInfo = UserInfo_1.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryGetUserInfoResponse);
        message.UserInfo =
            object.UserInfo !== undefined && object.UserInfo !== null
                ? UserInfo_1.UserInfo.fromJSON(object.UserInfo)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.UserInfo !== undefined &&
            (obj.UserInfo = message.UserInfo
                ? UserInfo_1.UserInfo.toJSON(message.UserInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryGetUserInfoResponse);
        message.UserInfo =
            object.UserInfo !== undefined && object.UserInfo !== null
                ? UserInfo_1.UserInfo.fromPartial(object.UserInfo)
                : undefined;
        return message;
    },
};
const baseQueryAllUserInfoRequest = {};
exports.QueryAllUserInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllUserInfoRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAllUserInfoRequest);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAllUserInfoRequest);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryAllUserInfoResponse = {};
exports.QueryAllUserInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.UserInfo) {
            UserInfo_1.UserInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllUserInfoResponse);
        message.UserInfo = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.UserInfo.push(UserInfo_1.UserInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseQueryAllUserInfoResponse);
        message.UserInfo = ((_a = object.UserInfo) !== null && _a !== void 0 ? _a : []).map((e) => UserInfo_1.UserInfo.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.UserInfo) {
            obj.UserInfo = message.UserInfo.map((e) => e ? UserInfo_1.UserInfo.toJSON(e) : undefined);
        }
        else {
            obj.UserInfo = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQueryAllUserInfoResponse);
        message.UserInfo =
            ((_a = object.UserInfo) === null || _a === void 0 ? void 0 : _a.map((e) => UserInfo_1.UserInfo.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryGetUserRelationRequest = { id: long_1.default.UZERO };
exports.QueryGetUserRelationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryGetUserRelationRequest);
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
        const message = Object.assign({}, baseQueryGetUserRelationRequest);
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
        const message = Object.assign({}, baseQueryGetUserRelationRequest);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseQueryGetUserRelationResponse = {};
exports.QueryGetUserRelationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.UserRelation !== undefined) {
            UserRelation_1.UserRelation.encode(message.UserRelation, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryGetUserRelationResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.UserRelation = UserRelation_1.UserRelation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryGetUserRelationResponse);
        message.UserRelation =
            object.UserRelation !== undefined && object.UserRelation !== null
                ? UserRelation_1.UserRelation.fromJSON(object.UserRelation)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.UserRelation !== undefined &&
            (obj.UserRelation = message.UserRelation
                ? UserRelation_1.UserRelation.toJSON(message.UserRelation)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryGetUserRelationResponse);
        message.UserRelation =
            object.UserRelation !== undefined && object.UserRelation !== null
                ? UserRelation_1.UserRelation.fromPartial(object.UserRelation)
                : undefined;
        return message;
    },
};
const baseQueryAllUserRelationRequest = {};
exports.QueryAllUserRelationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllUserRelationRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAllUserRelationRequest);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAllUserRelationRequest);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryAllUserRelationResponse = {};
exports.QueryAllUserRelationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.UserRelation) {
            UserRelation_1.UserRelation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllUserRelationResponse);
        message.UserRelation = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.UserRelation.push(UserRelation_1.UserRelation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseQueryAllUserRelationResponse);
        message.UserRelation = ((_a = object.UserRelation) !== null && _a !== void 0 ? _a : []).map((e) => UserRelation_1.UserRelation.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.UserRelation) {
            obj.UserRelation = message.UserRelation.map((e) => e ? UserRelation_1.UserRelation.toJSON(e) : undefined);
        }
        else {
            obj.UserRelation = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQueryAllUserRelationResponse);
        message.UserRelation =
            ((_a = object.UserRelation) === null || _a === void 0 ? void 0 : _a.map((e) => UserRelation_1.UserRelation.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryGetAppInfoRequest = { id: long_1.default.UZERO };
exports.QueryGetAppInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryGetAppInfoRequest);
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
        const message = Object.assign({}, baseQueryGetAppInfoRequest);
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
        const message = Object.assign({}, baseQueryGetAppInfoRequest);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseQueryGetAppInfoResponse = {};
exports.QueryGetAppInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.AppInfo !== undefined) {
            AppInfo_1.AppInfo.encode(message.AppInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryGetAppInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AppInfo = AppInfo_1.AppInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryGetAppInfoResponse);
        message.AppInfo =
            object.AppInfo !== undefined && object.AppInfo !== null
                ? AppInfo_1.AppInfo.fromJSON(object.AppInfo)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.AppInfo !== undefined &&
            (obj.AppInfo = message.AppInfo
                ? AppInfo_1.AppInfo.toJSON(message.AppInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryGetAppInfoResponse);
        message.AppInfo =
            object.AppInfo !== undefined && object.AppInfo !== null
                ? AppInfo_1.AppInfo.fromPartial(object.AppInfo)
                : undefined;
        return message;
    },
};
const baseQueryAllAppInfoRequest = {};
exports.QueryAllAppInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllAppInfoRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAllAppInfoRequest);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAllAppInfoRequest);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryAllAppInfoResponse = {};
exports.QueryAllAppInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.AppInfo) {
            AppInfo_1.AppInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllAppInfoResponse);
        message.AppInfo = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AppInfo.push(AppInfo_1.AppInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseQueryAllAppInfoResponse);
        message.AppInfo = ((_a = object.AppInfo) !== null && _a !== void 0 ? _a : []).map((e) => AppInfo_1.AppInfo.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.AppInfo) {
            obj.AppInfo = message.AppInfo.map((e) => e ? AppInfo_1.AppInfo.toJSON(e) : undefined);
        }
        else {
            obj.AppInfo = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQueryAllAppInfoResponse);
        message.AppInfo = ((_a = object.AppInfo) === null || _a === void 0 ? void 0 : _a.map((e) => AppInfo_1.AppInfo.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryGetDidRegistryRequest = { id: long_1.default.UZERO };
exports.QueryGetDidRegistryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryGetDidRegistryRequest);
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
        const message = Object.assign({}, baseQueryGetDidRegistryRequest);
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
        const message = Object.assign({}, baseQueryGetDidRegistryRequest);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
const baseQueryGetDidRegistryResponse = {};
exports.QueryGetDidRegistryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.DidRegistry !== undefined) {
            DidRegistry_1.DidRegistry.encode(message.DidRegistry, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryGetDidRegistryResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.DidRegistry = DidRegistry_1.DidRegistry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryGetDidRegistryResponse);
        message.DidRegistry =
            object.DidRegistry !== undefined && object.DidRegistry !== null
                ? DidRegistry_1.DidRegistry.fromJSON(object.DidRegistry)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.DidRegistry !== undefined &&
            (obj.DidRegistry = message.DidRegistry
                ? DidRegistry_1.DidRegistry.toJSON(message.DidRegistry)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryGetDidRegistryResponse);
        message.DidRegistry =
            object.DidRegistry !== undefined && object.DidRegistry !== null
                ? DidRegistry_1.DidRegistry.fromPartial(object.DidRegistry)
                : undefined;
        return message;
    },
};
const baseQueryAllDidRegistryRequest = {};
exports.QueryAllDidRegistryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllDidRegistryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAllDidRegistryRequest);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAllDidRegistryRequest);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryAllDidRegistryResponse = {};
exports.QueryAllDidRegistryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.DidRegistry) {
            DidRegistry_1.DidRegistry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllDidRegistryResponse);
        message.DidRegistry = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.DidRegistry.push(DidRegistry_1.DidRegistry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseQueryAllDidRegistryResponse);
        message.DidRegistry = ((_a = object.DidRegistry) !== null && _a !== void 0 ? _a : []).map((e) => DidRegistry_1.DidRegistry.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.DidRegistry) {
            obj.DidRegistry = message.DidRegistry.map((e) => e ? DidRegistry_1.DidRegistry.toJSON(e) : undefined);
        }
        else {
            obj.DidRegistry = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQueryAllDidRegistryResponse);
        message.DidRegistry =
            ((_a = object.DidRegistry) === null || _a === void 0 ? void 0 : _a.map((e) => DidRegistry_1.DidRegistry.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.UserInfo = this.UserInfo.bind(this);
        this.UserInfoAll = this.UserInfoAll.bind(this);
        this.UserRelation = this.UserRelation.bind(this);
        this.UserRelationAll = this.UserRelationAll.bind(this);
        this.AppInfo = this.AppInfo.bind(this);
        this.AppInfoAll = this.AppInfoAll.bind(this);
        this.DidRegistry = this.DidRegistry.bind(this);
        this.DidRegistryAll = this.DidRegistryAll.bind(this);
    }
    UserInfo(request) {
        const data = exports.QueryGetUserInfoRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'UserInfo', data);
        return promise.then((data) => exports.QueryGetUserInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    UserInfoAll(request) {
        const data = exports.QueryAllUserInfoRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'UserInfoAll', data);
        return promise.then((data) => exports.QueryAllUserInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    UserRelation(request) {
        const data = exports.QueryGetUserRelationRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'UserRelation', data);
        return promise.then((data) => exports.QueryGetUserRelationResponse.decode(new minimal_1.default.Reader(data)));
    }
    UserRelationAll(request) {
        const data = exports.QueryAllUserRelationRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'UserRelationAll', data);
        return promise.then((data) => exports.QueryAllUserRelationResponse.decode(new minimal_1.default.Reader(data)));
    }
    AppInfo(request) {
        const data = exports.QueryGetAppInfoRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'AppInfo', data);
        return promise.then((data) => exports.QueryGetAppInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    AppInfoAll(request) {
        const data = exports.QueryAllAppInfoRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'AppInfoAll', data);
        return promise.then((data) => exports.QueryAllAppInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    DidRegistry(request) {
        const data = exports.QueryGetDidRegistryRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'DidRegistry', data);
        return promise.then((data) => exports.QueryGetDidRegistryResponse.decode(new minimal_1.default.Reader(data)));
    }
    DidRegistryAll(request) {
        const data = exports.QueryAllDidRegistryRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.Query', 'DidRegistryAll', data);
        return promise.then((data) => exports.QueryAllDidRegistryResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=query.js.map