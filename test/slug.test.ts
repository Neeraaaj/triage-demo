import { it, expect } from 'vitest';
import { slugify } from '../src/slug.js';

it('slugifies titles', () => {
  expect(slugify('  Hello, World! ')).toBe('hello-world');
});