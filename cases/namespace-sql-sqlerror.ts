// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/sql/SqlError";
const reason = M.classifySqliteError({ code: "SQLITE_CONSTRAINT_UNIQUE", message: "duplicate" });
const error = new M.SqlError({ reason });
console.log(JSON.stringify([reason._tag, M.isSqlError(error), M.isSqlErrorReason(reason)]));
