// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as TestClock from "effect/testing/TestClock";
const result = await Effect.runPromise(Effect.scoped(Effect.gen(function* () {
  const clock = yield* TestClock.make();
  yield* clock.setTime(1234);
  return [clock.currentTimeMillisUnsafe(), String(clock.currentTimeNanosUnsafe())];
})));
console.log(JSON.stringify(result));
