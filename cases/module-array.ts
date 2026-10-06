// Primary API probe derived from installed effect@4.0.1 declarations.
import * as Array from "effect/Array"
console.log(`array:${Array.map(Array.make(1, 2, 3), n => n * 2).join(",")}`)
