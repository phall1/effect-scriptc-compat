#!/usr/bin/env node
/**
 * Move the scriptc fork branch `effect-compat` onto latest upstream main,
 * rebuild the local Darwin arm64 toolchain when its inputs changed, and run
 * one full Effect 4.0.2 compare.
 *
 * The branch name stays `effect-compat`. scriptc's package version is read
 * from packages/compiler/package.json. Campaign directories are never reused.
 * Node and Effect are checked before compare.mjs creates a campaign directory.
 *
 *   node scripts/update-compat.mjs
 *   node scripts/update-compat.mjs --write-site
 *
 * --write-site rewrites ../phall.io/src/data/scriptc-compat.json from the
 * finished report. It does not deploy.
 */

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const nodeBin = "/Users/phall/.local/share/mise/installs/node/24.21.0/bin/node";
const harness = "/Users/phall/workspace/effect-scriptc-compat";
const compiler = "/Users/phall/workspace/scriptc-effect";
const siteData = "/Users/phall/workspace/phall.io/src/data/scriptc-compat.json";
const branch = "effect-compat";
const requiredNode = "v24.21.0";
const requiredEffect = "4.0.2";

const writeSite = process.argv.includes("--write-site");

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

function run(command, args, cwd) {
  const result = spawnSync(command, args, { cwd, encoding: "utf8" });
  if (result.status !== 0) {
    fail(`${command} ${args.join(" ")} failed in ${cwd}\n${result.stdout ?? ""}${result.stderr ?? ""}`);
  }
  return (result.stdout ?? "").trim();
}

function campaignName(version, now = new Date()) {
  const stamp = now.toISOString().replace(/[-:]/g, "").replace(/\..*/, "").toLowerCase();
  const name = `effect-${version.replaceAll(".", "")}-${stamp}`;
  if (!/^[a-z0-9-]+$/.test(name)) fail(`Bad campaign name ${name}`);
  return name;
}

const nodeVersion = run(nodeBin, ["-p", "process.version"], harness);
if (nodeVersion !== requiredNode) fail(`Need Node ${requiredNode}, got ${nodeVersion}`);
const effectVersion = JSON.parse(
  readFileSync(join(harness, "node_modules/effect/package.json"), "utf8"),
).version;
if (effectVersion !== requiredEffect) fail(`Need effect@${requiredEffect}, got ${effectVersion}`);

run("git", ["fetch", "upstream"], compiler);
run("git", ["checkout", branch], compiler);
const dirty = run("git", ["status", "--porcelain", "--", "packages", "native"], compiler);
if (dirty) fail(`packages/ or native/ is dirty on ${branch}:\n${dirty}`);
const contains = spawnSync("git", ["merge-base", "--is-ancestor", "upstream/main", "HEAD"], {
  cwd: compiler,
});
if (contains.status !== 0) {
  const rebase = spawnSync("git", ["rebase", "upstream/main"], { cwd: compiler, encoding: "utf8" });
  if (rebase.status !== 0) {
    fail(`Rebase onto upstream/main stopped. Resolve it, then run this again.\n${rebase.stdout ?? ""}${rebase.stderr ?? ""}`);
  }
}

const scriptcVersion = JSON.parse(
  readFileSync(join(compiler, "packages/compiler/package.json"), "utf8"),
).version;
const llvmTree = run("git", ["rev-parse", "HEAD:native/llvm-codegen"], compiler);
const runtimeTree = run("git", ["rev-parse", "HEAD:packages/runtime/src"], compiler);
const stampPath = join(compiler, ".effect-compat/toolchain-stamp.json");
const stamp = existsSync(stampPath) ? JSON.parse(readFileSync(stampPath, "utf8")) : null;
const toolchainCurrent =
  stamp?.scriptcVersion === scriptcVersion &&
  stamp?.llvmTree === llvmTree &&
  stamp?.runtimeTree === runtimeTree;

const buildEnv = {
  ...process.env,
  DEVELOPER_DIR: "/Applications/Xcode.app/Contents/Developer",
  CC: "/usr/bin/clang",
  CXX: "/usr/bin/clang++",
  AR: "/usr/bin/ar",
  PATH: `${dirname(nodeBin)}:/Users/phall/.npm-global/bin:/opt/homebrew/bin:/usr/bin:/bin`,
};
delete buildEnv.SDKROOT;
delete buildEnv.TOOLCHAINS;

function build(args) {
  const result = spawnSync(nodeBin, args, { cwd: compiler, env: buildEnv, stdio: "inherit" });
  if (result.status !== 0) fail(`build failed: ${args.join(" ")}`);
}

if (!toolchainCurrent) {
  build(["packages/llvm-darwin-arm64/scripts/build.mjs"]);
  build(["packages/runtime-darwin-arm64/scripts/build.mjs"]);
  mkdirSync(join(compiler, ".effect-compat"), { recursive: true });
  writeFileSync(
    stampPath,
    JSON.stringify({ scriptcVersion, llvmTree, runtimeTree }, null, 2) + "\n",
  );
}

const pnpm = "/Users/phall/.npm-global/bin/pnpm";
for (const filter of ["@scriptc/compiler", "scriptc"]) {
  const result = spawnSync(pnpm, ["--filter", filter, "run", "build"], {
    cwd: compiler,
    env: buildEnv,
    stdio: "inherit",
  });
  if (result.status !== 0) fail(`${filter} dist build failed`);
}

const name = campaignName(scriptcVersion);
const out = join(compiler, ".effect-compat", name);
if (existsSync(out)) fail(`Campaign ${name} already exists`);
const compare = spawnSync(nodeBin, [join(compiler, ".effect-compat/compare.mjs"), name], {
  cwd: compiler,
  env: buildEnv,
  stdio: "inherit",
});
const reportPath = join(out, "report.json");
if (!existsSync(reportPath)) fail(`compare exited ${compare.status} without a report`);
const report = JSON.parse(readFileSync(reportPath, "utf8"));
process.stdout.write(`${JSON.stringify(report.summary)}\n`);
if (compare.status !== 0 || report.summary?.corpusParity !== true) {
  process.exit(compare.status || 1);
}

if (writeSite) {
  const upstream = run("git", ["rev-parse", "upstream/main"], compiler);
  const payload = {
    effectVersion: report.effectVersion,
    scriptcVersion,
    node: report.node,
    optimization: report.optimization,
    dynamic: report.dynamic,
    target: report.target,
    ready: report.denominator,
    measured: report.summary.measured,
    equal: report.summary.equal,
    rejected: report.summary.rejected,
    mismatched: report.summary.mismatched,
    invalidBaselines: report.summary.invalidBaselines,
    corpusParity: report.summary.corpusParity,
    measurementComplete: report.summary.measurementComplete,
    partial: report.summary.partial,
    corpusComplete: report.summary.corpusComplete,
    measuredAt: report.finishedAt,
    campaign: name,
    fork: { owner: "phall1", repo: "scriptc", branch, sha: report.sourceSha },
    upstream: { owner: "vercel-labs", repo: "scriptc", branch: "main", sha: upstream },
  };
  writeFileSync(siteData, JSON.stringify(payload, null, 2) + "\n");
  process.stdout.write(`wrote ${siteData}\n`);
}

