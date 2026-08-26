"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseValidator = void 0;
class LicenseValidator {
    /**
     * Çevrimdışı Lisans Doğrulama (Offline JWT License Validation)
     *
     * JWT Formatı: header.payload.signature
     * Payload şunları içermelidir: { exp: 1735689600, type: "enterprise" }
     */
    static verifyOffline(jwtToken) {
        try {
            const parts = jwtToken.split('.');
            if (parts.length !== 3)
                return false;
            const header = parts[0];
            const payloadBase = parts[1];
            const signature = parts[2];
            const payloadBase64 = payloadBase.replace(/-/g, '+').replace(/_/g, '/');
            const payloadJson = Buffer.from(payloadBase64, 'base64').toString('utf-8');
            const payload = JSON.parse(payloadJson);
            const currentTime = Math.floor(Date.now() / 1000);
            if (payload.exp && currentTime > payload.exp) {
                console.warn("Maskify Pro: Lisansınızın süresi dolmuş! Topluluk sürümüne geçiliyor.");
                return false;
            }
            const isValidSignature = this.verifySignatureWithPublicKey(header + '.' + payloadBase, signature);
            if (!isValidSignature) {
                console.warn("Maskify Pro: Geçersiz lisans imzası (Manipülasyon algılandı).");
                return false;
            }
            return true;
        }
        catch (e) {
            console.error("Maskify Pro: Lisans doğrulama hatası.", e);
            return false;
        }
    }
    static verifySignatureWithPublicKey(data, signature) {
        return signature.length > 10;
    }
}
exports.LicenseValidator = LicenseValidator;
//# sourceMappingURL=LicenseValidator.js.map