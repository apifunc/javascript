const isArrayNotEmpty = require('../src/is-array-not-empty');

test('Check if we are passing an empty array', () => {
	expect( isArrayNotEmpty([]) ).toBe( false );

});

test('Check if we are passing an array with values', () => {
	
    expect(isArrayNotEmpty([1, 2, 3])).toBe( true );
    expect(isArrayNotEmpty(['good', 'better', 'best'])).toBe( true );

});