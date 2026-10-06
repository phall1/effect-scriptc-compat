// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { DateTime } from "effect";
import * as M from "effect/cluster/DeliverAt";
const payload: M.DeliverAt = { [M.symbol]: () => DateTime.makeUnsafe(1234) };
console.log(JSON.stringify([M.isDeliverAt(payload), M.toMillis(payload), M.toMillis({})]));
