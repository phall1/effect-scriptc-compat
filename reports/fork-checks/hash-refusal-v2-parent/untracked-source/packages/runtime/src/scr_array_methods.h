#ifndef SCR_ARRAY_METHODS_H
#define SCR_ARRAY_METHODS_H

/* One inventory for Array.prototype method construction and presence queries. */
static const struct { const char *name; size_t arity; } scr_array_prototype_methods[] = {
  {"constructor", 1},
  {"at", 1}, {"concat", 1}, {"copyWithin", 2}, {"fill", 1}, {"find", 1}, {"findIndex", 1},
  {"findLast", 1}, {"findLastIndex", 1}, {"lastIndexOf", 1}, {"pop", 0}, {"push", 1},
  {"reverse", 0}, {"shift", 0}, {"unshift", 1}, {"slice", 2}, {"sort", 1}, {"splice", 2},
  {"includes", 1}, {"indexOf", 1}, {"join", 1}, {"keys", 0}, {"entries", 0}, {"values", 0},
  {"forEach", 1}, {"filter", 1}, {"flat", 0}, {"flatMap", 1}, {"map", 1}, {"every", 1},
  {"some", 1}, {"reduce", 1}, {"reduceRight", 1}, {"toReversed", 0}, {"toSorted", 1},
  {"toSpliced", 2}, {"with", 2}, {"toLocaleString", 0}, {"toString", 0},
};

#endif
