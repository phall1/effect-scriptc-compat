// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as FileSystem from "effect/FileSystem"
import { Effect } from "effect"
const fs = FileSystem.makeNoop({ exists: () => Effect.succeed(true) })
console.log(`filesystem.fake:${Effect.runSync(fs.exists("fixed.txt"))}`)
