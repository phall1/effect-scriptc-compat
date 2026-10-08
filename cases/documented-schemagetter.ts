// Generated from node_modules/effect/dist/SchemaGetter.d.ts, example 0.
// SHA-256: dedef255f63b545d5ed0e363a42f1624f25ac5d487bd94a80f168781df106343
const __compatObserved: unknown[] = []
import * as SchemaGetter from "effect/SchemaGetter"
import { Effect, Option } from "effect"

const parseNumber = SchemaGetter.transform<number, string>((s) => Number(s))
const double = SchemaGetter.transform<number, number>((n) => n * 2)
const composed = SchemaGetter.compose(parseNumber, double)
__compatObserved.push(Effect.runSync(SchemaGetter.run(composed, Option.some("21"), {})))
console.log(JSON.stringify(__compatObserved))
