// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner"
import { ChildProcess } from "effect/process"
import { Effect, Sink, Stream } from "effect"
const handle = ChildProcessSpawner.makeHandle({
  pid: ChildProcessSpawner.ProcessId(42),
  exitCode: Effect.succeed(ChildProcessSpawner.ExitCode(0)),
  isRunning: Effect.succeed(false), kill: () => Effect.void,
  stdin: Sink.drain, stdout: Stream.make(new Uint8Array([97, 10, 98, 10])), stderr: Stream.empty, all: Stream.empty,
  getInputFd: () => Sink.drain, getOutputFd: () => Stream.empty, unref: Effect.succeed(Effect.void)
})
const spawner = ChildProcessSpawner.make(() => Effect.succeed(handle))
const command = ChildProcess.make("fixture-only")
const program = Effect.gen(function*() {
  return [handle.pid, yield* spawner.exitCode(command), yield* spawner.lines(command)]
})
console.log(JSON.stringify(await Effect.runPromise(program)))
