const isEmpty = require('../src/is-empty');

test('Check for non-empty values', () => {
	expect( isEmpty('undefined') ).toBe( false );
    expect( isEmpty('string') ).toBe( false );
    expect( isEmpty('object') ).toBe( false );
    expect( isEmpty(1) ).toBe( false );
    expect( isEmpty(2.5) ).toBe( false );
});

test('Check for empty values', () => {
	expect( isEmpty('') ).toBe( true );
    expect( isEmpty([]) ).toBe( true );
    expect( isEmpty({}) ).toBe( true );
    expect( isEmpty(null) ).toBe( true );
});