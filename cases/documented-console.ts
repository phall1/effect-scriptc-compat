// Generated from node_modules/effect/dist/Console.d.ts, example 2.
// SHA-256: ca4f55931220a397791221e372182478b752b3a7a01642ae19d54b54b2d9164c
const __compatObserved: unknown[] = []
import * as Console from "effect/Console"
import { Effect } from "effect"

const errors: Array<unknown> = []
const testConsole: Console.Console = Object.assign(Object.create(console), {
  assert: (condition: boolean, ...args: ReadonlyArray<unknown>) => {
    if (!condition) errors.push(...args)
  }
})
const program = Effect.gen(function*() {
  yield* Console.assert(2 + 2 === 4, "Math is working correctly")
  yield* Console.assert(2 + 2 === 5, "This will be logged as an error")
})

Effect.runSync(Effect.provideService(program, Console.Console, testConsole))
__compatObserved.push(errors)
console.log(JSON.stringify(__compatObserved))
