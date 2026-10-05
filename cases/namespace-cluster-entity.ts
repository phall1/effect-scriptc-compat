// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/cluster/Entity";
import { Rpc } from "effect/rpc";
const entity = M.make("Counter", [Rpc.make("Get", { success: Schema.Number })]);
console.log(JSON.stringify([M.isEntity(entity), entity.type, Array.from(entity.protocol.requests.keys())]));
