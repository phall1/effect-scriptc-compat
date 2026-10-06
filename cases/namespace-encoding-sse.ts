// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/encoding/Sse";
const events: Array<M.AnyEvent> = [];
const parser = M.makeParser(event => events.push(event));
parser.feed("event: fixture\nid: a\ndata: hel");
parser.feed("lo\n\n");
console.log(JSON.stringify(events));
