// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Schema, Option } from "effect";
import * as M from "effect/sql/SqlSchema";
const find = M.findAll({ Request: Schema.Number, Result: Schema.Struct({ id: Schema.Number }), execute: id => Effect.succeed([{ id }]) });
const missing = M.findOneOption({ Request: Schema.Number, Result: Schema.Number, execute: () => Effect.succeed([]) });
console.log(JSON.stringify([Effect.runSync(find(7)), Option.isNone(Effect.runSync(missing(0)))]));
