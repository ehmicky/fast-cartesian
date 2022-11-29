import { expectType, expectError } from 'tsd'

import fastCartesian from 'fast-cartesian'

expectType<[string | boolean, number][]>(
  fastCartesian([
    [true, 'a'],
    [1, 2],
  ]),
)
expectType<[]>(fastCartesian([]))
expectType<[never][]>(fastCartesian([[]]))
expectType<[never, string][]>(fastCartesian([[], ['a']]))

expectError(fastCartesian(true))
expectError(fastCartesian([], 'a'))
expectError(fastCartesian([[true, 'a'], 1]))
expectError(fastCartesian([true, 'a'], [1, 2]))
