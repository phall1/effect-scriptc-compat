// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as Redactable from "effect/Redactable"
const value = { [Redactable.symbolRedactable]: () => "redacted-value" }
console.log(Redactable.redact(value))
