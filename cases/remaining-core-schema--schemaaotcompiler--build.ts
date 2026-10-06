// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as Build from "effect/schema/SchemaAOTCompiler/Build"
import { Effect, FileSystem, Path } from "effect"
const program = Build.build({modules: {"./invalid.ts": () => Promise.resolve(null)}, baseUrl: "file:///virtual/", outFile: "/virtual/generated.ts"}).pipe(
  Effect.catch(error => Effect.succeed(error._tag === "BuildError" ? [error._tag, error.kind, error.module] : [error._tag])),
  Effect.provide(FileSystem.layerNoop({})), Effect.provide(Path.layer)
)
console.log(JSON.stringify(await Effect.runPromise(program)))
