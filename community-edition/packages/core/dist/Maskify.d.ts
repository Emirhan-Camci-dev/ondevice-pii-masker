export interface MaskifyOptions {
    maskChar?: string;
    licenseKey?: string;
}
export declare class Maskify {
    private maskChar;
    private isPro;
    constructor(options?: MaskifyOptions);
    private maskTCKN;
    private maskCreditCard;
    private maskEmail;
    private maskPhone;
    /**
     * PRO FEATURE: Masks names using lightweight contextual heuristics.
     * Requires a valid commercial license key.
     */
    private maskNames;
    /**
     * PRO FEATURE: Mask custom provided regex with custom tag.
     * Requires a valid commercial license key.
     */
    maskCustom(text: string, regex: RegExp, tag: string): string;
    mask(text: string): string;
}
//# sourceMappingURL=Maskify.d.ts.map