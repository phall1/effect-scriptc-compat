// Generated from node_modules/effect/dist/Utils.d.ts, example 0.
// SHA-256: 4967105ca66bed313305fec1010aa4a8ebdd9d76343526303d02bede8c0bc6c2
const __compatObserved: unknown[] = []
import * as Utils from "effect/Utils"

const gen = new Utils.SingleShotGen<string, number>("hello")

__compatObserved.push(gen.next(0).value)

__compatObserved.push(gen.next(42).value)
console.log(JSON.stringify(__compatObserved))
