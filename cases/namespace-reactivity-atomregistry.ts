// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/reactivity/AtomRegistry";
import { Atom } from "effect/reactivity";
const registry = M.make();
const count = Atom.make(2);
registry.set(count, 5);
console.log(JSON.stringify([registry.get(count), M.isAtomRegistry(registry)]));
registry.dispose();
