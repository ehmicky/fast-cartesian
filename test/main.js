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
    test(`${name} | ${title}`, t => {
      t.snapshot(cartesian(args))
    })
  })

  const INVALID_ARGS = [true, [undefined], [null], [[], true]]
  INVALID_ARGS.forEach(args => {
    const title = prettyFormat(args, { min: true })
    // eslint-disable-next-line max-nested-callbacks
    test(`${name} | should throw: ${title}`, t => {
      t.throws(cartesian.bind(null, args))
    })
  })
})

test('array | should throw on high number of combinations', t => {
  const args = Array.from({ length: 100 }, () => [0])
  t.throws(() => array(args))
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
