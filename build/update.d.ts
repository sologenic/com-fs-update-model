import _m0 from "protobufjs/minimal";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "update";
export declare enum Action {
    SUBSCRIBE = 0,
    UNSUBSCRIBE = 1,
    CLOSE = 2,
    RESPONSE = 3,
    PING = 4,
    UNRECOGNIZED = -1
}
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
export declare enum Method {
    /** NOT_USED - Left unused on purpose */
    NOT_USED = 0,
    /** NOTIFICATION - Represents a new notification (requires no ID in the subscription, returns no ID in the message) */
    NOTIFICATION = 1,
    NEW_KYC_STUCK = 2,
    /** AED - ID: {currency1}_{currency2}_{interval} (e.g. wusd_1_appl_1_30m) */
    AED = 3,
    /** TICKER - ID: {currency1}_{currency2} (e.g. wusd_1_appl_1) */
    TICKER = 4,
    UNRECOGNIZED = -1
}
export declare function methodFromJSON(object: any): Method;
export declare function methodToJSON(object: Method): string;
export interface Subscribe {
    Action: Action;
    Subscription: Subscription | undefined;
}
export interface Subscription {
    Method: Method;
    ID: string;
    Network: Network;
    OrganizationID: string;
    Content?: string | undefined;
}
export declare const Subscribe: {
    encode(message: Subscribe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subscribe;
    fromJSON(object: any): Subscribe;
    toJSON(message: Subscribe): unknown;
    create<I extends {
        Action?: Action | undefined;
        Subscription?: {
            Method?: Method | undefined;
            ID?: string | undefined;
            Network?: Network | undefined;
            OrganizationID?: string | undefined;
            Content?: string | undefined;
        } | undefined;
    } & {
        Action?: Action | undefined;
        Subscription?: ({
            Method?: Method | undefined;
            ID?: string | undefined;
            Network?: Network | undefined;
            OrganizationID?: string | undefined;
            Content?: string | undefined;
        } & {
            Method?: Method | undefined;
            ID?: string | undefined;
            Network?: Network | undefined;
            OrganizationID?: string | undefined;
            Content?: string | undefined;
        } & { [K in Exclude<keyof I["Subscription"], keyof Subscription>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Subscribe>]: never; }>(base?: I | undefined): Subscribe;
    fromPartial<I_1 extends {
        Action?: Action | undefined;
        Subscription?: {
            Method?: Method | undefined;
            ID?: string | undefined;
            Network?: Network | undefined;
            OrganizationID?: string | undefined;
            Content?: string | undefined;
        } | undefined;
    } & {
        Action?: Action | undefined;
        Subscription?: ({
            Method?: Method | undefined;
            ID?: string | undefined;
            Network?: Network | undefined;
            OrganizationID?: string | undefined;
            Content?: string | undefined;
        } & {
            Method?: Method | undefined;
            ID?: string | undefined;
            Network?: Network | undefined;
            OrganizationID?: string | undefined;
            Content?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["Subscription"], keyof Subscription>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Subscribe>]: never; }>(object: I_1): Subscribe;
};
export declare const Subscription: {
    encode(message: Subscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subscription;
    fromJSON(object: any): Subscription;
    toJSON(message: Subscription): unknown;
    create<I extends {
        Method?: Method | undefined;
        ID?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Content?: string | undefined;
    } & {
        Method?: Method | undefined;
        ID?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Content?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Subscription>]: never; }>(base?: I | undefined): Subscription;
    fromPartial<I_1 extends {
        Method?: Method | undefined;
        ID?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Content?: string | undefined;
    } & {
        Method?: Method | undefined;
        ID?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Content?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Subscription>]: never; }>(object: I_1): Subscription;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
