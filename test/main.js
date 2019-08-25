import test from 'ava'
import prettyFormat from 'pretty-format'

import fastCartesian from '../src/main.js'

const ARGS = [
  [],
  [[]],
  [[], []],
  [[0]],
  [[0], [1]],
  [[0, 1]],
  [[0, 1], [2]],
  [[0, 1], [2, 3]],
  [[0, 1, 2], [3, 2]],
  [[[0]]],
  [[0, undefined, 1]],
]

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

ARGS.forEach(args => {
  const title = prettyFormat(args, { min: true })
  test(`success | ${title}`, t => {
    t.snapshot(fastCartesian(args))
  })
})

INVALID_ARGS.forEach(args => {
  const title = prettyFormat(args, { min: true })
  test(`should throw | ${title}`, t => {
    t.throws(fastCartesian.bind(null, args))
  })
})

const COMBINATIONS = [
  { length: 100, size: 1 },
  { length: 32, size: 2 },
  { length: 99, size: 1300 },
]
COMBINATIONS.forEach(({ length, size }) => {
  test(`array | should throw on high number of combinations | ${length}x${size}`, t => {
    const args = getBigArray(length, size)
    t.throws(fastCartesian.bind(null, args))
  })
})

const getBigArray = function(length, size) {
  return Array.from({ length }, () => Array.from({ length: size }, getTrue))
}

const getTrue = function() {
  return true
}
