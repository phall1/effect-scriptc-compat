// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/cli/Completions";
const descriptor: M.CommandDescriptor = { name: "fixture", description: "Test", flags: [], arguments: [], subcommands: [] };
const bash = M.generate("fixture", "bash", descriptor);
const fish = M.generate("fixture", "fish", descriptor);
console.log(JSON.stringify([bash.includes("fixture"), bash.includes("complete"), fish.includes("fixture"), fish.includes("complete")]));
