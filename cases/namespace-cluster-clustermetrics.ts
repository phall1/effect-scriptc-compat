// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Metric } from "effect";
import * as M from "effect/cluster/ClusterMetrics";
const result = Effect.runSync(Effect.gen(function* () {
 yield* Metric.update(M.entities, 3n);
 yield* Metric.update(M.shards, 7n);
 return [String((yield* Metric.value(M.entities)).value), String((yield* Metric.value(M.shards)).value)];
}));
console.log(JSON.stringify(result));
