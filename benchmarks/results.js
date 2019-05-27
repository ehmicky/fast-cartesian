import { getArray } from './array.js'
import { measure } from './measure.js'
import { mean } from './mean.js'

export const getResults = function(variants, funcs, { count }) {
  const countA = getArray(count)
  return variants.flatMap(({ variant, args }) =>
    getVariantResult({ variant, args, funcs, count: countA }),
  )
}

const getVariantResult = function({ variant, args, funcs, count }) {
  return funcs.map(({ name, func }) =>
    getResult({ variant, args, name, func, count }),
  )
}

const getResult = function({ variant, args, name, func, count }) {
  const funcA = func.bind(null, ...args)
  const durations = count.map(() => measure(funcA))
  const duration = mean(durations)
  return { variant, name, duration, durations, count }
}
