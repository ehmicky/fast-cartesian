export const reportResults = function(results) {
  results.forEach(reportResult)
}

const reportResult = function({ title, duration: { average } }) {
  // eslint-disable-next-line no-console, no-restricted-globals
  console.log(`${title}: ${Math.round(MICROSECS_IN_SECS / average)} ops/sec`)
}

const MICROSECS_IN_SECS = 1e6
