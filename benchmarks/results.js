import { getArray } from './array.js'
import { measure } from './measure.js'
import { average } from './average.js'

export const getResults = function(tasks, { count }) {
  const countA = getArray(count)
  return Object.entries(tasks).flatMap(([name, { func, variants }]) =>
    getResult({ name, func, variants, count: countA }),
  )
}

const getResult = function({ name, func, variants, count }) {
  if (variants === undefined) {
    return getArgResult({ name, func, count })
  }

  return Object.entries(variants).map(([variantTitle, args]) =>
    getArgResult({ name, func, args, variantTitle, count }),
  )
}

const getArgResult = function({ name, func, args = [], variantTitle, count }) {
  const title = variantTitle === undefined ? name : `${name} (${variantTitle})`

  const funcA = func.bind(null, ...args)
  const durations = count.map(() => measure(funcA))
  const duration = average(durations)
  return { title, duration, durations, count }
}
