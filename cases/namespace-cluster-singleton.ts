// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Layer } from "effect";
import * as M from "effect/cluster/Singleton";
import { TestRunner, Sharding } from "effect/cluster";
const result = await Effect.runPromise(Effect.scoped(Effect.gen(function* () {
 const sharding = yield* Sharding.Sharding;
 const registrations: Array<string> = [];
 const spy: Sharding.Sharding["Service"] = { ...sharding, registerSingleton: (name, _run, options) => Effect.sync(() => { registrations.push(name + ":" + options?.shardGroup); }) };
 yield* Layer.build(M.make("fixture", Effect.void, { shardGroup: "default" })).pipe(Effect.provideService(Sharding.Sharding, spy));
 return registrations;
})).pipe(Effect.provide(TestRunner.layer)));
console.log(JSON.stringify(result));
