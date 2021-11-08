const isObject = require('../src/is-object');

test('Check if we are passing an object', () => {
	expect( isObject({'':''}) ).toBe( true );
	expect( isObject({'0':''}) ).toBe( true );
	expect( isObject({'0':'0'}) ).toBe( true );
	expect( isObject({'1':'1'}) ).toBe( true );
});

test('What is not recognized as an object', () => {
	expect( isObject() ).toBe( false );
	expect( isObject('') ).toBe( false );
	expect( isObject({}) ).toBe( false );
});