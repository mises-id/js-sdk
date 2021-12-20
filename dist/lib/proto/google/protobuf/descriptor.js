"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.methodOptions_IdempotencyLevelToJSON = exports.methodOptions_IdempotencyLevelFromJSON = exports.MethodOptions_IdempotencyLevel = exports.fieldOptions_JSTypeToJSON = exports.fieldOptions_JSTypeFromJSON = exports.FieldOptions_JSType = exports.fieldOptions_CTypeToJSON = exports.fieldOptions_CTypeFromJSON = exports.FieldOptions_CType = exports.fileOptions_OptimizeModeToJSON = exports.fileOptions_OptimizeModeFromJSON = exports.FileOptions_OptimizeMode = exports.fieldDescriptorProto_LabelToJSON = exports.fieldDescriptorProto_LabelFromJSON = exports.FieldDescriptorProto_Label = exports.fieldDescriptorProto_TypeToJSON = exports.fieldDescriptorProto_TypeFromJSON = exports.FieldDescriptorProto_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'google.protobuf';
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /**
     * TYPE_DOUBLE - 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /**
     * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /**
     * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
    /**
     * TYPE_GROUP - Tag-delimited aggregate.
     * Group type is deprecated and not supported in proto3. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE - Length-delimited aggregate. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES - New in version 2. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Type = exports.FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = {}));
function fieldDescriptorProto_TypeFromJSON(object) {
    switch (object) {
        case 1:
        case 'TYPE_DOUBLE':
            return FieldDescriptorProto_Type.TYPE_DOUBLE;
        case 2:
        case 'TYPE_FLOAT':
            return FieldDescriptorProto_Type.TYPE_FLOAT;
        case 3:
        case 'TYPE_INT64':
            return FieldDescriptorProto_Type.TYPE_INT64;
        case 4:
        case 'TYPE_UINT64':
            return FieldDescriptorProto_Type.TYPE_UINT64;
        case 5:
        case 'TYPE_INT32':
            return FieldDescriptorProto_Type.TYPE_INT32;
        case 6:
        case 'TYPE_FIXED64':
            return FieldDescriptorProto_Type.TYPE_FIXED64;
        case 7:
        case 'TYPE_FIXED32':
            return FieldDescriptorProto_Type.TYPE_FIXED32;
        case 8:
        case 'TYPE_BOOL':
            return FieldDescriptorProto_Type.TYPE_BOOL;
        case 9:
        case 'TYPE_STRING':
            return FieldDescriptorProto_Type.TYPE_STRING;
        case 10:
        case 'TYPE_GROUP':
            return FieldDescriptorProto_Type.TYPE_GROUP;
        case 11:
        case 'TYPE_MESSAGE':
            return FieldDescriptorProto_Type.TYPE_MESSAGE;
        case 12:
        case 'TYPE_BYTES':
            return FieldDescriptorProto_Type.TYPE_BYTES;
        case 13:
        case 'TYPE_UINT32':
            return FieldDescriptorProto_Type.TYPE_UINT32;
        case 14:
        case 'TYPE_ENUM':
            return FieldDescriptorProto_Type.TYPE_ENUM;
        case 15:
        case 'TYPE_SFIXED32':
            return FieldDescriptorProto_Type.TYPE_SFIXED32;
        case 16:
        case 'TYPE_SFIXED64':
            return FieldDescriptorProto_Type.TYPE_SFIXED64;
        case 17:
        case 'TYPE_SINT32':
            return FieldDescriptorProto_Type.TYPE_SINT32;
        case 18:
        case 'TYPE_SINT64':
            return FieldDescriptorProto_Type.TYPE_SINT64;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FieldDescriptorProto_Type.UNRECOGNIZED;
    }
}
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
function fieldDescriptorProto_TypeToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Type.TYPE_DOUBLE:
            return 'TYPE_DOUBLE';
        case FieldDescriptorProto_Type.TYPE_FLOAT:
            return 'TYPE_FLOAT';
        case FieldDescriptorProto_Type.TYPE_INT64:
            return 'TYPE_INT64';
        case FieldDescriptorProto_Type.TYPE_UINT64:
            return 'TYPE_UINT64';
        case FieldDescriptorProto_Type.TYPE_INT32:
            return 'TYPE_INT32';
        case FieldDescriptorProto_Type.TYPE_FIXED64:
            return 'TYPE_FIXED64';
        case FieldDescriptorProto_Type.TYPE_FIXED32:
            return 'TYPE_FIXED32';
        case FieldDescriptorProto_Type.TYPE_BOOL:
            return 'TYPE_BOOL';
        case FieldDescriptorProto_Type.TYPE_STRING:
            return 'TYPE_STRING';
        case FieldDescriptorProto_Type.TYPE_GROUP:
            return 'TYPE_GROUP';
        case FieldDescriptorProto_Type.TYPE_MESSAGE:
            return 'TYPE_MESSAGE';
        case FieldDescriptorProto_Type.TYPE_BYTES:
            return 'TYPE_BYTES';
        case FieldDescriptorProto_Type.TYPE_UINT32:
            return 'TYPE_UINT32';
        case FieldDescriptorProto_Type.TYPE_ENUM:
            return 'TYPE_ENUM';
        case FieldDescriptorProto_Type.TYPE_SFIXED32:
            return 'TYPE_SFIXED32';
        case FieldDescriptorProto_Type.TYPE_SFIXED64:
            return 'TYPE_SFIXED64';
        case FieldDescriptorProto_Type.TYPE_SINT32:
            return 'TYPE_SINT32';
        case FieldDescriptorProto_Type.TYPE_SINT64:
            return 'TYPE_SINT64';
        default:
            return 'UNKNOWN';
    }
}
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Label = exports.FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = {}));
function fieldDescriptorProto_LabelFromJSON(object) {
    switch (object) {
        case 1:
        case 'LABEL_OPTIONAL':
            return FieldDescriptorProto_Label.LABEL_OPTIONAL;
        case 2:
        case 'LABEL_REQUIRED':
            return FieldDescriptorProto_Label.LABEL_REQUIRED;
        case 3:
        case 'LABEL_REPEATED':
            return FieldDescriptorProto_Label.LABEL_REPEATED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FieldDescriptorProto_Label.UNRECOGNIZED;
    }
}
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
function fieldDescriptorProto_LabelToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Label.LABEL_OPTIONAL:
            return 'LABEL_OPTIONAL';
        case FieldDescriptorProto_Label.LABEL_REQUIRED:
            return 'LABEL_REQUIRED';
        case FieldDescriptorProto_Label.LABEL_REPEATED:
            return 'LABEL_REPEATED';
        default:
            return 'UNKNOWN';
    }
}
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
/** Generated classes can be optimized for speed or code size. */
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /** SPEED - Generate complete code for parsing, serialization, */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /** CODE_SIZE - etc. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeMode = exports.FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = {}));
function fileOptions_OptimizeModeFromJSON(object) {
    switch (object) {
        case 1:
        case 'SPEED':
            return FileOptions_OptimizeMode.SPEED;
        case 2:
        case 'CODE_SIZE':
            return FileOptions_OptimizeMode.CODE_SIZE;
        case 3:
        case 'LITE_RUNTIME':
            return FileOptions_OptimizeMode.LITE_RUNTIME;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FileOptions_OptimizeMode.UNRECOGNIZED;
    }
}
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
function fileOptions_OptimizeModeToJSON(object) {
    switch (object) {
        case FileOptions_OptimizeMode.SPEED:
            return 'SPEED';
        case FileOptions_OptimizeMode.CODE_SIZE:
            return 'CODE_SIZE';
        case FileOptions_OptimizeMode.LITE_RUNTIME:
            return 'LITE_RUNTIME';
        default:
            return 'UNKNOWN';
    }
}
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /** STRING - Default mode. */
    FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
    FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CType = exports.FieldOptions_CType || (exports.FieldOptions_CType = {}));
