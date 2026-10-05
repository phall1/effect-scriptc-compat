// Generated from node_modules/effect/dist/process/ChildProcessSpawner.d.ts, example 0.
// SHA-256: 305a40e731f43e9ee1a0ef59c21f74e6bb6925ac6dde379912c2af0172e4216b
const __compatObserved: unknown[] = []
import { Effect } from "effect"
import type { ChildProcessSpawner } from "effect/process"

let referenced = true

const unref: ChildProcessSpawner.ChildProcessHandle["unref"] = Effect.sync(() => {
  referenced = false
  const reref: ChildProcessSpawner.Reref = Effect.sync(() => {
    referenced = true
  })
  return reref
})

const program = Effect.gen(function*() {
  const states = [] as Array<boolean>
  const reref = yield* unref
  states.push(referenced)

  yield* reref
  states.push(referenced)
  return states
})

__compatObserved.push(Effect.runSync(program))
console.log(JSON.stringify(__compatObserved))
