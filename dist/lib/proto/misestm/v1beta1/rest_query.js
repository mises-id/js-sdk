"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestQueryClientImpl = exports.RestQueryAppFeeGrantResponse = exports.RestQueryAppFeeGrantRequest = exports.RestQueryAppResponse = exports.RestQueryAppRequest = exports.RestQueryUserRelationResponse = exports.MisesID = exports.RestQueryUserRelationRequest = exports.RestQueryUserResponse = exports.RestQueryUserRequest = exports.RestQueryDidResponse = exports.RestQueryDidRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const DidRegistry_1 = require("../../misestm/v1beta1/DidRegistry");
const rest_tx_1 = require("../../misestm/v1beta1/rest_tx");
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = 'misesid.misestm.v1beta1';
const baseRestQueryDidRequest = { misesId: '' };
exports.RestQueryDidRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.misesId !== '') {
            writer.uint32(10).string(message.misesId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestQueryDidRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestQueryDidRequest);
        message.misesId =
            object.misesId !== undefined && object.misesId !== null
                ? String(object.misesId)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.misesId !== undefined && (obj.misesId = message.misesId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRestQueryDidRequest);
        message.misesId = (_a = object.misesId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
const baseRestQueryDidResponse = {};
exports.RestQueryDidResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.didRegistry !== undefined) {
            DidRegistry_1.DidRegistry.encode(message.didRegistry, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestQueryDidResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didRegistry = DidRegistry_1.DidRegistry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestQueryDidResponse);
        message.didRegistry =
            object.didRegistry !== undefined && object.didRegistry !== null
                ? DidRegistry_1.DidRegistry.fromJSON(object.didRegistry)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.didRegistry !== undefined &&
            (obj.didRegistry = message.didRegistry
                ? DidRegistry_1.DidRegistry.toJSON(message.didRegistry)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRestQueryDidResponse);
        message.didRegistry =
            object.didRegistry !== undefined && object.didRegistry !== null
                ? DidRegistry_1.DidRegistry.fromPartial(object.didRegistry)
                : undefined;
        return message;
    },
};
const baseRestQueryUserRequest = { misesUid: '' };
exports.RestQueryUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.misesUid !== '') {
            writer.uint32(10).string(message.misesUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestQueryUserRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestQueryUserRequest);
        message.misesUid =
            object.misesUid !== undefined && object.misesUid !== null
                ? String(object.misesUid)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.misesUid !== undefined && (obj.misesUid = message.misesUid);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRestQueryUserRequest);
        message.misesUid = (_a = object.misesUid) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
