import test from 'ava'
import prettyFormat from 'pretty-format'

import { cartesianArray, cartesianIterate } from '../src/main.js'

const METHODS = [
  { name: 'array', cartesian: cartesianArray },
  {
    name: 'iterate',
    cartesian(...args) {
      return [...cartesianIterate(...args)]
    },
  },
]

METHODS.forEach(({ name, cartesian }) => {
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
  ARGS.forEach(args => {
    const title = prettyFormat(args, { min: true })
    // eslint-disable-next-line max-nested-callbacks
    test(`${name} ${title}`, t => {
      t.snapshot(cartesian(...args))
    })
  })

  const INVALID_ARGS = [[undefined], [null], [[], true]]
  INVALID_ARGS.forEach(args => {
    const title = prettyFormat(args, { min: true })
    // eslint-disable-next-line max-nested-callbacks
    test(`${name} ${title}`, t => {
      t.throws(cartesian.bind(null, ...args))
    })
  })
})
