// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Exit, Schema } from "effect";
import * as M from "effect/cluster/Reply";
import { Snowflake } from "effect/cluster";
import { Rpc } from "effect/rpc";
const rpc = Rpc.make("Get", { success: Schema.Number });
const reply = new M.WithExit<typeof rpc>({ id: Snowflake.Snowflake(2n), requestId: Snowflake.Snowflake(1n), exit: Exit.succeed(7) });
console.log(JSON.stringify([M.isReply(reply), M.WithExit.is(reply), reply._tag, Exit.isSuccess(reply.exit)]));
