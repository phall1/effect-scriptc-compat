// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as RpcMiddleware from "effect/rpc/RpcMiddleware"
import { Rpc, RpcGroup, RpcTest } from "effect/rpc"
import { Effect, Layer, Schema } from "effect"
class Audit extends RpcMiddleware.Service<Audit>()("FixtureAudit") {}
const rpc = Rpc.make("double", {payload: {value: Schema.Number}, success: Schema.Number}).middleware(Audit)
const group = RpcGroup.make(rpc)
const events: string[] = []
const middleware = Layer.succeed(Audit, (effect, options) => Effect.tap(effect, () => Effect.sync(() => { events.push(options.rpc._tag) })))
const program = Effect.scoped(Effect.gen(function*() {
  const client = yield* RpcTest.makeClient(group)
  const result = yield* client.double({value: 21})
  return [result, events]
})).pipe(Effect.provide(group.toLayer({double: ({value}) => Effect.succeed(value * 2)})), Effect.provide(middleware), Effect.withTracerEnabled(false))
console.log(JSON.stringify(await Effect.runPromise(program)))
