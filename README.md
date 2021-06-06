[![Codecov](https://img.shields.io/codecov/c/github/ehmicky/fast-cartesian.svg?label=tested&logo=codecov)](https://codecov.io/gh/ehmicky/fast-cartesian)
[![Build](https://github.com/ehmicky/fast-cartesian/workflows/Build/badge.svg)](https://github.com/ehmicky/fast-cartesian/actions)
[![Node](https://img.shields.io/node/v/fast-cartesian.svg?logo=node.js)](https://www.npmjs.com/package/fast-cartesian)
[![Twitter](https://img.shields.io/badge/%E2%80%8B-twitter-4cc61e.svg?logo=twitter)](https://twitter.com/intent/follow?screen_name=ehmicky)
[![Medium](https://img.shields.io/badge/%E2%80%8B-medium-4cc61e.svg?logo=medium)](https://medium.com/@ehmicky)

Fast cartesian product.

Retrieves every possible combination between several arrays
([cartesian product](https://en.wikipedia.org/wiki/Cartesian_product)).

[Fastest](#benchmarks) available library in JavaScript.

When producing millions of combinations or combining hundreds of arrays,
[`big-cartesian`](https://github.com/ehmicky/big-cartesian) should be used
instead.

# Testimonials

> We are now using this library for ourworldindata.org and have seen an almost
> 50-fold performance increase from the naive method we used before!
>
> @MarcelGerber

# Example

<!-- eslint-disable node/no-missing-import -->

```js
import fastCartesian from 'fast-cartesian'

console.log(
  fastCartesian([
    ['red', 'blue'],
    ['circle', 'square'],
  ]),
)
// [
//   [ 'red', 'circle' ],
//   [ 'red', 'square' ],
//   [ 'blue', 'circle' ],
//   [ 'blue', 'square' ]
// ]

// Return initial indexes
console.log(
  fastCartesian(
    [
      ['red', 'blue'],
      ['circle', 'square'],
    ].map(Object.entries),
  ),
)
// [
//   [ [ '0', 'red' ], [ '0', 'circle' ] ],
//   [ [ '0', 'red' ], [ '1', 'square' ] ],
//   [ [ '1', 'blue' ], [ '0', 'circle' ] ],
//   [ [ '1', 'blue' ], [ '1', 'square' ] ]
// ]
```

# Demo

You can try this library:

- either directly [in your browser](https://repl.it/@ehmicky/fast-cartesian).
- or by executing the [`examples` files](examples/README.md) in a terminal.

# Install

```
npm install fast-cartesian
```

# API

## fastCartesian(inputs)

`inputs`: `Array<Array>`\
_Return value_: `Array<Array>`

Returns a two-dimensional `Array` where each row is a combination of `inputs`.

# Benchmarks

The following [benchmarks](benchmarks/main.js) compare the performance of this
library against alternatives
([`big-cartesian`](https://github.com/ehmicky/big-cartesian),
[`cartesian-product`](https://github.com/izaakschroeder/cartesian-product),
[`fast-cartesian-product`](https://github.com/fisker/fast-cartesian-product),
[`power-cartesian-product`](https://github.com/fisker/power-cartesian-product),
[`cartesian`](https://github.com/alexindigo/cartesian) and
[`lodash.product`](https://github.com/SeregPie/lodash.product)).

```
## fast-cartesian ######################
1 array                           1.05ms
2 arrays                          1.13ms
4 arrays                          1.34ms
8 arrays                          1.50ms
16 arrays                         3.75ms

## fast-cartesian-product ##############
1 array                           1.10ms
2 arrays                          1.52ms
4 arrays                          2.39ms
8 arrays                          4.27ms
16 arrays                         9.33ms

## big-cartesian #######################
1 array                           7.61ms
2 arrays                          7.12ms
4 arrays                          8.12ms
8 arrays                          6.72ms
16 arrays                        15.50ms

## power-cartesian-product #############
1 array                           5.08ms
2 arrays                          5.23ms
4 arrays                          7.37ms
8 arrays                         11.47ms
16 arrays                        19.34ms

## cartesian-product ###################
1 array                           5.57ms
2 arrays                          2.79ms
4 arrays                         10.13ms
8 arrays                         12.96ms
16 arrays                        18.40ms

## cartesian ###########################
1 array                           6.42ms
2 arrays                         15.34ms
4 arrays                         16.34ms
8 arrays                         20.71ms
16 arrays                        30.79ms

## lodash.product ######################
1 array                          37.97ms
2 arrays                         38.38ms
4 arrays                         41.35ms
8 arrays                         51.68ms
16 arrays                        75.40ms
```

# Support

For any question, _don't hesitate_ to [submit an issue on GitHub](../../issues).

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
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/fast-cartesian/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/fast-cartesian/commits?author=ehmicky" title="Documentation">📖</a></td>
    <td align="center"><a href="https://marcelgerber.de"><img src="https://avatars0.githubusercontent.com/u/2641501?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marcel Gerber</b></sub></a><br /><a href="https://github.com/ehmicky/fast-cartesian/commits?author=MarcelGerber" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
