import test from 'ava'
import fastCartesian from 'fast-cartesian'
import prettyFormat from 'pretty-format'

const getTitle = function (args) {
  return prettyFormat(args, { min: true })
}

const ARGS = [
  [],
  [[]],
  [[], []],
  [[0]],
  [[0], [1]],
  [[0, 1]],
  [[0, 1], [2]],
  [
    [0, 1],
    [2, 3],
  ],
  [
    [0, 1, 2],
    [3, 2],
  ],
  [[[0]]],
  [[0, undefined, 1]],
]
ARGS.forEach((args) => {
  test(`success | ${getTitle(args)}`, (t) => {
    t.snapshot(fastCartesian(args))
  })
})

const INVALID_ARGS = [
  true,
  [undefined],
  // eslint-disable-next-line unicorn/no-null
  [null],
  [[], true],
  [() => true],
  [
    function getObject() {
      return {}
    },
  ],
  [
    function getNull() {
      // eslint-disable-next-line unicorn/no-null
      return null
    },
  ],
  [
    function getInvalidIterator() {
      return { next: true }
    },
  ],
]
INVALID_ARGS.forEach((args) => {
  test(`should throw | ${getTitle(args)}`, (t) => {
    t.throws(fastCartesian.bind(undefined, args))
  })
})

const COMBINATIONS = [
  { length: 100, size: 1 },
  { length: 32, size: 2 },
  { length: 99, size: 1300 },
]
COMBINATIONS.forEach((combination) => {
  test(`should throw on high number of combinations | ${getTitle(
    combination,
  )}`, (t) => {
    const args = getBigArray(combination)
    t.throws(fastCartesian.bind(undefined, args))
  })
})

const getBigArray = function ({ length, size }) {
  return Array.from({ length }, () => Array.from({ length: size }, getTrue))
}

const getTrue = function () {
  return true
}
