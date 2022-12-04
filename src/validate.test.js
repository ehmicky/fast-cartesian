import test from 'ava'
import { each } from 'test-each'

import fastCartesian from 'fast-cartesian'

each(
  [
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
  ],
  ({ title }, input) => {
    test(`should throw | ${title}`, (t) => {
      t.throws(fastCartesian.bind(undefined, input))
    })
  },
)

each(
  [
    { length: 100, size: 1 },
    { length: 32, size: 2 },
    { length: 99, size: 1300 },
  ],
  ({ title }, { length, size }) => {
    test(`should throw on high number of combinations | ${title}`, (t) => {
      const args = getBigArray(length, size)
      t.throws(fastCartesian.bind(undefined, args))
    })
  },
)

const getBigArray = function (length, size) {
  return Array.from({ length }, () => Array.from({ length: size }, getTrue))
}

const getTrue = function () {
  return true
}
