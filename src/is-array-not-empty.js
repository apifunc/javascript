// is-array.js
// jlogs('exist?','isArrayNotEmpty');
/**
 *
 * @param val
 * @returns {boolean}
 */
function isArrayNotEmpty(val) {
    return val !== null &&
        (val instanceof Array && Object.keys(val).length > 0)
        ;
}
module.exports = isArrayNotEmpty;