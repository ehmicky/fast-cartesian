import testCartesian from '../src/main.js'

import { printResults } from './print.js'
import { getArray } from './array.js'

// Retrieve several arguments for cartesian products:
//  - the return value length is always `size`
//  - the number of dimensions and size of each array differ
// For example `size: 3` returns:
///  [[0, 1, 2, 3]] (1 dimension)
//   [[0, 1], [0, 1]] (2 dimensions)
//   [[0], [0], [0], [0]] (4 dimensions)
const getArgs = function(size) {
  return getArray(size).map((value, index) => getArg(index, size))
}

const getArg = function(index, size) {
  const dimensions = 2 ** index
  const unitLength = 2 ** (2 ** (size - index - 1))
  const title = `${dimensions} dimensions`
  const unit = getArray(unitLength)
  const argsA = getArray(dimensions).map(() => unit)
  return [{ title, args: argsA }]
}

const allArgs = getArgs(5)

printResults(
  [
    {
      name: 'test-cartesian',
      func: ({ args }) => testCartesian(...args),
      args: allArgs,
    },
  ],
  {
    count: 1e2,
  },
)
