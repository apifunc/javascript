// is-array.js
// jlogs('exist?','isArrayMany');
/**
 *
 * @param val
 * @returns {boolean}
 */
function isArrayMany(val) {
    return val !== null &&
        (val instanceof Array && Object.keys(val).length > 1)
    // obj.constructor.toString().indexOf("Array") != -1
        ;
}
module.exports = isArrayMany;