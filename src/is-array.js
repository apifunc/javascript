// is-array.js
jlogs('exist?','isArray');
/**
 *
 * @param val
 * @returns {boolean}
 */
function isArray(val) {
    return val !== null &&
        (val instanceof Array && Object.keys(val).length > 0)
    // obj.constructor.toString().indexOf("Array") != -1
        ;
}
