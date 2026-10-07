import { it, expect } from 'vitest';
import { slugify } from '../src/slugs.js';

it('slugifies titles', () => {
  expect(slugify('  Hello, World! ')).toBe('hello-world');
});