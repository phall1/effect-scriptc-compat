// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/workers/Worker";
const messages: Array<unknown> = [];
const worker = M.makeUnsafe({ send: message => Effect.sync(() => { messages.push(message); }), run: () => Effect.never });
Effect.runSync(worker.send({ value: 7 }));
console.log(JSON.stringify(messages));
