// has-domain.js
//jlogs('exist?','isUrl');
/**
 * @param url
 * @returns {boolean}
 */
var isUrl = function (url) {
    return url.indexOf('//') === 0 || url.indexOf('http://') === 0 || url.indexOf('https://') === 0;
}
