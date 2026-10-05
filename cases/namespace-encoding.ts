// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Result } from "effect";
import { Base64, Base64Url, Hex } from "effect/encoding";
const encoded = Base64.encode("Effect");
console.log(JSON.stringify([encoded, Result.getOrThrow(Base64.decodeString(encoded)), Base64Url.encode("a?"), Hex.encode("OK")]));
