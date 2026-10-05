// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { EntityAddress, EntityId, EntityType, ShardId } from "effect/cluster";
const shardId = ShardId.make("users", 2);
const address = EntityAddress.make({ shardId, entityType: EntityType.EntityType.make("User"), entityId: EntityId.EntityId.make("u1") });
console.log(JSON.stringify([ShardId.toString(shardId), address.entityType, address.entityId]));
