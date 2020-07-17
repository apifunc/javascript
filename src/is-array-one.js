// is-array.js
jlogs('exist?','isArrayOne');
/**
 *
 * @param val
 * @returns {boolean}
 */
function isArrayOne(val) {
    return val !== null &&
        (val instanceof Array && Object.keys(val).length === 1)
    // obj.constructor.toString().indexOf("Array") != -1
        ;
}
