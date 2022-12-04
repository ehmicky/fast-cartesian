import test from 'ava'
import { each } from 'test-each'

import fastCartesian from 'fast-cartesian'

each(
  [
    { input: [], output: [] },
    { input: [[]], output: [] },
    { input: [[], []], output: [] },
    { input: [[0]], output: [[0]] },
    { input: [[0], [1]], output: [[0, 1]] },
    { input: [[0, 1]], output: [[0], [1]] },
    {
      input: [[0, 1], [2]],
      output: [
        [0, 2],
        [1, 2],
      ],
    },
    {
      input: [
        [0, 1],
        [2, 3],
      ],
      output: [
        [0, 2],
        [0, 3],
        [1, 2],
        [1, 3],
      ],
    },
    {
      input: [
        [0, 1, 2],
        [3, 2],
      ],
      output: [
        [0, 3],
        [0, 2],
        [1, 3],
        [1, 2],
        [2, 3],
        [2, 2],
      ],
    },
    { input: [[[0]]], output: [[[0]]] },
    { input: [[0, undefined, 1]], output: [[0], [undefined], [1]] },
  ],
  ({ title }, { input, output }) => {
    test(`success | ${title}`, (t) => {
      t.deepEqual(fastCartesian(input), output)
    })
  },
)
