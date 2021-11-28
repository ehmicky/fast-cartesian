import fastCartesian from 'fast-cartesian'
import { expectType, expectError } from 'tsd'

expectType<[string | boolean, number][]>(
  fastCartesian([
    [true, 'a'],
    [1, 2],
  ]),
)
expectType<[]>(fastCartesian([]))
expectType<[never][]>(fastCartesian([[]]))
expectType<[never, string][]>(fastCartesian([[], ['a']]))

expectError(fastCartesian(true, 'a'))
expectError(fastCartesian([[true, 'a'], 1]))
expectError(fastCartesian([true, 'a'], [1, 2]))
