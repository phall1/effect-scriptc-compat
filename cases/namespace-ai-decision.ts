// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/ai/Decision";
const classify = M.classify({ instructions: "Route input", criteria: { yes: "accept", no: "reject" } });
const rate = M.rate({ instructions: "Rate input", criteria: ["low", "high"] });
const probability = M.probability({ instructions: "Is this valid?" });
console.log(JSON.stringify([classify, rate, probability]));
