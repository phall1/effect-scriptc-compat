// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/workflow/DurableDeferred";
const deferred = M.make("approval", { success: Schema.Boolean });
const token = new M.TokenParsed({ workflowName: "Fixture", executionId: "exec-1", deferredName: deferred.name });
const parsed = M.TokenParsed.fromString(token.asToken);
console.log(JSON.stringify([deferred.name, parsed.workflowName, parsed.executionId, parsed.deferredName]));
