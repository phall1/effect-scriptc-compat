// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Option, Schema } from "effect";
import * as M from "effect/workflow/WorkflowEngine";
import { Workflow } from "effect/workflow";
const workflow = Workflow.make("Fixture", { payload: { value: Schema.Number }, success: Schema.Number, idempotencyKey: () => "fixed" });
const result = await Effect.runPromise(Effect.scoped(Effect.gen(function* () {
 const engine = yield* M.WorkflowEngine;
 yield* engine.register(workflow, payload => Effect.succeed(payload.value + 1));
 const result = yield* engine.execute(workflow, { executionId: "fixed", payload: { value: 6 } });
 return [result, Option.isSome(yield* engine.poll(workflow, "fixed"))];
})).pipe(Effect.provide(M.layerMemory)));
console.log(JSON.stringify(result));
