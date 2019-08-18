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

const COMBINATIONS_ARRAY = [
  { length: 100, size: 1 },
  { length: 32, size: 2 },
  { length: 99, size: 1300 },
]
COMBINATIONS_ARRAY.forEach(({ length, size }) => {
  test(`array | should throw on high number of combinations | ${length}x${size}`, t => {
    const args = getBigArray(length, size)
    t.throws(array.bind(null, args))
  })
})

const COMBINATIONS_ITERATE = [
  { length: 100, size: 1 },
  // We should do 32x2, unfortunately that takes half an hour
  { length: 25, size: 2 },
]
COMBINATIONS_ITERATE.forEach(({ length, size }) => {
  // Those tests are very slow, so it is run only in CI
  if (isCi) {
    test(`iterate | should not throw on high number of combinations | ${length}x${size}`, t => {
      const args = getBigArray(length, size)

      // eslint-disable-next-line fp/no-loops, no-empty, no-empty-pattern
      for (const [] of iterate(args)) {
      }

      t.pass()
    })
  }
})
