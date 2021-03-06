<div align="center">
<h1>super-trailing-slash</h1>
Remove or add trailing slash.
<br/><br/>
<a href="https://travis-ci.org/fabioricali/super-trailing-slash" target="_blank"><img src="https://travis-ci.org/fabioricali/super-trailing-slash.svg?branch=master" title="Build Status"/></a>
<a href="https://coveralls.io/github/fabioricali/super-trailing-slash?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/fabioricali/super-trailing-slash/badge.svg?branch=master" title="Coverage Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<img src="https://img.shields.io/badge/team-terrons-orange.svg" title="Team Terrons"/>
</div>

## Installation

### Node.js
```
npm install super-trailing-slash --save
```

## Example

#### Add trailing slash
```javascript
const slash = require('super-trailing-slash');

slash.add('path/to/file'); //=> path/to/file/
slash.add('\\path\\to\\file'); //=> \path\to\file\

// Adds only if necessary
slash.add('path/to/file/'); //=> path/to/file/
```

#### Remove trailing slash
```javascript
slash.remove('path/to/file/'); //=> path/to/file
slash.remove('\\path\\to\\file\\'); //=> \path\to\file

// Removes only if necessary
slash.remove('path/to/file'); //=> path/to/file
```

### API
See <a href="https://github.com/fabioricali/super-trailing-slash/blob/master/api.md">full documentation</a>

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/super-trailing-slash/blob/master/CHANGELOG.md">here</a>

## License
super-trailing-slash is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>