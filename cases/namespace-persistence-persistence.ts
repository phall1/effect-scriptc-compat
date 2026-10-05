// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Exit, Schema } from "effect";
import * as M from "effect/persistence/Persistence";
import { Persistable } from "effect/persistence";
class Read extends Persistable.Class<{ payload: { id: string } }>()("Read", { primaryKey: payload => payload.id, success: Schema.Number }) {}
const result = await Effect.runPromise(Effect.scoped(Effect.gen(function* () {
  const persistence = yield* M.Persistence;
  const store = yield* persistence.make({ storeId: "fixture" });
  const request = new Read({ id: "a" });
  yield* store.set(request, Exit.succeed(7));
  const stored = yield* store.get(request);
  yield* store.remove(request);
  return [stored && Exit.isSuccess(stored) ? stored.value : null, (yield* store.get(request)) === undefined];
})).pipe(Effect.provide(M.layerMemory)));
console.log(JSON.stringify(result));
