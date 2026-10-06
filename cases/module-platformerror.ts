// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as PlatformError from "effect/PlatformError"
const error = PlatformError.badArgument({ module: "FileSystem", method: "readFile" })
console.log(`platformError:${PlatformError.isPlatformError(error)}`)
