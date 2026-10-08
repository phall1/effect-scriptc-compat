// Generated from node_modules/effect/dist/Config.d.ts, example 0.
// SHA-256: ff6b879355580345429d17389eb9e334698aa830d26c20b8e1e0ef93023d89ec
const __compatObserved: unknown[] = []
import * as Config from "effect/Config"

__compatObserved.push(Config.isConfig(Config.String("HOST")))
__compatObserved.push(Config.isConfig("not a config"))
console.log(JSON.stringify(__compatObserved))
