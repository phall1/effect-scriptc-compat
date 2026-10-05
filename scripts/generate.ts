/** Generate module inventory and executable probes from the pinned installed package.
 * Published declaration examples are authoritative; unsafe/non-terminal examples are excluded.
 * Uncovered modules are visible, never promoted to compatibility by import-only probes.
 */
import { createHash } from "node:crypto"
import { existsSync, readFileSync, readdirSync, writeFileSync, mkdirSync, unlinkSync, renameSync } from "node:fs"
import { dirname, join, relative, resolve } from "node:path"
import { spawnSync } from "node:child_process"
import { stripTypeScriptTypes } from "node:module"

const root = resolve(import.meta.dirname, "..")
function writeJson(path: string, value: unknown): void {
  const temporary = `${path}.${process.pid}.tmp`
  writeFileSync(temporary, JSON.stringify(value, null, 2) + "\n")
  renameSync(temporary, path)
}
const packageRoot = join(root, "node_modules/effect")
const pkg = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"))
if (pkg.version !== "4.0.1") throw new Error(`Expected effect@4.0.1, got ${pkg.version}`)
const dist = join(packageRoot, "dist")
const exportsMap = pkg.exports as Record<string, string | null>
mkdirSync(join(root, "cases"), { recursive: true })

export interface Case {
  id: string
  module: string
  entrypoint: string
  family: string
  file: string
  status: "ready" | "skipped-needs-io" | "uncovered"
  reason?: string
  api: string[]
  expectedStdout?: string
  declaration?: string
  declarationSha256?: string
  exampleIndex?: number
}
interface Surface {
  module: string
  entrypoint: string
  declaration: string
  declarationSha256: string
  runtimeExports: string[]
  publicValueExports: string[]
  namespaceExports: string[]
}
function walk(path: string): string[] {
  return readdirSync(path, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(join(path, e.name)) : [join(path, e.name)])
}
function publicTarget(specifier: string): string | null | undefined {
  if (Object.hasOwn(exportsMap, specifier)) return exportsMap[specifier]
  const patterns = Object.entries(exportsMap).filter(([k]) => k.includes("*")).sort(([a], [b]) => b.indexOf("*") - a.indexOf("*") || b.length - a.length)
  for (const [key, target] of patterns) {
    const [prefix, suffix] = key.split("*")
    if (specifier.startsWith(prefix!) && specifier.endsWith(suffix!)) return target === null ? null : target.replace("*", specifier.slice(prefix!.length, suffix!.length ? -suffix!.length : undefined))
  }
}
function runtimeExportNames(path: string, visited = new Set<string>()): string[] {
  if (visited.has(path)) return []
  visited.add(path)
  // Read the published JS export syntax to distinguish re-exported runtime bindings
  // from type-only .d.ts names. Never execute namespace initialization to enumerate it.
  const code = readFileSync(path, "utf8").replace(/\/\*[\s\S]*?\*\//g, "")
  const names = new Set([...code.matchAll(/^export\s+(?:declare\s+)?(?:async\s+)?(?:const|let|var|function\s*\*?|class|namespace)\s+(\w+)/gm)].map(m => m[1]!))
  for (const match of code.matchAll(/^export\s*\{([^}]+)\}/gm)) {
    for (const binding of match[1]!.split(",")) {
      const words = binding.trim().split(/\s+as\s+/)
      const name = words.at(-1)!.trim().replace(/^["']|["']$/g, "")
      if (name) names.add(name)
    }
  }
  for (const match of code.matchAll(/^export\s*\*\s+as\s+(\w+)\s+from/gm)) names.add(match[1]!)
  for (const match of code.matchAll(/^export\s*\*\s+from\s+["']([^"']+)["']/gm)) {
    for (const name of runtimeExportNames(resolve(dirname(path), path.endsWith(".d.ts") ? match[1]!.replace(/\.ts$/, ".d.ts") : match[1]!), visited)) if (name !== "default") names.add(name)
  }
  if (/^export\s+default\s/m.test(code)) names.add("default")
  return [...names].sort()
}
const surfaces: Surface[] = []
for (const path of walk(dist).filter(p => p.endsWith(".d.ts"))) {
  const rel = relative(dist, path).replaceAll("\\", "/").replace(/\.d\.ts$/, "")
  let specifier = `./${rel}`
  if (rel === "index") specifier = "."
  else if (rel.endsWith("/index") && Object.hasOwn(exportsMap, `./${rel.slice(0, -6)}`)) specifier = `./${rel.slice(0, -6)}`
  if (publicTarget(specifier) == null) continue
  const source = readFileSync(path, "utf8")
  surfaces.push({
    module: specifier === "." ? "effect" : specifier.slice(2),
    entrypoint: specifier === "." ? "effect" : `effect/${specifier.slice(2)}`,
    declaration: `node_modules/effect/${relative(packageRoot, path).replaceAll("\\", "/")}`,
    declarationSha256: createHash("sha256").update(source).digest("hex"),
    runtimeExports: runtimeExportNames(path.replace(/\.d\.ts$/, ".js")),
    publicValueExports: runtimeExportNames(path.replace(/\.d\.ts$/, ".js")).filter(name => runtimeExportNames(path).includes(name)),
    namespaceExports: [...source.matchAll(/^export \* as (\w+) from/gm)].map(m => m[1]!)
  })
}
surfaces.sort((a, b) => a.entrypoint.localeCompare(b.entrypoint))
const manual = ["core-cases.json", "namespace-cases.json", "additional-cases.json", "remaining-core-cases.json"].flatMap(file => existsSync(join(root, "cases", file)) ? JSON.parse(readFileSync(join(root, "cases", file), "utf8")) as Case[] : [])
const covered = new Set(manual.filter(c => c.status === "ready").map(c => c.module))
const reuseDocumented = process.argv.includes("--reuse-documented")
function hasRuntimeReference(code: string, surface: Surface): boolean {
  try {
    const runtime = stripTypeScriptTypes(code).replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "")
    const name = surface.module.split("/").at(-1)!
    return new RegExp(`\\b${name}\\.`).test(runtime) && !/Arbitrary\.(?:sampleEffect|checkEffect)/.test(runtime)
  } catch { return false }
}
const reusableDocs: Case[] = reuseDocumented ? (JSON.parse(readFileSync(join(root, "cases/documented-cases.json"), "utf8")) as Case[]).filter(c => {
  const surface = surfaces.find(s => s.module === c.module)
  return surface && hasRuntimeReference(readFileSync(join(root, c.file), "utf8"), surface)
}) : []
function directImport(code: string, surface: Surface): string {
  const name = surface.module.split("/").at(-1)!
  return code.replace(/import\s*\{([^}]+)\}\s*from\s*["']([^"']+)["'];?/g, (full, bindings: string, from: string) => {
    if (from !== "effect" && !from.startsWith("effect/")) return full
    const entries = bindings.split(",").map(s => s.trim())
    const wanted = entries.find(s => s === name || s.startsWith(`${name} as `))
    if (!wanted || from === surface.entrypoint) return full
    const alias = wanted.includes(" as ") ? wanted.split(" as ")[1]! : name
    const others = entries.filter(s => s !== wanted)
    return `import * as ${alias} from "${surface.entrypoint}"` + (others.length ? `\nimport { ${others.join(", ")} } from "${from}"` : "")
  })
}
covered.add("effect")
const allDocs: { surface: Surface; candidates: { code: string; index: number; api: string[] }[]; index: number; selected?: Case }[] = []
const rejectedExamples: Record<string, string[]> = {}
const unsafe = /\b(?:Math\.random|Date\.now|performance\.now|crypto\.random|Random\.|randomUUID|fetch\s*\(|process\.|Bun\.|Deno\.|FileSystem\.|Terminal\.|Stdio\.|HttpClient\.execute|HttpClient\.get|HttpServer\.serve|Command\.run|ChildProcess|setInterval|setTimeout|while\s*\(true|forever|readFile|writeFile|removeFile|makeTemp|processCommand)\b|new Date\(\s*\)|Effect\.log\w*\(|console\.(?:log|error|warn|info|debug)\(|\.pipe\(\s*Effect\.forkDetach/;
function candidatesFor(surface: Surface): { code: string; index: number; api: string[] }[] {
  const source = readFileSync(join(root, surface.declaration), "utf8")
  const blocks = [...source.matchAll(/```(?:ts|typescript)[^\n]*\n([\s\S]*?)```/g)]
  const found: { code: string; index: number; api: string[] }[] = []
  const seen = new Set<string>()
  for (let index = 0; index < blocks.length; index++) {
    let code = blocks[index]![1]!.split("\n").map(line => line.replace(/^\s*\* ?/, "")).join("\n").trim()
    if (seen.has(code)) continue
    seen.add(code)
    if (unsafe.test(code) || /@ts-(?:expect-error|ignore)|\b(?:declare|setTimeout|setInterval)\b/.test(code)) continue
    const imports = [...code.matchAll(/(?:from\s+|import\s*)["']([^"']+)["']/g)].map(m => m[1]!)
    if (!imports.length || imports.some(s => s !== "effect" && !s.startsWith("effect/"))) continue
    let observed = 0
    code = code.split("\n").map(line => {
      const match = /^([^\s/].*?)\s+\/\/\s*=>.*$/.exec(line)
      if (!match || /^(?:const|let|var|return|throw|export|type|interface|class|import|yield|case)\b/.test(match[1]!)) return line
      const expression = match[1]!.trim().replace(/;$/, "")
      if (/^[})\]]|[=:{]$/.test(expression)) return line
      observed++
      return `__compatObserved.push(${expression})`
    }).join("\n")
    if (!observed || !hasRuntimeReference(code, surface)) continue
    const apis = [...new Set([...code.matchAll(/\b([A-Z]\w*)\.(\w+)\s*(?:[<(]|\b)/g)].map(m => `${m[1]}.${m[2]}`))]
    if (!apis.some(a => a.startsWith(`${surface.module.split("/").at(-1)}.`))) continue
    // Only the observation boundary is added. The documented API idioms remain intact.
    code = directImport(code, surface)
    code = `// Generated from ${surface.declaration}, example ${index}.\n// SHA-256: ${surface.declarationSha256}\nconst __compatObserved: unknown[] = []\n${code}\nconsole.log(JSON.stringify(__compatObserved))\n`
    found.push({ code, index, api: apis })
  }
  return found
}
for (const surface of surfaces) {
  if (covered.has(surface.module) || surface.namespaceExports.length) continue
  if (reusableDocs.some(c => c.module === surface.module)) continue
  const candidates = candidatesFor(surface)
  if (candidates.length) allDocs.push({ surface, candidates, index: 0 })
}
const tsc = join(root, "node_modules/.bin/tsc")
const docPath = (surface: Surface) => `cases/documented-${surface.module.replaceAll("/", "--").toLowerCase()}.ts`
let pending = allDocs.slice()
let round = 0
while (pending.length) {
  round++
  for (const item of pending) writeFileSync(join(root, docPath(item.surface)), item.candidates[item.index]!.code)
  const paths = pending.map(i => docPath(i.surface))
  const checked = spawnSync(tsc, ["--noEmit", "--ignoreConfig", "--strict", "--target", "ES2025", "--module", "ESNext", "--moduleResolution", "Bundler", "--types", "node", ...paths], { cwd: root, encoding: "utf8", timeout: 120_000, maxBuffer: 16 * 1024 * 1024 })
  if (checked.error) throw checked.error
  const errors = new Set([...`${checked.stdout}${checked.stderr}`.matchAll(/(cases\/documented-[^(:\s]+\.ts)(?:\(|:)/g)].map(m => m[1]!))
  if (checked.status && !errors.size) throw new Error(`Corpus compiler invocation failed: ${checked.stdout}${checked.stderr}`)
  const next: typeof pending = []
  for (const item of pending) {
    const file = docPath(item.surface)
    let failure: string | undefined = errors.has(file) ? "published example does not typecheck after terminal observation" : undefined
    let stdout = ""
    if (!failure) {
      for (let repeat = 0; repeat < 2; repeat++) {
        const result = spawnSync(process.execPath, [file], { cwd: root, encoding: "utf8", timeout: 2_000, maxBuffer: 1024 * 1024, env: { ...process.env, TZ: "UTC", NO_COLOR: "1", FORCE_COLOR: "0" } })
        if (result.error || result.status !== 0 || result.stderr || !result.stdout.endsWith("\n") || result.stdout.trimEnd().includes("\n") || result.stdout === "[]\n" || result.stdout === "[null]\n") {
          failure = `Node fixture validation failed (${result.error?.message ?? result.status}): ${result.stderr?.slice(0, 160)}`
          break
        }
        if (repeat && stdout !== result.stdout) { failure = "Node output is nondeterministic across repeated runs"; break }
        stdout = result.stdout
      }
    }
    if (failure) {
      ;(rejectedExamples[item.surface.module] ??= []).push(`example ${item.candidates[item.index]!.index}: ${failure}`)
      item.index++
      if (item.index < item.candidates.length) next.push(item)
      else unlinkSync(join(root, file))
    } else {
      const candidate = item.candidates[item.index]!
      item.selected = { id: file.slice(6, -3), module: item.surface.module, entrypoint: item.surface.entrypoint, family: item.surface.module, file, status: "ready", api: candidate.api, expectedStdout: stdout, declaration: item.surface.declaration, declarationSha256: item.surface.declarationSha256, exampleIndex: candidate.index }
    }
  }
  console.error(`Published examples round ${round}: ${pending.length - next.length} resolved, ${next.length} trying another example`)
  pending = next
}
const generated: Case[] = [...reusableDocs, ...allDocs.flatMap(i => i.selected ? [i.selected] : [])]
for (const c of generated) {
  const surface = surfaces.find(s => s.module === c.module)!
  writeFileSync(join(root, c.file), directImport(readFileSync(join(root, c.file), "utf8"), surface))
}
writeJson(join(root, "cases/documented-cases.json"), generated)
const cases = [...manual, ...generated.filter(c => !manual.some(m => m.module === c.module && m.status === "ready"))]
for (const surface of surfaces) {
  if (surface.module === "effect" || cases.some(c => c.status === "ready" && c.entrypoint === surface.entrypoint)) continue
  const representative = cases.find(c => c.status === "ready" && c.module === surface.module)
  if (!representative) continue
  const code = directImport(readFileSync(join(root, representative.file), "utf8"), surface)
  if (!code.includes(`from "${surface.entrypoint}"`)) continue
  const file = `cases/entrypoint-${surface.module.replaceAll("/", "--").toLowerCase()}.ts`
  writeFileSync(join(root, file), `// Direct published-entrypoint variant of ${representative.file}.\n${code}`)
  cases.push({ ...representative, id: file.slice(6, -3), entrypoint: surface.entrypoint, file, declaration: surface.declaration, declarationSha256: surface.declarationSha256 })
}
// Every actual package export appears in the map even if no executable fixture exists yet.
for (const surface of surfaces) {
  const direct = cases.filter(c => c.module === surface.module)
  if (direct.length || surface.module === "effect" && cases.some(c => c.entrypoint === "effect")) continue
  const typeOnly = !surface.publicValueExports.length
  cases.push({ id: `uncovered-${surface.module.replaceAll("/", "--").toLowerCase()}`, module: surface.module, entrypoint: surface.entrypoint, family: surface.module, file: `cases/uncovered-${surface.module.replaceAll("/", "--").toLowerCase()}.ts`, status: "uncovered", reason: typeOnly ? (surface.runtimeExports.length ? "Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass." : "Type-only public declaration has no runtime primary API to execute; recorded, not a compatibility pass.") : "No deterministic, typechecked terminal-value case has been selected from the published declarations; explicit corpus gap, not a compiler finding.", api: [], declaration: surface.declaration, declarationSha256: surface.declarationSha256 })
}
for (const c of cases) {
  if (c.status !== "ready") writeFileSync(join(root, c.file), `// ${c.entrypoint}\n// ${c.status}: ${c.reason}\n// This placeholder is not executed and is never a compatibility pass.\nexport {}\n`)
  const surface = surfaces.find(s => s.module === c.module)
  if (surface) { c.declaration ??= surface.declaration; c.declarationSha256 ??= surface.declarationSha256 }
  if (c.status === "ready" && c.file && !c.expectedStdout) {
    const r = spawnSync(process.execPath, [c.file], { cwd: root, encoding: "utf8", timeout: 5_000, maxBuffer: 1024 * 1024, env: { ...process.env, TZ: "UTC", NO_COLOR: "1", FORCE_COLOR: "0" } })
    if (r.error || r.status || r.stderr || !r.stdout.endsWith("\n") || r.stdout.trimEnd().includes("\n")) throw new Error(`Authored case ${c.id} fails Node fixture validation: ${r.stderr || r.error || r.stdout}`)
    c.expectedStdout = r.stdout
  }
}
const duplicateIds = cases.map(c => c.id).filter((id, i, all) => all.indexOf(id) !== i)
if (duplicateIds.length) throw new Error(`Duplicate case IDs: ${duplicateIds.join(", ")}`)
cases.sort((a, b) => a.id.localeCompare(b.id))
for (const c of cases.filter(c => c.status === "ready")) {
  const source = readFileSync(join(root, c.file), "utf8")
  const imports = [...source.matchAll(/(?:from\s+|import\s*)["']([^"']+)["']/g)].map(m => m[1]!)
  if (!imports.includes(c.entrypoint) || imports.some(s => s !== "effect" && !s.startsWith("effect/"))) throw new Error(`Invalid entrypoint/import in ${c.id}`)
  if (!c.expectedStdout?.endsWith("\n") || c.expectedStdout.trimEnd().includes("\n")) throw new Error(`Expected stdout is not one stable line in ${c.id}`)
}
writeJson(join(root, "cases/manifest.json"), cases)
writeJson(join(root, "cases/public-exports.json"), { effectVersion: pkg.version, runtimeExportInventoryMethod: "Published .js declarations, named exports, aliases, namespace exports, and recursive star reexports; publicValueExports intersects with published .d.ts export names", metadataExports: ["effect/package.json"], packageExports: exportsMap, surfaces, rejectedExamples })
console.log(JSON.stringify({ effectVersion: pkg.version, publicSurfaces: surfaces.length, ready: cases.filter(c => c.status === "ready").length, skippedNeedsIO: cases.filter(c => c.status === "skipped-needs-io").length, uncovered: cases.filter(c => c.status === "uncovered").length }))