const baseRestQueryUserResponse = {};
exports.RestQueryUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pubInfo !== undefined) {
            rest_tx_1.PublicUserInfo.encode(message.pubInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.priInfo !== undefined) {
            rest_tx_1.PrivateUserInfo.encode(message.priInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestQueryUserResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubInfo = rest_tx_1.PublicUserInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.priInfo = rest_tx_1.PrivateUserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestQueryUserResponse);
        message.pubInfo =
            object.pubInfo !== undefined && object.pubInfo !== null
                ? rest_tx_1.PublicUserInfo.fromJSON(object.pubInfo)
                : undefined;
        message.priInfo =
            object.priInfo !== undefined && object.priInfo !== null
                ? rest_tx_1.PrivateUserInfo.fromJSON(object.priInfo)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pubInfo !== undefined &&
            (obj.pubInfo = message.pubInfo
                ? rest_tx_1.PublicUserInfo.toJSON(message.pubInfo)
                : undefined);
        message.priInfo !== undefined &&
            (obj.priInfo = message.priInfo
                ? rest_tx_1.PrivateUserInfo.toJSON(message.priInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRestQueryUserResponse);
        message.pubInfo =
            object.pubInfo !== undefined && object.pubInfo !== null
                ? rest_tx_1.PublicUserInfo.fromPartial(object.pubInfo)
                : undefined;
        message.priInfo =
            object.priInfo !== undefined && object.priInfo !== null
                ? rest_tx_1.PrivateUserInfo.fromPartial(object.priInfo)
                : undefined;
        return message;
    },
};
const baseRestQueryUserRelationRequest = { misesUid: '', filter: '' };
exports.RestQueryUserRelationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.misesUid !== '') {
            writer.uint32(10).string(message.misesUid);
        }
        if (message.filter !== '') {
            writer.uint32(18).string(message.filter);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestQueryUserRelationRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesUid = reader.string();
                    break;
                case 2:
                    message.filter = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseRestQueryUserRelationRequest);
        message.misesUid =
            object.misesUid !== undefined && object.misesUid !== null
                ? String(object.misesUid)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : '';
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.misesUid !== undefined && (obj.misesUid = message.misesUid);
        message.filter !== undefined && (obj.filter = message.filter);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRestQueryUserRelationRequest);
        message.misesUid = (_a = object.misesUid) !== null && _a !== void 0 ? _a : '';
        message.filter = (_b = object.filter) !== null && _b !== void 0 ? _b : '';
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseMisesID = { misesId: '' };
exports.MisesID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.misesId !== '') {
            writer.uint32(10).string(message.misesId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMisesID);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMisesID);
        message.misesId =
            object.misesId !== undefined && object.misesId !== null
                ? String(object.misesId)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.misesId !== undefined && (obj.misesId = message.misesId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMisesID);
        message.misesId = (_a = object.misesId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
const baseRestQueryUserRelationResponse = {};
exports.RestQueryUserRelationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.misesList) {
            exports.MisesID.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestQueryUserRelationResponse);
        message.misesList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesList.push(exports.MisesID.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseRestQueryUserRelationResponse);
        message.misesList = ((_a = object.misesList) !== null && _a !== void 0 ? _a : []).map((e) => exports.MisesID.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.misesList) {
            obj.misesList = message.misesList.map((e) => e ? exports.MisesID.toJSON(e) : undefined);
        }
        else {
            obj.misesList = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRestQueryUserRelationResponse);
        message.misesList =
            ((_a = object.misesList) === null || _a === void 0 ? void 0 : _a.map((e) => exports.MisesID.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseRestQueryAppRequest = { misesAppid: '' };
exports.RestQueryAppRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.misesAppid !== '') {
            writer.uint32(10).string(message.misesAppid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestQueryAppRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesAppid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestQueryAppRequest);
        message.misesAppid =
            object.misesAppid !== undefined && object.misesAppid !== null
                ? String(object.misesAppid)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRestQueryAppRequest);
        message.misesAppid = (_a = object.misesAppid) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
const baseRestQueryAppResponse = {};
exports.RestQueryAppResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pubInfo !== undefined) {
            rest_tx_1.PublicAppInfo.encode(message.pubInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestQueryAppResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubInfo = rest_tx_1.PublicAppInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestQueryAppResponse);
        message.pubInfo =
            object.pubInfo !== undefined && object.pubInfo !== null
                ? rest_tx_1.PublicAppInfo.fromJSON(object.pubInfo)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pubInfo !== undefined &&
            (obj.pubInfo = message.pubInfo
                ? rest_tx_1.PublicAppInfo.toJSON(message.pubInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRestQueryAppResponse);
        message.pubInfo =
            object.pubInfo !== undefined && object.pubInfo !== null
                ? rest_tx_1.PublicAppInfo.fromPartial(object.pubInfo)
                : undefined;
        return message;
    },
};
const baseRestQueryAppFeeGrantRequest = { misesAppid: '', misesUid: '' };
exports.RestQueryAppFeeGrantRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.misesAppid !== '') {
            writer.uint32(10).string(message.misesAppid);
        }
        if (message.misesUid !== '') {
            writer.uint32(18).string(message.misesUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestQueryAppFeeGrantRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.misesAppid = reader.string();
                    break;
                case 2:
                    message.misesUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestQueryAppFeeGrantRequest);
        message.misesAppid =
            object.misesAppid !== undefined && object.misesAppid !== null
                ? String(object.misesAppid)
                : '';
        message.misesUid =
            object.misesUid !== undefined && object.misesUid !== null
                ? String(object.misesUid)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.misesAppid !== undefined && (obj.misesAppid = message.misesAppid);
        message.misesUid !== undefined && (obj.misesUid = message.misesUid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRestQueryAppFeeGrantRequest);
        message.misesAppid = (_a = object.misesAppid) !== null && _a !== void 0 ? _a : '';
        message.misesUid = (_b = object.misesUid) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
const baseRestQueryAppFeeGrantResponse = {};
exports.RestQueryAppFeeGrantResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.grant !== undefined) {
            rest_tx_1.AppFeeGrant.encode(message.grant, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestQueryAppFeeGrantResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grant = rest_tx_1.AppFeeGrant.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestQueryAppFeeGrantResponse);
        message.grant =
            object.grant !== undefined && object.grant !== null
                ? rest_tx_1.AppFeeGrant.fromJSON(object.grant)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.grant !== undefined &&
            (obj.grant = message.grant
                ? rest_tx_1.AppFeeGrant.toJSON(message.grant)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRestQueryAppFeeGrantResponse);
        message.grant =
            object.grant !== undefined && object.grant !== null
                ? rest_tx_1.AppFeeGrant.fromPartial(object.grant)
                : undefined;
        return message;
    },
};
class RestQueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryDid = this.QueryDid.bind(this);
        this.QueryUser = this.QueryUser.bind(this);
        this.QueryUserRelation = this.QueryUserRelation.bind(this);
        this.QueryApp = this.QueryApp.bind(this);
        this.QueryAppFeeGrant = this.QueryAppFeeGrant.bind(this);
    }
    QueryDid(request) {
        const data = exports.RestQueryDidRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryDid', data);
        return promise.then((data) => exports.RestQueryDidResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryUser(request) {
        const data = exports.RestQueryUserRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryUser', data);
        return promise.then((data) => exports.RestQueryUserResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryUserRelation(request) {
        const data = exports.RestQueryUserRelationRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryUserRelation', data);
        return promise.then((data) => exports.RestQueryUserRelationResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryApp(request) {
        const data = exports.RestQueryAppRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryApp', data);
        return promise.then((data) => exports.RestQueryAppResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryAppFeeGrant(request) {
        const data = exports.RestQueryAppFeeGrantRequest.encode(request).finish();
        const promise = this.rpc.request('misesid.misestm.v1beta1.RestQuery', 'QueryAppFeeGrant', data);
        return promise.then((data) => exports.RestQueryAppFeeGrantResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.RestQueryClientImpl = RestQueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=rest_query.js.map