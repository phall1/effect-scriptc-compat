// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/cluster/Snowflake";
import { MachineId } from "effect/cluster";
const id = M.make({ machineId: MachineId.make(3), timestamp: M.constEpochMillis + 1000, sequence: 7 });
console.log(JSON.stringify([String(id), M.timestamp(id) - M.constEpochMillis, M.machineId(id), M.sequence(id)]));
