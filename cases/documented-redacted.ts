// Generated from node_modules/effect/dist/Redacted.d.ts, example 0.
// SHA-256: 81d8ab5e28d5e39609cd2ce45a88bbc0e7b5cdb7558a99f2758719a62239d06b
const __compatObserved: unknown[] = []
import * as Redacted from "effect/Redacted"

// Create a redacted value to protect sensitive information
const apiKey = Redacted.make("secret-key")
const userPassword = Redacted.make("user-password")

// TypeScript will infer the types as Redacted<string>
__compatObserved.push(Array.of(String(apiKey), String(userPassword)))
console.log(JSON.stringify(__compatObserved))
