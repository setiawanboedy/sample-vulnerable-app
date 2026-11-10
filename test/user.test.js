const test = require('node:test');
const assert = require('node:assert');
const { handleUserQuery } = require('../routes/user');

test('handleUserQuery returns user when found', () => {
    const result = handleUserQuery('1');
    assert.strictEqual(result.name, 'Alice');
    assert.strictEqual(result.role, 'admin');
});

test('handleUserQuery returns error when user not found', () => {
    const result = handleUserQuery('999');
    assert.strictEqual(result.error, 'User not found');
});

test('handleUserQuery handles empty input', () => {
    const result = handleUserQuery('');
    assert.strictEqual(result.error, 'userId is required');
});
