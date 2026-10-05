// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/cluster/Message";
import { EntityAddress, EntityId, EntityType, ShardId, Snowflake } from "effect/cluster";
const address = EntityAddress.make({ shardId: ShardId.make("default", 1), entityType: EntityType.make("Fixture"), entityId: EntityId.make("a") });
const outgoing = M.OutgoingEnvelope.interrupt({ address, id: Snowflake.Snowflake(2n), requestId: Snowflake.Snowflake(1n) });
console.log(JSON.stringify([outgoing._tag, Effect.runSync(M.serializeEnvelope(outgoing))]));
