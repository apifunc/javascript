const isStringEncoded= require('../src/is-string-encoded');
// const valLength = isString.length;


test('Check if type of value is string', () => {
	expect(isStringEncoded('test', 'string')).toBe(true);
    expect(isStringEncoded('c', 'string')).toBe( true);
    expect(isStringEncoded('1234', 'string')).toBe( true);
    expect(isStringEncoded('!@#$%^&*()_+?/', 'string')).toBe( true);
    expect(isStringEncoded('vqlhcxxdwgmdpmsofpbpfqsnyejztkudrsdtfubdlvgtofaadrhrgdvzhezpufpmwhxlcbaujjhwzksyqgpjquntnuqgdftkguavmxvmgbvpcxjuutyunyvwzvdxuwvrlbqiweetkpikwhkosreekjqvavhryzitfwdfmnkfbikywiityttczpoewgxuoqssfpjhblkvhgobcykbnlinojmqlrirlasvawfsqbxmoyaccmfwiekkbbecvhkuhnyqhfqnquyccmkwcbywlpqdtketidxfczufiydknyqgkbpwuvengzhheyczgjsvgjihmlltjuppbvlyxsaceloushrlvnllbtrgginqopnlqbvydylxajttnvnofxqctkrgrouuzpkeeteymiddalyoforhmdyegiceaffdcdrtwxxipcbcgtueoosxquvwxdlxrqdanwrrxddkdjvallzvcjuhqczwvpxxwjzxhhgurvdjcnyhdrerawclbycdenqx', 'string')).toBe( true);
});

test('Check if type of value is not string', () => {
	expect(isStringEncoded({}, 'string')).toBe(false);
    expect(isStringEncoded(null, 'string')).toBe( false);
    expect(isStringEncoded(123, 'number')).toBe( false);
    expect(isStringEncoded({}, 'object')).toBe(false);
    expect(isStringEncoded(123, 'string')).toBe( false);
});