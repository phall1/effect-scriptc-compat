// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as Hydration from "effect/reactivity/Hydration"
import { Atom, AtomRegistry } from "effect/reactivity"
import { Schema } from "effect"
const count = Atom.make(0).pipe(Atom.serializable({key: "count", schema: Schema.Number}))
const registry = AtomRegistry.make()
const state: Hydration.DehydratedAtomValue[] = [{"~effect/reactivity/Hydration/DehydratedAtom": true, key: "count", value: 42, dehydratedAt: 0}]
Hydration.hydrate(registry, state)
console.log(JSON.stringify([Hydration.toValues(state).map(entry => [entry.key, entry.value]), registry.get(count)]))
registry.dispose()
