// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as Pipeable from "effect/Pipeable"
class Value extends Pipeable.Class { readonly value = 42 }
console.log(new Value().pipe(value => `pipeable:${value.value}`))
