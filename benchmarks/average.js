// Calculate the average of an array of integers
export const average = function(array) {
  return sum(array) / array.length
}

const sum = function(array) {
  return array.reduce(add, 0)
}

const add = function(memo, number) {
  return memo + number
}
