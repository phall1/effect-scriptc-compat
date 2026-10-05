// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Schema, Layer } from "effect";
import * as M from "effect/persistence/PersistedQueue";
const layer = M.layer.pipe(Layer.provide(M.layerStoreMemory));
const result = await Effect.runPromise(Effect.gen(function* () {
  const queue = yield* M.make({ name: "fixture", schema: Schema.Number });
  const id = yield* queue.offer(7, { id: "fixed-1" });
  const value = yield* queue.take((value, metadata) => Effect.succeed([value, metadata.id, metadata.attempts]));
  return [id, value];
}).pipe(Effect.provide(layer)));
console.log(JSON.stringify(result));
