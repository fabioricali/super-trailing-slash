/**
 * @module super-trailing-slash
 */

/**
 * @const
 * @type {string}
 */
const SLASH = '\\';

/**
 * @const
 * @type {string}
 */
const BACKSLASH = '/';

/**
 * Add trailing slash to string if necessary
 * @param str {string}
 * @returns {string}
 * @example
 * slash.add('http://www.google.it'); //=> http://www.google.it/
 * slash.add('\\path\\to\\file'); //=> \\path\\to\\file\\
 */
function add(str) {
    return remove(str) + detectType(str);
}

/**
 * Remove trailing slash from string if necessary
 * @param str {string}
 * @returns {string}
 * @example
 * slash.remove('http://www.google.it/'); //=> http://www.google.it
 * slash.remove('\\path\\to\\file\\'); //=> \\path\\to\\file
 */
function remove(str) {
    return checkSlashes(str)
        ? remove(str.slice(0, -1))
        : str;
}

/**
 * Check if string has backslash
 * @param str {string}
 * @returns {boolean}
 */
function isBackslash(str) {
    return str.endsWith(BACKSLASH);
}

/**
 * Check if string has slash
 * @param str {string}
 * @returns {boolean}
 */
function isSlash(str) {
    return str.endsWith(SLASH);
}

/**
 * Check if string has slashes, both slash and backslash
 * @param str {string}
 * @returns {boolean}
 */
function checkSlashes(str) {
    return isSlash(str) || isBackslash(str);
}

/**
 * Count slash type occurrences
 * @param str {string}
 * @param slashType {string}
 * @returns {number}
 * @private
 */
function _countSlash(str, slashType) {
    let count = -1;
    for (let index = -2; index !== -1; index = str.indexOf(slashType, index + 1)) {
        count++
    }
    return count;
}

/**
 * Detect slash type, slash or backslash
 * @param str {string}
 * @returns {string}
 */
function detectType(str) {
    if (_countSlash(str, BACKSLASH) >= _countSlash(str, SLASH))
        return BACKSLASH;
    else
        return SLASH;
}

// Expose module
module.exports = {
    SLASH,
    BACKSLASH,
    _countSlash,
    detectType,
    checkSlashes,
    isSlash,
    isBackslash,
    remove,
    add
};