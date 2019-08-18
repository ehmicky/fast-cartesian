import test from 'ava'
import prettyFormat from 'pretty-format'
import isCi from 'is-ci'

import { array, iterate } from '../src/main.js'

const METHODS = [
  { name: 'array', cartesian: array },
  {
    name: 'iterate',
    cartesian(args) {
      return [...iterate(args)]
    },
  },
]
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

const getGenerators = function(args) {
  return args.map(arg => {
    return function* getArray() {
      yield* arg
    }
  })
}

METHODS.forEach(({ name, cartesian }) => {
  ARGS.forEach(args => {
    const title = prettyFormat(args, { min: true })
    // eslint-disable-next-line max-nested-callbacks
    test(`${name} | ${title}`, t => {
      t.snapshot(cartesian(args))
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
  INVALID_ARGS.forEach(args => {
    const title = prettyFormat(args, { min: true })
    test(`${name} | should throw: ${title}`, t => {
      t.throws(cartesian.bind(null, args))
    })
  })
})

ARGS.forEach(args => {
  const title = prettyFormat(args, { min: true })
  test(`iterate | should work with generators | ${title}`, t => {
    const generators = getGenerators(args)
    const generatorsResult = [...iterate(generators)]
    const arraysResult = [...iterate(args)]
    t.deepEqual(generatorsResult, arraysResult)
  })
})

const getBigArray = function(length, size) {
  return Array.from({ length }, () => Array.from({ length: size }, getTrue))
}

const getTrue = function() {
  return true
}

const HIGH_COMBINATIONS = [
  { length: 100, size: 1 },
  { length: 32, size: 2 },
  { length: 99, size: 1300 },
]
HIGH_COMBINATIONS.forEach(({ length, size }) => {
  test(`array | should throw on high number of combinations | ${length}x${size}`, t => {
    const args = getBigArray(length, size)
    t.throws(array.bind(null, args))
  })
})

// This test is very slow, so it is run only in CI
if (isCi) {
  test('iterate | should not crash when combinations are huge', t => {
    const args = Array.from({ length: 25 }, () => [0, 1])

    // eslint-disable-next-line fp/no-loops, no-empty, no-empty-pattern
    for (const [] of iterate(args)) {
    }

    t.pass()
  })
}
