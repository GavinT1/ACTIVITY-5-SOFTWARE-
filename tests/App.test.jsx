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

