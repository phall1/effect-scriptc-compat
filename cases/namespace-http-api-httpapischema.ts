// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/http-api/HttpApiSchema";
const schema = M.WithHeaders(Schema.String, { "x-fixture": Schema.String });
const value = M.withHeaders({ body: "ok", headers: { "x-fixture": "yes" } });
console.log(JSON.stringify([M.isWithHeaders(schema), M.isNoContent(M.NoContent.ast), value.body, value.headers]));
