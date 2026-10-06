// Generated from node_modules/effect/dist/Redacted.d.ts, example 0.
// SHA-256: 62241100d9b71070bb626e7880f32343580534fb692a8647cac5b2b6eb188b23
const __compatObserved: unknown[] = []
import * as Redacted from "effect/Redacted"

// Create a redacted value to protect sensitive information
const apiKey = Redacted.make("secret-key")
const userPassword = Redacted.make("user-password")

// TypeScript will infer the types as Redacted<string>
__compatObserved.push(Array.of(String(apiKey), String(userPassword)))
console.log(JSON.stringify(__compatObserved))
