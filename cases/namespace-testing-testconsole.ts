// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/testing/TestConsole";
const result = Effect.runSync(Effect.gen(function* () {
  const capture = yield* M.make;
  capture.log("fixture", 1);
  capture.error("handled");
  return [yield* capture.logLines, yield* capture.errorLines];
}));
console.log(JSON.stringify(result));
