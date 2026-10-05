// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/cluster/EntityResource";
import { Entity, EntityAddress, EntityId, EntityType, ShardId, TestRunner } from "effect/cluster";
const address = EntityAddress.make({ shardId: ShardId.make("default", 1), entityType: EntityType.make("Fixture"), entityId: EntityId.make("a") });
const result = await Effect.runPromise(Effect.scoped(Effect.gen(function* () {
 let acquired = 0;
 const resource = yield* M.make({ acquire: Effect.sync(() => ++acquired) });
 const first = yield* Effect.scoped(resource.get);
 const second = yield* Effect.scoped(resource.get);
 yield* resource.close;
 return [first, second, acquired];
})).pipe(Effect.provideService(Entity.CurrentAddress, address), Effect.provide(TestRunner.layer)));
console.log(JSON.stringify(result));
