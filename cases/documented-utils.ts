// Generated from node_modules/effect/dist/Utils.d.ts, example 0.
// SHA-256: a25598d47e74a63b2bac539ef9258d640856eac0e49be34f4c27e916c350cfed
const __compatObserved: unknown[] = []
import * as Utils from "effect/Utils"

const gen = new Utils.SingleShotGen<string, number>("hello")

__compatObserved.push(gen.next(0).value)

__compatObserved.push(gen.next(42).value)
console.log(JSON.stringify(__compatObserved))
