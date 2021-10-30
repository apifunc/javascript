const isNumber = require('../src/is-number');

test('Check num', () => {
	expect(isNumber( 1)).toBe( true);
	expect(isNumber(  0)).toBe( true);
	expect(isNumber( -1)).toBe( true);
	expect(isNumber( "test")).toBe( false);
	expect(isNumber( null)).toBe( false);
	expect(isNumber( {})).toBe( false);
	expect(isNumber( [])).toBe( false);
});
