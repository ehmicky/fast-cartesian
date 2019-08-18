// Demo of `iterate()`.
// This file can be directly run:
//   - first install `fast-cartesian`
//   - then `node node_modules/fast-cartesian/examples/iterate.js`
// An online demo is also available at:
//   https://repl.it/@ehmicky/fast-cartesian

'use strict'

// Ignore the following line: this is only needed for internal purposes.
require('./utils.js')

const { iterate } = require('fast-cartesian')

// Iterate over combinations
// eslint-disable-next-line fp/no-loops
for (const values of iterate(['red', 'blue'], ['circle', 'square'])) {
  console.log(values)
}
// [ 'red', 'circle' ]
// [ 'red', 'square' ]
// [ 'blue', 'circle' ]
// [ 'blue', 'square' ]
