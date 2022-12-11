// Validate 'array()' inputs
export const validateInputs = (inputs: Inputs) => {
  if (!Array.isArray(inputs)) {
    throw new TypeError('Argument must be an array of arrays')
  }

  inputs.forEach(validateInput)
  validateDimensions(inputs)
  validateCombinations(inputs)
}

const validateInput = (input: Input) => {
  if (!Array.isArray(input)) {
    throw new TypeError(`Argument must be an array: ${input}`)
  }
}

// Maximum number of nested `for` loops. In my machine, it's 604 but it is
// engine-specific so we use a safe number. Above the limit, a max call stack
// error is thrown by the engine.
const validateDimensions = ({ length }: Inputs) => {
  if (length >= MAX_DIMENSIONS) {
    throw new TypeError(
      `Too many arrays (${length}): please use the 'big-cartesian' library instead of 'fast-cartesian'`,
    )
  }
}

const MAX_DIMENSIONS = 1e2

// Max array size in JavaScript. This is the limit of the final return value.
const validateCombinations = (inputs: Inputs) => {
  const size = inputs.reduce(multiplySize, 1)

  if (size >= MAX_SIZE) {
    const sizeStr = Number.isFinite(size) ? ` (${size.toExponential(0)})` : ''
    throw new TypeError(
      `Too many combinations${sizeStr}: please use the 'big-cartesian' library instead of 'fast-cartesian'`,
    )
  }
}

const multiplySize = (size: number, input: Input) => size * input.length

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const MAX_SIZE = 2 ** 32

export type Inputs = readonly Input[]
type Input = readonly unknown[]
