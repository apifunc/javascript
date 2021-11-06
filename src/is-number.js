// is-number.js
/**
 * cokolwiek jako liczba,
 * ułamek respektowany w JS
 *
 * @param {number} val
 *
 * @returns {boolean}
 */
function isNumber(val) {
	return val !== null && typeof val === 'number';
}

module.exports = isNumber;