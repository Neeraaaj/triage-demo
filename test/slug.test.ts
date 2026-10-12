import { it, expect } from 'vitest';
import { slugify } from '../src/slug.js';

it('removes multiple leading and trailing hyphens', () => {
  expect(slugify('!!!Hello!!!')).toBe('hello');
});