// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/cluster/RunnerHealth";
import { RunnerAddress } from "effect/cluster";
const result = Effect.runSync(Effect.gen(function* () {
 const health = yield* M.RunnerHealth;
 return yield* health.isAlive(RunnerAddress.make("fixture.invalid", 9000));
}).pipe(Effect.provide(M.layerNoop)));
console.log(JSON.stringify(result));
