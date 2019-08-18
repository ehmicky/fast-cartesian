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
- can handle an infinite number of combinations

# Example

<!-- eslint-disable fp/no-loops -->

```js
const { cartesianArray, cartesianIterate } = require('fast-cartesian')

console.log(cartesianArray(['red', 'blue'], ['circle', 'square']))
// [
//   [ 'red', 'circle' ],
//   [ 'red', 'square' ],
//   [ 'blue', 'circle' ],
//   [ 'blue', 'square' ]
// ]

// Return initial indexes
console.log(
  cartesianArray(
    Object.entries(['red', 'blue']),
    Object.entries(['circle', 'square']),
  ),
)
// [
//   [ [ '0', 'red' ], [ '0', 'circle' ] ],
//   [ [ '0', 'red' ], [ '1', 'square' ] ],
//   [ [ '1', 'blue' ], [ '0', 'circle' ] ],
//   [ [ '1', 'blue' ], [ '1', 'square' ] ]
// ]

// Iterate over each combination
for (const values of cartesianIterate(['red', 'blue'], ['circle', 'square'])) {
  console.log(values)
}
// [ 'red', 'circle' ]
// [ 'red', 'square' ]
// [ 'blue', 'circle' ]
// [ 'blue', 'square' ]
```

# Demo

You can try this library:

- either directly [in your browser](https://repl.it/@ehmicky/fast-cartesian).
- or by executing the [`examples` files](examples/README.md) in a terminal.

# Install

```
npm install fast-cartesian
```

# Usage

<!-- eslint-disable fp/no-loops, no-empty -->

```js
const { cartesianArray, cartesianIterate } = require('fast-cartesian')

const inputs = [['red', 'blue'], ['circle', 'square']]

const combinations = cartesianArray(...inputs)

for (const combination of cartesianIterate(...inputs)) {
}
```

# API

## cartesianArray(...inputs)

`inputs`: `Array` (one or several)<br> _Return value_: `array[]`

Returns a two-dimensional `array` where each row is a combination of `inputs`.

## cartesianIterate(...inputs)

`inputs`: `Array` (one or several)<br> _Return value_:
[`Iterable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

Iterates over each combination of `inputs`.

Slower than [`cartesianArray()`](#cartesianarrayinputs) but:

- requires almost no memory
- works with an infinite number of combinations

# Benchmarks

The following [benchmarks](benchmarks/main.js) compare the performance of this
library against alternatives
([`cartesian-product`](https://github.com/izaakschroeder/cartesian-product),
[`fast-cartesian-product`](https://github.com/fisker/fast-cartesian-product),
[`power-cartesian-product`](https://github.com/fisker/power-cartesian-product),
[`cartesian`](https://github.com/alexindigo/cartesian) and
[`lodash.product`](https://github.com/SeregPie/lodash.product)).

```
## fast-cartesian ######################
1 array                           0.87ms
2 arrays                          1.02ms
4 arrays                          1.22ms
8 arrays                          1.43ms
16 arrays                         3.49ms

## fast-cartesian-product (alternate) ##
1 array                           0.94ms
2 arrays                          1.02ms
4 arrays                          1.23ms
8 arrays                          1.43ms
16 arrays                         3.58ms

## fast-cartesian-product ##############
1 array                           1.13ms
2 arrays                          1.48ms
4 arrays                          2.61ms
8 arrays                          4.48ms
16 arrays                        10.47ms

## power-cartesian-product #############
1 array                           4.70ms
2 arrays                          5.19ms
4 arrays                          7.33ms
8 arrays                         11.47ms
16 arrays                        19.21ms

## cartesian-product ###################
1 array                           2.57ms
2 arrays                          3.68ms
4 arrays                         10.79ms
8 arrays                         14.33ms
16 arrays                        20.79ms

## cartesian ###########################
1 array                           6.39ms
2 arrays                         16.54ms
4 arrays                         17.69ms
8 arrays                         22.52ms
16 arrays                        34.37ms

## lodash.product ######################
1 array                          38.81ms
2 arrays                         40.43ms
4 arrays                         43.31ms
8 arrays                         54.85ms
16 arrays                        82.06ms
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
