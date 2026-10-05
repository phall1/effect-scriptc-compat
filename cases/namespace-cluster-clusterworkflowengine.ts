// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Option, Schema } from "effect";
import * as M from "effect/cluster/ClusterWorkflowEngine";
import { TestRunner } from "effect/cluster";
import { Workflow } from "effect/workflow";
const workflow = Workflow.make("Fixture", { payload: { value: Schema.Number }, success: Schema.Number, idempotencyKey: () => "fixed" });
const result = await Effect.runPromise(Effect.scoped(Effect.gen(function* () {
 const engine = yield* M.make;
 yield* engine.register(workflow, payload => Effect.succeed(payload.value + 1));
 return Option.isNone(yield* engine.poll(workflow, "missing"));
})).pipe(Effect.provide(TestRunner.layer)));
console.log(JSON.stringify(result));
