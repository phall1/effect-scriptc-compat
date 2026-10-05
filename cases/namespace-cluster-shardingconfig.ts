// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/cluster/ShardingConfig";
const groups = M.shardGroupConfig(M.defaults);
console.log(JSON.stringify([Array.from(groups.available).sort(), Array.from(groups.assigned).sort(), M.defaults.simulateRemoteSerialization]));
