# 7.0.0

## Breaking changes

- Minimal supported Node.js version is now `14.18.0`

# 6.1.0

## Features

- Improve TypeScript types.

# 6.0.1

## Bug fixes

- Fix `main` field in `package.json`

# 6.0.0

## Breaking changes

- Minimal supported Node.js version is now `12.20.0`
- This package is now an ES module. It can only be loaded with an `import` or
  `import()` statement, not `require()`. See
  [this post for more information](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

# 5.1.0

## Features

- Add TypeScript types. Thanks @MarcelGerber!

# 5.0.0

## Breaking changes

- Minimal supported Node.js version is now `10.17.0`

# 4.1.0

## Dependencies

- Remove `core-js` dependency. This library now has 0 production dependencies.

# 4.0.0

## Breaking changes

- The `iterate()` method has been moved to a separate module
  [`big-cartesian`](https://github.com/ehmicky/big-cartesian).
- The `array()` method is now the default export instead of a named export.

# 3.0.0

## Breaking changes

- Rename `cartesianArray()` and `cartesianIterate()` to `array()` and
  `iterate()`
- An array of arguments must now be used instead of variadic arguments.
  `array(...args)` is now `array(args)` and `iterate(...args)` is now
  `iterate(args)`.

## Features

- `iterate()` can now handle an infinite number of combinations
- Each dimension passed to `iterate()` can now be not only an array but also a
  [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators).

# 2.0.3

## Performance

- Improve performance

# 2.0.2

## Performance

- Improve performance

# 2.0.1

## Performance

- Improve performance

# 2.0.0

## Breaking changes

- Use named exports instead of a default export.

## Features

- Add
  [`cartesianIterate()`](https://github.com/ehmicky/fast-cartesian#cartesianiterateinputs)
