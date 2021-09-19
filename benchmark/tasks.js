import bigCartesianLib from 'big-cartesian'
import cartesianLib from 'cartesian'
import cartesianProductLib from 'cartesian-product'
import fastCartesianLib from 'fast-cartesian'
import fastCartesianProductLib from 'fast-cartesian-product'
import lodash from 'lodash'
// eslint-disable-next-line import/no-unassigned-import
import 'lodash.product'
import PowerCartesianProduct from 'power-cartesian-product'

import { INPUTS } from './inputs.js'

export const fastCartesianMain = function ({ size }) {
  fastCartesianLib(INPUTS[size])
}

export const bigCartesian = function ({ size }) {
  // eslint-disable-next-line no-unused-expressions
  ;[...bigCartesianLib(INPUTS[size])]
}

export const fastCartesianProduct = function ({ size }) {
  fastCartesianProductLib(INPUTS[size])
}

export const cartesianProduct = function ({ size }) {
  cartesianProductLib(INPUTS[size])
}

export const powerCartesianProduct = function ({ size }) {
  // eslint-disable-next-line no-unused-expressions
  ;[...new PowerCartesianProduct(INPUTS[size])]
}

export const cartesian = function ({ size }) {
  cartesianLib(INPUTS[size])
}

export const lodashProduct = function ({ size }) {
  lodash.product(...INPUTS[size])
}
