import { performance } from 'perf_hooks'

import { promiseThen } from './promise.js'

// Measure how long a sync or async function take to execute
export const measure = function(func) {
  const start = performance.now()
  return promiseThen(func(), () => {
    const end = performance.now()
    const duration = end - start
    return duration
  })
}
