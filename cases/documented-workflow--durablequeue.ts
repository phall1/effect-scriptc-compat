// Generated from node_modules/effect/dist/workflow/DurableQueue.d.ts, example 0.
// SHA-256: 8da6b3a4c754defb63611911edacae6d5ef7a998cd975b5dedbaf0cd68911b7e
const __compatObserved: unknown[] = []
import { Effect, Layer, Schema } from "effect"
import * as DurableQueue from "effect/workflow/DurableQueue"
import { Workflow } from "effect/workflow"

// Define a DurableQueue that can be used to derive workers and offer items for
// processing.
const ApiQueue = DurableQueue.make({
  name: "ApiQueue",
  payload: {
    id: Schema.String
  },
  success: Schema.Void,
  error: Schema.Never,
  idempotencyKey(payload) {
    return payload.id
  }
})

const MyWorkflow = Workflow.make("MyWorkflow", {
  payload: {
    id: Schema.String
  },
  idempotencyKey: ({ id }) => id
})

const MyWorkflowLayer = MyWorkflow.toLayer(
  Effect.fnUntraced(function*() {
    // The workflow suspends until a worker completes this queue item.
    yield* DurableQueue.process(ApiQueue, { id: "api-call-1" })
    return "Workflow succeeded!"
  })
)

const processed: Array<string> = []
const processApiCall = ({ id }: { readonly id: string }) => Effect.sync(() => processed.push(id))

// Construct the worker layer without starting background workers in this example.
const ApiWorker = DurableQueue.worker(ApiQueue, processApiCall, {
  concurrency: 5
})

const program = Effect.gen(function*() {
  // Exercise the finite handler directly instead of running a queue worker.
  yield* processApiCall({ id: "api-call-1" })
  return [Layer.isLayer(MyWorkflowLayer), Layer.isLayer(ApiWorker), processed] as const
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
