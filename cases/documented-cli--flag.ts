// Generated from node_modules/effect/dist/cli/Flag.d.ts, example 0.
// SHA-256: ba1ac1a12152e8b6321b9fccb30236d39cc9888e0467cd4b087653ad24592bc9
const __compatObserved: unknown[] = []
import * as Flag from "effect/cli/Flag"

const nameFlag = Flag.String("name")
// Usage: --name "John Doe"
__compatObserved.push(nameFlag.kind)
console.log(JSON.stringify(__compatObserved))
