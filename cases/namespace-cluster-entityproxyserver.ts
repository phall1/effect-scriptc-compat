// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Layer, Schema } from "effect";
import * as M from "effect/cluster/EntityProxyServer";
import { Entity, TestRunner } from "effect/cluster";
import { Rpc } from "effect/rpc";
const entity = Entity.make("Fixture", [Rpc.make("Get", { success: Schema.Number })]);
const result = await Effect.runPromise(Effect.scoped(Effect.gen(function* () {
 const context = yield* Layer.build(M.layerRpcHandlers(entity));
 return Array.from(context.mapUnsafe.keys()).filter(key => key.startsWith("effect/rpc/Rpc/")).sort();
})).pipe(Effect.provide(TestRunner.layer)));
console.log(JSON.stringify(result));
