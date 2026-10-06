// Generated from node_modules/effect/dist/Config.d.ts, example 0.
// SHA-256: a2c0d99071453dcae6ac7593b3b59a7aec8c7048a06abd779786d7c539edff59
const __compatObserved: unknown[] = []
import * as Config from "effect/Config"

__compatObserved.push(Config.isConfig(Config.String("HOST")))
__compatObserved.push(Config.isConfig("not a config"))
console.log(JSON.stringify(__compatObserved))
