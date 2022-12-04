import { expectType } from 'tsd'

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

// @ts-expect-error
fastCartesian(true)
// @ts-expect-error
fastCartesian([], 'a')
// @ts-expect-error
fastCartesian([[true, 'a'], 1])
// @ts-expect-error
fastCartesian([true, 'a'], [1, 2])
