// Generated from node_modules/effect/dist/Exit.d.ts, example 3.
// SHA-256: ea4ee2d5e533e8033279065e49d6cd2408574308840b34d8e737de6948c9b752
const __compatObserved: unknown[] = []
import * as Exit from "effect/Exit"

__compatObserved.push(Exit.isExit(Exit.succeed(42)))
__compatObserved.push(Exit.isExit(Exit.fail("err")))
__compatObserved.push(Exit.isExit("not an exit"))
console.log(JSON.stringify(__compatObserved))
