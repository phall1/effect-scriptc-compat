// Adapted from the installed effect@4.0.1 published declarations.
import { Effect, Logger } from "effect"
const messages: string[] = []
const logger = Logger.make(({ message }) => { messages.push(String(message)) })
Effect.runSync(Effect.log("log:ok").pipe(Effect.provide(Logger.layer([logger]))))
console.log(messages.join("|"))
