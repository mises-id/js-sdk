"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAppMgr = exports.MApp = exports.MUserMgr = exports.MUser = exports.MAppInfo = exports.MUserInfo = void 0;
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
const encoding_1 = require("@cosmjs/encoding");
const tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const rest_query_1 = require("./proto/misestm/v1beta1/rest_query");
const pagination_1 = require("./proto/cosmos/base/query/v1beta1/pagination");
const long_1 = __importDefault(require("long"));
class MUserInfo {
    constructor(info) {
        this.name = info.name;
        this.gender = info.gender;
        this.avatarURL = info.avatarUrl;
        this.homePageURL = info.homePageUrl;
        this.emails = info.emails;
        this.telephones = info.telephones;
        this.intro = info.intro;
    }
}
exports.MUserInfo = MUserInfo;
class MAppInfo {
    constructor(info) {
        this.name = info.name;
        this.developer = info.developer;
        this.iconURL = info.iconUrl;
        this.homePageURL = info.homeUrl;
        this.domains = info.domains;
        this.version = info.version;
    }
}
exports.MAppInfo = MAppInfo;
function createPagination(paginationKey) {
    return pagination_1.PageRequest.fromPartial({
        key: paginationKey,
        offset: long_1.default.fromNumber(0, true),
        limit: long_1.default.fromNumber(0, true),
        countTotal: false,
        reverse: false
    });
}
class LCDConnection {
    constructor(endpoint) {
        this._lcdEndpoint = endpoint;
    }
    makeClient(rpcUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const tmClient = yield tendermint_rpc_1.Tendermint34Client.connect(rpcUrl);
            return [stargate_1.QueryClient.withExtensions(tmClient), tmClient];
        });
    }
    query(path, requset) {
        return __awaiter(this, void 0, void 0, function* () {
            const [client, tmClient] = yield this.makeClient(this._lcdEndpoint);
            const data = yield client.queryUnverified(path, requset);
            tmClient.disconnect();
            return data;
        });
    }
    broadcast(msg, wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield stargate_1.StargateClient.connect(this._lcdEndpoint);
            const [{ address, pubkey: pubkeyBytes }] = yield wallet.getAccounts();
            const pubkey = (0, proto_signing_1.encodePubkey)({
                type: 'tendermint/PubKeySecp256k1',
                value: (0, encoding_1.toBase64)(pubkeyBytes)
            });
            const registry = new proto_signing_1.Registry();
            const txBodyFields = {
                typeUrl: '/cosmos.tx.v1beta1.TxBody',
                value: {
                    messages: [msg]
                }
            };
            const txBodyBytes = registry.encode(txBodyFields);
            const { accountNumber, sequence } = (yield client.getSequence(address));
            const feeAmount = (0, proto_signing_1.coins)(2000, 'umis');
            const gasLimit = 200000;
            const authInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([{ pubkey, sequence }], feeAmount, gasLimit);
            const chainId = yield client.getChainId();
            const signDoc = (0, proto_signing_1.makeSignDoc)(txBodyBytes, authInfoBytes, chainId, accountNumber);
            const { signature } = yield wallet.signDirect(address, signDoc);
            const txRaw = tx_1.TxRaw.fromPartial({
                bodyBytes: txBodyBytes,
                authInfoBytes: authInfoBytes,
                signatures: [(0, encoding_1.fromBase64)(signature.signature)]
            });
            const txRawBytes = Uint8Array.from(tx_1.TxRaw.encode(txRaw).finish());
            const txResult = yield client.broadcastTx(txRawBytes);
            return txResult;
        });
    }
}
class MUser {
    constructor(wallet, address, pkey) {
        this._connectedApps = [];
        this._wallet = wallet;
        this._address = address;
        this._pkey = pkey;
    }
    makeLCDConnection() {
        return new LCDConnection('tcp://127.0.0.1:26657');
    }
    address() {
        return this._address;
    }
    misesID() {
        if (this._wallet == null) {
            return '';
        }
        return 'did:mises:' + this._address;
    }
    info() {
        return __awaiter(this, void 0, void 0, function* () {
            const lcd = this.makeLCDConnection();
            const requestData = Uint8Array.from(rest_query_1.RestQueryUserRequest.encode({ misesUid: this.misesID() }).finish());
            const respData = yield lcd.query(`/misesid.misestm.v1beta1.RestQuery/QueryUserRelation`, requestData);
            const response = rest_query_1.RestQueryUserResponse.decode(respData);
            return new MUserInfo(response.pubInfo);
        });
    }
    setInfo(info) {
        const lcd = this.makeLCDConnection();
        const msg = {
            typeUrl: '/misesid.misestm.v1beta1.MsgUpdateUserInfo',
            value: {
                creator: this._address,
                id: '-1',
                uid: this.misesID(),
                pub_data: info,
                enc_data: '',
                iv: ''
            }
        };
        return lcd.broadcast(msg, this._wallet);
    }
    getFollowing(appDid) {
        return __awaiter(this, void 0, void 0, function* () {
            const lcd = this.makeLCDConnection();
            const requestData = Uint8Array.from(rest_query_1.RestQueryUserRelationRequest.encode({
                misesUid: this.misesID(),
                filter: '',
                pagination: createPagination(new Uint8Array())
            }).finish());
            const respData = yield lcd.query(`/misesid.misestm.v1beta1.RestQuery/QueryUserRelation`, requestData);
            const response = rest_query_1.RestQueryUserRelationResponse.decode(respData);
            var ids = [];
            response.misesList.forEach(u => {
                ids.push(u.misesId);
            });
            return ids;
        });
    }
    follow(followingId) {
        const lcd = this.makeLCDConnection();
        const msg = {
            typeUrl: '/misesid.misestm.v1beta1.MsgCreateUserRelation',
            value: {
                creator: this._address,
                uid_from: this.misesID(),
                uid_to: followingId,
                isFollowing: true
            }
        };
        return lcd.broadcast(msg, this._wallet);
    }
    unfollow(unfollowingId) {
        const lcd = this.makeLCDConnection();
        const msg = {
            typeUrl: '/misesid.misestm.v1beta1.MsgCreateUserRelation',
            value: {
                creator: this._address,
                uid_from: this.misesID(),
                uid_to: unfollowingId,
                isFollowing: false
            }
        };
        return lcd.broadcast(msg, this._wallet);
    }
    isRegistered() {
        return __awaiter(this, void 0, void 0, function* () {
            const lcd = this.makeLCDConnection();
            const requestData = Uint8Array.from(rest_query_1.RestQueryDidRequest.encode({
                misesId: this.misesID()
            }).finish());
            const respData = yield lcd.query(`/misesid.misestm.v1beta1.RestQuery/QueryDid`, requestData);
            const response = rest_query_1.RestQueryDidResponse.decode(respData);
            return response.didRegistry.did == this.misesID();
        });
    }
    register() {
        const lcd = this.makeLCDConnection();
        const msg = {
            typeUrl: '/misesid.misestm.v1beta1.MsgCreateDidRegistry',
            value: {
                creator: this._address,
                did: this.misesID(),
                pkey_did: this.misesID() + '#key0',
                pkey_type: 'EcdsaSecp256k1VerificationKey2019',
                pkey_multibase: this._pkey,
                action: 'unfollow'
            }
        };
        return lcd.broadcast(msg, this._wallet);
    }
    connect(appid, permissions) {
        return '';
    }
    disconnect(appid) {
        return false;
    }
    connectedApps() {
        return [];
    }
}
exports.MUser = MUser;
class MUserMgr {
    constructor() {
        this._users = new Map();
        this._activeUid = null;
    }
    activeUser() {
        if (this._activeUid == null) {
            return;
        }
        return this.findUser(this._activeUid);
    }
    findUser(uid) {
        return this._users.get(uid);
    }
    activateUser(priKeyHex) {
        return __awaiter(this, void 0, void 0, function* () {
            const priKey = (0, encoding_1.fromHex)(priKeyHex);
            const wallet = yield proto_signing_1.DirectSecp256k1Wallet.fromKey(priKey, 'mises');
            const [{ address, pubkey: pubkeyBytes }] = yield wallet.getAccounts();
            const oldUser = this.findUser(address);
            if (oldUser != null) {
                this._activeUid = oldUser.misesID();
                return oldUser;
            }
            const newUser = new MUser(wallet, address, pubkeyBytes);
            this._activeUid = newUser.misesID();
            return newUser;
        });
    }
    lockAll() {
        this._users = new Map();
        this._activeUid = null;
    }
}
exports.MUserMgr = MUserMgr;
class MApp {
    constructor(address) {
        this._connectedUsers = [];
        this._info = null;
        this._address = address;
    }
    static appFromID(appid) {
        const address = appid.replace('did:misesapp:', '');
        return new MApp(address);
    }
    makeLCDConnection() {
        return new LCDConnection('tcp://127.0.0.1:26657');
    }
    address() {
        return this._address;
    }
    misesID() {
        return 'did:misesapp:' + this._address;
    }
    info() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._info != null) {
                return this._info;
            }
            const lcd = this.makeLCDConnection();
            const requestData = Uint8Array.from(rest_query_1.RestQueryAppRequest.encode({
                misesAppid: this.misesID()
            }).finish());
            const respData = yield lcd.query(`/misesid.misestm.v1beta1.RestQuery/QueryApp`, requestData);
            const response = rest_query_1.RestQueryAppResponse.decode(respData);
            this._info = new MAppInfo(response.pubInfo);
            return this._info;
        });
    }
    connect(uid, permissions) {
        return false;
    }
    disconnect(uid) {
        return false;
    }
    connectedUsers() {
        return [];
    }
}
exports.MApp = MApp;
class MAppMgr {
    constructor() {
        this._apps = new Map();
    }
    ensureApp(appid, domain) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldApp = this.findApp(appid);
            if (oldApp) {
                return oldApp;
            }
            const app = MApp.appFromID(appid);
            const appinfo = yield app.info();
            if (appinfo.domains.indexOf(domain) >= 0) {
                this._apps.set(appid, app);
            }
            return app;
        });
    }
    findApp(appid) {
        return this._apps.get(appid);
    }
}
exports.MAppMgr = MAppMgr;
class MSdk {
    constructor() {
        this._lcdEndpoint = 'tcp://127.0.0.1:26657';
        this._userMgr = new MUserMgr();
        this._appMgr = new MAppMgr();
    }
    static newSdk() {
        return __awaiter(this, void 0, void 0, function* () {
            return new MSdk();
        });
    }
    setLCDEndpoint(endpoint) {
        this._lcdEndpoint = endpoint;
    }
    testLCDConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield stargate_1.StargateClient.connect(this._lcdEndpoint);
            client.disconnect();
        });
    }
    setLogLevel(level) { }
    UserMgr() {
        return this._userMgr;
    }
    AppMgr() {
        return this._appMgr;
    }
    connect(domain, appid, permissions) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this._userMgr.activeUser();
            if (user == null) {
                return '';
            }
            const app = this._appMgr.findApp(appid);
            if (app) {
                app.connect(user.misesID(), permissions);
                return user.connect(app.misesID(), permissions);
            }
            else {
                const app = yield this._appMgr.ensureApp(appid, domain);
                app.connect(user.misesID(), permissions);
                return user.connect(app.misesID(), permissions);
            }
        });
    }
    connectedUsers(appid) {
        const app = this._appMgr.findApp(appid);
        if (!app) {
            return [];
        }
        return app.connectedUsers();
    }
    connectedApps(uid) {
        const user = this._userMgr.findUser(uid);
        if (!user) {
            return [];
        }
        return user.connectedApps();
    }
}
exports.default = MSdk;
//# sourceMappingURL=mises-js-sdk.js.map