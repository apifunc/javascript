// is-number.js
/**
 * cokolwiek jako liczba,
 * ułamek respektowany w JS
 *
 * @param {number} val
 * @returns {boolean}
 */
function isNumberPositive(val) {
	return val !== null && typeof val === 'number' && val > 0;
}

module.exports = isNumberPositive;
