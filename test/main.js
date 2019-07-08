import test from 'ava'
import prettyFormat from 'pretty-format'

import { cartesianArray, cartesianIterate } from '../src/main.js'

const ARGS = [
  [],
  [[]],
  [[], []],
  [undefined],
  [null],
  [[], true],
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

const METHODS = [cartesianArray, cartesianIterate]

METHODS.forEach(cartesian => {
  ARGS.forEach(args => {
    const title = prettyFormat(args, { min: true })
    // eslint-disable-next-line max-nested-callbacks
    test(`${cartesian.name} ${title}`, t => {
      try {
        t.snapshot([...cartesian(...args)])
      } catch (error) {
        t.snapshot(error)
      }
    })
  })
})
