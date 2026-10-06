// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/cluster/TestRunner";
import { Sharding, EntityId, ShardId } from "effect/cluster";
const result = await Effect.runPromise(Effect.gen(function* () {
 const sharding = yield* Sharding.Sharding;
 return [ShardId.toString(sharding.getShardId(EntityId.make("fixture"), "default")), yield* sharding.activeEntityCount, yield* sharding.isShutdown];
}).pipe(Effect.provide(M.layer)));
console.log(JSON.stringify(result));
