// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/cluster/Runner";
import { RunnerAddress } from "effect/cluster";
const runner = M.make({ address: RunnerAddress.make("localhost", 9000), groups: ["default"], weight: 2 });
console.log(JSON.stringify([runner.address.host, runner.address.port, runner.groups, runner.weight]));
