// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as ChildProcess from "effect/process/ChildProcess";
const left = ChildProcess.make("echo", ["fixture"]);
const command = left.pipe(ChildProcess.pipeTo(ChildProcess.make("cat")));
console.log(JSON.stringify([left.command, left.args, ChildProcess.isPipedCommand(command), ChildProcess.fdName(3), ChildProcess.parseFdName("fd3")]));
