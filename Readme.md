
# flat-map

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Map over a (possibly nested) list, executing a function on each scalar item, and returning the result as a flat list

## Installation

    $ npm install @f/flat-map

## Usage

```js
var flatMap = require('@f/flat-map')

flatMap(n => n + 1, [[2, 3], [4, 5]]) // -> [3, 4, 5, 6]
```

## API

### flatMap(fn, arr)

- `fn` - Function to map the elements of `arr` and its sublists over
- `arr` - Possibly nested array to be mapped over `fn`

**Returns:** Returns a flat list, with each scalar element in `arr` (no matter how deeply nested) replaced with the result of `fn(value)`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/flat-map.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/flat-map
[git-image]: https://img.shields.io/github/tag/micro-js/flat-map.svg?style=flat-square
[git-url]: https://github.com/micro-js/flat-map
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/flat-map.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/flat-map
