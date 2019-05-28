// Does a cartesian product on several iterables.
// Works with any iterable, including arrays, strings, generators, maps, sets.
// eslint-disable-next-line import/unambiguous
const fastCartesian = function(...iterables) {
  if (iterables.length === 0) {
    return []
  }

  iterables.forEach(validateIterable)

  const arrays = iterables.map(arrify)

  const result = []
  iterate(arrays, result, [], 0)
  return result
}

const validateIterable = function(iterable) {
  if (
    iterable === undefined ||
    iterable === null ||
    iterable[Symbol.iterator] === undefined
  ) {
    throw new TypeError(`Argument must be iterable: ${iterable}`)
  }
}

// Some iterables are stateful, e.g. generators. We need to iterate them first.
const arrify = function(iterable) {
  if (Array.isArray(iterable)) {
    return iterable
  }

  return [...iterable]
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
