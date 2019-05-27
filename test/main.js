import test from 'ava'
import prettyFormat from 'pretty-format'

import fastCartesian from '../src/main.js'

import { stringifyErrors } from './helpers/error.js'

const eFastCartesian = stringifyErrors(fastCartesian)

const generator = function*() {
  yield 0
  yield 1
}

;[
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
  ['abc'],
  [new Map([[{}, 0], [{}, 1]])],
  [new Set([0, 1])],
  [generator()],
].forEach(args => {
  const title = prettyFormat(args, { min: true })
  test(title, t => {
    t.snapshot(eFastCartesian(...args))
  })
})
