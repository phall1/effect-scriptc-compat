// Generated from node_modules/effect/dist/Option.d.ts, example 3.
// SHA-256: 84761f98c987b6f45080533ca816a36d9ebb3df419becf7d19f6b1fd6f3ab4e1
const __compatObserved: unknown[] = []
import * as Option from "effect/Option"

__compatObserved.push(Option.isOption(Option.some(1)))
__compatObserved.push(Option.isOption(Option.none()))
__compatObserved.push(Option.isOption({}))
console.log(JSON.stringify(__compatObserved))
