import { getArray } from './array.js'
import { measure } from './measure.js'
import { average } from './average.js'

export const getResults = function(tasks, { count }) {
  const countA = getArray(count)
  return Object.entries(tasks).flatMap(([name, { main, variants }]) =>
    getResult({ name, main, variants, count: countA }),
  )
}

const getResult = function({ name, main, variants, count }) {
  if (variants === undefined) {
    return getArgResult({ name, main, count })
  }

  return Object.entries(variants).map(([variantTitle, args]) =>
    getArgResult({ name, main, args, variantTitle, count }),
  )
}

const getArgResult = function({ name, main, args = [], variantTitle, count }) {
  const title = variantTitle === undefined ? name : `${name} (${variantTitle})`

  const mainA = main.bind(null, ...args)
  const durations = count.map(() => measure(mainA))
  const duration = average(durations)
  return { title, duration, durations, count }
}
