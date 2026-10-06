// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as EventLogServerEncrypted from "effect/eventlog/EventLogServerEncrypted"
import * as EventJournal from "effect/eventlog/EventJournal"
import { Schema } from "effect"
const id = Schema.decodeUnknownSync(EventJournal.EntryId)(new Uint8Array([0,0,0,0,0,1,112,0,128,0,0,0,0,0,0,1]))
const entry = new EventLogServerEncrypted.PersistedEntry({entryId: id, iv: new Uint8Array([1,2,3]), encryptedEntry: new Uint8Array([4,5,6])})
const decoded = Schema.decodeUnknownSync(EventLogServerEncrypted.PersistedEntry)(Schema.encodeSync(EventLogServerEncrypted.PersistedEntry)(entry))
console.log(JSON.stringify([decoded.entryIdString, Array.from(decoded.iv), Array.from(decoded.encryptedEntry)]))
