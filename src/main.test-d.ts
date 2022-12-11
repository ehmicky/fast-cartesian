import { expectType } from 'tsd'

import fastCartesian from 'fast-cartesian'

const emptyArray = [] as const
const firstArray = [0, 1] as const
const secondArray = [2, 3] as const
const notArray = 0 as const

expectType<[0 | 1, 2 | 3][]>(fastCartesian([firstArray, secondArray] as const))
expectType<[]>(fastCartesian(emptyArray))
expectType<[never][]>(fastCartesian([emptyArray] as const))
expectType<[0 | 1, never][]>(fastCartesian([firstArray, emptyArray] as const))

// @ts-expect-error
fastCartesian(notArray)
// @ts-expect-error
fastCartesian(firstArray, notArray)
// @ts-expect-error
fastCartesian([firstArray, notArray])
// @ts-expect-error
fastCartesian(firstArray, secondArray)
