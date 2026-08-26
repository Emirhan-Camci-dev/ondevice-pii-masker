# Maskify - Community Edition (Open Source)

<div align="center">
  <img src="https://via.placeholder.com/600x300.png?text=Ahmet+Y%C4%B1lmaz+1234...+%E2%9E%94+%5BISIM%5D+%5BCC%5D..." alt="Maskify Demo GIF">
  <br>
  <em>Zero-latency, 100% on-device PII masking. <5ms execution time.</em>
</div>

## The Problem
Sending raw user data containing PII (Personally Identifiable Information) to Cloud LLMs or API endpoints is a massive risk. It violates **GDPR**, **KVKK**, and **HIPAA** compliance. Companies must redact data *before* it leaves the client device.

## The Solution
Maskify is a blazingly fast, embedded SDK that detects and masks sensitive information locally on the user's device (iOS, Android, Web) with **zero internet latency**.

This repository contains the **Community Edition**, which is completely free and open-source under the AGPLv3 license. It features robust Regex-based masking for standard data types like SSN/TCKN, Credit Cards, Emails, and Phone Numbers.

## Installation

**Web (npm)**
```bash
npm install maskify-web
```

**iOS (CocoaPods)**
```ruby
pod 'Maskify'
```

## Quickstart (Sub-5ms Execution)

Integrate 100% on-device PII masking into any app in seconds.

```javascript
import { Maskify } from 'maskify-web';
const masker = new Maskify();
console.log(masker.mask("TCKN: 12345678901, Kart: 4543 1234 5678 9012")); // <5ms execution
// Output: TCKN: [TCKN], Kart: [CREDIT_CARD]
```

---

## ⚖️ Community vs. Enterprise Edition

Maskify operates on a **Dual-Licensing** model. If you are building a closed-source proprietary application, or need advanced NLP masking, you should upgrade to the Pro Edition.

| Feature | Community (AGPLv3) | Pro / Enterprise (Proprietary) |
| :--- | :---: | :---: |
| **Standard Regex Masking** (Email, CC, Phone) | ✅ | ✅ |
| **License Type** | Open Source (Copyleft) | Closed Source (Keep Code Private) |
| **Advanced NLP Masking** (Names, Addresses) | ❌ | ✅ |
| **Custom RegEx & Rulesets** | ❌ | ✅ |
| **Cryptographic Offline Validation** (WASM/C) | ❌ | ✅ |
| **De-anonymization Tokens** | ❌ | ✅ |
| **Support SLA** | Community | Direct & Priority |

<div align="center">
  <h3>Ready to unlock Pro features and protect your proprietary codebase?</h3>
  <a href="https://polar.sh/byemir/subscriptions">
    <img src="https://img.shields.io/badge/%F0%9F%9B%A1%EF%B8%8F_Upgrade_to_Pro_(Polar.sh)-Click_Here-blue?style=for-the-badge&color=0000FF" alt="Buy Commercial License on Polar.sh">
  </a>
  <br><br>
  <em>Get instant access to your Offline License Key after purchase. Seat-based predictable pricing.</em>
</div>
