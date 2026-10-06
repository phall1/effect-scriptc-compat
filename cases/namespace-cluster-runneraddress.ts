// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/cluster/RunnerAddress";
const address = M.make("localhost", 9000);
console.log(JSON.stringify([address.host, address.port, address.toString()]));
