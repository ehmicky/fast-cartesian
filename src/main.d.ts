export default function fastCartesian<TFactors extends any[][]>(
  factors: [...TFactors],
): TFactors extends []
  ? []
  : {
      [TFactor in keyof TFactors]: TFactors[TFactor] extends Array<
        infer TUnArrayed
      >
        ? TUnArrayed
        : never
    }[]