function fieldOptions_CTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'STRING':
            return FieldOptions_CType.STRING;
        case 1:
        case 'CORD':
            return FieldOptions_CType.CORD;
        case 2:
        case 'STRING_PIECE':
            return FieldOptions_CType.STRING_PIECE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FieldOptions_CType.UNRECOGNIZED;
    }
}
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
function fieldOptions_CTypeToJSON(object) {
    switch (object) {
        case FieldOptions_CType.STRING:
            return 'STRING';
        case FieldOptions_CType.CORD:
            return 'CORD';
        case FieldOptions_CType.STRING_PIECE:
            return 'STRING_PIECE';
        default:
            return 'UNKNOWN';
    }
}
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /** JS_NORMAL - Use the default type. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /** JS_STRING - Use JavaScript strings. */
    FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /** JS_NUMBER - Use JavaScript numbers. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
    FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSType = exports.FieldOptions_JSType || (exports.FieldOptions_JSType = {}));
function fieldOptions_JSTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'JS_NORMAL':
            return FieldOptions_JSType.JS_NORMAL;
        case 1:
        case 'JS_STRING':
            return FieldOptions_JSType.JS_STRING;
        case 2:
        case 'JS_NUMBER':
            return FieldOptions_JSType.JS_NUMBER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FieldOptions_JSType.UNRECOGNIZED;
    }
}
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
function fieldOptions_JSTypeToJSON(object) {
    switch (object) {
        case FieldOptions_JSType.JS_NORMAL:
            return 'JS_NORMAL';
        case FieldOptions_JSType.JS_STRING:
            return 'JS_STRING';
        case FieldOptions_JSType.JS_NUMBER:
            return 'JS_NUMBER';
        default:
            return 'UNKNOWN';
    }
}
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /** NO_SIDE_EFFECTS - implies idempotent */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /** IDEMPOTENT - idempotent, but may have side effects */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevel = exports.MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = {}));
function methodOptions_IdempotencyLevelFromJSON(object) {
    switch (object) {
        case 0:
        case 'IDEMPOTENCY_UNKNOWN':
            return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
        case 1:
        case 'NO_SIDE_EFFECTS':
            return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
        case 2:
        case 'IDEMPOTENT':
            return MethodOptions_IdempotencyLevel.IDEMPOTENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
    }
}
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
function methodOptions_IdempotencyLevelToJSON(object) {
    switch (object) {
        case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
            return 'IDEMPOTENCY_UNKNOWN';
        case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            return 'NO_SIDE_EFFECTS';
        case MethodOptions_IdempotencyLevel.IDEMPOTENT:
            return 'IDEMPOTENT';
        default:
            return 'UNKNOWN';
    }
}
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
const baseFileDescriptorSet = {};
exports.FileDescriptorSet = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.file) {
            exports.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFileDescriptorSet);
        message.file = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.file.push(exports.FileDescriptorProto.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseFileDescriptorSet);
        message.file = ((_a = object.file) !== null && _a !== void 0 ? _a : []).map((e) => exports.FileDescriptorProto.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.file) {
            obj.file = message.file.map((e) => e ? exports.FileDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.file = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseFileDescriptorSet);
        message.file =
            ((_a = object.file) === null || _a === void 0 ? void 0 : _a.map((e) => exports.FileDescriptorProto.fromPartial(e))) || [];
        return message;
    },
};
const baseFileDescriptorProto = {
    name: '',
    package: '',
    dependency: '',
    publicDependency: 0,
    weakDependency: 0,
    syntax: '',
};
exports.FileDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.package !== '') {
            writer.uint32(18).string(message.package);
        }
        for (const v of message.dependency) {
            writer.uint32(26).string(v);
        }
        writer.uint32(82).fork();
        for (const v of message.publicDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(90).fork();
        for (const v of message.weakDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.messageType) {
            exports.DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.service) {
            exports.ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.sourceCodeInfo !== undefined) {
            exports.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
        }
        if (message.syntax !== '') {
            writer.uint32(98).string(message.syntax);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFileDescriptorProto);
        message.dependency = [];
        message.publicDependency = [];
        message.weakDependency = [];
        message.messageType = [];
        message.enumType = [];
        message.service = [];
        message.extension = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.package = reader.string();
                    break;
                case 3:
                    message.dependency.push(reader.string());
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.publicDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.publicDependency.push(reader.int32());
                    }
                    break;
                case 11:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weakDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.weakDependency.push(reader.int32());
                    }
                    break;
                case 4:
                    message.messageType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.service.push(exports.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.options = exports.FileOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sourceCodeInfo = exports.SourceCodeInfo.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.syntax = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseFileDescriptorProto);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.package =
            object.package !== undefined && object.package !== null
                ? String(object.package)
                : '';
        message.dependency = ((_a = object.dependency) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.publicDependency = ((_b = object.publicDependency) !== null && _b !== void 0 ? _b : []).map((e) => Number(e));
        message.weakDependency = ((_c = object.weakDependency) !== null && _c !== void 0 ? _c : []).map((e) => Number(e));
        message.messageType = ((_d = object.messageType) !== null && _d !== void 0 ? _d : []).map((e) => exports.DescriptorProto.fromJSON(e));
        message.enumType = ((_e = object.enumType) !== null && _e !== void 0 ? _e : []).map((e) => exports.EnumDescriptorProto.fromJSON(e));
        message.service = ((_f = object.service) !== null && _f !== void 0 ? _f : []).map((e) => exports.ServiceDescriptorProto.fromJSON(e));
        message.extension = ((_g = object.extension) !== null && _g !== void 0 ? _g : []).map((e) => exports.FieldDescriptorProto.fromJSON(e));
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.FileOptions.fromJSON(object.options)
                : undefined;
        message.sourceCodeInfo =
            object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null
                ? exports.SourceCodeInfo.fromJSON(object.sourceCodeInfo)
                : undefined;
        message.syntax =
            object.syntax !== undefined && object.syntax !== null
                ? String(object.syntax)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.package !== undefined && (obj.package = message.package);
        if (message.dependency) {
            obj.dependency = message.dependency.map((e) => e);
        }
        else {
            obj.dependency = [];
        }
        if (message.publicDependency) {
            obj.publicDependency = message.publicDependency.map((e) => Math.round(e));
        }
        else {
            obj.publicDependency = [];
        }
        if (message.weakDependency) {
            obj.weakDependency = message.weakDependency.map((e) => Math.round(e));
        }
        else {
            obj.weakDependency = [];
        }
        if (message.messageType) {
            obj.messageType = message.messageType.map((e) => e ? exports.DescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.messageType = [];
        }
        if (message.enumType) {
            obj.enumType = message.enumType.map((e) => e ? exports.EnumDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.enumType = [];
        }
        if (message.service) {
            obj.service = message.service.map((e) => e ? exports.ServiceDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.service = [];
        }
        if (message.extension) {
            obj.extension = message.extension.map((e) => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.extension = [];
        }
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.FileOptions.toJSON(message.options)
                : undefined);
        message.sourceCodeInfo !== undefined &&
            (obj.sourceCodeInfo = message.sourceCodeInfo
                ? exports.SourceCodeInfo.toJSON(message.sourceCodeInfo)
                : undefined);
        message.syntax !== undefined && (obj.syntax = message.syntax);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseFileDescriptorProto);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : '';
        message.dependency = ((_c = object.dependency) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.publicDependency = ((_d = object.publicDependency) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.weakDependency = ((_e = object.weakDependency) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.messageType =
            ((_f = object.messageType) === null || _f === void 0 ? void 0 : _f.map((e) => exports.DescriptorProto.fromPartial(e))) || [];
        message.enumType =
            ((_g = object.enumType) === null || _g === void 0 ? void 0 : _g.map((e) => exports.EnumDescriptorProto.fromPartial(e))) || [];
        message.service =
            ((_h = object.service) === null || _h === void 0 ? void 0 : _h.map((e) => exports.ServiceDescriptorProto.fromPartial(e))) || [];
        message.extension =
            ((_j = object.extension) === null || _j === void 0 ? void 0 : _j.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || [];
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.FileOptions.fromPartial(object.options)
                : undefined;
        message.sourceCodeInfo =
            object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null
                ? exports.SourceCodeInfo.fromPartial(object.sourceCodeInfo)
                : undefined;
        message.syntax = (_k = object.syntax) !== null && _k !== void 0 ? _k : '';
        return message;
    },
};
const baseDescriptorProto = { name: '', reservedName: '' };
exports.DescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.field) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.nestedType) {
            exports.DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.extensionRange) {
            exports.DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.oneofDecl) {
            exports.OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDescriptorProto);
        message.field = [];
        message.extension = [];
        message.nestedType = [];
        message.enumType = [];
        message.extensionRange = [];
        message.oneofDecl = [];
        message.reservedRange = [];
        message.reservedName = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.field.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nestedType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.extensionRange.push(exports.DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.oneofDecl.push(exports.OneofDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.options = exports.MessageOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reservedRange.push(exports.DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseDescriptorProto);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.field = ((_a = object.field) !== null && _a !== void 0 ? _a : []).map((e) => exports.FieldDescriptorProto.fromJSON(e));
        message.extension = ((_b = object.extension) !== null && _b !== void 0 ? _b : []).map((e) => exports.FieldDescriptorProto.fromJSON(e));
        message.nestedType = ((_c = object.nestedType) !== null && _c !== void 0 ? _c : []).map((e) => exports.DescriptorProto.fromJSON(e));
        message.enumType = ((_d = object.enumType) !== null && _d !== void 0 ? _d : []).map((e) => exports.EnumDescriptorProto.fromJSON(e));
        message.extensionRange = ((_e = object.extensionRange) !== null && _e !== void 0 ? _e : []).map((e) => exports.DescriptorProto_ExtensionRange.fromJSON(e));
        message.oneofDecl = ((_f = object.oneofDecl) !== null && _f !== void 0 ? _f : []).map((e) => exports.OneofDescriptorProto.fromJSON(e));
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.MessageOptions.fromJSON(object.options)
                : undefined;
        message.reservedRange = ((_g = object.reservedRange) !== null && _g !== void 0 ? _g : []).map((e) => exports.DescriptorProto_ReservedRange.fromJSON(e));
        message.reservedName = ((_h = object.reservedName) !== null && _h !== void 0 ? _h : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.field) {
            obj.field = message.field.map((e) => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.field = [];
        }
        if (message.extension) {
            obj.extension = message.extension.map((e) => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.extension = [];
        }
        if (message.nestedType) {
            obj.nestedType = message.nestedType.map((e) => e ? exports.DescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.nestedType = [];
        }
        if (message.enumType) {
            obj.enumType = message.enumType.map((e) => e ? exports.EnumDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.enumType = [];
        }
        if (message.extensionRange) {
            obj.extensionRange = message.extensionRange.map((e) => e ? exports.DescriptorProto_ExtensionRange.toJSON(e) : undefined);
        }
        else {
            obj.extensionRange = [];
        }
        if (message.oneofDecl) {
            obj.oneofDecl = message.oneofDecl.map((e) => e ? exports.OneofDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.oneofDecl = [];
        }
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.MessageOptions.toJSON(message.options)
                : undefined);
        if (message.reservedRange) {
            obj.reservedRange = message.reservedRange.map((e) => e ? exports.DescriptorProto_ReservedRange.toJSON(e) : undefined);
        }
        else {
            obj.reservedRange = [];
        }
        if (message.reservedName) {
            obj.reservedName = message.reservedName.map((e) => e);
        }
        else {
            obj.reservedName = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseDescriptorProto);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.field =
            ((_b = object.field) === null || _b === void 0 ? void 0 : _b.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || [];
        message.extension =
            ((_c = object.extension) === null || _c === void 0 ? void 0 : _c.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || [];
        message.nestedType =
            ((_d = object.nestedType) === null || _d === void 0 ? void 0 : _d.map((e) => exports.DescriptorProto.fromPartial(e))) || [];
        message.enumType =
            ((_e = object.enumType) === null || _e === void 0 ? void 0 : _e.map((e) => exports.EnumDescriptorProto.fromPartial(e))) || [];
        message.extensionRange =
            ((_f = object.extensionRange) === null || _f === void 0 ? void 0 : _f.map((e) => exports.DescriptorProto_ExtensionRange.fromPartial(e))) || [];
        message.oneofDecl =
            ((_g = object.oneofDecl) === null || _g === void 0 ? void 0 : _g.map((e) => exports.OneofDescriptorProto.fromPartial(e))) || [];
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.MessageOptions.fromPartial(object.options)
                : undefined;
        message.reservedRange =
            ((_h = object.reservedRange) === null || _h === void 0 ? void 0 : _h.map((e) => exports.DescriptorProto_ReservedRange.fromPartial(e))) || [];
        message.reservedName = ((_j = object.reservedName) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        return message;
    },
};
const baseDescriptorProto_ExtensionRange = { start: 0, end: 0 };
exports.DescriptorProto_ExtensionRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        if (message.options !== undefined) {
            exports.ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDescriptorProto_ExtensionRange);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                case 3:
                    message.options = exports.ExtensionRangeOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDescriptorProto_ExtensionRange);
        message.start =
            object.start !== undefined && object.start !== null
                ? Number(object.start)
                : 0;
        message.end =
            object.end !== undefined && object.end !== null ? Number(object.end) : 0;
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.ExtensionRangeOptions.fromJSON(object.options)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.ExtensionRangeOptions.toJSON(message.options)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDescriptorProto_ExtensionRange);
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.ExtensionRangeOptions.fromPartial(object.options)
                : undefined;
        return message;
    },
};
const baseDescriptorProto_ReservedRange = { start: 0, end: 0 };
exports.DescriptorProto_ReservedRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDescriptorProto_ReservedRange);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDescriptorProto_ReservedRange);
        message.start =
            object.start !== undefined && object.start !== null
                ? Number(object.start)
                : 0;
        message.end =
            object.end !== undefined && object.end !== null ? Number(object.end) : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDescriptorProto_ReservedRange);
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
const baseExtensionRangeOptions = {};
exports.ExtensionRangeOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExtensionRangeOptions);
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseExtensionRangeOptions);
        message.uninterpretedOption = ((_a = object.uninterpretedOption) !== null && _a !== void 0 ? _a : []).map((e) => exports.UninterpretedOption.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseExtensionRangeOptions);
        message.uninterpretedOption =
            ((_a = object.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
const baseFieldDescriptorProto = {
    name: '',
    number: 0,
    label: 1,
    type: 1,
    typeName: '',
    extendee: '',
    defaultValue: '',
    oneofIndex: 0,
    jsonName: '',
    proto3Optional: false,
};
exports.FieldDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(24).int32(message.number);
        }
        if (message.label !== 1) {
            writer.uint32(32).int32(message.label);
        }
        if (message.type !== 1) {
            writer.uint32(40).int32(message.type);
        }
        if (message.typeName !== '') {
            writer.uint32(50).string(message.typeName);
        }
        if (message.extendee !== '') {
            writer.uint32(18).string(message.extendee);
        }
        if (message.defaultValue !== '') {
            writer.uint32(58).string(message.defaultValue);
        }
        if (message.oneofIndex !== 0) {
            writer.uint32(72).int32(message.oneofIndex);
        }
        if (message.jsonName !== '') {
            writer.uint32(82).string(message.jsonName);
        }
        if (message.options !== undefined) {
            exports.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.proto3Optional === true) {
            writer.uint32(136).bool(message.proto3Optional);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFieldDescriptorProto);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.number = reader.int32();
                    break;
                case 4:
                    message.label = reader.int32();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.typeName = reader.string();
                    break;
                case 2:
                    message.extendee = reader.string();
                    break;
                case 7:
                    message.defaultValue = reader.string();
                    break;
                case 9:
                    message.oneofIndex = reader.int32();
                    break;
                case 10:
                    message.jsonName = reader.string();
                    break;
                case 8:
                    message.options = exports.FieldOptions.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.proto3Optional = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFieldDescriptorProto);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.number =
            object.number !== undefined && object.number !== null
                ? Number(object.number)
                : 0;
        message.label =
            object.label !== undefined && object.label !== null
                ? fieldDescriptorProto_LabelFromJSON(object.label)
                : 1;
        message.type =
            object.type !== undefined && object.type !== null
                ? fieldDescriptorProto_TypeFromJSON(object.type)
                : 1;
        message.typeName =
            object.typeName !== undefined && object.typeName !== null
                ? String(object.typeName)
                : '';
        message.extendee =
            object.extendee !== undefined && object.extendee !== null
                ? String(object.extendee)
                : '';
        message.defaultValue =
            object.defaultValue !== undefined && object.defaultValue !== null
                ? String(object.defaultValue)
                : '';
        message.oneofIndex =
            object.oneofIndex !== undefined && object.oneofIndex !== null
                ? Number(object.oneofIndex)
                : 0;
        message.jsonName =
            object.jsonName !== undefined && object.jsonName !== null
                ? String(object.jsonName)
                : '';
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.FieldOptions.fromJSON(object.options)
                : undefined;
        message.proto3Optional =
            object.proto3Optional !== undefined && object.proto3Optional !== null
                ? Boolean(object.proto3Optional)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.label !== undefined &&
            (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
        message.type !== undefined &&
            (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
        message.typeName !== undefined && (obj.typeName = message.typeName);
        message.extendee !== undefined && (obj.extendee = message.extendee);
        message.defaultValue !== undefined &&
            (obj.defaultValue = message.defaultValue);
        message.oneofIndex !== undefined &&
            (obj.oneofIndex = Math.round(message.oneofIndex));
        message.jsonName !== undefined && (obj.jsonName = message.jsonName);
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.FieldOptions.toJSON(message.options)
                : undefined);
        message.proto3Optional !== undefined &&
            (obj.proto3Optional = message.proto3Optional);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseFieldDescriptorProto);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.label = (_c = object.label) !== null && _c !== void 0 ? _c : 1;
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 1;
        message.typeName = (_e = object.typeName) !== null && _e !== void 0 ? _e : '';
        message.extendee = (_f = object.extendee) !== null && _f !== void 0 ? _f : '';
        message.defaultValue = (_g = object.defaultValue) !== null && _g !== void 0 ? _g : '';
        message.oneofIndex = (_h = object.oneofIndex) !== null && _h !== void 0 ? _h : 0;
        message.jsonName = (_j = object.jsonName) !== null && _j !== void 0 ? _j : '';
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.FieldOptions.fromPartial(object.options)
                : undefined;
        message.proto3Optional = (_k = object.proto3Optional) !== null && _k !== void 0 ? _k : false;
        return message;
    },
};
const baseOneofDescriptorProto = { name: '' };
exports.OneofDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.options !== undefined) {
            exports.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOneofDescriptorProto);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.options = exports.OneofOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOneofDescriptorProto);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.OneofOptions.fromJSON(object.options)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.OneofOptions.toJSON(message.options)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseOneofDescriptorProto);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.OneofOptions.fromPartial(object.options)
                : undefined;
        return message;
    },
};
const baseEnumDescriptorProto = { name: '', reservedName: '' };
exports.EnumDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.value) {
            exports.EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnumDescriptorProto);
        message.value = [];
        message.reservedRange = [];
        message.reservedName = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value.push(exports.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.EnumOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.reservedRange.push(exports.EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseEnumDescriptorProto);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.value = ((_a = object.value) !== null && _a !== void 0 ? _a : []).map((e) => exports.EnumValueDescriptorProto.fromJSON(e));
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.EnumOptions.fromJSON(object.options)
                : undefined;
        message.reservedRange = ((_b = object.reservedRange) !== null && _b !== void 0 ? _b : []).map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromJSON(e));
        message.reservedName = ((_c = object.reservedName) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.value) {
            obj.value = message.value.map((e) => e ? exports.EnumValueDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.value = [];
        }
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.EnumOptions.toJSON(message.options)
                : undefined);
        if (message.reservedRange) {
            obj.reservedRange = message.reservedRange.map((e) => e ? exports.EnumDescriptorProto_EnumReservedRange.toJSON(e) : undefined);
        }
        else {
            obj.reservedRange = [];
        }
        if (message.reservedName) {
            obj.reservedName = message.reservedName.map((e) => e);
        }
        else {
            obj.reservedName = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseEnumDescriptorProto);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.value =
            ((_b = object.value) === null || _b === void 0 ? void 0 : _b.map((e) => exports.EnumValueDescriptorProto.fromPartial(e))) || [];
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.EnumOptions.fromPartial(object.options)
                : undefined;
        message.reservedRange =
            ((_c = object.reservedRange) === null || _c === void 0 ? void 0 : _c.map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromPartial(e))) || [];
        message.reservedName = ((_d = object.reservedName) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
const baseEnumDescriptorProto_EnumReservedRange = { start: 0, end: 0 };
exports.EnumDescriptorProto_EnumReservedRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnumDescriptorProto_EnumReservedRange);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEnumDescriptorProto_EnumReservedRange);
        message.start =
            object.start !== undefined && object.start !== null
                ? Number(object.start)
                : 0;
        message.end =
            object.end !== undefined && object.end !== null ? Number(object.end) : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseEnumDescriptorProto_EnumReservedRange);
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
const baseEnumValueDescriptorProto = { name: '', number: 0 };
exports.EnumValueDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined) {
            exports.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnumValueDescriptorProto);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.options = exports.EnumValueOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEnumValueDescriptorProto);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.number =
            object.number !== undefined && object.number !== null
                ? Number(object.number)
                : 0;
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.EnumValueOptions.fromJSON(object.options)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.EnumValueOptions.toJSON(message.options)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseEnumValueDescriptorProto);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.EnumValueOptions.fromPartial(object.options)
                : undefined;
        return message;
    },
};
const baseServiceDescriptorProto = { name: '' };
exports.ServiceDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.method) {
            exports.MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseServiceDescriptorProto);
        message.method = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.method.push(exports.MethodDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.ServiceOptions.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseServiceDescriptorProto);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.method = ((_a = object.method) !== null && _a !== void 0 ? _a : []).map((e) => exports.MethodDescriptorProto.fromJSON(e));
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.ServiceOptions.fromJSON(object.options)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.method) {
            obj.method = message.method.map((e) => e ? exports.MethodDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.method = [];
        }
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.ServiceOptions.toJSON(message.options)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseServiceDescriptorProto);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.method =
            ((_b = object.method) === null || _b === void 0 ? void 0 : _b.map((e) => exports.MethodDescriptorProto.fromPartial(e))) || [];
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.ServiceOptions.fromPartial(object.options)
                : undefined;
        return message;
    },
};
const baseMethodDescriptorProto = {
    name: '',
    inputType: '',
    outputType: '',
    clientStreaming: false,
    serverStreaming: false,
};
exports.MethodDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.inputType !== '') {
            writer.uint32(18).string(message.inputType);
        }
        if (message.outputType !== '') {
            writer.uint32(26).string(message.outputType);
        }
        if (message.options !== undefined) {
            exports.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.clientStreaming === true) {
            writer.uint32(40).bool(message.clientStreaming);
        }
        if (message.serverStreaming === true) {
            writer.uint32(48).bool(message.serverStreaming);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMethodDescriptorProto);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.inputType = reader.string();
                    break;
                case 3:
                    message.outputType = reader.string();
                    break;
                case 4:
                    message.options = exports.MethodOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.clientStreaming = reader.bool();
                    break;
                case 6:
                    message.serverStreaming = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMethodDescriptorProto);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : '';
        message.inputType =
            object.inputType !== undefined && object.inputType !== null
                ? String(object.inputType)
                : '';
        message.outputType =
            object.outputType !== undefined && object.outputType !== null
                ? String(object.outputType)
                : '';
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.MethodOptions.fromJSON(object.options)
                : undefined;
        message.clientStreaming =
            object.clientStreaming !== undefined && object.clientStreaming !== null
                ? Boolean(object.clientStreaming)
                : false;
        message.serverStreaming =
            object.serverStreaming !== undefined && object.serverStreaming !== null
                ? Boolean(object.serverStreaming)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.inputType !== undefined && (obj.inputType = message.inputType);
        message.outputType !== undefined && (obj.outputType = message.outputType);
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.MethodOptions.toJSON(message.options)
                : undefined);
        message.clientStreaming !== undefined &&
            (obj.clientStreaming = message.clientStreaming);
        message.serverStreaming !== undefined &&
            (obj.serverStreaming = message.serverStreaming);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseMethodDescriptorProto);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.inputType = (_b = object.inputType) !== null && _b !== void 0 ? _b : '';
        message.outputType = (_c = object.outputType) !== null && _c !== void 0 ? _c : '';
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.MethodOptions.fromPartial(object.options)
                : undefined;
        message.clientStreaming = (_d = object.clientStreaming) !== null && _d !== void 0 ? _d : false;
        message.serverStreaming = (_e = object.serverStreaming) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
