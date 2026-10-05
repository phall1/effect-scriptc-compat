// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/cluster/Envelope";
import { EntityAddress, EntityId, EntityType, ShardId, Snowflake } from "effect/cluster";
const address = EntityAddress.make({ shardId: ShardId.make("default", 1), entityType: EntityType.make("Counter"), entityId: EntityId.make("a") });
const envelope = new M.Interrupt({ id: Snowflake.Snowflake(2n), requestId: Snowflake.Snowflake(1n), address });
console.log(JSON.stringify([M.isEnvelope(envelope), Schema.encodeSync(M.PartialJson)(envelope)]));
