import { getArray } from './array.js'
import { measure } from './measure.js'
import { getStats } from './stats.js'

export const getResults = function(tasks, { repeat }) {
  const loop = getArray(repeat)
  return Object.entries(tasks).flatMap(([id, { title = id, main, variants }]) =>
    getResult({ title, main, variants, loop }),
  )
}

const getResult = function({ title, main, variants, loop }) {
  if (variants === undefined) {
    return getArgResult({ title, main, loop })
  }

  return Object.entries(variants).map(([variantTitle, args]) =>
    getArgResult({ title, main, args, variantTitle, loop }),
  )
}

const getArgResult = function({ title, main, args, variantTitle, loop }) {
  const titleA =
    variantTitle === undefined ? title : `${title} (${variantTitle})`

  const mainA = args === undefined ? main : main.bind(null, ...args)
  const durations = loop.map(() => measure(mainA))
  const duration = getStats(durations)
  return { title: titleA, args, duration, count: loop.length }
}
