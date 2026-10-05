// Generated from node_modules/effect/dist/SchemaGetter.d.ts, example 0.
// SHA-256: 0c26fe5f784810a82b41543f1b8d18c8a80b4327dead17f4dd5402b570bf5e1c
const __compatObserved: unknown[] = []
import * as SchemaGetter from "effect/SchemaGetter"
import { Effect, Option } from "effect"

const parseNumber = SchemaGetter.transform<number, string>((s) => Number(s))
const double = SchemaGetter.transform<number, number>((n) => n * 2)
const composed = SchemaGetter.compose(parseNumber, double)
__compatObserved.push(Effect.runSync(SchemaGetter.run(composed, Option.some("21"), {})))
console.log(JSON.stringify(__compatObserved))
