// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as Command from "effect/cli/Command";
import * as Flag from "effect/cli/Flag";
import * as GlobalFlag from "effect/cli/GlobalFlag";

const mode = GlobalFlag.Setting("mode")({ flag: Flag.String("mode") });
const output: Array<string> = [];
const action = GlobalFlag.Action({
  flag: Flag.Boolean("inspect"),
  run: (enabled, context) => Effect.sync(() => {
    if (enabled) output.push(`${context.command.name}:${context.version}`);
  })
});
const program = Effect.gen(function*() {
  const value = yield* mode;
  yield* action.run(true, { command: Command.make("fixture"), commandPath: ["fixture"], version: "1.2.3", builtIns: [] });
  return [mode._tag, mode.id, value, action._tag, output, GlobalFlag.BuiltIns.map((flag) => flag._tag)];
}).pipe(Effect.provideService(mode, "safe"));
console.log(JSON.stringify(Effect.runSync(program)));
