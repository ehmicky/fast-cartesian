import { getOptions } from './options.js'
import { getResults } from './results.js'
import { reportResults } from './report.js'

export const benchmark = function(tasks, opts) {
  const optsA = getOptions(opts)
  const results = getResults(tasks, optsA)
  reportResults(results)
}
