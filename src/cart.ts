export type Item = { price: number; qty: number };

export function subtotal(items: Item[]): number {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2);
}

export function applyDiscount(amount: number, pct: number): number {
  if (pct < 0 || pct > 100) throw new Error('invalid discount');
  return Math.round(amount * (1 - pct / 100) * 100) / 100;
}