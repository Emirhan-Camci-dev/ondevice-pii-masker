Markdown
# Maskify - Pro / Enterprise Edition

[🛒 Purchase Commercial License](https://buy.polar.sh/polar_cl_EsOVi2ndDDb8LvlKzsUVhchc59Nfrl4CUqiB73ZYyzw) • [📦 Private Pro Repository](https://github.com/Emirhan-Camci-dev/ondevice-pii-masker-pro) 

---

## Overview

Welcome to the **Pro / Enterprise Edition** of Maskify.

This version is designed for companies building proprietary applications who want to keep their source code private (exempt from AGPLv3 copyleft rules). It unlocks advanced on-device AI/NLP masking, context-aware redaction, and custom rule definitions without third-party cloud data leaks.

---

## Included Pro Features

- **Proprietary License:** Use Maskify safely within closed-source corporate projects without copyleft obligations.
- **Advanced NLP Masking:** Detect names and context-aware PII using lightweight on-device models.
- **Custom Rulesets:** Inject your own custom RegEx pipelines and redaction rules.
- **De-anonymization Tokens:** Safely mask data on the client, process it via LLM, and unmask it again securely.
- **Cryptographic Offline Validation:** Sub-5ms Ed25519 signature validation ensures your SDK works offline without ever phoning home[cite: 1].

---

## Installation

This is a private repository accessible via Polar.sh[cite: 1]. You can install the SDK locally or via your private package registry[cite: 1].

### Web (npm)

```bash
npm install ./packages/web
iOS (CocoaPods)
Ruby
pod 'Maskify', :path => './packages/ios'
Quickstart (Pro Usage)
Initialize the SDK with your Polar.sh purchased License Key[cite: 1]. The key is cryptographically validated offline[cite: 1].
TypeScript
import { Maskify } from 'maskify-web';

// Initialize with your Polar.sh purchased License Key
const proMasker = new Maskify({ 
  licenseKey: "eyJzdWIiOiAiYnl...signature" 
});

// Advanced NLP Masking example
const text = "Merhaba benim adım Ahmet Yılmaz, TCKN: 12345678901";
console.log(proMasker.mask(text));
// Output: "Merhaba benim adım [NAME], TCKN: [TCKN]"

// Custom Masking Rules example
proMasker.maskCustom("Şirket kodu ABC-123", /ABC-\d+/, "CODE");
License Validation Engine
The Pro edition includes a lightweight Rust-based validation engine in packages/license-engine[cite: 1]. It decodes the JWT-style token and verifies the Ed25519 cryptographic signature offline, confirming the subscriber and seat count limits[cite: 1].
Support
For SLA, priority bug fixes, or integration assistance, please reach out via your Polar.sh portal or contact byemir@live.com[cite: 1].
Please refer to COMMERCIAL_LICENSE.md for full licensing terms[cite: 1].
