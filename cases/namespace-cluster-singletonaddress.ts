// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Equal } from "effect";
import * as M from "effect/cluster/SingletonAddress";
import { ShardId } from "effect/cluster";
const one = new M.SingletonAddress({ name: "fixture", shardId: ShardId.make("default", 1) });
const two = new M.SingletonAddress({ name: "fixture", shardId: ShardId.make("default", 1) });
console.log(JSON.stringify([Equal.equals(one, two), one.name]));
