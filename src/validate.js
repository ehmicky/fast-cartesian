// Validate 'array()' input
export const validateInput = (arrays) => {
  if (!Array.isArray(arrays)) {
    throw new TypeError('Argument must be an array of arrays')
  }

  arrays.forEach(validateArray)
  validateDimensions(arrays)
  validateCombinations(arrays)
}

const validateArray = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError(`Argument must be an array: ${array}`)
  }
}

// Maximum number of nested `for` loops. In my machine, it's 604 but it is
// engine-specific so we use a safe number. Above the limit, a max call stack
// error is thrown by the engine.
const validateDimensions = ({ length }) => {
  if (length >= MAX_DIMENSIONS) {
    throw new TypeError(
      `Too many arrays (${length}): please use the 'big-cartesian' library instead of 'fast-cartesian'`,
    )
  }
}

const MAX_DIMENSIONS = 1e2

// Max array size in JavaScript. This is the limit of the final return value.
const validateCombinations = (arrays) => {
  const size = arrays.reduce(multiplySize, 1)

  if (size >= MAX_SIZE) {
    const sizeStr = Number.isFinite(size) ? ` (${size.toExponential(0)})` : ''
    throw new TypeError(
      `Too many combinations${sizeStr}: please use the 'big-cartesian' library instead of 'fast-cartesian'`,
    )
  }
}

const multiplySize = (size, array) => size * array.length

// eslint-disable-next-line no-magic-numbers
const MAX_SIZE = 2 ** 32
