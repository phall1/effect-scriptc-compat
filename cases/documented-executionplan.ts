// Generated from node_modules/effect/dist/ExecutionPlan.d.ts, example 0.
// SHA-256: e8b05159a4424d900d835193e0cec00f5f97e889528a85c6dd1629ec68c53571
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
