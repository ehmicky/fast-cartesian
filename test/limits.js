import test from 'ava'
import isCi from 'is-ci'

import { array, iterate } from '../src/main.js'

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

const getBigArray = function(length, size) {
  return Array.from({ length }, () => Array.from({ length: size }, getTrue))
}

const getTrue = function() {
  return true
}
