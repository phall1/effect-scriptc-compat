// Generated from node_modules/effect/dist/cli/Param.d.ts, example 0.
// SHA-256: 70432f379a97867c36bc3854310f01d3a4d7e7e6cd33cec83789ed450e90516f
const __compatObserved: unknown[] = []
import * as Param from "effect/cli/Param"

const maybeParam = Param.String(Param.flagKind, "name")

__compatObserved.push(Param.isParam(maybeParam))
console.log(JSON.stringify(__compatObserved))
