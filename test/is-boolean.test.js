const isBoolean = require('../src/is-boolean');

test('Check if the function returns a boolean value', () => {
	expect( isBoolean(true) ).toBe( true );
    expect( isBoolean(false) ).toBe( true );
});

test('Check if the function returns a non-boolean value', () => {
	expect( isBoolean('string') ).toBe( false );
    expect( isBoolean({}) ).toBe( false );
    expect( isBoolean(null) ).toBe( false );
    expect( isBoolean(1) ).toBe( false );
    expect( isBoolean(3.147) ).toBe( false );
});