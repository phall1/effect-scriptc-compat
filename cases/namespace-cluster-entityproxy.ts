// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/cluster/EntityProxy";
import { Entity } from "effect/cluster";
import { Rpc } from "effect/rpc";
const entity = Entity.make("Counter", [Rpc.make("Get", { success: Schema.Number })]);
const rpcs = M.toRpcGroup(entity);
const http = M.toHttpApiGroup("counters", entity);
console.log(JSON.stringify([Array.from(rpcs.requests.keys()), http.identifier, Object.keys(http.endpoints)]));
