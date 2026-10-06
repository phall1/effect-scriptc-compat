// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Schema } from "effect";
import * as Decision from "effect/ai/Decision";
import * as DecisionModel from "effect/ai/DecisionModel";

const definition = Decision.make({
  input: Schema.Struct({ text: Schema.String }),
  decisions: {
    route: Decision.classify({ instructions: "Route ticket", criteria: { support: "help", sales: "pricing" } }),
    urgent: Decision.probability({ instructions: "Is this urgent?" })
  }
});
const program = Effect.gen(function*() {
  const states: Array<Schema.Json> = [];
  const model = yield* DecisionModel.make({
    decide: ({ state }) => {
      states.push(state);
      return Effect.succeed({
        answers: {
          route: { _tag: "Classify" as const, label: "support", probabilities: { support: 0.75, sales: 0.25 } },
          urgent: { _tag: "Probability" as const, probability: 0.8 }
        },
        usage: { inputTokens: 4, outputTokens: 2 }
      });
    }
  });
  const response = yield* DecisionModel.decide(definition, { input: { text: "help" } }).pipe(
    Effect.provideService(DecisionModel.DecisionModel, model)
  );
  const invalid = yield* DecisionModel.make({
    decide: () => Effect.succeed({ answers: {}, usage: { inputTokens: undefined, outputTokens: undefined } })
  });
  const failure = yield* invalid.decide(definition, { input: { text: "help" } }).pipe(
    Effect.map(() => "unexpected-success"),
    Effect.catch((error) => Effect.succeed(error.reason._tag))
  );
  return [states, response.answers.route.label, response.answers.urgent.probability, response.usage.inputTokens, failure];
});
console.log(JSON.stringify(await Effect.runPromise(program)));
