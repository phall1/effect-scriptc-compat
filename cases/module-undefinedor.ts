// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as UndefinedOr from "effect/UndefinedOr"
console.log(`undefinedOr:${UndefinedOr.getOrThrow(UndefinedOr.map(21, n => n * 2))}`)
