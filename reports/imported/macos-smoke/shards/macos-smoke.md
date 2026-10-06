# Effect × scriptc coverage map

Generated: 2026-10-05T23:56:07.675Z · Partial: **true**

Effect **4.0.1** · scriptc **0.2.3** (v0.2.3, 52169979ee3fac98ad6651eb2a717fbbf4ac1f89) · Node **v24.19.0** · TypeScript **7.0.2** · aarch64-apple-darwin

> A successful build or green coverage footer is not compatibility when deferred sites remain. Static is a compiler classification; differentials determine observed equality. Pending and untested APIs are never implicitly compatible.

## Summary

```json
{
  "cases": 2,
  "modules": 2,
  "ready": 2,
  "completed": 2,
  "pending": 0,
  "caseTiers": {
    "static": 0,
    "deferred": 1,
    "dynamic-fallback": 0,
    "rejected": 1
  },
  "skippedNeedsIo": 0,
  "uncovered": 0,
  "moduleTiers": {
    "static": 0,
    "deferred": 1,
    "dynamic-fallback": 0,
    "rejected": 1,
    "pending": 0,
    "uncovered": 0,
    "skipped-needs-io": 0
  },
  "scCodesByCaseFrequency": {
    "SC3004": 1,
    "SC1043": 1,
    "SC1090": 1,
    "SC2020": 1
  }
}
```

## Effect

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| effect-succeed / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Number

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-number / effect/Number | deferred | built | not run | 1009/0/1 | 7/0 | 1008528 | SC1043, SC1090, SC2020 |

## Evidence and scope

- Complete raw stdout, stderr, command, status and timing: `reports/raw/`
- Exact toolchain, executable and lockfile hashes: `reports/provenance.json`
- Statement counts include the compiler program graph and unreached remainder, not just reachable Effect code.
- Empty source locations/hints mean unavailable, not absence of defects.
- Uncoded compiler crashes/timeouts are retained without invented SC codes.
