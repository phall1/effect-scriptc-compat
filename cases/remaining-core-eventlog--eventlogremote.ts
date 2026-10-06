// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as EventLogRemote from "effect/eventlog/EventLogRemote"
import * as EventLog from "effect/eventlog/EventLog"
import * as EventJournal from "effect/eventlog/EventJournal"
import { EventLogRemoteRpcs, HelloResponse } from "effect/eventlog/EventLogMessage"
import { layerAuthMiddleware } from "effect/eventlog/EventLogServer"
import { RpcTest } from "effect/rpc"
import { Effect, Schema, Stream } from "effect"
const remoteId = Schema.decodeUnknownSync(EventJournal.RemoteId)(new Uint8Array(16))
const handlers = EventLogRemoteRpcs.toLayer({
  "EventLog.Hello": () => Effect.succeed(new HelloResponse({remoteId, challenge: new Uint8Array([1,2,3])})),
  "EventLog.Authenticate": () => Effect.void,
  "EventLog.WriteSingle": () => Effect.void,
  "EventLog.WriteChunked": () => Effect.void,
  "EventLog.Changes": () => Stream.empty
})
const program = Effect.scoped(Effect.gen(function*() {
  const client = yield* RpcTest.makeClient(EventLogRemoteRpcs)
  const remote = yield* EventLogRemote.makeUnencrypted.pipe(Effect.provideService(EventLogRemote.EventLogRemoteClient, client))
  return Array.from(remote.id)
})).pipe(Effect.provide(handlers), Effect.provide(layerAuthMiddleware), Effect.provide(EventLog.layerRegistry), Effect.withTracerEnabled(false))
console.log(JSON.stringify(await Effect.runPromise(program)))
