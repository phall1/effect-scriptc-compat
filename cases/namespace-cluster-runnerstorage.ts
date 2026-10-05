// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/cluster/RunnerStorage";
import { Runner, RunnerAddress, ShardId } from "effect/cluster";
const result = Effect.runSync(Effect.gen(function* () {
 const store = yield* M.makeMemory;
 const address = RunnerAddress.make("fixture.invalid", 9000);
 yield* store.register(Runner.make({ address, groups: ["default"], weight: 1 }), true);
 const acquired = yield* store.acquire(address, [ShardId.make("default", 1)]);
 const runners = yield* store.getRunners;
 yield* store.unregister(address);
 return [runners.length, runners[0][1], acquired.map(ShardId.toString), (yield* store.getRunners).length];
}));
console.log(JSON.stringify(result));
