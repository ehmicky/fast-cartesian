[![Node](https://img.shields.io/badge/-Node.js-808080?logo=node.js&colorA=404040&logoColor=66cc33)](https://www.npmjs.com/package/fast-cartesian)
[![Browsers](https://img.shields.io/badge/-Browsers-808080?logo=firefox&colorA=404040)](https://unpkg.com/fast-cartesian?module)
[![TypeScript](https://img.shields.io/badge/-Typed-808080?logo=typescript&colorA=404040&logoColor=0096ff)](/types/main.d.ts)
[![Codecov](https://img.shields.io/badge/-Tested%20100%25-808080?logo=codecov&colorA=404040)](https://codecov.io/gh/ehmicky/fast-cartesian)
[![Minified size](https://img.shields.io/bundlephobia/minzip/fast-cartesian?label&colorA=404040&colorB=808080&logo=webpack)](https://bundlephobia.com/package/fast-cartesian)
[![Twitter](https://img.shields.io/badge/-Twitter-808080.svg?logo=twitter&colorA=404040)](https://twitter.com/intent/follow?screen_name=ehmicky)
[![Medium](https://img.shields.io/badge/-Medium-808080.svg?logo=medium&colorA=404040)](https://medium.com/@ehmicky)

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

This package works in both Node.js >=14.18.0 and
[browsers](https://raw.githubusercontent.com/ehmicky/dev-tasks/main/src/tasks/build/browserslist).
It is an ES module and must be loaded using
[an `import` or `import()` statement](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c),
not `require()`.

# API

## fastCartesian(inputs)

`inputs`: `Array<Array>`\
_Return value_: `Array<Array>`

Returns a two-dimensional `Array` where each row is a combination of `inputs`.

# Benchmarks

The following [benchmarks](benchmark/tasks.js) compare the performance of this
library against alternatives
([`big-cartesian`](https://github.com/ehmicky/big-cartesian),
[`cartesian-product`](https://github.com/izaakschroeder/cartesian-product),
[`fast-cartesian-product`](https://github.com/fisker/fast-cartesian-product),
[`power-cartesian-product`](https://github.com/fisker/power-cartesian-product),
[`cartesian`](https://github.com/alexindigo/cartesian) and
[`lodash.product`](https://github.com/SeregPie/lodash.product)).

```
## fast-cartesian ######################
1 array                           1.08ms
2 arrays                          1.15ms
4 arrays                          2.81ms
8 arrays                          1.60ms
16 arrays                         4.28ms

## cartesian-product ###################
1 array                           3.56ms
2 arrays                          2.72ms
4 arrays                         11.21ms
8 arrays                         13.41ms
16 arrays                        19.29ms

## big-cartesian #######################
1 array                           7.73ms
2 arrays                          7.40ms
4 arrays                          8.70ms
8 arrays                          4.46ms
16 arrays                        17.28ms

## power-cartesian-product #############
1 array                           6.15ms
2 arrays                          7.96ms
4 arrays                         11.84ms
8 arrays                         17.37ms
16 arrays                        19.38ms

## cartesian ###########################
1 array                           6.63ms
2 arrays                         16.03ms
4 arrays                         17.82ms
8 arrays                         22.11ms
16 arrays                        33.21ms

## fast-cartesian-product ##############
1 array                          13.75ms
2 arrays                         17.22ms
4 arrays                         23.89ms
8 arrays                         39.08ms
16 arrays                        61.45ms

## lodash.product ######################
1 array                          36.66ms
2 arrays                         37.85ms
4 arrays                         41.69ms
8 arrays                         50.38ms
16 arrays                        73.87ms
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
    <td align="center"><a href="https://github.com/Paulomart"><img src="https://avatars.githubusercontent.com/u/4148404?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paul Heidenreich</b></sub></a><br /><a href="https://github.com/ehmicky/fast-cartesian/commits?author=Paulomart" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
