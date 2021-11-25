const isNumberPositiveAndMoreThanZero = require('../src/is-number-positive-and-more-than-zero');

test ('is number positive', () => {
    expect(isNumberPositiveAndMoreThanZero( 1)).toBe(true);
    expect(isNumberPositiveAndMoreThanZero( 2.5)).toBe(true);
});

test ('is number zero', () => {
    expect(isNumberPositiveAndMoreThanZero(0)).toBe(false);
})

test ('is number negative', () => {
    expect(isNumberPositiveAndMoreThanZero(-1)).toBe(false);
})

test ('is not number', () => {
    expect(isNumberPositiveAndMoreThanZero('string')).toBe(false);
    expect(isNumberPositiveAndMoreThanZero({})).toBe(false);
    expect(isNumberPositiveAndMoreThanZero(null)).toBe(false);
    expect(isNumberPositiveAndMoreThanZero([])).toBe(false);
})