import fastCartesian from '../src/main.js'

import { benchmark } from './benchmark.js'
import { variants } from './variants.js'

const testCartesian = { title: 'test-cartesian', main: fastCartesian, variants }

benchmark({ testCartesian }, { repeat: 1e2 })
