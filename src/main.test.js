import test from 'ava'
import fastCartesian from 'fast-cartesian'
import { format } from 'pretty-format'

const getTitle = function (args) {
  return format(args, { min: true })
}

const ARGS = [
  { input: [], output: [] },
  { input: [[]], output: [] },
  { input: [[], []], output: [] },
  { input: [[0]], output: [[0]] },
  { input: [[0], [1]], output: [[0, 1]] },
  { input: [[0, 1]], output: [[0], [1]] },
  {
    input: [[0, 1], [2]],
    output: [
      [0, 2],
      [1, 2],
    ],
  },
  {
    input: [
      [0, 1],
      [2, 3],
    ],
    output: [
      [0, 2],
      [0, 3],
      [1, 2],
      [1, 3],
    ],
  },
  {
    input: [
      [0, 1, 2],
      [3, 2],
    ],
    output: [
      [0, 3],
      [0, 2],
      [1, 3],
      [1, 2],
      [2, 3],
      [2, 2],
    ],
  },
  { input: [[[0]]], output: [[[0]]] },
  { input: [[0, undefined, 1]], output: [[0], [undefined], [1]] },
]
ARGS.forEach(({ input, output }) => {
  test(`success | ${getTitle(input)}`, (t) => {
    t.deepEqual(fastCartesian(input), output)
  })
})

const INVALID_ARGS = [
  true,
  [undefined],
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
