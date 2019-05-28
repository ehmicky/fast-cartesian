export const getOptions = function(opts) {
  return { ...DEFAULT_OPTS, ...opts }
}

const DEFAULT_OPTS = {
  count: 1e3,
}
