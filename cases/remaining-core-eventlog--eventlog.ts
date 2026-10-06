// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as EventLog from "effect/eventlog/EventLog"
import * as EventGroup from "effect/eventlog/EventGroup"
import { Redacted, Schema } from "effect"
const group = EventGroup.empty.add({tag: "Added", payload: Schema.Struct({id: Schema.String}), primaryKey: payload => payload.id})
const schema = EventLog.schema(group)
const identity = {publicKey: "fixture-public", privateKey: Redacted.make(new Uint8Array([1,2,3,4]))}
const encoded = EventLog.encodeIdentityString(identity)
const decoded = EventLog.decodeIdentityString(encoded)
console.log(JSON.stringify([EventLog.isEventLogSchema(schema), schema.groups.length, decoded.publicKey, Array.from(Redacted.value(decoded.privateKey)), EventLog.encodeIdentityString(decoded) === encoded]))
