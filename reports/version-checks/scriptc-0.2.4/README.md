# Isolated npm scriptc 0.2.4 candidate check

Bounded five-input experiment on reference macOS arm64, Node 24.19.0, Apple Clang 21.0.0, published Effect 4.0.1. **Not an upgrade, replacement map, or full compatibility result.** The harness pins, lockfile and dependencies remain unchanged: ordinary harness commands still require scriptc 0.2.3. The stopped baseline remains partial at 323/404 mapped cases.

| Input | Node | Candidate build | Native |
| --- | --- | --- | --- |
| Non-Effect control | `scriptc-control:42` | succeeds | byte-equal |
| Unused `effect/Effect` import | `imported` | rejected SC3004 null/union | no binary |
| `Effect.runSync(Effect.succeed(42))` | `42` | rejected same SC3004 | no binary |
| Verified reduced Hash repro | `[true,true,true]` | succeeds | exits 1, reached SC1090 on `Hash.hash(number[])` |
| Number fixture | `number:42` | succeeds | byte-equal |

**2/5 inputs have equal native controls/results; three binaries built, two equal and one runtime trap.** No hangs or invalid Node execution were observed in these saved commands. The two refusals and Hash trap persist in this candidate; this does not establish a shared root cause for every refusal or universal Effect support. No new corpus, broad sweep or hosted job was run to document this evidence.

## Evidence and release identity

`results.json` retains the original complete baseline provenance, candidate executable hash/version, registry integrity, five source hashes and exact commands/status/base64 bytes. Per-command `.json`, `.stdout` and `.stderr` files retain full raw evidence without rewriting historical command paths. `sources.json` maps all original inputs to exact-byte `sources/` snapshots; every snapshot hash was checked against its recorded input hash. In particular `.work/compiler-control.ts` was ignored scratch, so `sources/control.ts` is its durable source, not a new probe.

`history/official-release.json` and `history/npm-registry.json` preserve the saved official release and npm publication history. A read-only GitHub API request (`gh api repos/vercel-labs/scriptc/git/ref/tags/v0.2.4`) saved `history/official-tag.json`: official `v0.2.4` points directly to **b1c11aac19e3336a70daaf637dd537ad3ddc56b9**, matching the candidate and the compiler checkout's local tag. `history/isolated-install.log` preserves the install output, including npm's postinstall allow-scripts warning. No release/tag/remote was changed or published.

## Reproduce without changing harness pins

This is a reconstruction recipe, not an instruction to resume the stopped pipeline. Install the candidate only in the ignored prefix and restore the ignored control at its **original command path**:

```sh
mkdir -p .work/compiler-0.2.4
npm install --prefix .work/compiler-0.2.4 scriptc@0.2.4
cp reports/version-checks/scriptc-0.2.4/sources/control.ts .work/compiler-control.ts
```

Use the clean reference environment documented in [the handoff](../../../docs/handoff.md), with `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`, `SCRIPTC_LINKER=/usr/bin/clang`, and no inherited SDKROOT/TOOLCHAINS. The original five source/output paths are listed in `results.json`; verify their SHA-256 values against `sources.json` first. Committed triage/repro/corpus paths supply the other four inputs; their snapshots preserve the historical bytes if those files later change. For example, the recorded control commands were:

```sh
/Users/phall/.local/share/mise/installs/node/24.19.0/bin/node --experimental-strip-types .work/compiler-control.ts
/Users/phall/workspace/effect-scriptc-compat/.work/compiler-0.2.4/node_modules/.bin/scriptc build .work/compiler-control.ts --npm-static=effect -o /Users/phall/workspace/effect-scriptc-compat/.work/new-control
/Users/phall/workspace/effect-scriptc-compat/.work/new-control
```

Paths above intentionally remain historical, including the ignored input, isolated compiler and native outputs. A different checkout may substitute its root when rerunning but must retain that new command/provenance separately. Do not substitute candidate evidence into baseline map/differential files or assert a pin override. Native binaries and LLVM output are ignored host-local artifacts, not portable evidence.