const baseFileOptions = {
    javaPackage: '',
    javaOuterClassname: '',
    javaMultipleFiles: false,
    javaGenerateEqualsAndHash: false,
    javaStringCheckUtf8: false,
    optimizeFor: 1,
    goPackage: '',
    ccGenericServices: false,
    javaGenericServices: false,
    pyGenericServices: false,
    phpGenericServices: false,
    deprecated: false,
    ccEnableArenas: false,
    objcClassPrefix: '',
    csharpNamespace: '',
    swiftPrefix: '',
    phpClassPrefix: '',
    phpNamespace: '',
    phpMetadataNamespace: '',
    rubyPackage: '',
};
exports.FileOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.javaPackage !== '') {
            writer.uint32(10).string(message.javaPackage);
        }
        if (message.javaOuterClassname !== '') {
            writer.uint32(66).string(message.javaOuterClassname);
        }
        if (message.javaMultipleFiles === true) {
            writer.uint32(80).bool(message.javaMultipleFiles);
        }
        if (message.javaGenerateEqualsAndHash === true) {
            writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
        }
        if (message.javaStringCheckUtf8 === true) {
            writer.uint32(216).bool(message.javaStringCheckUtf8);
        }
        if (message.optimizeFor !== 1) {
            writer.uint32(72).int32(message.optimizeFor);
        }
        if (message.goPackage !== '') {
            writer.uint32(90).string(message.goPackage);
        }
        if (message.ccGenericServices === true) {
            writer.uint32(128).bool(message.ccGenericServices);
        }
        if (message.javaGenericServices === true) {
            writer.uint32(136).bool(message.javaGenericServices);
        }
        if (message.pyGenericServices === true) {
            writer.uint32(144).bool(message.pyGenericServices);
        }
        if (message.phpGenericServices === true) {
            writer.uint32(336).bool(message.phpGenericServices);
        }
        if (message.deprecated === true) {
            writer.uint32(184).bool(message.deprecated);
        }
        if (message.ccEnableArenas === true) {
            writer.uint32(248).bool(message.ccEnableArenas);
        }
        if (message.objcClassPrefix !== '') {
            writer.uint32(290).string(message.objcClassPrefix);
        }
        if (message.csharpNamespace !== '') {
            writer.uint32(298).string(message.csharpNamespace);
        }
        if (message.swiftPrefix !== '') {
            writer.uint32(314).string(message.swiftPrefix);
        }
        if (message.phpClassPrefix !== '') {
            writer.uint32(322).string(message.phpClassPrefix);
        }
        if (message.phpNamespace !== '') {
            writer.uint32(330).string(message.phpNamespace);
        }
        if (message.phpMetadataNamespace !== '') {
            writer.uint32(354).string(message.phpMetadataNamespace);
        }
        if (message.rubyPackage !== '') {
            writer.uint32(362).string(message.rubyPackage);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFileOptions);
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.javaPackage = reader.string();
                    break;
                case 8:
                    message.javaOuterClassname = reader.string();
                    break;
                case 10:
                    message.javaMultipleFiles = reader.bool();
                    break;
                case 20:
                    message.javaGenerateEqualsAndHash = reader.bool();
                    break;
                case 27:
                    message.javaStringCheckUtf8 = reader.bool();
                    break;
                case 9:
                    message.optimizeFor = reader.int32();
                    break;
                case 11:
                    message.goPackage = reader.string();
                    break;
                case 16:
                    message.ccGenericServices = reader.bool();
                    break;
                case 17:
                    message.javaGenericServices = reader.bool();
                    break;
                case 18:
                    message.pyGenericServices = reader.bool();
                    break;
                case 42:
                    message.phpGenericServices = reader.bool();
                    break;
                case 23:
                    message.deprecated = reader.bool();
                    break;
                case 31:
                    message.ccEnableArenas = reader.bool();
                    break;
                case 36:
                    message.objcClassPrefix = reader.string();
                    break;
                case 37:
                    message.csharpNamespace = reader.string();
                    break;
                case 39:
                    message.swiftPrefix = reader.string();
                    break;
                case 40:
                    message.phpClassPrefix = reader.string();
                    break;
                case 41:
                    message.phpNamespace = reader.string();
                    break;
                case 44:
                    message.phpMetadataNamespace = reader.string();
                    break;
                case 45:
                    message.rubyPackage = reader.string();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseFileOptions);
        message.javaPackage =
            object.javaPackage !== undefined && object.javaPackage !== null
                ? String(object.javaPackage)
                : '';
        message.javaOuterClassname =
            object.javaOuterClassname !== undefined &&
                object.javaOuterClassname !== null
                ? String(object.javaOuterClassname)
                : '';
        message.javaMultipleFiles =
            object.javaMultipleFiles !== undefined &&
                object.javaMultipleFiles !== null
                ? Boolean(object.javaMultipleFiles)
                : false;
        message.javaGenerateEqualsAndHash =
            object.javaGenerateEqualsAndHash !== undefined &&
                object.javaGenerateEqualsAndHash !== null
                ? Boolean(object.javaGenerateEqualsAndHash)
                : false;
        message.javaStringCheckUtf8 =
            object.javaStringCheckUtf8 !== undefined &&
                object.javaStringCheckUtf8 !== null
                ? Boolean(object.javaStringCheckUtf8)
                : false;
        message.optimizeFor =
            object.optimizeFor !== undefined && object.optimizeFor !== null
                ? fileOptions_OptimizeModeFromJSON(object.optimizeFor)
                : 1;
        message.goPackage =
            object.goPackage !== undefined && object.goPackage !== null
                ? String(object.goPackage)
                : '';
        message.ccGenericServices =
            object.ccGenericServices !== undefined &&
                object.ccGenericServices !== null
                ? Boolean(object.ccGenericServices)
                : false;
        message.javaGenericServices =
            object.javaGenericServices !== undefined &&
                object.javaGenericServices !== null
                ? Boolean(object.javaGenericServices)
                : false;
        message.pyGenericServices =
            object.pyGenericServices !== undefined &&
                object.pyGenericServices !== null
                ? Boolean(object.pyGenericServices)
                : false;
        message.phpGenericServices =
            object.phpGenericServices !== undefined &&
                object.phpGenericServices !== null
                ? Boolean(object.phpGenericServices)
                : false;
        message.deprecated =
            object.deprecated !== undefined && object.deprecated !== null
                ? Boolean(object.deprecated)
                : false;
        message.ccEnableArenas =
            object.ccEnableArenas !== undefined && object.ccEnableArenas !== null
                ? Boolean(object.ccEnableArenas)
                : false;
        message.objcClassPrefix =
            object.objcClassPrefix !== undefined && object.objcClassPrefix !== null
                ? String(object.objcClassPrefix)
                : '';
        message.csharpNamespace =
            object.csharpNamespace !== undefined && object.csharpNamespace !== null
                ? String(object.csharpNamespace)
                : '';
        message.swiftPrefix =
            object.swiftPrefix !== undefined && object.swiftPrefix !== null
                ? String(object.swiftPrefix)
                : '';
        message.phpClassPrefix =
            object.phpClassPrefix !== undefined && object.phpClassPrefix !== null
                ? String(object.phpClassPrefix)
                : '';
        message.phpNamespace =
            object.phpNamespace !== undefined && object.phpNamespace !== null
                ? String(object.phpNamespace)
                : '';
        message.phpMetadataNamespace =
            object.phpMetadataNamespace !== undefined &&
                object.phpMetadataNamespace !== null
                ? String(object.phpMetadataNamespace)
                : '';
        message.rubyPackage =
            object.rubyPackage !== undefined && object.rubyPackage !== null
                ? String(object.rubyPackage)
                : '';
        message.uninterpretedOption = ((_a = object.uninterpretedOption) !== null && _a !== void 0 ? _a : []).map((e) => exports.UninterpretedOption.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.javaPackage !== undefined && (obj.javaPackage = message.javaPackage);
        message.javaOuterClassname !== undefined &&
            (obj.javaOuterClassname = message.javaOuterClassname);
        message.javaMultipleFiles !== undefined &&
            (obj.javaMultipleFiles = message.javaMultipleFiles);
        message.javaGenerateEqualsAndHash !== undefined &&
            (obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash);
        message.javaStringCheckUtf8 !== undefined &&
            (obj.javaStringCheckUtf8 = message.javaStringCheckUtf8);
        message.optimizeFor !== undefined &&
            (obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor));
        message.goPackage !== undefined && (obj.goPackage = message.goPackage);
        message.ccGenericServices !== undefined &&
            (obj.ccGenericServices = message.ccGenericServices);
        message.javaGenericServices !== undefined &&
            (obj.javaGenericServices = message.javaGenericServices);
        message.pyGenericServices !== undefined &&
            (obj.pyGenericServices = message.pyGenericServices);
        message.phpGenericServices !== undefined &&
            (obj.phpGenericServices = message.phpGenericServices);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.ccEnableArenas !== undefined &&
            (obj.ccEnableArenas = message.ccEnableArenas);
        message.objcClassPrefix !== undefined &&
            (obj.objcClassPrefix = message.objcClassPrefix);
        message.csharpNamespace !== undefined &&
            (obj.csharpNamespace = message.csharpNamespace);
        message.swiftPrefix !== undefined && (obj.swiftPrefix = message.swiftPrefix);
        message.phpClassPrefix !== undefined &&
            (obj.phpClassPrefix = message.phpClassPrefix);
        message.phpNamespace !== undefined &&
            (obj.phpNamespace = message.phpNamespace);
        message.phpMetadataNamespace !== undefined &&
            (obj.phpMetadataNamespace = message.phpMetadataNamespace);
        message.rubyPackage !== undefined && (obj.rubyPackage = message.rubyPackage);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const message = Object.assign({}, baseFileOptions);
        message.javaPackage = (_a = object.javaPackage) !== null && _a !== void 0 ? _a : '';
        message.javaOuterClassname = (_b = object.javaOuterClassname) !== null && _b !== void 0 ? _b : '';
        message.javaMultipleFiles = (_c = object.javaMultipleFiles) !== null && _c !== void 0 ? _c : false;
        message.javaGenerateEqualsAndHash =
            (_d = object.javaGenerateEqualsAndHash) !== null && _d !== void 0 ? _d : false;
        message.javaStringCheckUtf8 = (_e = object.javaStringCheckUtf8) !== null && _e !== void 0 ? _e : false;
        message.optimizeFor = (_f = object.optimizeFor) !== null && _f !== void 0 ? _f : 1;
        message.goPackage = (_g = object.goPackage) !== null && _g !== void 0 ? _g : '';
        message.ccGenericServices = (_h = object.ccGenericServices) !== null && _h !== void 0 ? _h : false;
        message.javaGenericServices = (_j = object.javaGenericServices) !== null && _j !== void 0 ? _j : false;
        message.pyGenericServices = (_k = object.pyGenericServices) !== null && _k !== void 0 ? _k : false;
        message.phpGenericServices = (_l = object.phpGenericServices) !== null && _l !== void 0 ? _l : false;
        message.deprecated = (_m = object.deprecated) !== null && _m !== void 0 ? _m : false;
        message.ccEnableArenas = (_o = object.ccEnableArenas) !== null && _o !== void 0 ? _o : false;
        message.objcClassPrefix = (_p = object.objcClassPrefix) !== null && _p !== void 0 ? _p : '';
        message.csharpNamespace = (_q = object.csharpNamespace) !== null && _q !== void 0 ? _q : '';
        message.swiftPrefix = (_r = object.swiftPrefix) !== null && _r !== void 0 ? _r : '';
        message.phpClassPrefix = (_s = object.phpClassPrefix) !== null && _s !== void 0 ? _s : '';
        message.phpNamespace = (_t = object.phpNamespace) !== null && _t !== void 0 ? _t : '';
        message.phpMetadataNamespace = (_u = object.phpMetadataNamespace) !== null && _u !== void 0 ? _u : '';
        message.rubyPackage = (_v = object.rubyPackage) !== null && _v !== void 0 ? _v : '';
        message.uninterpretedOption =
            ((_w = object.uninterpretedOption) === null || _w === void 0 ? void 0 : _w.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
const baseMessageOptions = {
    messageSetWireFormat: false,
    noStandardDescriptorAccessor: false,
    deprecated: false,
    mapEntry: false,
};
exports.MessageOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.messageSetWireFormat === true) {
            writer.uint32(8).bool(message.messageSetWireFormat);
        }
        if (message.noStandardDescriptorAccessor === true) {
            writer.uint32(16).bool(message.noStandardDescriptorAccessor);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.mapEntry === true) {
            writer.uint32(56).bool(message.mapEntry);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMessageOptions);
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageSetWireFormat = reader.bool();
                    break;
                case 2:
                    message.noStandardDescriptorAccessor = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 7:
                    message.mapEntry = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseMessageOptions);
        message.messageSetWireFormat =
            object.messageSetWireFormat !== undefined &&
                object.messageSetWireFormat !== null
                ? Boolean(object.messageSetWireFormat)
                : false;
        message.noStandardDescriptorAccessor =
            object.noStandardDescriptorAccessor !== undefined &&
                object.noStandardDescriptorAccessor !== null
                ? Boolean(object.noStandardDescriptorAccessor)
                : false;
        message.deprecated =
            object.deprecated !== undefined && object.deprecated !== null
                ? Boolean(object.deprecated)
                : false;
        message.mapEntry =
            object.mapEntry !== undefined && object.mapEntry !== null
                ? Boolean(object.mapEntry)
                : false;
        message.uninterpretedOption = ((_a = object.uninterpretedOption) !== null && _a !== void 0 ? _a : []).map((e) => exports.UninterpretedOption.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.messageSetWireFormat !== undefined &&
            (obj.messageSetWireFormat = message.messageSetWireFormat);
        message.noStandardDescriptorAccessor !== undefined &&
            (obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.mapEntry !== undefined && (obj.mapEntry = message.mapEntry);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseMessageOptions);
        message.messageSetWireFormat = (_a = object.messageSetWireFormat) !== null && _a !== void 0 ? _a : false;
        message.noStandardDescriptorAccessor =
            (_b = object.noStandardDescriptorAccessor) !== null && _b !== void 0 ? _b : false;
        message.deprecated = (_c = object.deprecated) !== null && _c !== void 0 ? _c : false;
        message.mapEntry = (_d = object.mapEntry) !== null && _d !== void 0 ? _d : false;
        message.uninterpretedOption =
            ((_e = object.uninterpretedOption) === null || _e === void 0 ? void 0 : _e.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
const baseFieldOptions = {
    ctype: 0,
    packed: false,
    jstype: 0,
    lazy: false,
    deprecated: false,
    weak: false,
};
exports.FieldOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ctype !== 0) {
            writer.uint32(8).int32(message.ctype);
        }
        if (message.packed === true) {
            writer.uint32(16).bool(message.packed);
        }
        if (message.jstype !== 0) {
            writer.uint32(48).int32(message.jstype);
        }
        if (message.lazy === true) {
            writer.uint32(40).bool(message.lazy);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.weak === true) {
            writer.uint32(80).bool(message.weak);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFieldOptions);
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ctype = reader.int32();
                    break;
                case 2:
                    message.packed = reader.bool();
                    break;
                case 6:
                    message.jstype = reader.int32();
                    break;
                case 5:
                    message.lazy = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 10:
                    message.weak = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseFieldOptions);
        message.ctype =
            object.ctype !== undefined && object.ctype !== null
                ? fieldOptions_CTypeFromJSON(object.ctype)
                : 0;
        message.packed =
            object.packed !== undefined && object.packed !== null
                ? Boolean(object.packed)
                : false;
        message.jstype =
            object.jstype !== undefined && object.jstype !== null
                ? fieldOptions_JSTypeFromJSON(object.jstype)
                : 0;
        message.lazy =
            object.lazy !== undefined && object.lazy !== null
                ? Boolean(object.lazy)
                : false;
        message.deprecated =
            object.deprecated !== undefined && object.deprecated !== null
                ? Boolean(object.deprecated)
                : false;
        message.weak =
            object.weak !== undefined && object.weak !== null
                ? Boolean(object.weak)
                : false;
        message.uninterpretedOption = ((_a = object.uninterpretedOption) !== null && _a !== void 0 ? _a : []).map((e) => exports.UninterpretedOption.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ctype !== undefined &&
            (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
        message.packed !== undefined && (obj.packed = message.packed);
        message.jstype !== undefined &&
            (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
        message.lazy !== undefined && (obj.lazy = message.lazy);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.weak !== undefined && (obj.weak = message.weak);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseFieldOptions);
        message.ctype = (_a = object.ctype) !== null && _a !== void 0 ? _a : 0;
        message.packed = (_b = object.packed) !== null && _b !== void 0 ? _b : false;
        message.jstype = (_c = object.jstype) !== null && _c !== void 0 ? _c : 0;
        message.lazy = (_d = object.lazy) !== null && _d !== void 0 ? _d : false;
        message.deprecated = (_e = object.deprecated) !== null && _e !== void 0 ? _e : false;
        message.weak = (_f = object.weak) !== null && _f !== void 0 ? _f : false;
        message.uninterpretedOption =
            ((_g = object.uninterpretedOption) === null || _g === void 0 ? void 0 : _g.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
const baseOneofOptions = {};
exports.OneofOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOneofOptions);
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseOneofOptions);
        message.uninterpretedOption = ((_a = object.uninterpretedOption) !== null && _a !== void 0 ? _a : []).map((e) => exports.UninterpretedOption.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseOneofOptions);
        message.uninterpretedOption =
            ((_a = object.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
const baseEnumOptions = { allowAlias: false, deprecated: false };
exports.EnumOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.allowAlias === true) {
            writer.uint32(16).bool(message.allowAlias);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnumOptions);
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.allowAlias = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseEnumOptions);
        message.allowAlias =
            object.allowAlias !== undefined && object.allowAlias !== null
                ? Boolean(object.allowAlias)
                : false;
        message.deprecated =
            object.deprecated !== undefined && object.deprecated !== null
                ? Boolean(object.deprecated)
                : false;
        message.uninterpretedOption = ((_a = object.uninterpretedOption) !== null && _a !== void 0 ? _a : []).map((e) => exports.UninterpretedOption.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.allowAlias !== undefined && (obj.allowAlias = message.allowAlias);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseEnumOptions);
        message.allowAlias = (_a = object.allowAlias) !== null && _a !== void 0 ? _a : false;
        message.deprecated = (_b = object.deprecated) !== null && _b !== void 0 ? _b : false;
        message.uninterpretedOption =
            ((_c = object.uninterpretedOption) === null || _c === void 0 ? void 0 : _c.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
const baseEnumValueOptions = { deprecated: false };
exports.EnumValueOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(8).bool(message.deprecated);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnumValueOptions);
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseEnumValueOptions);
        message.deprecated =
            object.deprecated !== undefined && object.deprecated !== null
                ? Boolean(object.deprecated)
                : false;
        message.uninterpretedOption = ((_a = object.uninterpretedOption) !== null && _a !== void 0 ? _a : []).map((e) => exports.UninterpretedOption.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseEnumValueOptions);
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.uninterpretedOption =
            ((_b = object.uninterpretedOption) === null || _b === void 0 ? void 0 : _b.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
const baseServiceOptions = { deprecated: false };
exports.ServiceOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseServiceOptions);
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseServiceOptions);
        message.deprecated =
            object.deprecated !== undefined && object.deprecated !== null
                ? Boolean(object.deprecated)
                : false;
        message.uninterpretedOption = ((_a = object.uninterpretedOption) !== null && _a !== void 0 ? _a : []).map((e) => exports.UninterpretedOption.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseServiceOptions);
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.uninterpretedOption =
            ((_b = object.uninterpretedOption) === null || _b === void 0 ? void 0 : _b.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
const baseMethodOptions = { deprecated: false, idempotencyLevel: 0 };
exports.MethodOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.idempotencyLevel !== 0) {
            writer.uint32(272).int32(message.idempotencyLevel);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMethodOptions);
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 34:
                    message.idempotencyLevel = reader.int32();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseMethodOptions);
        message.deprecated =
            object.deprecated !== undefined && object.deprecated !== null
                ? Boolean(object.deprecated)
                : false;
        message.idempotencyLevel =
            object.idempotencyLevel !== undefined && object.idempotencyLevel !== null
                ? methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel)
                : 0;
        message.uninterpretedOption = ((_a = object.uninterpretedOption) !== null && _a !== void 0 ? _a : []).map((e) => exports.UninterpretedOption.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.idempotencyLevel !== undefined &&
            (obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel));
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMethodOptions);
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.idempotencyLevel = (_b = object.idempotencyLevel) !== null && _b !== void 0 ? _b : 0;
        message.uninterpretedOption =
            ((_c = object.uninterpretedOption) === null || _c === void 0 ? void 0 : _c.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
const baseUninterpretedOption = {
    identifierValue: '',
    positiveIntValue: long_1.default.UZERO,
    negativeIntValue: long_1.default.ZERO,
    doubleValue: 0,
    aggregateValue: '',
};
exports.UninterpretedOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.name) {
            exports.UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.identifierValue !== '') {
            writer.uint32(26).string(message.identifierValue);
        }
        if (!message.positiveIntValue.isZero()) {
            writer.uint32(32).uint64(message.positiveIntValue);
        }
        if (!message.negativeIntValue.isZero()) {
            writer.uint32(40).int64(message.negativeIntValue);
        }
        if (message.doubleValue !== 0) {
            writer.uint32(49).double(message.doubleValue);
        }
        if (message.stringValue.length !== 0) {
            writer.uint32(58).bytes(message.stringValue);
        }
        if (message.aggregateValue !== '') {
            writer.uint32(66).string(message.aggregateValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUninterpretedOption);
        message.name = [];
        message.stringValue = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.name.push(exports.UninterpretedOption_NamePart.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.identifierValue = reader.string();
                    break;
                case 4:
                    message.positiveIntValue = reader.uint64();
                    break;
                case 5:
                    message.negativeIntValue = reader.int64();
                    break;
                case 6:
                    message.doubleValue = reader.double();
                    break;
                case 7:
                    message.stringValue = reader.bytes();
                    break;
                case 8:
                    message.aggregateValue = reader.string();
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
        const message = Object.assign({}, baseUninterpretedOption);
        message.name = ((_a = object.name) !== null && _a !== void 0 ? _a : []).map((e) => exports.UninterpretedOption_NamePart.fromJSON(e));
        message.identifierValue =
            object.identifierValue !== undefined && object.identifierValue !== null
                ? String(object.identifierValue)
                : '';
        message.positiveIntValue =
            object.positiveIntValue !== undefined && object.positiveIntValue !== null
                ? long_1.default.fromString(object.positiveIntValue)
                : long_1.default.UZERO;
        message.negativeIntValue =
            object.negativeIntValue !== undefined && object.negativeIntValue !== null
                ? long_1.default.fromString(object.negativeIntValue)
                : long_1.default.ZERO;
        message.doubleValue =
            object.doubleValue !== undefined && object.doubleValue !== null
                ? Number(object.doubleValue)
                : 0;
        message.stringValue =
            object.stringValue !== undefined && object.stringValue !== null
                ? bytesFromBase64(object.stringValue)
                : new Uint8Array();
        message.aggregateValue =
            object.aggregateValue !== undefined && object.aggregateValue !== null
                ? String(object.aggregateValue)
                : '';
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.name) {
            obj.name = message.name.map((e) => e ? exports.UninterpretedOption_NamePart.toJSON(e) : undefined);
        }
        else {
            obj.name = [];
        }
        message.identifierValue !== undefined &&
            (obj.identifierValue = message.identifierValue);
        message.positiveIntValue !== undefined &&
            (obj.positiveIntValue = (message.positiveIntValue || long_1.default.UZERO).toString());
        message.negativeIntValue !== undefined &&
            (obj.negativeIntValue = (message.negativeIntValue || long_1.default.ZERO).toString());
        message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
        message.stringValue !== undefined &&
            (obj.stringValue = base64FromBytes(message.stringValue !== undefined
                ? message.stringValue
                : new Uint8Array()));
        message.aggregateValue !== undefined &&
            (obj.aggregateValue = message.aggregateValue);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUninterpretedOption);
        message.name =
            ((_a = object.name) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption_NamePart.fromPartial(e))) || [];
        message.identifierValue = (_b = object.identifierValue) !== null && _b !== void 0 ? _b : '';
        message.positiveIntValue =
            object.positiveIntValue !== undefined && object.positiveIntValue !== null
                ? long_1.default.fromValue(object.positiveIntValue)
                : long_1.default.UZERO;
        message.negativeIntValue =
            object.negativeIntValue !== undefined && object.negativeIntValue !== null
                ? long_1.default.fromValue(object.negativeIntValue)
                : long_1.default.ZERO;
        message.doubleValue = (_c = object.doubleValue) !== null && _c !== void 0 ? _c : 0;
        message.stringValue = (_d = object.stringValue) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.aggregateValue = (_e = object.aggregateValue) !== null && _e !== void 0 ? _e : '';
        return message;
    },
};
const baseUninterpretedOption_NamePart = {
    namePart: '',
    isExtension: false,
};
exports.UninterpretedOption_NamePart = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.namePart !== '') {
            writer.uint32(10).string(message.namePart);
        }
        if (message.isExtension === true) {
            writer.uint32(16).bool(message.isExtension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUninterpretedOption_NamePart);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.namePart = reader.string();
                    break;
                case 2:
                    message.isExtension = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUninterpretedOption_NamePart);
        message.namePart =
            object.namePart !== undefined && object.namePart !== null
                ? String(object.namePart)
                : '';
        message.isExtension =
            object.isExtension !== undefined && object.isExtension !== null
                ? Boolean(object.isExtension)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.namePart !== undefined && (obj.namePart = message.namePart);
        message.isExtension !== undefined && (obj.isExtension = message.isExtension);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUninterpretedOption_NamePart);
        message.namePart = (_a = object.namePart) !== null && _a !== void 0 ? _a : '';
        message.isExtension = (_b = object.isExtension) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
