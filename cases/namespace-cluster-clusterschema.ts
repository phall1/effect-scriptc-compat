// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Context } from "effect";
import * as M from "effect/cluster/ClusterSchema";
const annotations = Context.make(M.Uninterruptible, "server");
console.log(JSON.stringify([M.isUninterruptibleForServer(annotations), M.isUninterruptibleForClient(annotations)]));
