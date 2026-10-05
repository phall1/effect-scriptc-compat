// Generated from node_modules/effect/dist/Crypto.d.ts, example 1.
// SHA-256: 17a63f37bcac12f159dc6540ca0721ff8ae79553ce7cffee6eebcf0216bf41a6
const __compatObserved: unknown[] = []
import * as Crypto from "effect/Crypto"
import { Effect, Layer } from "effect"

const TestCrypto = Layer.succeed(
  Crypto.Crypto,
  Crypto.make({
    randomBytes: (size) => new Uint8Array(size),
    digest: (_algorithm, data) => Effect.succeed(data)
  })
)

const program = Effect.gen(function*() {
  const crypto = yield* Crypto.Crypto
  const bytes = yield* crypto.randomBytes(16)
  const uuidv4 = yield* crypto.randomUUIDv4
  const hash = yield* crypto.digest("SHA-256", bytes)
  return [bytes.length, uuidv4.length, hash.length]
})

__compatObserved.push(await Effect.runPromise(Effect.provide(program, TestCrypto)))
console.log(JSON.stringify(__compatObserved))
