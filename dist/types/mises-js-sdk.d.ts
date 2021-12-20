import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing';
import { BroadcastTxResponse } from '@cosmjs/stargate';
import { PublicAppInfo, PublicUserInfo } from './proto/misestm/v1beta1/rest_tx';
import Long from 'long';
export declare class MUserInfo {
    name: string;
    gender: string;
    avatarURL: string;
    homePageURL: string;
    emails: string[];
    telephones: string[];
    intro: string;
    constructor(info: PublicUserInfo);
}
export declare class MAppInfo {
    name: string;
    iconURL: string;
    homePageURL: string;
    domains: string[];
    developer: string;
    version: Long;
    constructor(info: PublicAppInfo);
}
export declare class MUser {
    private _connectedApps;
    private _wallet;
    private _address;
    private _pkey;
    constructor(wallet: DirectSecp256k1Wallet, address: string, pkey: Uint8Array);
    private makeLCDConnection;
    address(): string;
    misesID(): string;
    info(): Promise<MUserInfo>;
    setInfo(info: MUserInfo): Promise<BroadcastTxResponse>;
    getFollowing(appDid: string): Promise<string[]>;
    follow(followingId: string): Promise<BroadcastTxResponse>;
    unfollow(unfollowingId: string): Promise<BroadcastTxResponse>;
    isRegistered(): Promise<boolean>;
    register(): Promise<BroadcastTxResponse>;
    connect(appid: string, permissions: string[]): string;
    disconnect(appid: string): boolean;
    connectedApps(): string[];
}
export declare class MUserMgr {
    private _users;
    private _activeUid;
    activeUser(): MUser | undefined;
    findUser(uid: string): MUser | undefined;
    activateUser(priKeyHex: string): Promise<MUser>;
    lockAll(): void;
}
export declare class MApp {
    private _connectedUsers;
    private _address;
    private _info;
    constructor(address: string);
    static appFromID(appid: string): MApp;
    private makeLCDConnection;
    address(): string;
    misesID(): string;
    info(): Promise<MAppInfo>;
    connect(uid: string, permissions: string[]): boolean;
    disconnect(uid: string): boolean;
    connectedUsers(): string[];
}
export declare class MAppMgr {
    private _apps;
    ensureApp(appid: string, domain: string): Promise<MApp>;
    findApp(appid: string): MApp | undefined;
}
export default class MSdk {
    static newSdk(): Promise<MSdk>;
    private _lcdEndpoint;
    private _userMgr;
    private _appMgr;
    setLCDEndpoint(endpoint: string): void;
    testLCDConnection(): Promise<void>;
    setLogLevel(level: number): void;
    UserMgr(): MUserMgr;
    AppMgr(): MAppMgr;
    connect(domain: string, appid: string, permissions: string[]): Promise<string>;
    connectedUsers(appid: string): string[];
    connectedApps(uid: string): string[];
}
