const isArray = require('../src/is-array');

test('is-array', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([], [])).toBe(true);
    expect(isArray([''])).toBe(true);
    expect(isArray([{}])).toBe(true);
    expect(isArray([0, 1, 2, 3])).toBe(true);
    expect(isArray(['fjhgfgxc%^$#@*(&)'])).toBe(true);
});

test('is-not-array', () => {
    expect(isArray(null)).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(0, 1, 2, 3)).toBe(false);
    expect(isArray('fjhgfgxcsdfrtj$%^##@%^')).toBe(false);
});