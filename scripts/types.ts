export type CaseStatus = 'ready' | 'skipped-needs-io' | 'uncovered';
export interface Case {
  id: string; module: string; entrypoint: string; family: string; file: string;
  status: CaseStatus; reason?: string; api: string[]; expectedStdout?: string;
}
export interface Run {
  command: string[]; cwd: string; exitCode: number | null; signal: string | null;
  timedOut: boolean; spawnError: string | null; durationMs: number;
  maxRssKb: number | null; stdout: string; stderr: string;
  stdoutBase64: string; stderrBase64: string;
}
export interface Diagnostic {
  code: string; message: string; sourceLocations: string[]; rewriteHints: string[];
}
export interface Coverage {
  parsed: boolean; counts: { static: number | null; dynamic: number | null; unsupported: number | null; total: number | null };
  countScope: 'scriptc-program-statements-including-unreached-remainder';
  deferredSiteCount: number; diagnostics: Diagnostic[]; deferredSites: string[]; notes: string[];
}
export interface Attempt {
  mode: 'static' | 'dynamic'; coverage: Run; parsedCoverage: Coverage; build: Run;
  diagnostics: Diagnostic[]; binary: string | null; binarySize: number | null; binarySha256: string | null;
}
export type Tier = 'static' | 'deferred' | 'dynamic-fallback' | 'rejected';
export interface CaseResult extends Case {
  effectVersion: string; scriptcVersion: string; sourceSha256: string; cacheIdentity?: string;
  typecheck: Run | null; status: CaseStatus; tier: Tier | null;
  staticAttempt: Attempt | null; dynamicAttempt: Attempt | null;
  scCodes: string[]; sourceLocations: string[]; rewriteHints: string[];
  deferredSites: string[]; notes: string[];
}
export interface Provenance {
  nodeVersion: string; pnpmVersion: string | null; effectVersion: string;
  typescriptVersion: string; scriptcVersion: string; scriptcVersionOutput: string;
  scriptcPrintedCommit: string | null; scriptcReleaseTag: string; scriptcReleaseCommit: string;
  hostTriple: string; platform: string; arch: string; kernel: string;
  toolchainPins: unknown; lockfileSha256: string; effectPackageJsonSha256: string;
  cliSha256: string | null; executableHashes?: Record<string, string | null>; commands: Record<string, Run>;
}
export interface MapReport {
  schemaVersion: 1; partial?: boolean; generatedAt: string; provenance: Provenance;
  options: { compileTimeoutMs: number; coverageTimeoutMs: number; jobs: number | null };
  inventory: unknown; cases: CaseResult[]; summary: Record<string, unknown>;
}
export interface MapSession {
  schemaVersion: 1; provenance: Provenance; options: MapReport['options'];
  cacheIdentity: string; manifestSha256: string; caseIds: string[];
  reportPath: string; partial: boolean; shardIndex: number; shardTotal: number;
}
export interface Differential {
  caseId: string; module: string; family: string; entrypoint: string; tier: Tier;
  mode: 'static' | 'dynamic'; binary: string; binarySha256: string;
  node: Run; native: Run; equal: boolean; differences: string[];
  finding: 'false coverage' | 'deferred runtime trap' | 'semantic divergence' | 'crash/hang' | null;
  signature: string | null; baselineValid: boolean;
}
export interface DiffReport {
  schemaVersion: 1; partial?: boolean; generatedAt: string; provenance: Provenance; timeoutMs: 30000;
  results: Differential[]; summary: Record<string, unknown>;
}
