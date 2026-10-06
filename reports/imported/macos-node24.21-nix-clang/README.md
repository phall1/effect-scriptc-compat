# Interrupted non-reference runtime observation

This is a preserved **partial** run, not the pinned Node 24.19.0 reference map.

The shared terminal server inherited another checkout's environment: Node 24.21.0 and Nix clang-wrapper 21.1.8, rather than the reference Node and macOS Command Line Tools. The harness accurately recorded that provenance. A Node 24.19.0 differential invocation was refused before execution by the stale-provenance guard (`reference-comparison-refused.log`). A second inspection identified the different Clang/system-linker executable hashes too; no mismatched-context comparison was accepted.

The job was paused, its exact descendants inspected (only defunct compiler children remained), and its process group stopped before archiving. A final checkpoint retained **44/404** complete ready-case observations: 3 static, 4 deferred, 37 rejected. The remaining 360 cases were unmeasured. Seven built binaries were then compared under their **recorded Node 24.21.0 and Nix linker context**, all byte-equal to Node, with no invalid baselines or hangs. This does not establish broad compatibility or a complete map.

Raw output, source/binary/toolchain fingerprints, map session, control, partial map and differential results are retained unchanged. Native binaries are not committed. Intermediate command evidence without a completed case record is not classified.

The replacement reference run must use a fresh map, not reuse these cache records. Its launcher explicitly selects Node 24.19.0 and `/usr/bin/clang`, places `/usr/bin` ahead of inherited Nix wrappers, and verifies the Node pin before producing evidence. The shared workflow database remains untouched; automatic Monitor startup is a separate blocked operation.
