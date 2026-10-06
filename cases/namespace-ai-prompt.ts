// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as Prompt from "effect/ai/Prompt";
const prompt = Prompt.make([{ role: "system", content: "Be concise" }, { role: "user", content: [{ type: "text", text: "hello" }] }]);
console.log(JSON.stringify([Prompt.isPrompt(prompt), prompt.content.map(message => message.role), prompt.content.length]));
