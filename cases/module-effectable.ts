// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as Effectable from "effect/Effectable"
import { Effect } from "effect"
class Box { readonly value: number; constructor(value: number) { this.value = value } }
class EffectBox extends Effectable.Mixin(Box) { asEffect() { return Effect.succeed(this.value) } }
console.log(`effectable:${Effect.runSync(new EffectBox(42))}`)
