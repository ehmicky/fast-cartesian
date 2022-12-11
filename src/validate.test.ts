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
    [() => ({})],
    [() => null],
    [() => ({ next: true })],
  ],
  ({ title }, input) => {
    test(`should throw | ${title}`, (t) => {
      t.throws(fastCartesian.bind(undefined, input as never))
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

const getBigArray = (length: number, size: number) =>
  Array.from({ length }, () => Array.from({ length: size }, getTrue))

const getTrue = () => true
