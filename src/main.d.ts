declare const fastCartesian: <TFactors extends any[][]>(factors: [...TFactors]) => {
  [TFactor in keyof TFactors]: TFactors[TFactor] extends Array<infer TUnArrayed> ? TUnArrayed : never
}[]

export default fastCartesian
