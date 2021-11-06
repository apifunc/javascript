const isUrl = require('../src/is-url');

test('Is the url with http prefixs', () => {
    expect(isUrl("http://domain.com")).toBe(true);
});
