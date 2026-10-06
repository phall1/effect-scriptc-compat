// Primary API probe derived from installed effect@4.0.1 declarations.
import * as Arbitrary from "effect/Arbitrary"
console.log(`arbitrary.constant:${Arbitrary.isArbitrary(Arbitrary.Constant(42))}`)
