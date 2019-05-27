import testCartesian from '../src/main.js'

import { printResults } from './print.js'
import { getArray } from './array.js'

printResults(
  [
    { variant: 'simple', args: [getArray(5)] },
    { variant: 'complex', args: [getArray(100), getArray(100)] },
  ],
  [{ name: 'test-cartesian', func: testCartesian }],
  { count: 1e4 },
)
