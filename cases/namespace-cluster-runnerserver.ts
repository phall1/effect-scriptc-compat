// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Layer, Option, Queue } from "effect";
import * as M from "effect/cluster/RunnerServer";
import { TestRunner, Runners } from "effect/cluster";
import { Headers } from "effect/http";
import { Rpc, RpcMessage, RpcSerialization, RpcServer } from "effect/rpc";
const result = await Effect.runPromise(Effect.scoped(Effect.gen(function* () {
 const disconnects = yield* Queue.make<number>();
 const protocol = RpcServer.Protocol.of({ run: () => Effect.never, disconnects, send: () => Effect.void, end: () => Effect.void, clientIds: Effect.succeed(new Set<number>()), initialMessage: Effect.succeed(Option.none()), supportsAck: false, supportsTransferables: false, supportsSpanPropagation: false, supportsNotifications: false, codecFor: RpcSerialization.json.codecFor });
 const context = yield* Layer.build(M.layerHandlers).pipe(Effect.provideService(RpcServer.Protocol, protocol));
 const ping = yield* Runners.Rpcs.accessHandler("Ping").pipe(Effect.provideContext(context));
 yield* ping(undefined, { client: new Rpc.ServerClient(1), requestId: RpcMessage.RequestId(1), headers: Headers.empty });
 return Array.from(context.mapUnsafe.keys()).filter(key => key.startsWith("effect/rpc/Rpc/")).sort();
})).pipe(Effect.provide(TestRunner.layer)));
console.log(JSON.stringify(result));
