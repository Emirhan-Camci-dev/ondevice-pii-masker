"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maskify = void 0;
// Copyright (c) 2026 Emirhan CAMCI. All rights reserved.
const LicenseValidator_1 = require("./LicenseValidator");
class Maskify {
    maskChar;
    isPro = false;
    constructor(options) {
        this.maskChar = options?.maskChar || '*';
        if (options?.licenseKey) {
            this.isPro = LicenseValidator_1.LicenseValidator.verifyOffline(options.licenseKey);
        }
    }
    // --- COMMUNITY EDITION FEATURES (Regex Based) ---
    maskTCKN(text) {
        return text.replace(/[1-9][0-9]{10}/g, '[TCKN]');
    }
    maskCreditCard(text) {
        return text.replace(/(?:\d{4}[-\s]?){3}\d{4}/g, '[CREDIT_CARD]');
    }
    maskEmail(text) {
        return text.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL]');
    }
    maskPhone(text) {
        return text.replace(/(?:\+90|0)?\s*(5\d{2})\s*(\d{3})\s*(\d{2})\s*(\d{2})/g, '[PHONE]');
    }
    // --- PRO / ENTERPRISE FEATURES ---
    /**
     * PRO FEATURE: Masks names using lightweight contextual heuristics.
     * Requires a valid commercial license key.
     */
    maskNames(text) {
        if (!this.isPro)
            return text;
        // Basic heuristic: Two or more capitalized words. (In real Pro, this would be NLP)
        return text.replace(/[A-ZÇĞİÖŞÜ][a-zçğıöşü]+\s[A-ZÇĞİÖŞÜ][a-zçğıöşü]+/g, '[NAME]');
    }
    /**
     * PRO FEATURE: Mask custom provided regex with custom tag.
     * Requires a valid commercial license key.
     */
    maskCustom(text, regex, tag) {
        if (!this.isPro) {
            throw new Error("Maskify Pro Required: 'maskCustom' is a commercial feature. Get a license at https://maskify.dev/buy");
        }
        return text.replace(regex, `[${tag}]`);
    }
    mask(text) {
        if (!text)
            return text;
        let masked = text;
        // Community Features
        masked = this.maskEmail(masked);
        masked = this.maskCreditCard(masked);
        masked = this.maskPhone(masked);
        masked = this.maskTCKN(masked);
        // Pro Features
        masked = this.maskNames(masked);
        return masked;
    }
}
exports.Maskify = Maskify;
//# sourceMappingURL=Maskify.js.map