// Generated from node_modules/effect/dist/Option.d.ts, example 3.
// SHA-256: 8316bb522f845a47ca6de18ec0423395199c6448e1243e810d196b7449839cbd
const __compatObserved: unknown[] = []
import * as Option from "effect/Option"

__compatObserved.push(Option.isOption(Option.some(1)))
__compatObserved.push(Option.isOption(Option.none()))
__compatObserved.push(Option.isOption({}))
console.log(JSON.stringify(__compatObserved))
