// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as RpcClientError from "effect/rpc/RpcClientError"
import { Effect, Schema } from "effect"
const reason = new RpcClientError.RpcClientDefect({message: "bad response", cause: "invalid"})
const error = new RpcClientError.RpcClientError({reason})
const result = Effect.fail(error).pipe(Effect.catch(error => Effect.succeed([error._tag, error.reason._tag, error.message, Schema.is(RpcClientError.RpcClientError)(error)])))
console.log(JSON.stringify(Effect.runSync(result)))
