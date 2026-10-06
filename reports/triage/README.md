# Focused blocker triage — bulk pipeline paused

The reference sweep was paused at 323/404 measured cases: 26 static, 36 deferred, 261 rejected, 81 unmeasured. Of the rejected cases, 253 show the same SC3004 `null is not representable in the target union` message in at least one build. No compiler deadlines were reached in the inspected records; time was spent repeating coverage/build in static and dynamic modes, not waiting on hangs.

Two small persisted diagnostics were independently executed on reference Node 24.19.0 and built with pinned scriptc 0.2.3:

- `import-effect.ts`: Node prints `imported`; compilation fails with that same SC3004 despite never calling Effect.
- `succeed.ts`: Node prints `42` from `Effect.runSync(Effect.succeed(42))`; compilation fails with the same message.

`initialization.json` and per-command raw artifacts retain exact source hashes, provenance, command, status and bytes. The import-only file is a diagnosis of import-graph/compiler processing, **not** added compatibility coverage. These observations show that hundreds of refusals need not represent hundreds of independent API defects; the common blocker already occurs without an Effect call. They do not prove every SC3004 wrapper has the same underlying cause.

The original native process group is frozen, not completed. No broad all-signature reduction should be resumed automatically. Preserve the 62 successful builds and existing verified Hash runtime trap; investigate representative shared blockers rather than reducing every API-family copy. Dependencies and upstream packages remain unmodified. No upstream issue or PR was opened.
