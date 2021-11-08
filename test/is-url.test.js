const isUrl = require('../src/is-url');

test('Is the url with http prefix', () => {
    expect(isUrl("http://domain.com")).toBe(true);
});


test('Is the url with https prefix', () => {
	expect(isUrl("https://domain.com")).toBe(true);
});


test('Is the url with // prefix', () => {
	expect(isUrl("//domain.com")).toBe(true);
});