// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as RpcClient from "effect/rpc/RpcClient"
import * as RpcServer from "effect/rpc/RpcServer"
import { Rpc, RpcGroup } from "effect/rpc"
import { Effect, Schema } from "effect"
const rpc = Rpc.make("double", {payload: {value: Schema.Number}, success: Schema.Number, error: Schema.String})
const group = RpcGroup.make(rpc)
const handlers = group.toLayer({double: ({value}) => value < 0 ? Effect.fail("negative") : Effect.succeed(value * 2)})
const program = Effect.scoped(Effect.gen(function*() {
  const server: RpcServer.RpcServer<typeof rpc> = yield* RpcServer.makeNoSerialization(group, {disableTracing: true, onFromServer: response => client.write(response)})
  const client = yield* RpcClient.makeNoSerialization(group, {disableTracing: true, onFromClient: ({message}) => server.write(0, message)})
  const result = yield* client.client.double({value: 21})
  const failed = yield* client.client.double({value: -1}).pipe(Effect.catch(error => Effect.succeed(error)))
  yield* server.disconnect(0)
  return [result, failed]
})).pipe(Effect.provide(handlers))
console.log(JSON.stringify(await Effect.runPromise(program)))
