// Generated from node_modules/effect/dist/observability/OtlpExporter.d.ts, example 0.
// SHA-256: 9166b8915aa5e2da3ab98a9e553eb8b9e76efc38bef47ff1b07f8cd52a05d824
const __compatObserved: unknown[] = []
import { Effect } from "effect"
import * as OtlpExporter from "effect/observability/OtlpExporter"

const program = Effect.gen(function*() {
  const flusher = yield* OtlpExporter.Flusher
  yield* flusher.flush
  return "flushed"
}).pipe(Effect.provide(OtlpExporter.layerFlusher))

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
