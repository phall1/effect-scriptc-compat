// Generated from node_modules/effect/dist/Channel.d.ts, example 0.
// SHA-256: 8693b30c688b6cc860014a42c149203410a6c0a8d53a6e050ae76265f5500a46
const __compatObserved: unknown[] = []
import * as Channel from "effect/Channel"

const channel = Channel.succeed(42)
__compatObserved.push(Channel.isChannel(channel))
__compatObserved.push(Channel.isChannel("not a channel"))
console.log(JSON.stringify(__compatObserved))
