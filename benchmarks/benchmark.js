import { getOptions } from './options.js'
import { getResults } from './results.js'
import { reportResults } from './report.js'

export const benchmark = function(tasks, options) {
  const optionsA = getOptions(options)
  const results = getResults({ tasks, options: optionsA })
  reportResults(results)
}
