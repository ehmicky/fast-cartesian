// Does a cartesian product on several arrays.
// Returns an array with the results.
export const cartesianArray = function(...arrays) {
  if (arrays.length === 0) {
    return []
  }

  arrays.forEach(validateArray)

  const result = []
  recurse(arrays, result, [], 0)
  return result
}

// We use imperative code as it faster than functional code because it does not
// create extra arrays. We try re-using and mutating arrays as much as possible.
// We need to make sure callers parameters are not mutated though.
/* eslint-disable max-params, max-depth, fp/no-loops, fp/no-mutating-methods */
const recurse = function(arrays, result, values, index) {
  for (const value of arrays[index]) {
    values.push(value)

    if (index === arrays.length - 1) {
      result.push(values.slice())
    } else {
      recurse(arrays, result, values, index + 1)
    }

    values.pop()
  }
}
/* eslint-enable max-params, max-depth, fp/no-loops, fp/no-mutating-methods */

// Does a cartesian product on several arrays.
// Returns an iterable.
// Slower but requires much less memory.
export const cartesianIterate = function*(...arrays) {
  if (arrays.length === 0) {
    return
  }

  arrays.forEach(validateArray)

  yield* iterate(arrays, [], 0)
}

/* eslint-disable max-depth, fp/no-loops, fp/no-mutating-methods */
const iterate = function*(arrays, values, index) {
  for (const value of arrays[index]) {
    values.push(value)

    if (index === arrays.length - 1) {
      yield values.slice()
    } else {
      yield* iterate(arrays, values, index + 1)
    }

    values.pop()
  }
}
/* eslint-enable max-depth, fp/no-loops, fp/no-mutating-methods */

const validateArray = function(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Argument must be an array: ${array}`)
  }
}
