import fastCartesian from '../src/main.js'

import { benchmark } from './benchmark.js'
import { getArray } from './array.js'

// Retrieve several arguments for cartesian products:
//  - the return value length is always `size`
//  - the number of dimensions and size of each array differ
// For example `size: 3` returns:
///  [[0, 1, 2, 3]] (1 dimension)
//   [[0, 1], [0, 1]] (2 dimensions)
//   [[0], [0], [0], [0]] (4 dimensions)
const getVariants = function(size) {
  const variantsA = getArray(size).map((value, index) =>
    getVariant(index, size),
  )
  return Object.fromEntries(variantsA)
}

const getVariant = function(index, size) {
  const dimensions = 2 ** index
  const unitLength = 2 ** (2 ** (size - index - 1))
  const title = `${dimensions} dimensions`
  const unit = getArray(unitLength)
  const args = getArray(dimensions).map(() => unit)
  return [title, args]
}

const variants = getVariants(5)

benchmark(
  { testCartesian: { title: 'test-cartesian', main: fastCartesian, variants } },
  { repeat: 1e2 },
)
