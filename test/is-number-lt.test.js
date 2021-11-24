const isNumberLt = require('../src/is-number-lt');

test('Check if value is less than number', () => {
	expect( isNumberLt(1, 2)).toBe( true );
    expect( isNumberLt(-2, -1)).toBe( true );
});

test('Check for value greator than number', () => {
	expect( isNumberLt(2, 1)).toBe( false );    
});

test('Check for value equal to number', () => {
	expect( isNumberLt(2, 2)).toBe( false );    
});

test('Passing values that are not numbers', () => {
	expect( isNumberLt('string', 2)).toBe( false );
    expect( isNumberLt( 2, 'string')).toBe( false );   
});