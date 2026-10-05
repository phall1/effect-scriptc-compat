// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/http/Template";
console.log(JSON.stringify(Effect.runSync(M.make`<p>${Effect.succeed("<fixture>")}</p>`)));
