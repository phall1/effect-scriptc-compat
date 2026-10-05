// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as EmbeddingModel from "effect/ai/EmbeddingModel";

const program = Effect.gen(function*() {
  let calls = 0;
  const model = yield* EmbeddingModel.make({
    embedMany: ({ inputs }) => {
      calls += 1;
      return Effect.succeed({
        results: inputs.map((input) => [input.length, input.length * 2]),
        usage: { inputTokens: inputs.length }
      });
    }
  });
  const batch = yield* model.embedMany(["a", "abcd"]);
  const single = yield* model.embed("xy");
  const empty = yield* model.embedMany([]);
  const invalid = yield* EmbeddingModel.make({
    embedMany: () => Effect.succeed({ results: [], usage: { inputTokens: 0 } })
  });
  const failure = yield* invalid.embedMany(["missing"]).pipe(
    Effect.map(() => "unexpected-success"),
    Effect.catch((error) => Effect.succeed(error.reason._tag))
  );
  return [batch.embeddings.map((value) => value.vector), batch.usage.inputTokens, single.vector, empty.embeddings.length, calls, failure];
});
console.log(JSON.stringify(await Effect.runPromise(program)));
