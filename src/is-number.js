// // is-array.js
// jlogs('exist?','isNumber');
// /**
//  *
//  * @param val
//  * @returns {boolean}
//  */
/**
 * cokolwiek jako liczba,
 * ułamek respektowany w JS
 *
 * @param {number} val
 * @returns {boolean}
 */
function isNumber(val) {
	return val !== null && typeof val === 'number';
}

function isPositiveNumber(val) {
	return val !== null && typeof val === 'number';
}

function isNegativeNumber(val) {
	return val !== null && typeof val === 'number';
}

function isPositiveFullNumberMoreThanZero(val) {
	return val !== null && typeof val === 'number';
}
module.exports = isNumber;
