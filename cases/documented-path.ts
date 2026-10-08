// Generated from node_modules/effect/dist/Path.d.ts, example 0.
// SHA-256: 292f67c0734e9e60ad42aad2b9690669ceeca94b4fe08c517f90b5252df5ba2c
const __compatObserved: unknown[] = []
import * as Path from "effect/Path"
import { Effect } from "effect"

const program = Effect.gen(function*() {
  const path = yield* Path.Path

  return {
    joined: path.join("home", "user", "documents"),
    normalized: path.normalize("./path/../to/file.txt"),
    basename: path.basename("/path/to/file.txt"),
    dirname: path.dirname("/path/to/file.txt"),
    extname: path.extname("file.txt"),
    isAbsolute: path.isAbsolute("/absolute/path"),
    name: path.parse("/path/to/file.txt").name,
    relative: path.relative("/from/path", "/to/path"),
    resolved: path.resolve("/base", "relative", "path")
  }
})

const result = Effect.runSync(Effect.provide(program, Path.layer))
__compatObserved.push(result.joined)
__compatObserved.push(result.normalized)
__compatObserved.push(result.basename)
__compatObserved.push(result.dirname)
__compatObserved.push(result.extname)
__compatObserved.push(result.isAbsolute)
__compatObserved.push(result.name)
__compatObserved.push(result.relative)
__compatObserved.push(result.resolved)
console.log(JSON.stringify(__compatObserved))
