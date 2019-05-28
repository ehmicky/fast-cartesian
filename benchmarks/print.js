import { getResults } from './results.js'

export const printResults = function(funcs, { count }) {
  const results = getResults(funcs, { count })
  results.forEach(printResult)
}

const printResult = function({ variant, name, duration }) {
  // eslint-disable-next-line no-console, no-restricted-globals
  console.log(
    `${variant} ${name}: ${Math.round(duration * MICROSECS_TO_NANOSECS)}ns`,
  )
}

const MICROSECS_TO_NANOSECS = 1e3
