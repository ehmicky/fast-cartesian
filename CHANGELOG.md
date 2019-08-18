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
