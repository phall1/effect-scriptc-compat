// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/schema/SchemaAOTCompiler";
const source = M.compile([{ ast: Schema.Struct({ name: Schema.String }).ast, operations: ["decode", "is"] }]);
console.log(JSON.stringify([source.includes("install"), source.includes("name"), source.length > 100]));
