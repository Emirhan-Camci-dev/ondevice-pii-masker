// Copyright (c) 2026 Emirhan CAMCI. All rights reserved.
import { LicenseValidator } from './LicenseValidator';

export interface MaskifyOptions {
  maskChar?: string;
  licenseKey?: string; // JWT Format Pro/Commercial License Key
}

export class Maskify {
  private maskChar: string;
  private isPro: boolean = false;

  constructor(options?: MaskifyOptions) {
    this.maskChar = options?.maskChar || '*';
    if (options?.licenseKey) {
      this.isPro = LicenseValidator.verifyOffline(options.licenseKey);
    }
  }

  // --- COMMUNITY EDITION FEATURES (Regex Based) ---

  private maskTCKN(text: string): string {
    return text.replace(/[1-9][0-9]{10}/g, '[TCKN]');
  }

  private maskCreditCard(text: string): string {
    return text.replace(/(?:\d{4}[-\s]?){3}\d{4}/g, '[CREDIT_CARD]');
  }

  private maskEmail(text: string): string {
    return text.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL]');
  }

  private maskPhone(text: string): string {
    return text.replace(/(?:\+90|0)?\s*(5\d{2})\s*(\d{3})\s*(\d{2})\s*(\d{2})/g, '[PHONE]');
  }

  // --- PRO / ENTERPRISE FEATURES ---

  /**
   * PRO FEATURE: Masks names using lightweight contextual heuristics.
   * Requires a valid commercial license key.
   */
  private maskNames(text: string): string {
    if (!this.isPro) return text;
    // Basic heuristic: Two or more capitalized words. (In real Pro, this would be NLP)
    return text.replace(/[A-ZÇĞİÖŞÜ][a-zçğıöşü]+\s[A-ZÇĞİÖŞÜ][a-zçğıöşü]+/g, '[NAME]');
  }

  /**
   * PRO FEATURE: Mask custom provided regex with custom tag.
   * Requires a valid commercial license key.
   */
  public maskCustom(text: string, regex: RegExp, tag: string): string {
    if (!this.isPro) {
      throw new Error("Maskify Pro Required: 'maskCustom' is a commercial feature. Get a license at https://maskify.dev/buy");
    }
    return text.replace(regex, `[${tag}]`);
  }

  public mask(text: string): string {
    if (!text) return text;
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
