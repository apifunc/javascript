const isString = require('../src/is-string-type');
// const valLength = isString.length;


test('Check if type of value is string', () => {
	expect(isString('test', 'string')).toBe(true);
    expect(isString('t', 'string')).toBe( true);
    expect(isString('1234', 'string')).toBe( true);
    expect(isString('!@#$%^&*()_+?/', 'string')).toBe( true);
});

test('Check if type of value is not string', () => {
	expect(isString({}, 'string')).toBe(false);
    expect(isString(null, 'string')).toBe( false);
    expect(isString(123, 'number')).toBe( false);
    expect(isString({}, 'object')).toBe(false);
    expect(isString(123, 'string')).toBe( false);
});