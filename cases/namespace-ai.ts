// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Prompt } from "effect/ai";
const prompt = Prompt.make([{ role: "system", content: "Be concise" }, { role: "user", content: [{ type: "text", text: "hello" }] }]);
console.log(JSON.stringify([Prompt.isPrompt(prompt), prompt.content.map(message => message.role), prompt.content.length]));
