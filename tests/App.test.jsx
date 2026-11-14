import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, test } from 'vitest';
import App from '../src/App.jsx';
import { resultLabel } from '../src/result.js';
test('renders the title and result', () => {
  const html = renderToStaticMarkup(<App />);
  expect(html).toContain('React Quality Lab');
  expect(html).toContain('Passed');
});
test('labels a passing score', () => {
  expect(resultLabel(85)).toBe('Passed');
});

// Append these tests to tests/App.test.jsx
test('labels a score below the pass mark', () => {
  expect(resultLabel(74)).toBe('Needs improvement');
});
test('accepts the pass boundary', () => {
  expect(resultLabel(75)).toBe('Passed');
});
test('rejects a negative score', () => {
  expect(resultLabel(-1)).toBe('Invalid score');
});
test('rejects a score above 100', () => {
  expect(resultLabel(101)).toBe('Invalid score');
});

