// Generated from node_modules/effect/dist/Channel.d.ts, example 0.
// SHA-256: f87f908aa53088d994dc70d4a6a2f1bda08fdcbfbbe389c63a6c9653ff95ed65
const __compatObserved: unknown[] = []
import * as Channel from "effect/Channel"

const channel = Channel.succeed(42)
__compatObserved.push(Channel.isChannel(channel))
__compatObserved.push(Channel.isChannel("not a channel"))
console.log(JSON.stringify(__compatObserved))
