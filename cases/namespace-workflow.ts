// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import { Workflow, DurableDeferred } from "effect/workflow";
const workflow = Workflow.make("Fixture", { payload: { id: Schema.String }, success: Schema.Number, idempotencyKey: payload => payload.id });
const deferred = DurableDeferred.make("approval", { success: Schema.Boolean });
console.log(JSON.stringify([workflow._tag, workflow.idempotencyKey({ id: "a" }), Schema.decodeUnknownSync(workflow.payloadSchema)({ id: "a" }), deferred.name]));
