// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/cluster/MachineId";
const id = M.make(7);
console.log(JSON.stringify([id, Schema.decodeUnknownSync(M.MachineId)(7)]));