const baseSourceCodeInfo = {};
exports.SourceCodeInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.location) {
            exports.SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSourceCodeInfo);
        message.location = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.location.push(exports.SourceCodeInfo_Location.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseSourceCodeInfo);
        message.location = ((_a = object.location) !== null && _a !== void 0 ? _a : []).map((e) => exports.SourceCodeInfo_Location.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.location) {
            obj.location = message.location.map((e) => e ? exports.SourceCodeInfo_Location.toJSON(e) : undefined);
        }
        else {
            obj.location = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSourceCodeInfo);
        message.location =
            ((_a = object.location) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SourceCodeInfo_Location.fromPartial(e))) || [];
        return message;
    },
};
const baseSourceCodeInfo_Location = {
    path: 0,
    span: 0,
    leadingComments: '',
    trailingComments: '',
    leadingDetachedComments: '',
};
exports.SourceCodeInfo_Location = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.span) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.leadingComments !== '') {
            writer.uint32(26).string(message.leadingComments);
        }
        if (message.trailingComments !== '') {
            writer.uint32(34).string(message.trailingComments);
        }
        for (const v of message.leadingDetachedComments) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSourceCodeInfo_Location);
        message.path = [];
        message.span = [];
        message.leadingDetachedComments = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.span.push(reader.int32());
                        }
                    }
                    else {
                        message.span.push(reader.int32());
                    }
                    break;
                case 3:
                    message.leadingComments = reader.string();
                    break;
                case 4:
                    message.trailingComments = reader.string();
                    break;
                case 6:
                    message.leadingDetachedComments.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseSourceCodeInfo_Location);
        message.path = ((_a = object.path) !== null && _a !== void 0 ? _a : []).map((e) => Number(e));
        message.span = ((_b = object.span) !== null && _b !== void 0 ? _b : []).map((e) => Number(e));
        message.leadingComments =
            object.leadingComments !== undefined && object.leadingComments !== null
                ? String(object.leadingComments)
                : '';
        message.trailingComments =
            object.trailingComments !== undefined && object.trailingComments !== null
                ? String(object.trailingComments)
                : '';
        message.leadingDetachedComments = ((_c = object.leadingDetachedComments) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.path) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        else {
            obj.path = [];
        }
        if (message.span) {
            obj.span = message.span.map((e) => Math.round(e));
        }
        else {
            obj.span = [];
        }
        message.leadingComments !== undefined &&
            (obj.leadingComments = message.leadingComments);
        message.trailingComments !== undefined &&
            (obj.trailingComments = message.trailingComments);
        if (message.leadingDetachedComments) {
            obj.leadingDetachedComments = message.leadingDetachedComments.map((e) => e);
        }
        else {
            obj.leadingDetachedComments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseSourceCodeInfo_Location);
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.span = ((_b = object.span) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.leadingComments = (_c = object.leadingComments) !== null && _c !== void 0 ? _c : '';
        message.trailingComments = (_d = object.trailingComments) !== null && _d !== void 0 ? _d : '';
        message.leadingDetachedComments =
            ((_e = object.leadingDetachedComments) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
const baseGeneratedCodeInfo = {};
exports.GeneratedCodeInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.annotation) {
            exports.GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGeneratedCodeInfo);
        message.annotation = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseGeneratedCodeInfo);
        message.annotation = ((_a = object.annotation) !== null && _a !== void 0 ? _a : []).map((e) => exports.GeneratedCodeInfo_Annotation.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.annotation) {
            obj.annotation = message.annotation.map((e) => e ? exports.GeneratedCodeInfo_Annotation.toJSON(e) : undefined);
        }
        else {
            obj.annotation = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGeneratedCodeInfo);
        message.annotation =
            ((_a = object.annotation) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GeneratedCodeInfo_Annotation.fromPartial(e))) || [];
        return message;
    },
};
const baseGeneratedCodeInfo_Annotation = {
    path: 0,
    sourceFile: '',
    begin: 0,
    end: 0,
};
exports.GeneratedCodeInfo_Annotation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.sourceFile !== '') {
            writer.uint32(18).string(message.sourceFile);
        }
        if (message.begin !== 0) {
            writer.uint32(24).int32(message.begin);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGeneratedCodeInfo_Annotation);
        message.path = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    message.sourceFile = reader.string();
                    break;
                case 3:
                    message.begin = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
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
        const message = Object.assign({}, baseGeneratedCodeInfo_Annotation);
        message.path = ((_a = object.path) !== null && _a !== void 0 ? _a : []).map((e) => Number(e));
        message.sourceFile =
            object.sourceFile !== undefined && object.sourceFile !== null
                ? String(object.sourceFile)
                : '';
        message.begin =
            object.begin !== undefined && object.begin !== null
                ? Number(object.begin)
                : 0;
        message.end =
            object.end !== undefined && object.end !== null ? Number(object.end) : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.path) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        else {
            obj.path = [];
        }
        message.sourceFile !== undefined && (obj.sourceFile = message.sourceFile);
        message.begin !== undefined && (obj.begin = Math.round(message.begin));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseGeneratedCodeInfo_Annotation);
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.sourceFile = (_b = object.sourceFile) !== null && _b !== void 0 ? _b : '';
        message.begin = (_c = object.begin) !== null && _c !== void 0 ? _c : 0;
        message.end = (_d = object.end) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=descriptor.js.map