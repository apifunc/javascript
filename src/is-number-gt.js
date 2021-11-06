// is-array.js
// jlogs('exist?','isNumberGt');
/**
 *
 * @param val
 * @param number
 *
 * @returns {boolean}
 */
function isNumberGt(val, number) {
    return val !== null &&
        (typeof val === 'number' && val > number)
        ;
}
module.exports = isNumberGt;