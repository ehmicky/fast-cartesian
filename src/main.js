import { validateInput } from './validate.js'

// Does a cartesian product on several arrays.
// Returns an array with the results.
// Optimized to be the fastest implementation in JavaScript.
const fastCartesian = (arrays) => {
  validateInput(arrays)

  if (arrays.length === 0) {
    return []
  }

  const loopFunc = getLoopFunc(arrays.length)
  const result = []
  loopFunc(arrays, result)
  return result
}

export default fastCartesian

const getLoopFunc = (length) => {
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
//   (arrays, results) => {
//     for (const value0 of arrays[0]) {
//       for (const value1 of arrays[1]) {
//         // and so on
//         results.push([value0, value1])
//       }
//     }
//   }
const mGetLoopFunc = (length) => {
  const indexes = Array.from({ length }, getIndex)
  const start = indexes
    .map((index) => `for (const value${index} of arrays[${index}]) {`)
    .join('\n')
  const middle = indexes.map((index) => `value${index}`).join(', ')
  const end = '}\n'.repeat(length)

  // eslint-disable-next-line no-new-func
  return new Function(
    'arrays',
    'result',
    `${start}\nresult.push([${middle}])\n${end}`,
  )
}

const getIndex = (value, index) => String(index)
