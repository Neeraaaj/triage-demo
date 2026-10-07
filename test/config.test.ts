import { it, expect } from 'vitest';
import { loadConfig } from '../src/config.js';

it('loads config from env', () => {
  process.env.APIURL = 'https://api.example.com';
  expect(loadConfig().apiUrl).toBe('https://api.example.com');
});