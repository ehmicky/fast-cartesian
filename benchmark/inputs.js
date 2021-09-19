// Retrieve matrixes with different dimensions used as input variations
const getInputs = function () {
  return Object.fromEntries(VARIATIONS_PROPS.map(getInput))
}

const getInput = function ({ id, firstLength, secondLength }) {
  const subArray = Array.from({ length: secondLength }, getIndex)
  const matrix = Array.from({ length: firstLength }, () => subArray)
  return [id, matrix]
}

const getIndex = function (_, index) {
  return index
}

const VARIATIONS_PROPS = [
  { id: '1x65536', firstLength: 1, secondLength: 65_536 },
  { id: '2x256', firstLength: 2, secondLength: 256 },
  { id: '4x16', firstLength: 4, secondLength: 16 },
  { id: '8x4', firstLength: 8, secondLength: 4 },
  { id: '16x2', firstLength: 16, secondLength: 2 },
]

export const INPUTS = getInputs()
