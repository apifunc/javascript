const isObject = require('../src/is-object');

test('Check if we are passing an object', () => {
	expect(isObject(typeof val)).toBe( true );
});