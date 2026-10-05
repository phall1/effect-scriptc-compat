// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/cluster/ShardId";
const shard = M.fromString("fixture:7");
console.log(JSON.stringify([M.isShardId(shard), M.toString(shard), M.fromStringEncoded("fixture:7")]));
