[![Node](https://img.shields.io/badge/-Node.js-808080?logo=node.js&colorA=404040&logoColor=66cc33)](https://www.npmjs.com/package/fast-cartesian)
[![Browsers](https://img.shields.io/badge/-Browsers-808080?logo=firefox&colorA=404040)](https://unpkg.com/fast-cartesian?module)
[![TypeScript](https://img.shields.io/badge/-Typed-808080?logo=typescript&colorA=404040&logoColor=0096ff)](/src/main.ts)
[![Codecov](https://img.shields.io/badge/-Tested%20100%25-808080?logo=codecov&colorA=404040)](https://codecov.io/gh/ehmicky/fast-cartesian)
[![Minified size](https://img.shields.io/bundlephobia/minzip/fast-cartesian?label&colorA=404040&colorB=808080&logo=webpack)](https://bundlephobia.com/package/fast-cartesian)
[![Mastodon](https://img.shields.io/badge/-Mastodon-808080.svg?logo=mastodon&colorA=404040&logoColor=9590F9)](https://fosstodon.org/@ehmicky)
[![Medium](https://img.shields.io/badge/-Medium-808080.svg?logo=medium&colorA=404040)](https://medium.com/@ehmicky)

Fast cartesian product.

Retrieves every possible combination between several arrays
([cartesian product](https://en.wikipedia.org/wiki/Cartesian_product)).

[Fastest](#benchmarks) available library in JavaScript.

When producing millions of combinations or combining hundreds of arrays,
[`big-cartesian`](https://github.com/ehmicky/big-cartesian) should be used
instead.

# Hire me

Please
[reach out](https://www.linkedin.com/feed/update/urn:li:activity:7018596298127781890/)
if you're looking for a Node.js API or CLI engineer (10 years of experience).
Most recently I have been [Netlify Build](https://github.com/netlify/build)'s
and [Netlify Plugins](https://www.netlify.com/products/build/plugins/)'
technical lead for 2.5 years. I am available for full-time remote positions in
either US or EU time zones.

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
[browsers](https://raw.githubusercontent.com/ehmicky/dev-tasks/main/src/browserslist).

This is an ES module. It must be loaded using
[an `import` or `import()` statement](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c),
not `require()`. If TypeScript is used, it must be configured to
[output ES modules](https://www.typescriptlang.org/docs/handbook/esm-node.html),
not CommonJS.

# API

## fastCartesian(inputs)

`inputs`: `Array<Array>`\
_Return value_: `Array<Array>`

Returns a two-dimensional `Array` where each row is a combination of `inputs`.

# Benchmarks

The following [benchmarks](benchmark/tasks.js) compare the performance of this
library against alternatives
([`big-cartesian`](https://github.com/ehmicky/big-cartesian),
[`cx-product`](https://github.com/anywhichway/cxproduct),
[`cartesian-product`](https://github.com/izaakschroeder/cartesian-product),
[`fast-cartesian-product`](https://github.com/fisker/fast-cartesian-product),
[`power-cartesian-product`](https://github.com/fisker/power-cartesian-product),
[`cartesian`](https://github.com/alexindigo/cartesian) and
[`lodash.product`](https://github.com/SeregPie/lodash.product)).

```
## fast-cartesian ######################
1 array                           1.22ms
2 arrays                          1.82ms
4 arrays                          3.12ms
8 arrays                          1.87ms
16 arrays                         4.82ms

## cxproduct ###########################
1 array                           1.91ms
2 arrays                          3.47ms
4 arrays                          3.62ms
8 arrays                          2.39ms
16 arrays                         5.05ms

## cartesian-product ###################
1 array                           4.61ms
2 arrays                          2.92ms
4 arrays                         11.80ms
8 arrays                         14.78ms
16 arrays                        21.00ms

## big-cartesian #######################
1 array                           7.21ms
2 arrays                          6.68ms
4 arrays                          8.53ms
8 arrays                          7.80ms
16 arrays                        18.30ms

## power-cartesian-product #############
1 array                           6.84ms
2 arrays                          8.54ms
4 arrays                         12.35ms
8 arrays                         11.78ms
16 arrays                        18.98ms

## cartesian ###########################
1 array                           3.44ms
2 arrays                         11.12ms
4 arrays                         13.27ms
8 arrays                         16.11ms
16 arrays                        22.90ms

## fast-cartesian-product ##############
1 array                          23.04ms
2 arrays                         24.11ms
4 arrays                         30.46ms
8 arrays                         45.65ms
16 arrays                        65.12ms

## lodash.product ######################
1 array                          36.51ms
2 arrays                         37.89ms
4 arrays                         41.71ms
8 arrays                         52.72ms
16 arrays                        80.84ms
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
    <td align="center"><a href="https://fosstodon.org/@ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/fast-cartesian/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/fast-cartesian/commits?author=ehmicky" title="Documentation">📖</a></td>
    <td align="center"><a href="https://marcelgerber.de"><img src="https://avatars0.githubusercontent.com/u/2641501?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marcel Gerber</b></sub></a><br /><a href="https://github.com/ehmicky/fast-cartesian/commits?author=MarcelGerber" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Paulomart"><img src="https://avatars.githubusercontent.com/u/4148404?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paul Heidenreich</b></sub></a><br /><a href="https://github.com/ehmicky/fast-cartesian/commits?author=Paulomart" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
