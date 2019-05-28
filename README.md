[![Codecov](https://img.shields.io/codecov/c/github/ehmicky/fast-cartesian.svg?label=tested&logo=codecov)](https://codecov.io/gh/ehmicky/fast-cartesian)
[![Travis](https://img.shields.io/badge/cross-platform-4cc61e.svg?logo=travis)](https://travis-ci.org/ehmicky/fast-cartesian)
[![Node](https://img.shields.io/node/v/fast-cartesian.svg?logo=node.js)](https://www.npmjs.com/package/fast-cartesian)
[![Gitter](https://img.shields.io/gitter/room/ehmicky/fast-cartesian.svg?logo=gitter)](https://gitter.im/ehmicky/fast-cartesian)
[![Twitter](https://img.shields.io/badge/%E2%80%8B-twitter-4cc61e.svg?logo=twitter)](https://twitter.com/intent/follow?screen_name=ehmicky)
[![Medium](https://img.shields.io/badge/%E2%80%8B-medium-4cc61e.svg?logo=medium)](https://medium.com/@ehmicky)

Fast cartesian product.

Retrieves every possible combination between several arrays
([cartesian product](https://en.wikipedia.org/wiki/Cartesian_product)):

- [fastest](#benchmarks) available library in JavaScript
- works with any
  [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterables):
  arrays,
  [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator),
  strings, maps, sets, etc.

# Example

```js
const fastCartesian = require('fast-cartesian')

// Prints:
// [
//   [ '01', 'Jan', '1980' ],
//   [ '01', 'Jan', '2019' ],
//   [ '01', 'Feb', '1980' ],
//   [ '01', 'Feb', '2019' ],
//   [ '04', 'Jan', '1980' ],
//   [ '04', 'Jan', '2019' ],
//   [ '04', 'Feb', '1980' ],
//   [ '04', 'Feb', '2019' ],
// ]
console.log(fastCartesian(['01', '04'], ['Jan', 'Feb'], ['1980', '2019']))

// Works with any iterable: arrays, generators, strings, maps, sets, etc.
const generator = function*() {
  yield 'Jan'
  yield 'Feb'
}

console.log(fastCartesian(['01', '04'], generator(), ['1980', '2019']))
```

# Install

```
npm install fast-cartesian
```

# Usage

```js
const fastCartesian = require('fast-cartesian')

const combinations = fastCartesian(...iterables)
```

# API

## fastCartesian(...inputs)

`inputs`:
[`iterable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterables)
(one or several)<br> _Return value_: `array[]`

Returns a two-dimensional `array` where each row contains a combination of
`inputs`.

# Benchmarks

Those [benchmarks](benchmarks/main.js) compares the performance of this library
against alternatives
([`cartesian-product`](https://github.com/izaakschroeder/cartesian-product),
[`cartesian`](https://github.com/alexindigo/cartesian) and
[`lodash.product`](https://github.com/SeregPie/lodash.product)).

```
fast-cartesian    (1 array)   278869 ops/sec
fast-cartesian    (2 arrays)  304239 ops/sec
fast-cartesian    (4 arrays)  213092 ops/sec
fast-cartesian    (8 arrays)  379142 ops/sec
fast-cartesian    (16 arrays) 159605 ops/sec

cartesian-product (1 array)   245936 ops/sec
cartesian-product (2 arrays)  232967 ops/sec
cartesian-product (4 arrays)   72620 ops/sec
cartesian-product (8 arrays)   55621 ops/sec
cartesian-product (16 arrays)  37949 ops/sec

cartesian         (1 array)   127550 ops/sec
cartesian         (2 arrays)   51323 ops/sec
cartesian         (4 arrays)   43785 ops/sec
cartesian         (8 arrays)   33748 ops/sec
cartesian         (16 arrays)  22163 ops/sec

lodash.product    (1 array)    19958 ops/sec
lodash.product    (2 arrays)   18865 ops/sec
lodash.product    (4 arrays)   17608 ops/sec
lodash.product    (8 arrays)   14205 ops/sec
lodash.product    (16 arrays)   9667 ops/sec
```

# Support

If you found a bug or would like a new feature, _don't hesitate_ to
[submit an issue on GitHub](../../issues).

For other questions, feel free to
[chat with us on Gitter](https://gitter.im/ehmicky/fast-cartesian).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

# Contributing

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page's `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix a bug or add a new feature, please check our
[guidelines](CONTRIBUTING.md). Pull requests are welcome!

<!-- Thanks go to our wonderful contributors: -->

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4" width="100px;" alt="ehmicky"/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/fast-cartesian/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/fast-cartesian/commits?author=ehmicky" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->
