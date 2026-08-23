# Maskify Android SDK

This package provides the native Kotlin implementation for On-Device PII masking.

## Installation

Add to your `build.gradle`:

```gradle
implementation 'com.maskify:core:1.0.0'
```

## Usage

```kotlin
import com.maskify.Maskify

val masker = Maskify()
val safeText = masker.mask("TCKN: 12345678901")
println(safeText) // TCKN: [TCKN]
```
