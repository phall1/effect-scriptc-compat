// Generated from node_modules/effect/dist/SchemaTransformation.d.ts, example 0.
// SHA-256: 0e2e587187e77f8179510ea91d4f1b4b4ff36065acf04064432e341d5cea5b4a
const __compatObserved: unknown[] = []
import * as SchemaTransformation from "effect/SchemaTransformation"
import { Effect, Option, SchemaIssue } from "effect"

const fallback = new SchemaTransformation.Middleware<string, string, never, never, never, never>(
  (effect) => Effect.catch(effect, () => Effect.succeed(Option.some("fallback"))),
  (effect) => effect
)
const issue = new SchemaIssue.InvalidValue({ message: "Missing value" })
__compatObserved.push(await Effect.runPromise(fallback.decode(Effect.fail(issue), {})))
console.log(JSON.stringify(__compatObserved))
