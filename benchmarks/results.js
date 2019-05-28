import { getArray } from './array.js'
import { getTitles } from './format.js'
import { measure } from './measure.js'
import { average } from './average.js'

export const getResults = function(funcs, { count }) {
  const countA = getArray(count)
  return funcs.flatMap(({ name, func, args: allArgs = [[]] }) =>
    getResult({ name, func, allArgs, count: countA }),
  )
}

const getResult = function({ name, func, allArgs, count }) {
  return allArgs.map(args => getArgResult({ name, func, args, count }))
}

const getArgResult = function({ name, func, args, count }) {
  const argsTitle = getTitles(args)
  const title = `${name} with ${argsTitle}`

  const funcA = func.bind(null, ...args)
  const durations = count.map(() => measure(funcA))
  const duration = average(durations)
  return { title, duration, durations, count }
}
