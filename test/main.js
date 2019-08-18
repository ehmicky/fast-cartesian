import test from 'ava'
import prettyFormat from 'pretty-format'

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

METHODS.forEach(({ name, cartesian }) => {
  ARGS.forEach(args => {
    const title = prettyFormat(args, { min: true })
    // eslint-disable-next-line max-nested-callbacks
    test(`${name} | ${title}`, t => {
      t.snapshot(cartesian(args))
    })
  })

  INVALID_ARGS.forEach(args => {
    const title = prettyFormat(args, { min: true })
    // eslint-disable-next-line max-nested-callbacks
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

const getGenerators = function(args) {
  return args.map(arg => {
    return function* getArray() {
      yield* arg
    }
  })
}
