import { validateInput } from './validate.js'

// Does a cartesian product on several arrays.
// Returns an array with the results.
// Optimized to be the fastest implementation in JavaScript.
const fastCartesian = function(arrays) {
  validateInput(arrays)

  if (arrays.length === 0) {
    return []
  }

  const loopFunc = getLoopFunc(arrays.length)
  const result = []
  loopFunc(arrays, result)
  return result
}

const getLoopFunc = function(length) {
  const cachedLoopFunc = cache[length]

  if (cachedLoopFunc !== undefined) {
    return cachedLoopFunc
  }

  const loopFunc = mGetLoopFunc(length)
  // eslint-disable-next-line fp/no-mutation
  cache[length] = loopFunc
  return loopFunc
}

const cache = {}

// Create a function with `new Function()` that does:
//   function(arrays, results) {
//     for (const value0 of arrays[0]) {
//       for (const value1 of arrays[1]) {
//         // and so on
//         results.push([value0, value1])
//       }
//     }
//   }
const mGetLoopFunc = function(length) {
  const indexes = Array.from({ length }, getIndex)
  const repeatA = repeat.bind(null, indexes)

  const start = repeatA(
    index => `for (const value${index} of arrays[${index}]) {`,
  )
  const middle = repeatA(index => `value${index}`, ', ')
  const end = repeatA(() => '}')

  // eslint-disable-next-line no-new-func
  return new Function(
    'arrays',
    'result',
    `${start}\nresult.push([${middle}])\n${end}`,
  )
}

const getIndex = function(value, index) {
  return String(index)
}

const repeat = function(indexes, mapper, separator = '\n') {
  return indexes.map(mapper).join(separator)
}

// We do not use `export default` because Babel transpiles it in a way that
// requires CommonJS users to `require(...).default` instead of `require(...)`.
module.exports = fastCartesian
