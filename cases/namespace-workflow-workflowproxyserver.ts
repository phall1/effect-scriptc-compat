// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Schema } from "effect";
import * as M from "effect/workflow/WorkflowProxyServer";
import { Workflow, WorkflowEngine, WorkflowProxy } from "effect/workflow";
import { RpcTest } from "effect/rpc";
const workflow = Workflow.make("Fixture", { payload: { value: Schema.Number }, success: Schema.Number, idempotencyKey: () => "fixed" });
const result = await Effect.runPromise(Effect.scoped(Effect.gen(function* () {
 const engine = yield* WorkflowEngine.WorkflowEngine;
 yield* engine.register(workflow, payload => Effect.succeed(payload.value + 1));
 const client = yield* RpcTest.makeClient(WorkflowProxy.toRpcGroup([workflow]));
 return yield* client.Fixture({ value: 6 });
})).pipe(Effect.provide(M.layerRpcHandlers([workflow])), Effect.provide(WorkflowEngine.layerMemory)));
console.log(JSON.stringify(result));
