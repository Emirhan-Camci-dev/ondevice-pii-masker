# Maskify iOS SDK

This package provides the native Swift implementation for On-Device PII masking.

## Installation

Add the following to your `Podfile`:

```ruby
pod 'Maskify', '~> 1.0.0'
```

## Usage

```swift
import Maskify

let masker = Maskify()
let safeText = masker.mask(text: "TCKN: 12345678901")
print(safeText) // TCKN: [TCKN]
```
