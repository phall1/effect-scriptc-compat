// Adapted from the installed effect@4.0.1 published declarations.
import { HashSet } from "effect"
const values = HashSet.remove(HashSet.add(HashSet.fromIterable([1, 2, 2]), 3), 1)
console.log(`hashset:${Array.from(values).sort((a, b) => a - b).join(",")}`)
