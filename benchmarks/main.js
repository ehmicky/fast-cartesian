import cartesianProductFunc from 'cartesian-product'
import cartesianFunc from 'cartesian'
import lodash from 'lodash'
// eslint-disable-next-line import/no-unassigned-import
import 'lodash.product'
import FastCartesianProduct from 'fast-cartesian-product'

import { cartesianArray } from '../src/main.js'

import { getVariations } from './variations.js'

export const variations = getVariations(5)

export const fastCartesian = {
  title: 'fast-cartesian',
  main: args => cartesianArray(...args),
}

export const cartesianProduct = {
  title: 'cartesian-product',
  main: args => cartesianProductFunc(args),
}

export const fastCartesianProduct = {
  title: 'fast-cartesian-product',
  main: args => [...new FastCartesianProduct(args)],
}

export const cartesian = {
  title: 'cartesian',
  main: args => cartesianFunc(args),
}

export const lodashProduct = {
  title: 'lodash.product',
  main: args => lodash.product(...args),
}
