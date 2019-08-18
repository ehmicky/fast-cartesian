// Does a cartesian product on several arrays.
// Returns an iterable.
// Slower than `array()` but:
//  - requires much less memory
//  - can handle an infinite number of combinations (`returnValue.length`)
//  - can handle infinitely large inputs (`inputs[index].length`)
//  - can handle 4e9 dimensions (`inputs.length`).
//    This is the maximum size of an array in JavaScript.
export const iterate = function*(inputs) {
  if (!Array.isArray(inputs)) {
    throwValidation()
  }

  if (inputs.length === 0) {
    return
  }

  const generators = inputs.map(getGenerator)
  const iterators = generators.map(getIterator)
  const results = iterators.map(getInitialValue)

  if (hasEmptyIterators(results)) {
    return
  }

  const result = results.map(getValue)

  // eslint-disable-next-line fp/no-loops
  do {
    yield result.slice()
  } while (!getResult(generators, iterators, result))
}

const getGenerator = function(input) {
  if (Array.isArray(input)) {
    return function* getArray() {
      yield* input
    }
  }

  if (typeof input !== 'function') {
    throwValidation()
  }

  return input
}

const getIterator = function(generator) {
  const iterator = generator()

  if (!isIterator(iterator)) {
    throwValidation()
  }

  return iterator
}

const throwValidation = function() {
  throw new TypeError('Argument must be an array of arrays or generators')
}

const isIterator = function(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.next === 'function'
  )
}

const getInitialValue = function(iterator) {
  return iterator.next()
}

const hasEmptyIterators = function(results) {
  return results.some(isEmptyIterator)
}

const isEmptyIterator = function({ done }) {
  return done
}

const getValue = function({ value }) {
  return value
}

// We use imperative code for performance purpose, which is why those ESLint
// rules are disabled.
/* eslint-disable fp/no-let, fp/no-mutation, no-param-reassign, max-depth,
no-plusplus, fp/no-loops, max-statements, complexity */
const getResult = function(generators, iterators, result) {
  let reset = false
  let index = iterators.length - 1

  do {
    const iterator = iterators[index]

    const { done, value } = iterator.next()

    result[index] = value

    if (reset) {
      reset = false
      index--

      if (index === -1) {
        return true
      }
    } else if (done) {
      reset = true
      iterators[index] = generators[index]()
    } else {
      break
    }
  } while (true)
}
/* eslint-enable fp/no-let, fp/no-mutation, no-param-reassign, max-depth,
no-plusplus, fp/no-loops, max-statements, complexity */
