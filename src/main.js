// Does a cartesian product on several arrays.
// eslint-disable-next-line import/unambiguous
const fastCartesian = function(...arrays) {
  if (arrays.length === 0) {
    return []
  }

  arrays.forEach(validateArray)

  const result = []
  iterate(arrays, result, [], 0)
  return result
}

const validateArray = function(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Argument must be an array: ${array}`)
  }
}

// We use imperative code as it faster than functional code because it does not
// create extra arrays. We try re-use and mutate arrays as much as possible.
// We need to make sure callers parameters are not mutated though.
/* eslint-disable max-params, fp/no-loops, fp/no-mutating-methods */
const iterate = function(arrays, result, values, index) {
  if (index === arrays.length) {
    result.push(values.slice())
    return
  }

  for (const value of arrays[index]) {
    values.push(value)
    iterate(arrays, result, values, index + 1)
    values.pop()
  }
}
/* eslint-enable max-params, fp/no-loops, fp/no-mutating-methods */

// We do not use `export default` because Babel transpiles it in a way that
// requires CommonJS users to `require(...).default` instead of `require(...)`.
module.exports = fastCartesian
