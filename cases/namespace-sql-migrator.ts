// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/sql/Migrator";
const loader = M.fromRecord({ "002_second": Effect.void, "001_first": Effect.void });
console.log(JSON.stringify(Effect.runSync(loader).map(([id, name]) => [id, name])));
