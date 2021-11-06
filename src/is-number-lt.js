// is-array.js
// jlogs('exist?','isNumberLt');
/**
 *
 * @param val
 * @param number
 *
 * @returns {boolean}
 */
function isNumberLt(val, number) {
    return val !== null &&
        (typeof val === 'number' && val < number)
        ;
}
module.exports = isNumberLt;