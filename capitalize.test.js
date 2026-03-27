const { test } = require('node:test');
const assert = require('node:assert');
const { capitalize } = require('./script.js');

test('capitalize utility function', async (t) => {
  await t.test('should capitalize a lowercase string', () => {
    assert.strictEqual(capitalize('hello'), 'Hello');
  });

  await t.test('should handle already capitalized strings', () => {
    assert.strictEqual(capitalize('Hello'), 'Hello');
  });

  await t.test('should lowercase the rest of the string', () => {
    assert.strictEqual(capitalize('hELLO'), 'Hello');
    assert.strictEqual(capitalize('WORLD'), 'World');
  });

  await t.test('should handle mixed case strings', () => {
    assert.strictEqual(capitalize('jAvAsCrIpT'), 'Javascript');
  });

  await t.test('should handle single character strings', () => {
    assert.strictEqual(capitalize('a'), 'A');
    assert.strictEqual(capitalize('Z'), 'Z');
  });

  await t.test('should return an empty string for an empty string input', () => {
    assert.strictEqual(capitalize(''), '');
  });

  await t.test('should handle non-string inputs gracefully', () => {
    assert.strictEqual(capitalize(null), '');
    assert.strictEqual(capitalize(undefined), '');
    assert.strictEqual(capitalize(123), '');
    assert.strictEqual(capitalize({}), '');
    assert.strictEqual(capitalize([]), '');
  });
});
