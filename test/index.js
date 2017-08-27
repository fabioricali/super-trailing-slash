const slash = require('../index');
const be = require('bejs');

describe('slash', function () {
    describe('checkSlashes', function () {
        it('with backslash, should be return true', function () {
            const url = 'http://www.google.it/';
            const result = slash.checkSlashes(url);
            console.log(result);
            be.err.true(result);
        });
        it('with slash, should be return true', function () {
            const url = '\\path\\to\\any\\';
            const result = slash.checkSlashes(url);
            console.log(result);
            be.err.true(result);
        });
        it('should be return false', function () {
            const url = 'http://www.google.it';
            const result = slash.checkSlashes(url);
            console.log(result);
            be.err.false(result);
        });
    });
    describe('isSlash', function () {
        it('with backslash, should be return false', function () {
            const url = 'http://www.google.it/';
            const result = slash.isSlash(url);
            console.log(result);
            be.err.false(result);
        });
        it('with slash, should be return true', function () {
            const url = '\\path\\to\\any\\';
            const result = slash.isSlash(url);
            console.log(result);
            be.err.true(result);
        });
        it('should be return false', function () {
            const url = 'http://www.google.it';
            const result = slash.isSlash(url);
            console.log(result);
            be.err.false(result);
        });
    });
    describe('isBackslash', function () {
        it('with backslash, should be return true', function () {
            const url = 'http://www.google.it/';
            const result = slash.isBackslash(url);
            console.log(result);
            be.err.true(result);
        });
        it('with slash, should be return false', function () {
            const url = '\\path\\to\\any\\';
            const result = slash.isBackslash(url);
            console.log(result);
            be.err.false(result);
        });
        it('should be return false', function () {
            const url = 'http://www.google.it';
            const result = slash.isBackslash(url);
            console.log(result);
            be.err.false(result);
        });
    });
    describe('remove', function () {
        it('slash, should be return true', function () {
            const url = 'http://www.google.it/';
            const result = slash.remove(url);
            console.log(result);
            be.err.equal(result, 'http://www.google.it');
        });
        it('no slash, should be return true', function () {
            const url = 'http://www.google.it';
            const result = slash.remove(url);
            console.log(result);
            be.err.equal(result, 'http://www.google.it');
        });
        it('backslash, should be return true', function () {
            const url = '\\path\\to\\any\\';
            const result = slash.remove(url);
            console.log(result);
            be.err.equal(result, '\\path\\to\\any');
        });
    });
    describe('add', function () {
        it('already slash, should be return true', function () {
            const url = 'http://www.google.it/';
            const result = slash.add(url);
            console.log(result);
            be.err.equal(result, 'http://www.google.it/');
        });
        it('auto detect slash, should be return true', function () {
            const url = 'http://www.google.it';
            const result = slash.add(url);
            console.log(result);
            be.err.equal(result, 'http://www.google.it/');
        });
        it('auto detect backslash, should be return true', function () {
            const url = '\\path\\to\\any';
            const result = slash.add(url);
            console.log(result);
            be.err.equal(result, '\\path\\to\\any\\');
        });
    });
    describe('_countSlash', function () {
        it('slash type, should be return 3', function () {
            const url = 'http://www.google.it/';
            const result = slash._countSlash(url, slash.BACKSLASH);
            console.log(result);
            be.err.equal(result, 3);
        });
        it('backslash type, should be return 3', function () {
            const url = '\\path\\to\\any';
            const result = slash._countSlash(url, slash.SLASH);
            console.log(result);
            be.err.equal(result, 3);
        });
        it('no slashes should be return 0', function () {
            const url = 'path';
            const result = slash._countSlash(url, slash.SLASH);
            console.log(result);
            be.err.equal(result, 0);
        });
    });
    describe('_detectType', function () {
        it('should be return BACKSLASH', function () {
            const url = 'http://www.google.it/';
            const result = slash.detectType(url);
            console.log(result);
            be.err.equal(result, slash.BACKSLASH);
        });
        it('should be return SLASH', function () {
            const url = '\\path\\to\\any';
            const result = slash.detectType(url);
            console.log(result);
            be.err.equal(result, slash.SLASH);
        });
        it('same number slashes type should be return BACKSLASH', function () {
            const url = '\\any/';
            const result = slash.detectType(url);
            console.log(result);
            be.err.equal(result, slash.BACKSLASH);
        });
        it('no slashes should be return BACKSLASH', function () {
            const url = 'path';
            const result = slash.detectType(url);
            console.log(result);
            be.err.equal(result, slash.BACKSLASH);
        });
    });
});