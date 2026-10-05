// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Schema } from "effect";
import * as McpServer from "effect/ai/McpServer";

const program = Effect.gen(function*() {
  const server = yield* McpServer.McpServer.make;
  yield* Effect.gen(function*() {
    yield* McpServer.registerResource({ uri: "fixture://message", name: "original", content: Effect.succeed("first") });
    yield* McpServer.registerResource({ uri: "fixture://message", name: "updated", mimeType: "text/plain", content: Effect.succeed("second") });
    yield* McpServer.registerPrompt({
      name: "greet",
      parameters: { name: Schema.String },
      content: ({ name }) => Effect.succeed(`Hello ${name}`)
    });
  }).pipe(Effect.provideService(McpServer.McpServer, server));
  return [server.resources.map(({ resource }) => [resource.uri, resource.name, resource.mimeType]), server.prompts.map(({ prompt }) => [prompt.name, prompt.arguments?.map((argument) => argument.name)]), server.tools.length];
});
console.log(JSON.stringify(await Effect.runPromise(Effect.scoped(program))));
