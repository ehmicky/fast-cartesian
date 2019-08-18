// Does a cartesian product on several arrays.
// Returns an array with the results.
// Optimized for speed.
export const cartesianArray = function(...arrays) {
  if (arrays.length === 0) {
    return []
  }

  arrays.forEach(validateArray)

  const loopFunc = getLoopFunc(arrays.length)
  const result = []
  loopFunc(arrays, result)
  return result
}

const validateArray = function(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Argument must be an array: ${array}`)
  }
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
