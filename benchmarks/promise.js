// Like `promise.then()` except if `value` is not a promise
export const promiseThen = function(value, func) {
  if (isPromise(value)) {
    // eslint-disable-next-line promise/prefer-await-to-then
    return value.then(func)
  }

  return func()
}

const isPromise = function(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    // eslint-disable-next-line promise/prefer-await-to-then
    typeof value.then === 'function'
  )
}
