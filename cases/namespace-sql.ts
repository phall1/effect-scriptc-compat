// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Statement } from "effect/sql";
const query = Statement.fragment([Statement.literal("SELECT "), Statement.identifier("name"), Statement.literal(" FROM "), Statement.identifier("items"), Statement.literal(" WHERE id = "), Statement.parameter(7)]);
const compiler = Statement.makeCompilerSqlite();
console.log(JSON.stringify([Statement.isFragment(query), compiler.compile(query, false)]));
