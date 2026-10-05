// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/observability/OtlpSerialization";
const result = Effect.runSync(Effect.gen(function* () {
  const serializer = yield* M.OtlpSerialization;
  const body = serializer.traces({ resourceSpans: [] });
  return body._tag === "Uint8Array" ? [body.contentType, new TextDecoder().decode(body.body)] : [body._tag];
}).pipe(Effect.provide(M.layerJson)));
console.log(JSON.stringify(result));
