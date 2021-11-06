const isNumber = require('../src/is-number');

test('Check positive and zero number', () => {
	expect(isNumber( 1)).toBe( true);
	expect(isNumber(  0)).toBe( true);
	expect(isNumber(  -1)).toBe( true);
});

test('Check not numbers', () => {
	expect(isNumber( "test")).toBe( false);
	expect(isNumber( null)).toBe( false);
	expect(isNumber( {})).toBe( false);
	expect(isNumber( [])).toBe( false);
});

test('Check negative number', () => {
	expect(isNumber( -1)).toBe( true);
});