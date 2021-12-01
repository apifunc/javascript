const isArrayMany = require('../src/is-array-many');

test('is array', () => {
    expect(isArrayMany([1, 2])).toBe(true);
    expect(isArrayMany([[0, 1, 2, 3], [4, 5, 6, 7]])).toBe(true);
    expect(isArrayMany(['string1', 'string2'])).toBe(true);
    expect(isArrayMany([{}, {}])).toBe(true);
});

test('is array many', () => {
    expect(isArrayMany([1, 2], [3, 4])).toBe(true);
});

test('is not array', () => {
    expect(isArrayMany('string')).toBe(false);
    expect(isArrayMany(0, 1, 2, 3)).toBe(false);
    expect(isArrayMany(null)).toBe(false);
    expect(isArrayMany({})).toBe(false);
});