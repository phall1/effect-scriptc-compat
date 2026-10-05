// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/ai/OpenAiStructuredOutput";
const result = M.toCodecOpenAI(Schema.Struct({ name: Schema.String, count: Schema.Number }));
console.log(JSON.stringify([result.jsonSchema, Schema.decodeUnknownSync(result.codec)({ name: "fixture", count: 2 })]));
