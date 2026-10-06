// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as Stdio from "effect/Stdio"
import { Effect, Stream } from "effect"
const program = Effect.gen(function*() {
  const io = yield* Stdio.Stdio
  const args = yield* io.args
  const flags = [yield* io.stdinIsTerminal, yield* io.stdoutIsTerminal]
  const input = yield* Stream.runCount(io.stdin)
  yield* Stream.run(Stream.make("discarded"), io.stdout())
  return [args, flags, input]
}).pipe(Effect.provide(Stdio.layerTest({args: Effect.succeed(["--mode", "test"])})))
console.log(JSON.stringify(await Effect.runPromise(program)))
