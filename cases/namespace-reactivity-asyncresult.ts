// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as AsyncResult from "effect/reactivity/AsyncResult";
import * as AtomRef from "effect/reactivity/AtomRef";
const ref = AtomRef.make({ count: 2 });
ref.prop("count").update(value => value + 3);
const state = AsyncResult.map(AsyncResult.success(ref.value.count), value => value * 2);
console.log(JSON.stringify([ref.value, AsyncResult.getOrThrow(state), AsyncResult.isWaiting(state)]));
