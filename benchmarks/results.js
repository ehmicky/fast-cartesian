import { getArray } from './array.js'
import { measure } from './measure.js'
import { getStats } from './stats.js'

export const getResults = function({ tasks, options, options: { repeat } }) {
  const loop = getArray(repeat)
  return Object.entries(tasks).flatMap(([id, task]) =>
    getResult({ id, task, loop, options }),
  )
}

const getResult = function({
  id,
  task,
  task: { title = id, main, variants },
  loop,
  options,
}) {
  if (variants === undefined) {
    return getArgResult({ title, main, loop, options })
  }

  return Object.entries(variants).map(([variantTitle, args]) =>
    getArgResult({ title, main, args, variantTitle, loop, task, options }),
  )
}

const getArgResult = function({
  title,
  main,
  args,
  variantTitle,
  loop,
  task,
  options,
}) {
  const titleA =
    variantTitle === undefined ? title : `${title} (${variantTitle})`

  const mainA = args === undefined ? main : main.bind(null, ...args)
  const durations = loop.map(() => measure(mainA))
  const duration = getStats(durations)
  return { title: titleA, task, args, duration, options }
}
