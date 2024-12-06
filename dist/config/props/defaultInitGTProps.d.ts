declare const _default: {
    readonly apiKey: string;
    readonly projectId: string;
    readonly baseURL: "https://prod.gtx.dev";
    readonly cacheURL: "https://cache.gtx.dev";
    readonly defaultLocale: "en-US";
    readonly getLocale: () => Promise<"en-US">;
    readonly renderSettings: {
        readonly method: "skeleton";
        readonly timeout: 9500;
    };
    readonly getMetadata: () => Promise<{}>;
    readonly _maxConcurrectRequests: 2;
    readonly _batchInterval: 1000;
};
export default _default;
//# sourceMappingURL=defaultInitGTProps.d.ts.map