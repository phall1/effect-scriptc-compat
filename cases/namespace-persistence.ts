// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import { KeyValueStore } from "effect/persistence";
const result = await Effect.runPromise(Effect.gen(function* () {
  const store = yield* KeyValueStore.KeyValueStore;
  yield* store.set("counter", "1");
  yield* store.modify("counter", value => String(Number(value) + 1));
  return [yield* store.get("counter"), yield* store.size, yield* store.has("missing")];
}).pipe(Effect.provide(KeyValueStore.layerMemory)));
console.log(JSON.stringify(result));
