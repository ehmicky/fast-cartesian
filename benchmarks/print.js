import { getResults } from './results.js'

export const printResults = function(funcs, { count }) {
  const results = getResults(funcs, { count })
  results.forEach(printResult)
}

const printResult = function({ title, duration }) {
  // eslint-disable-next-line no-console, no-restricted-globals
  console.log(`${title}: ${Math.round(duration * MICROSECS_TO_NANOSECS)}ns`)
}

const MICROSECS_TO_NANOSECS = 1e3
