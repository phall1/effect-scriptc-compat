// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/schema/SchemaJITCompiler";
const schema = Schema.Struct({ name: Schema.String, value: Schema.Number });
M.enable(schema.ast);
const decode = Schema.decodeUnknownSync(schema);
console.log(JSON.stringify([decode({ name: "fixture", value: 7 }), Schema.is(schema)({ name: "fixture", value: "bad" })]));
