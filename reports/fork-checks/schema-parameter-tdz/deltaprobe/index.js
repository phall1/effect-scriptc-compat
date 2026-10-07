export function defaultTDZ(value, flag = value instanceof C, C) { return flag; }
export function aliasPredicate(C) { const Alias = C; return u => u instanceof Alias; }
export function result() {
  try { console.log("tdz", defaultTDZ({}, undefined, globalThis.URL)); } catch (e) { console.log("tdz", e.name); }
  try { console.log("alias", aliasPredicate(globalThis.URL)(new globalThis.URL("https://example.com"))); } catch (e) { console.log("alias", e.name); }
}
