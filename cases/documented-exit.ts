// Generated from node_modules/effect/dist/Exit.d.ts, example 3.
// SHA-256: 0a122ebc42d759904c0868b873882288a02b1fef9b481d2a9d8f39199000b71a
const __compatObserved: unknown[] = []
import * as Exit from "effect/Exit"

__compatObserved.push(Exit.isExit(Exit.succeed(42)))
__compatObserved.push(Exit.isExit(Exit.fail("err")))
__compatObserved.push(Exit.isExit("not an exit"))
console.log(JSON.stringify(__compatObserved))
