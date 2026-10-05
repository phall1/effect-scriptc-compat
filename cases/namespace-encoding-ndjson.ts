// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Stream } from "effect";
import * as M from "effect/encoding/Ndjson";
const result = await Effect.runPromise(Stream.fromIterable([{ n: 1 }, { n: 2 }]).pipe(Stream.pipeThroughChannel(M.encodeString()), Stream.pipeThroughChannel(M.decodeString()), Stream.runCollect));
console.log(JSON.stringify(result));
