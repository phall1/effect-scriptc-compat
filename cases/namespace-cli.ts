// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Argument, Command, Flag } from "effect/cli";
const command = Command.make("greet", { name: Argument.String("name"), count: Flag.Int("count").pipe(Flag.withDefault(1)) });
console.log(JSON.stringify([Command.isCommand(command), command.name]));
