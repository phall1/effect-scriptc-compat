// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/workflow/WorkflowProxy";
import { Workflow } from "effect/workflow";
const workflow = Workflow.make("Fixture", { payload: { id: Schema.String }, success: Schema.Number, idempotencyKey: value => value.id });
const rpcs = M.toRpcGroup([workflow]);
const http = M.toHttpApiGroup("fixtures", [workflow]);
console.log(JSON.stringify([Array.from(rpcs.requests.keys()), http.identifier, Object.keys(http.endpoints)]));
