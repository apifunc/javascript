const isString = require('../src/is-string');
// const valLength = isString.length;


test('Check if a value is there', () => {
	expect(isString('test')).toBe(true);
    expect(isString('')).toBe(false);
    expect(isString('t')).toBe( true);
});

test('Check if type of value is a string', () => {
	expect(isString( typeof val )).toBe(true);
    expect(isString(null)).toBe(false);
    expect(isString( {} )).toBe( false);
    expect(isString( [] )).toBe( false);
    expect(isString( '' )).toBe( false);
});

test('Check if type of value is not null', () => {
    if (typeof val !== null);
	expect(isString( typeof val )).toBe(true);
});

test('Check if length of value is more than  characters', () => {
    // if ( isString.length > 0);
	expect(isString.length > 0).toBe(true);
});