// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as EventLogServer from "effect/eventlog/EventLogServer"
import { EventLogAuthentication } from "effect/eventlog/EventLogMessage"
import { Rpc, RpcGroup, RpcTest } from "effect/rpc"
import { Effect, Schema } from "effect"
const group = RpcGroup.make(Rpc.make("protected", {success: Schema.Number}).middleware(EventLogAuthentication))
const program = Effect.scoped(Effect.gen(function*() {
  const client = yield* RpcTest.makeClient(group)
  return yield* client.protected().pipe(Effect.catch(error => Effect.succeed([error._tag, error.code, error.message])))
})).pipe(Effect.provide(group.toLayer({protected: () => Effect.succeed(42)})), Effect.provide(EventLogServer.layerAuthMiddleware), Effect.withTracerEnabled(false))
console.log(JSON.stringify(await Effect.runPromise(program)))
