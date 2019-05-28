import { getArray } from './array.js'
import { measure } from './measure.js'
import { average } from './average.js'

export const getResults = function(tasks, { count }) {
  const countA = getArray(count)
  return Object.entries(tasks).flatMap(([id, { title = id, main, variants }]) =>
    getResult({ title, main, variants, count: countA }),
  )
}

const getResult = function({ title, main, variants, count }) {
  if (variants === undefined) {
    return getArgResult({ title, main, count })
  }

  return Object.entries(variants).map(([variantTitle, args]) =>
    getArgResult({ title, main, args, variantTitle, count }),
  )
}

const getArgResult = function({ title, main, args = [], variantTitle, count }) {
  const titleA =
    variantTitle === undefined ? title : `${title} (${variantTitle})`

  const mainA = main.bind(null, ...args)
  const durations = count.map(() => measure(mainA))
  const duration = average(durations)
  return { title: titleA, duration, durations, count }
}
