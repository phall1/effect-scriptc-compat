// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/encoding/Ini";
const result = M.parse("name=fixture\n[server]\nport=3000\n");
console.log(JSON.stringify(result));
