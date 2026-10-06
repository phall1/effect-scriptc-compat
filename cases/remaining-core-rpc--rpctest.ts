// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as RpcTest from "effect/rpc/RpcTest"
import { Rpc, RpcGroup } from "effect/rpc"
import { Effect, Schema, Stream } from "effect"
const group = RpcGroup.make(Rpc.make("values", {success: Schema.Number, stream: true}))
const program = Effect.scoped(Effect.gen(function*() {
  const client = yield* RpcTest.makeClient(group)
  return yield* Stream.runCollect(client.values())
})).pipe(Effect.provide(group.toLayer({values: () => Stream.make(1, 2, 3)})), Effect.withTracerEnabled(false))
console.log(JSON.stringify(await Effect.runPromise(program)))
