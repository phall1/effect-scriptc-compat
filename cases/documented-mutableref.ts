// Generated from node_modules/effect/dist/MutableRef.d.ts, example 0.
// SHA-256: cbff36d1666eb8a0b2af6fdcb6a314aa363b523efd92f9f17296cfe01e538c5c
const __compatObserved: unknown[] = []
import * as MutableRef from "effect/MutableRef"

// Create a mutable reference
const ref: MutableRef.MutableRef<number> = MutableRef.make(42)

// Read the current value
__compatObserved.push(ref.current)
__compatObserved.push(MutableRef.get(ref))

// Update the value
ref.current = 100

__compatObserved.push(MutableRef.get(ref))

// Use with complex types
interface Config {
  timeout: number
  retries: number
}

const config: MutableRef.MutableRef<Config> = MutableRef.make({
  timeout: 5000,
  retries: 3
})

// Update through the interface
config.current = { timeout: 10000, retries: 5 }

__compatObserved.push(config.current)
console.log(JSON.stringify(__compatObserved))
