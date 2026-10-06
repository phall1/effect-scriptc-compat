// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Cron, Effect, Layer } from "effect";
import * as M from "effect/cluster/ClusterCron";
import { TestRunner, Sharding } from "effect/cluster";
const result = await Effect.runPromise(Effect.scoped(Effect.gen(function* () {
 const sharding = yield* Sharding.Sharding;
 const registrations: Array<string> = [];
 const spy: Sharding.Sharding["Service"] = { ...sharding,
  registerEntity: entity => Effect.sync(() => { registrations.push("entity:" + entity.type); }),
  registerSingleton: name => Effect.sync(() => { registrations.push("singleton:" + name); })
 };
 yield* Layer.build(M.make({ name: "fixture", cron: Cron.parseUnsafe("0 0 * * *", "UTC"), execute: Effect.void })).pipe(Effect.provideService(Sharding.Sharding, spy));
 return registrations.sort();
})).pipe(Effect.provide(TestRunner.layer)));
console.log(JSON.stringify(result));
