// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as Redis from "effect/persistence/Redis"
const script = Redis.script((key: string, value: number) => [key, value], {lua: "return ARGV[1]", numberOfKeys: 1}).withReturnType<number>()
console.log(JSON.stringify([script.lua, script.params("key", 42), script.numberOfKeys("key", 42)]))
