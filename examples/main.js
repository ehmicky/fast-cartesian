// Demo of `fast-cartesian`.
// This file can be directly run:
//   - first install `fast-cartesian`
//   - then `node node_modules/fast-cartesian/examples/main.js`
// An online demo is also available at:
//   https://repl.it/@ehmicky/fast-cartesian

// eslint-disable-next-line node/no-missing-import
import fastCartesian from 'fast-cartesian'

console.log(
  fastCartesian([
    ['red', 'blue'],
    ['circle', 'square'],
  ]),
)
// [
//   [ 'red', 'circle' ],
//   [ 'red', 'square' ],
//   [ 'blue', 'circle' ],
//   [ 'blue', 'square' ]
// ]

// Returning initial indexes
console.log(
  fastCartesian(
    [
      ['red', 'blue'],
      ['circle', 'square'],
    ].map(Object.entries),
  ),
)
// [
//   [ [ '0', 'red' ], [ '0', 'circle' ] ],
//   [ [ '0', 'red' ], [ '1', 'square' ] ],
//   [ [ '1', 'blue' ], [ '0', 'circle' ] ],
//   [ [ '1', 'blue' ], [ '1', 'square' ] ]
// ]
