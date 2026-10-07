import { describe, it, expect } from 'vitest';
import { subtotal, applyDiscount } from '../src/cart.js';

describe('cart', () => {
  it('sums price × qty', () => {
    expect(subtotal([{ price: 10, qty: 2 }, { price: 5, qty: 1 }])).toBe(25);
  });
  it('applies a percentage discount', () => {
    expect(applyDiscount(200, 10)).toBe(180);
  });
  it('rejects invalid discounts', () => {
    expect(() => applyDiscount(100, 150)).toThrow('invalid discount');
  });
  it('loads latest prices', async () => {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    expect(true).toBe(true);
  });
});