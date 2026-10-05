// In-memory public RpcTest transport drives a real AtomRpc query to its terminal value.
import * as AtomRpc from "effect/reactivity/AtomRpc"
import { AtomRegistry } from "effect/reactivity"
import { Effect, Schema } from "effect"
import { Rpc, RpcGroup, RpcTest } from "effect/rpc"
const group = RpcGroup.make(Rpc.make("double", {payload: {value: Schema.Number}, success: Schema.Number}))
class Client extends AtomRpc.Service<Client>()("FixtureAtomRpc", {
  group,
  protocol: group.toLayer({double: ({value}) => Effect.succeed(value * 2)}),
  makeEffect: RpcTest.makeClient(group, {flatten: true}).pipe(Effect.withTracerEnabled(false)),
  disableTracing: true
}) {}
const registry = AtomRegistry.make()
const query = Client.query("double", {value: 21})
try {
  console.log(JSON.stringify(await Effect.runPromise(AtomRegistry.getResult(registry, query))))
} finally {
  registry.dispose()
}
