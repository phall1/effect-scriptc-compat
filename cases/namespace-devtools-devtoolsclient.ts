// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Context, Effect, Exit, Option, Tracer } from "effect";
import * as DevToolsClient from "effect/devtools/DevToolsClient";
import type * as DevToolsSchema from "effect/devtools/DevToolsSchema";

const messages: Array<DevToolsSchema.Span | DevToolsSchema.SpanEvent> = [];
const events: Array<string> = [];
const baseTracer = Tracer.make({
  span(options) {
    let status: Tracer.SpanStatus = { _tag: "Started", startTime: options.startTime };
    const attributes = new Map<string, unknown>();
    const links = [...options.links];
    return {
      _tag: "Span",
      name: options.name,
      spanId: "span-1",
      traceId: "trace-1",
      sampled: options.sampled,
      parent: options.parent,
      annotations: options.annotations,
      kind: options.kind,
      links,
      attributes,
      get status() { return status; },
      attribute(key, value) { attributes.set(key, value); },
      event(name) { events.push(name); },
      addLinks(more) { links.push(...more); },
      end(endTime, exit) { status = { _tag: "Ended", startTime: options.startTime, endTime, exit }; }
    };
  }
});
const tracer = Effect.runSync(DevToolsClient.makeTracer.pipe(
  Effect.provideService(DevToolsClient.DevToolsClient, { sendUnsafe: (message) => { messages.push(message); } }),
  Effect.withTracer(baseTracer)
));
const span = tracer.span({
  name: "fixture", parent: Option.none(), annotations: Context.empty(), links: [],
  startTime: 100n, kind: "internal", root: true, sampled: true
});
span.attribute("step", 1);
span.event("ready", 110n, { ok: true });
span.end(120n, Exit.succeed("done"));
console.log(JSON.stringify([
  messages.map((message) => message._tag === "Span"
    ? [message._tag, message.name, message.status._tag, Array.from(message.attributes)]
    : [message._tag, message.name, String(message.startTime)]),
  events, span.spanId, span.traceId
]));
