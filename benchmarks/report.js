export const reportResults = function(results) {
  results.forEach(reportResult)
}

const reportResult = function({ title, duration }) {
  // eslint-disable-next-line no-console, no-restricted-globals
  console.log(`${title}: ${Math.round(duration * MICROSECS_TO_NANOSECS)}ns`)
}

const MICROSECS_TO_NANOSECS = 1e3
