// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Context, Effect, Layer, Option, Schema } from "effect";
import * as M from "effect/cluster/MessageStorage";
import { EntityAddress, EntityId, EntityType, Envelope, Message, ShardId, ShardingConfig, Snowflake } from "effect/cluster";
import { Headers } from "effect/http";
import { Rpc } from "effect/rpc";
const rpc = Rpc.make("Get", { payload: { value: Schema.Number }, success: Schema.Number });
const shardId = ShardId.make("default", 1);
const address = EntityAddress.make({ shardId, entityType: EntityType.make("Fixture"), entityId: EntityId.make("a") });
const envelope = Envelope.makeRequest<typeof rpc>({ requestId: Snowflake.Snowflake(1n), address, tag: "Get", payload: { value: 7 }, headers: Headers.empty });
const outgoing = new Message.OutgoingRequest({ envelope, rpc, context: Context.empty(), annotations: Context.empty(), lastReceivedReply: Option.none(), respond: () => Effect.void });
const result = await Effect.runPromise(Effect.gen(function* () {
 const storage = yield* M.MessageStorage;
 const first = yield* storage.saveRequest(outgoing);
 const second = yield* storage.saveRequest(outgoing);
 const messages = yield* storage.unprocessedMessages([shardId]);
 return [first._tag, second._tag, messages.map(message => message.envelope._tag)];
}).pipe(Effect.provide(M.layerMemory.pipe(Layer.provide(ShardingConfig.layerDefaults)))));
console.log(JSON.stringify(result));
