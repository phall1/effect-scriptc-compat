// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/schema/VariantSchema";
const variants = M.make({ variants: ["private", "public"], defaultVariant: "private" });
const record = variants.Struct({ name: Schema.String, secret: variants.FieldOnly(["private"])(Schema.String) });
const publicSchema = variants.extract(record, "public");
console.log(JSON.stringify([M.isStruct(record), Schema.decodeUnknownSync(publicSchema)({ name: "fixture", secret: "hidden" })]));
