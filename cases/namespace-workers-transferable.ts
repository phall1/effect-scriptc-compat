// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as Transferable from "effect/workers/Transferable";
const collector = Transferable.makeCollectorUnsafe();
const bytes = new Uint8Array([1, 2, 3]);
collector.addAllUnsafe([bytes.buffer]);
console.log(JSON.stringify([collector.readUnsafe().length, collector.clearUnsafe().length, collector.readUnsafe().length]));
