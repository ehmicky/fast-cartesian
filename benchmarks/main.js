import testCartesian from '../src/main.js'

const getIndex = function(value, index) {
  return index
}

const getArray = function(length) {
  return new Array({ length }, getIndex)
}

const DATA = [
  [getArray(5)],
  [getArray(10), getArray(10)],
]

console.log(testCartesian(DATA[1]))
