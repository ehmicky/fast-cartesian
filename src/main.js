// Does a cartesian product on several arrays.
// Returns an array with the results.
export const cartesianArray = function(...arrays) {
  if (arrays.length === 0) {
    return []
  }

  arrays.forEach(validateArray)

  const loopFunc = getLoopFunc(arrays.length, false)
  const result = []
  loopFunc(arrays, result)
  return result
}

// Does a cartesian product on several arrays.
// Returns an iterable.
// Slower but requires much less memory.
export const cartesianIterate = function*(...arrays) {
  if (arrays.length === 0) {
    return
  }

  arrays.forEach(validateArray)

  const loopFunc = getLoopFunc(arrays.length, true)
  yield* loopFunc(arrays)
}

const validateArray = function(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Argument must be an array: ${array}`)
  }
}

const getLoopFunc = function(length, iterable) {
  const cachedLoopFunc = cache[iterable][length]

  if (cachedLoopFunc !== undefined) {
    return cachedLoopFunc
  }

  const loopFunc = mGetLoopFunc(length, iterable)
  // eslint-disable-next-line fp/no-mutation
  cache[iterable][length] = loopFunc
  return loopFunc
}

const cache = { false: {}, true: {} }

// Create a function with `new Function()` that does:
//   function(arrays, results) {
//     for (const value0 of arrays[0]) {
//       for (const value1 of arrays[1]) {
//         // and so on
//         results.push([value0, value1])
//       }
//     }
//   }
// If `iterable`, use `yield` instead.
const mGetLoopFunc = function(length, iterable) {
  const indexes = Array.from({ length }, getIndex)
  const repeatA = repeat.bind(null, indexes)

  const start = repeatA(
    index => `for (const value${index} of arrays[${index}]) {`,
  )
  const middle = repeatA(index => `value${index}`, ', ')
  const end = repeatA(() => '}')

  if (iterable) {
    return new GeneratorFunction('arrays', `${start} yield [${middle}] ${end}`)
  }

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

// Like `Function` but for generators
const GeneratorFunction = cartesianIterate.constructor
