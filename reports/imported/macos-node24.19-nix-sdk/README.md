# Interrupted inherited-SDK observation

This **partial** run used the correct Node 24.19.0 but still inherited the shared terminal server's Nix SDK environment. `/usr/bin/clang` is a dispatcher, not a guarantee of Xcode selection: `DEVELOPER_DIR` selected `/nix/store/rq88pmfxfl98jhzfhb46jvl0rl8nyd6g-apple-sdk-14.4`, with its MacOSX.sdk as SDKROOT. The recorded linker output correctly identified Nix Clang 21.1.8, so the strengthened provenance guard refused an ordinary Xcode-context comparison despite identical dispatcher hashes.

The job was paused and stopped after confirming its compiler children were already defunct. The checkpoint contains **18/404** complete ready cases. Two binaries were subsequently compared with the exact recorded Node/SDK/linker context: both byte-equal, with valid Node baselines and no hangs. Remaining cases are unmeasured; incomplete per-command output is not promoted to a completed case.

Raw evidence, control, map session, partial map and differential results remain unchanged. This is not the final reference run. The replacement uses a verified clean environment with Node 24.19.0 and the actual Xcode developer directory; the inherited SDKROOT/TOOLCHAINS are cleared. Dispatcher hashes alone are insufficient to prove tool selection, so exact linker output/status remains part of the context identity.
