// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Duration } from "effect";
import * as M from "effect/workflow/DurableClock";
const timer = M.make({ name: "fixture", duration: "2 seconds" });
console.log(JSON.stringify([timer.name, Duration.toMillis(timer.duration), timer.deferred.name]));
