export const getOptions = function(options) {
  return { ...DEFAULT_OPTIONS, ...options }
}

const DEFAULT_OPTIONS = {
  repeat: 1e3,
}
