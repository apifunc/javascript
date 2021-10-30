const isNumber = require('../src/is-number');

test('Check num', () => {
	expect(isNumber(typeof 1)).toBe('boolean');
});
