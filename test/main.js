import test from 'ava'
import prettyFormat from 'pretty-format'

import fastCartesian from '../src/main.js'

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

ARGS.forEach(args => {
  const title = prettyFormat(args, { min: true })
  test(title, t => {
    try {
      t.snapshot(fastCartesian(...args))
    } catch (error) {
      t.snapshot(error)
    }
  })
})
