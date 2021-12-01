const isArrayOne = require('../src/is-array-one');

test('is-array', () => {
    expect(isArrayOne([0])).toBe(true);
    expect(isArrayOne([1], [2])).toBe(true);
    expect(isArrayOne([''])).toBe(true);
    expect(isArrayOne([{}])).toBe(true);
    expect(isArrayOne([[1]])).toBe(true);
    expect(isArrayOne(['fjhgfgxc%^$#@*(&)'])).toBe(true);
});

test('is-not-array', () => {
    expect(isArrayOne(null)).toBe(false);
    expect(isArrayOne('')).toBe(false);
    expect(isArrayOne({})).toBe(false);
    expect(isArrayOne(0, 1, 2, 3)).toBe(false);
    expect(isArrayOne('fjhgfgxcsdfrtj$%^##@%^')).toBe(false);
})

test('is-array-one', ()=> {
    expect(isArrayOne([''])).toBe(true);
    expect(isArrayOne([0])).toBe(true);
    expect(isArrayOne([{}])).toBe(true);
    expect(isArrayOne(['$%^&*@#('])).toBe(true);
    expect(isArrayOne([0], [1], [2])).toBe(true);
    expect(isArrayOne([{}], [{}])).toBe(true);
})

test('is-array-not-one', ()=> {
    expect(isArrayOne(['', 2])).toBe(false);
    expect(isArrayOne([[0], [1], [2]])).toBe(false);
    expect(isArrayOne([['$%^&*@#('], [1, 2, 3]])).toBe(false);
    expect(isArrayOne([0, 1, 2, 3, 4])).toBe(false);
})