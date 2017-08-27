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
const BACK_SLASH = '/';

/**
 * Add slash to string
 * @param str {string}
 * @returns {string}
 * @example
 * slash.add('http://www.google.it'); //=> http://www.google.it/
 */
function add(str) {
    return remove(str) + detectType(str);
}

/**
 * Remove slash from string
 * @param str {string}
 * @returns {string}
 * @example
 * slash.remove('http://www.google.it/'); //=> http://www.google.it
 */
function remove(str) {
    if (endsWithSlashes(str)) {
        return remove(str.slice(0, -1));
    } else {
        return str;
    }
}

/**
 * Check if string has backslash
 * @param str {string}
 * @returns {boolean}
 */
function endsWithBackslash(str) {
    return str.endsWith(BACK_SLASH);
}

/**
 * Check if string has slash
 * @param str {string}
 * @returns {boolean}
 */
function endsWithSlash(str) {
    return str.endsWith(SLASH);
}

/**
 * Check if string has slashes, both slash and backslash
 * @param str {string}
 * @returns {boolean}
 */
function endsWithSlashes(str) {
    return endsWithSlash(str) || endsWithBackslash(str);
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
    if(_countSlash(str, BACK_SLASH) >= _countSlash(str, SLASH))
        return BACK_SLASH;
    else
        return SLASH;
}

exports.SLASH = SLASH;
exports.BACK_SLASH = BACK_SLASH;

exports._countSlash = _countSlash;

exports.detectType = detectType;
exports.endsWithSlashes = endsWithSlashes;
exports.endsWithSlash = endsWithSlash;
exports.endsWithBackslash = endsWithBackslash;
exports.remove = remove;
exports.add = add;