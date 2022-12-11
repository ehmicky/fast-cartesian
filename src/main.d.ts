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
export default function fastCartesian<
  InputArrays extends readonly (readonly unknown[])[],
>(
  factors: readonly [...InputArrays],
): InputArrays extends readonly []
  ? []
  : {
      [index in keyof InputArrays]: InputArrays[index] extends readonly (infer InputElement)[]
        ? InputElement
        : never
    }[]
