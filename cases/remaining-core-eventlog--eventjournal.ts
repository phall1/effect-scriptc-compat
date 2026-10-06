// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as EventJournal from "effect/eventlog/EventJournal"
import { Effect, Schema } from "effect"
const id = Schema.decodeUnknownSync(EventJournal.EntryId)(new Uint8Array([0,0,0,0,0,1,112,0,128,0,0,0,0,0,0,1]))
const remoteId = Schema.decodeUnknownSync(EventJournal.RemoteId)(new Uint8Array(16))
const entry = new EventJournal.Entry({id, event: "Added", primaryKey: "one", payload: new Uint8Array([1,2])})
const remote = new EventJournal.RemoteEntry({remoteSequence: 0, entry})
const program = Effect.gen(function*() {
  const journal = yield* EventJournal.makeMemory
  let handled = 0
  const first = yield* journal.writeFromRemote({remoteId, entries: [remote], effect: () => Effect.sync(() => {handled++})})
  const duplicate = yield* journal.writeFromRemote({remoteId, entries: [remote], effect: () => Effect.sync(() => {handled++})})
  const entries = yield* journal.entries
  return [entries.map(entry => [entry.event, entry.primaryKey, Array.from(entry.payload), entry.createdAtMillis]), first.duplicateEntries.length, duplicate.duplicateEntries.length, handled, yield* journal.nextRemoteSequence(remoteId)]
})
console.log(JSON.stringify(Effect.runSync(program)))
