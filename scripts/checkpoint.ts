import { cases, fileSha, json, readJson } from './common.ts';
import { completedCase, pendingCase } from './checkpoints.ts';
import { saveMap } from './report.ts';
import type { MapSession } from './types.ts';

// Snapshot only atomic completed records belonging to this run's exact inputs.
// A fresh or interrupted map does not need an older map to bootstrap recovery.
const session = readJson<MapSession>('reports/map-session.json');
if (session.schemaVersion !== 1 || session.manifestSha256 !== fileSha('cases/manifest.json')) throw new Error('Checkpoint manifest changed; perform a fresh map instead');
const ids = new Set(session.caseIds);
const list = cases().filter(c => ids.has(c.id));
const results = list.map(c => completedCase(c, session) ?? pendingCase(c, session));
const report = saveMap(session, results);
json('reports/checkpoint.json', { generatedAt: report.generatedAt, status: report.partial ? 'partial' : 'mapped',
  reportPath: session.reportPath, cacheIdentity: session.cacheIdentity, summary: report.summary,
  executionContext: 'Completed exact-source/toolchain records only; pending cases are unmeasured.' });
console.log(JSON.stringify(report.summary, null, 2));
