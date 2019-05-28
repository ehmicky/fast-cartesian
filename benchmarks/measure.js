import { performance } from 'perf_hooks'

// Measure how long a function takes to execute
export const measure = function(func) {
  const start = performance.now()
  func()
  const end = performance.now()
  const duration = end - start
  return duration
}
