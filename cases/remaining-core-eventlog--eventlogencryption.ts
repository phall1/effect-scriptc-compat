// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as EventLogEncryption from "effect/eventlog/EventLogEncryption"
import { Effect } from "effect"
const program = Effect.gen(function*() {
  const encryption = yield* EventLogEncryption.makeEncryptionSubtle(globalThis.crypto)
  return yield* encryption.sha256String(new Uint8Array([97,98,99]))
})
console.log(JSON.stringify(await Effect.runPromise(program)))
