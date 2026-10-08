// Generated from node_modules/effect/dist/SchemaTransformation.d.ts, example 0.
// SHA-256: 92524ff632eadcf9f885de43439c70e64aec665b56cd3d12c39f38f007ed9f3e
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
