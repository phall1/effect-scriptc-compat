// Generated from node_modules/effect/dist/ExecutionPlan.d.ts, example 0.
// SHA-256: def832320d210b120c47e8a68d6264b270270e0650edafc0fc3a52e48a1d53e7
const __compatObserved: unknown[] = []
import * as ExecutionPlan from "effect/ExecutionPlan"
import { Context } from "effect"

const ThePlan = ExecutionPlan.make(
  {
    provide: Context.empty(),
    attempts: 2
  },
  {
    provide: Context.empty()
  }
)

__compatObserved.push(ThePlan.steps.map((step) => step.attempts ?? 1))
console.log(JSON.stringify(__compatObserved))
