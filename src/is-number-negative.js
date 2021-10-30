// is-number.js
/**
 * cokolwiek jako liczba,
 * ułamek respektowany w JS
 *
 * @param {number} val
 * @returns {boolean}
 */
function isNumberNegative(val) {
	return val !== null && typeof val === 'number' && val < 0;
}

module.exports = isNumberNegative;
