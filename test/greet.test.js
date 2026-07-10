import { test } from 'node:test';
import assert from 'node:assert/strict';

import { greet } from '../src/greet.js';

test('greets a named user', () => {
  assert.equal(greet({ name: 'Ada' }), 'Hello, Ada!');
});

test('handles a missing user without throwing', () => {
  // Anonymous visitor: no user object. This should not crash.
  assert.doesNotThrow(() => greet());
});
