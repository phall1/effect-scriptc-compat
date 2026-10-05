// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as Argument from "effect/cli/Argument";
import * as Command from "effect/cli/Command";
import * as Flag from "effect/cli/Flag";
const command = Command.make("greet", { name: Argument.String("name"), count: Flag.Int("count").pipe(Flag.withDefault(1)) });
console.log(JSON.stringify([Command.isCommand(command), command.name]));
