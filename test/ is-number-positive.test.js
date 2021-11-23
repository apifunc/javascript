const isNumberPositive = require('../src/is-number-positive');

test('Check for positive numbers', () => {
	expect( isNumberPositive(1) ).toBe( true );
    expect( isNumberPositive(1.222) ).toBe( true );
});

test('Check for negative numbers', () => {
	expect( isNumberPositive(-1) ).toBe( false );
});

test('Check for non-numbers', () => {
	expect( isNumberPositive('') ).toBe( false );
    expect( isNumberPositive('string') ).toBe( false );
    expect( isNumberPositive('%^$#') ).toBe( false );
});

