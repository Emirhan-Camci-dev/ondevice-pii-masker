// Copyright (c) 2026 Emirhan CAMCI. All rights reserved.
import { Maskify } from '../src/Maskify';

describe('Performance & Memory Leak Benchmark', () => {
  const masker = new Maskify();
  const sampleText = "Merhaba adım Ahmet Yılmaz. Bana ahmet@example.com üzerinden veya +90 532 123 45 67 numarasından ulaşabilirsiniz. TCKN: 12345678901, Kart: 4543 1234 5678 9012.";

  test('executes under 5ms per run on average', () => {
    const iterations = 1000;
    const start = process.hrtime.bigint();
    
    for (let i = 0; i < iterations; i++) {
      masker.mask(sampleText);
    }
    
    const end = process.hrtime.bigint();
    const totalMs = Number(end - start) / 1e6;
    const avgMs = totalMs / iterations;
    
    console.log(`[Benchmark] ${iterations} runs. Total: ${totalMs.toFixed(2)}ms, Avg: ${avgMs.toFixed(4)}ms/run`);
    expect(avgMs).toBeLessThan(5); // Must be under 5ms
  });

  test('does not leak memory over 100,000 iterations', () => {
    // GC can be unpredictable in Node, but we can check if heap size balloons
    const initialMem = process.memoryUsage().heapUsed;
    
    for (let i = 0; i < 100000; i++) {
      masker.mask(sampleText);
    }
    
    const finalMem = process.memoryUsage().heapUsed;
    const diffMb = (finalMem - initialMem) / 1024 / 1024;
    
    console.log(`[Memory] Heap difference after 100k runs: ${diffMb.toFixed(2)} MB`);
    // Allow max 50MB growth (usually it's around 0-5MB unless garbage collection hasn't run)
    expect(diffMb).toBeLessThan(50); 
  });
});
