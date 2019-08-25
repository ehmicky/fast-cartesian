// Demo of `fast-cartesian`.
// This file can be directly run:
//   - first install `fast-cartesian`
//   - then `node node_modules/fast-cartesian/examples/main.js`
// An online demo is also available at:
//   https://repl.it/@ehmicky/fast-cartesian

'use strict'

// Ignore the following line: this is only needed for internal purposes.
require('./utils.js')

const fastCartesian = require('fast-cartesian')

console.log(fastCartesian([['red', 'blue'], ['circle', 'square']]))
// [
//   [ 'red', 'circle' ],
//   [ 'red', 'square' ],
//   [ 'blue', 'circle' ],
//   [ 'blue', 'square' ]
// ]

// Returning initial indexes
console.log(
  fastCartesian([
    Object.entries(['red', 'blue']),
    Object.entries(['circle', 'square']),
  ]),
)
// [
//   [ [ '0', 'red' ], [ '0', 'circle' ] ],
//   [ [ '0', 'red' ], [ '1', 'square' ] ],
//   [ [ '1', 'blue' ], [ '0', 'circle' ] ],
//   [ [ '1', 'blue' ], [ '1', 'square' ] ]
// ]
