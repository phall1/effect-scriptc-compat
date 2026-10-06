// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Schema } from "effect";
import * as M from "effect/workflow/Activity";
const activity = M.make({ name: "read", success: Schema.Number, execute: Effect.succeed(7) });
console.log(JSON.stringify([activity.name, Schema.decodeUnknownSync(activity.successSchema)(7)]));
