export const getArray = function(length) {
  return Array.from({ length }, getIndex)
}

const getIndex = function(value, index) {
  return index
}
