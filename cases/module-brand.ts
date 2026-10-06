// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as Brand from "effect/Brand"
type UserId = number & Brand.Brand<"UserId">
const UserId = Brand.nominal<UserId>()
console.log(`brand:${UserId(42)}`)
