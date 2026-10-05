// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Result } from "effect";
import * as M from "effect/encoding/Base64Url";
const encoded = M.encode("hello");
const roundtrip = Result.getOrThrow(M.decodeString(encoded));
const invalid = M.decode("!");
console.log(JSON.stringify([encoded, roundtrip, Result.isFailure(invalid)]));
