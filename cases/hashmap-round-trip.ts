// Adapted from the installed effect@4.0.1 published declarations.
import { HashMap } from "effect"
const values = HashMap.set(HashMap.fromIterable([["a", 1], ["b", 2]]), "c", 3)
console.log(`hashmap:${HashMap.toEntries(values).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => `${k}:${v}`).join(",")}`)
