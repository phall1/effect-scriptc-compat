// Generated from node_modules/effect/dist/Runtime.d.ts, example 0.
// SHA-256: 6da881cc87ca3fd93ee9be83df2f133b3f5c5b2de4ba6efea836c5b781ebfc80
const __compatObserved: unknown[] = []
import * as Runtime from "effect/Runtime"
import { Effect, Exit } from "effect"

// Custom teardown that maps completion status to an exit code
const customTeardown: Runtime.Teardown = (exit, onExit) => {
  onExit(Exit.isSuccess(exit) ? 0 : 1)
}

const completed = new Promise<readonly [Exit.Exit<unknown, unknown>, number]>((resolve) => {
// Use with makeRunMain
  const runMain = Runtime.makeRunMain(({ fiber, teardown }) => {
    fiber.addObserver((exit) => {
      teardown(exit, (code) => resolve([exit, code]))
    })
  })

  const program = Effect.succeed("Hello, World!")
  runMain(program, { teardown: customTeardown })
})

__compatObserved.push(await completed)
console.log(JSON.stringify(__compatObserved))
