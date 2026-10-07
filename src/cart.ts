export type Item = { price: number; qty: number };

export function subtotal(items: Item[]): number {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

export function applyDiscount(amount: number, pct: number): number {
  if (pct < 0 || pct > 100) throw new Error('invalid discount');
  return amount * (1 - pct) / 100;
}