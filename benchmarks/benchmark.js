import { getResults } from './results.js'
import { reportResults } from './report.js'

export const benchmark = function(tasks, { count }) {
  const results = getResults(tasks, { count })
  reportResults(results)
}
