const isArrayNotEmpty = require('../src/is-array-not-empty');

test('Check if we are passing an empty values', () => {
	expect( isArrayNotEmpty([]) ).toBe( false );
    expect( isArrayNotEmpty('') ).toBe( false );
    expect( isArrayNotEmpty(null) ).toBe( false );
    expect( isArrayNotEmpty() ).toBe( false );
    expect( isArrayNotEmpty({}) ).toBe( false );
    expect( isArrayNotEmpty({0:0}) ).toBe( false );
});

test('Check if we are passing an array with values', () => {
	
    expect(isArrayNotEmpty([1, 2, 3])).toBe( true );
    expect(isArrayNotEmpty(['good', 'better', 'best'])).toBe( true );
    expect(isArrayNotEmpty([{1:1}, {2:2}, {3:3}])).toBe( true );
    expect( isArrayNotEmpty([0]) ).toBe( true );

});
  