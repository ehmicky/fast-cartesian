import { validateInputs, type Inputs } from './validate.js'

/**
 * Returns a two-dimensional `Array` where each row is a combination of
 * `inputs`.
 *
 * @example
 * ```js
 * console.log(
 *   fastCartesian([
 *     ['red', 'blue'],
 *     ['circle', 'square'],
 *   ]),
 * )
 * // [
 * //   [ 'red', 'circle' ],
 * //   [ 'red', 'square' ],
 * //   [ 'blue', 'circle' ],
 * //   [ 'blue', 'square' ]
 * // ]
 *
 * // Return initial indexes
 * console.log(
 *   fastCartesian(
 *     [
 *       ['red', 'blue'],
 *       ['circle', 'square'],
 *     ].map(Object.entries),
 *   ),
 * )
 * // [
 * //   [ [ '0', 'red' ], [ '0', 'circle' ] ],
 * //   [ [ '0', 'red' ], [ '1', 'square' ] ],
 * //   [ [ '1', 'blue' ], [ '0', 'circle' ] ],
 * //   [ [ '1', 'blue' ], [ '1', 'square' ] ]
 * // ]
 * ```
 */
const fastCartesian = <InputArrays extends Inputs>(
  inputs: readonly [...InputArrays],
) => {
  validateInputs(inputs)
  const result = [] as CartesianProduct<InputArrays>

  if (inputs.length === 0) {
    return result
  }

  const loopFunc = getLoopFunc(inputs.length)
  loopFunc(inputs, result)
  return result
}

export default fastCartesian

type CartesianProduct<InputArrays extends Inputs> =
  InputArrays extends readonly []
    ? []
    : {
        [index in keyof InputArrays]: InputArrays[index] extends readonly (infer InputElement)[]
          ? InputElement
          : never
      }[]

const getLoopFunc = (length: number) => {
  const cachedLoopFunc = cache[length]

  if (cachedLoopFunc !== undefined) {
    return cachedLoopFunc
  }

  const loopFunc = mGetLoopFunc(length)
  // eslint-disable-next-line fp/no-mutation
  cache[length] = loopFunc
  return loopFunc
}

const cache: { [key: number]: LoopFunction } = {}

// Create a function with `new Function()` that does:
//   (arrays, results) => {
//     for (const value0 of arrays[0]) {
//       for (const value1 of arrays[1]) {
//         // and so on
//         results.push([value0, value1])
//       }
//     }
//   }
const mGetLoopFunc = (length: number) => {
  const indexes = Array.from({ length }, getIndex)
  const start = indexes
    .map((index) => `for (const value${index} of arrays[${index}]) {`)
    .join('\n')
  const middle = indexes.map((index) => `value${index}`).join(', ')
  const end = '}\n'.repeat(length)

  // eslint-disable-next-line no-new-func, @typescript-eslint/no-implied-eval
  return new Function(
    'arrays',
    'result',
    `${start}\nresult.push([${middle}])\n${end}`,
  ) as LoopFunction
}

const getIndex = (value: undefined, index: number) => String(index)

type LoopFunction = (arrays: Inputs, result: unknown[]) => void
