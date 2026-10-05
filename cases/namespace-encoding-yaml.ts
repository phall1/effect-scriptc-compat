// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/encoding/Yaml";
const result = M.parse("name: fixture\nitems:\n  - first\n  - second\n");
console.log(JSON.stringify(result));
