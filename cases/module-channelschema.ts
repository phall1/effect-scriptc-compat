// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as ChannelSchema from "effect/ChannelSchema"
import { Effect, Schema, Stream } from "effect"
const values = await Effect.runPromise(Stream.fromIterable(["1", "2"]).pipe(Stream.pipeThroughChannel(ChannelSchema.decode(Schema.NumberFromString)()), Stream.runCollect))
console.log(`channelSchema:${values.join(",")}`)
