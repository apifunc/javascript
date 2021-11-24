const isNumberGt = require('../src/is-number-gt');


test('Check for value greator than number', () => {
	expect( isNumberGt(2, 1)).toBe( true );    
});
test('Check if value is less than number', () => {
	expect( isNumberGt(1, 2)).toBe( false );
    expect( isNumberGt(-2, -1)).toBe( false );
});

test('Check for value equal to number', () => {
	expect( isNumberGt(2, 2)).toBe( false );    
});

test('Passing values that are not numbers', () => {
	expect( isNumberGt('string', 2)).toBe( false );
    expect( isNumberGt( 2, 'string')).toBe( false );   
});