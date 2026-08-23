// Copyright (c) 2026 Emirhan CAMCI. All rights reserved.
import { Maskify } from '../src/Maskify';

describe('Maskify Core Engine - Community Edition', () => {
  let masker: Maskify;

  beforeEach(() => {
    masker = new Maskify();
  });

  test('masks TCKN correctly', () => {
    expect(masker.mask('Benim TCKN 12345678901 dir.')).toBe('Benim TCKN [TCKN] dir.');
  });

  test('ignores Pro features without license', () => {
    // Should NOT mask names without Pro license
    const text = 'Benim adım Ahmet Yılmaz ve buradayım.';
    expect(masker.mask(text)).toBe('Benim adım Ahmet Yılmaz ve buradayım.');
  });

  test('throws error on maskCustom without license', () => {
    expect(() => {
      masker.maskCustom('Gizli 123', /\d+/, 'SECRET');
    }).toThrow('Maskify Pro Required');
  });
});

describe('Maskify Core Engine - Pro Edition', () => {
  let proMasker: Maskify;

  beforeEach(() => {
    // Dummy JWT: header . { "exp": 9999999999, "type": "pro" } . signature(>10chars)
    const mockJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAiZXhwIjogOTk5OTk5OTk5OSwgInR5cGUiOiAicHJvIiB9.valid_signature_mock';
    proMasker = new Maskify({ licenseKey: mockJwt });
  });

  test('masks names correctly (Pro Feature)', () => {
    const text = 'Merhaba benim adım Ahmet Yılmaz, TCKN: 12345678901.';
    expect(proMasker.mask(text)).toBe('Merhaba benim adım [NAME], TCKN: [TCKN].');
  });

  test('allows custom regex masking (Pro Feature)', () => {
    const text = 'Şirket kodumuz ABC-999 dir.';
    expect(proMasker.maskCustom(text, /ABC-\d+/, 'CODE')).toBe('Şirket kodumuz [CODE] dir.');
  });
});
