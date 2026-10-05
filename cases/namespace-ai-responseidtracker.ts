// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Option } from "effect";
import * as M from "effect/ai/ResponseIdTracker";
import { Prompt } from "effect/ai";
const tracker = Effect.runSync(M.make);
const prompt = Prompt.make("fixture");
const before = tracker.prepareUnsafe(prompt);
tracker.markParts(prompt.content, "response-1");
const after = tracker.prepareUnsafe(prompt);
tracker.clearUnsafe();
console.log(JSON.stringify([Option.isNone(before), Option.isSome(after), Option.isNone(tracker.prepareUnsafe(prompt))]));
