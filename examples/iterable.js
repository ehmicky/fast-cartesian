// Demo of using iterables.
// This file can be directly run:
//   - first install `fast-cartesian`
//   - then `node node_modules/fast-cartesian/examples/iterable.js`
// An online demo is also available at:
//   https://repl.it/@ehmicky/fast-cartesian

'use strict'

// Ignore the following line: this is only needed for internal purposes.
require('./utils.js')

const fastCartesian = require('fast-cartesian')

// Works with any iterable: arrays, generators, strings, maps, sets, etc.
const generator = function*() {
  yield 'Jan'
  yield 'Feb'
}

// Prints:
// [
//   [ '01', 'Jan', '1980' ],
//   [ '01', 'Jan', '2019' ],
//   [ '01', 'Feb', '1980' ],
//   [ '01', 'Feb', '2019' ],
//   [ '04', 'Jan', '1980' ],
//   [ '04', 'Jan', '2019' ],
//   [ '04', 'Feb', '1980' ],
//   [ '04', 'Feb', '2019' ],
// ]
console.log(fastCartesian(['01', '04'], generator(), ['1980', '2019']))
