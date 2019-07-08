import test from 'ava'
import prettyFormat from 'pretty-format'

import { cartesianArray, cartesianIterate } from '../src/main.js'

const METHODS = [cartesianArray, cartesianIterate]

METHODS.forEach(cartesian => {
  const ARGS = [
    [],
    [[]],
    [[], []],
    [[0]],
    [[0], [1]],
    [[0, 1]],
    [[0, 1], [2]],
    [[0, 1], [2, 3]],
    // eslint-disable-next-line no-magic-numbers
    [[0, 1, 2], [3, 4]],
    [[[0]]],
    [[0, undefined, 1]],
  ]
  ARGS.forEach(args => {
    const title = prettyFormat(args, { min: true })
    // eslint-disable-next-line max-nested-callbacks
    test(`${cartesian.name} ${title}`, t => {
      t.snapshot([...cartesian(...args)])
    })
  })

  const INVALID_ARGS = [[undefined], [null], [[], true]]
  INVALID_ARGS.forEach(args => {
    const title = prettyFormat(args, { min: true })
    // eslint-disable-next-line max-nested-callbacks
    test(`${cartesian.name} ${title}`, t => {
      // eslint-disable-next-line max-nested-callbacks
      t.throws(() => [...cartesian(...args)])
    })
  })
})
