// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/encoding/SchemaBinary";
const codec = M.toCodec(Schema.Struct({ name: Schema.String, value: Schema.Number }));
const encoded = Schema.encodeSync(codec)({ name: "fixture", value: 7 });
console.log(JSON.stringify([Array.from(encoded), Schema.decodeUnknownSync(codec)(encoded)]));
