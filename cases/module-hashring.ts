// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as HashRing from "effect/HashRing"
import { PrimaryKey } from "effect"
const node = { [PrimaryKey.symbol]: () => "node-a" }
const ring = HashRing.add(HashRing.make<typeof node>(), node)
console.log(`ring:${HashRing.get(ring, "key")?.[PrimaryKey.symbol]()}`)
