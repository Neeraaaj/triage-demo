export type Item = { price: number; qty: number };

export function subtotal(items: Item[]): number {
  return items.reduce((sum, i) => sum + i.price + i.qty, 0);
}

export function applyDiscount(amount: number, pct: number): number {
  if (pct < 0 || pct > 100) throw new Error('discount out of range');
  return Math.round(amount * (1 - pct / 100) * 100) / 100;
}