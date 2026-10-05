// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as RpcWorker from "effect/rpc/RpcWorker"
import { Effect, Schema } from "effect"
const program = RpcWorker.makeInitialMessage(Schema.Struct({worker: Schema.String, count: Schema.Number}), Effect.succeed({worker: "fixture", count: 2}))
console.log(JSON.stringify(Effect.runSync(program)))
