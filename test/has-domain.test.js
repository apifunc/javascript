const hasDomain = require('../src/has-domain');

test('has domain after http prefix', () => {
    expect(hasDomain("http://domain.com")).toBe(true);
});

test('has domain after https prefix', () => {
    expect(hasDomain("https://domain.com")).toBe(true);
});

test('has domain after // prefix', () => {
    expect(hasDomain("//domain.com")).toBe(true);
});