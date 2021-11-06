// has-domain.js
jlogs('exist?','hasDomain');
/**
 * @param url
 * @returns {boolean}
 */
var hasDomain = function (url) {
    return url.indexOf('//') === 0 || url.indexOf('http://') === 0 || url.indexOf('https://') === 0;
}
module.exports = hasDomain;