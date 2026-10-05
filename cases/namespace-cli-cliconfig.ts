// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/cli/CliConfig";
const config = M.make({ builtIns: [] });
console.log(JSON.stringify([config.builtIns.length, M.defaults.builtIns.length > 0]));
