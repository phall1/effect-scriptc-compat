import type { Coverage, Diagnostic, Tier } from './types.ts';

export function stripAnsi(text: string): string { return text.replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, ''); }
export function diagnostics(text: string): Diagnostic[] {
  const lines = stripAnsi(text).split(/\r?\n/);
  const starts = lines.flatMap((line, i) => /^.+:\d+:\d+ - error SC\d{4}:/.test(line) ? [i] : []);
  if (starts.length) return starts.map((start, k) => {
    const header = lines[start]!, block = lines.slice(start, starts[k + 1] ?? lines.length);
    const match = header.match(/^(.+:\d+:\d+) - error (SC\d{4}): (.*)$/)!;
    return { code: match[2]!, message: match[3]!, sourceLocations: [match[1]!],
      rewriteHints: block.filter(line => /^\s*(?:hint|help|rewrite|suggestion):/i.test(line)).map(line => line.trim()) };
  });
  // Coverage groups have no source frames. Keep their names without borrowing
  // adjacent locations/hints from unrelated groups.
  return [...new Set(lines.join('\n').match(/\bSC\d{4}\b/g) ?? [])].map(code => ({ code,
    message: lines.filter(line => line.includes(code)).map(line => line.trim()).join('\n'), sourceLocations: [], rewriteHints: [] }));
}
export function parseCoverage(text: string): Coverage {
  const clean = stripAnsi(text), lines = clean.split(/\r?\n/);
  const match = (re: RegExp): number | null => { const m = clean.match(re); return m ? Number(m[1]) : null; };
  const total = match(/statements analyzed\s+(\d+)/), stat = match(/compile statically\s+(\d+)/);
  const dynamic = match(/compile dynamically\s+(\d+)/);
  let section = '';
  const deferredSites: string[] = [], notes: string[] = [];
  for (const line of lines) {
    if (/deferred to runtime\s+\d+\s+sites?/.test(line)) { section = 'deferred'; notes.push(line.trim()); continue; }
    if (/^\s*(?:blockers:|runs with --dynamic|in unreached code|fully static|rewrite|npm packages|embedded npm)/.test(line)) section = '';
    if (section === 'deferred' && /^\s*×\d+/.test(line)) deferredSites.push(line.trim());
    if (/island fallback|lazy trap|not analyzed|in unreached code|fully static/.test(line)) notes.push(line.trim());
  }
  // Conservative: a nonstandard deferred header still prevents a false static label.
  if (/deferred to runtime/.test(clean) && deferredSites.length === 0) deferredSites.push(...lines.filter(l => /deferred to runtime/.test(l)).map(l => l.trim()));
  return {
    parsed: total !== null && stat !== null && Number.isSafeInteger(total) && Number.isSafeInteger(stat) && stat + (dynamic ?? 0) <= total,
    counts: { total, static: stat, dynamic: total !== null ? (dynamic ?? 0) : null,
      unsupported: total !== null && stat !== null ? Math.max(0, total - stat - (dynamic ?? 0)) : null },
    deferredSiteCount: match(/deferred to runtime\s+(\d+)\s+sites?/) ?? 0,
    countScope: 'scriptc-program-statements-including-unreached-remainder', diagnostics: diagnostics(clean), deferredSites, notes,
  };
}
export function tierFor(staticBuilt: boolean, coverage: Coverage, dynamicBuilt: boolean): Tier {
  if (staticBuilt) {
    // Unparseable coverage cannot establish compatibility. Preserve an explicitly
    // conservative deferred result even when the compiler returned a binary.
    if (!coverage.parsed || coverage.deferredSites.length > 0 || coverage.notes.some(n => /island fallback|lazy trap/.test(n)) || (coverage.counts.dynamic ?? 0) > 0) return 'deferred';
    return 'static';
  }
  return dynamicBuilt ? 'dynamic-fallback' : 'rejected';
}

/** Source locations from the compiler's own default .ll output. Match exact
 * reported deferred construct names, never infer reachability from every fence
 * string that happens to survive in LLVM. Missing matches stay unknown. */
export function enrichDeferredLocations(coverage: Coverage, llvm: string): void {
  const normalized = (s: string): string => s.replace(/\s+/g, ' ').trim();
  const reported = coverage.deferredSites.flatMap(row => {
    const m = row.match(/^\s*×\d+\s+(.+?)\s+(SC\d{4})\s*$/);
    return m ? [{ message: normalized(m[1]!), code: m[2]! }] : [];
  });
  for (const literal of llvm.matchAll(/\bc"([^"\r\n]*)"/g)) {
    const bytes: number[] = [];
    const raw = literal[1]!;
    for (let i = 0; i < raw.length; i++) {
      if (raw[i] === '\\' && /^[0-9a-f]{2}$/i.test(raw.slice(i + 1, i + 3))) { bytes.push(parseInt(raw.slice(i + 1, i + 3), 16)); i += 2; }
      else bytes.push(...Buffer.from(raw[i]!, 'utf8'));
    }
    const value = Buffer.from(bytes).toString('utf8').replace(/\0+$/, '');
    const m = value.match(/^(.*?) \[(SC\d{4}) at (.+?:\d+(?::\d+)?)\]$/);
    if (!m || !reported.some(r => r.code === m[2] && r.message === normalized(m[1]!))) continue;
    const d = coverage.diagnostics.find(d => d.code === m[2]);
    if (d && !d.sourceLocations.includes(m[3]!)) d.sourceLocations.push(m[3]!);
  }
}
