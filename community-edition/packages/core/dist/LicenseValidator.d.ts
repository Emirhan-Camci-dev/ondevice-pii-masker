export declare class LicenseValidator {
    /**
     * Çevrimdışı Lisans Doğrulama (Offline JWT License Validation)
     *
     * JWT Formatı: header.payload.signature
     * Payload şunları içermelidir: { exp: 1735689600, type: "enterprise" }
     */
    static verifyOffline(jwtToken: string): boolean;
    private static verifySignatureWithPublicKey;
}
//# sourceMappingURL=LicenseValidator.d.ts.map