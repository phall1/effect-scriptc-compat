import { varRef } from "../../ir/build.js";
import { BOOL, type IrExpr, type IrType, type SrcLoc } from "../../ir/ir.js";
import * as ts from "../ts7/adapter.js";
import type { Lowerer } from "./lowerer.js";

const STRINGIFIABLE_KEYS: ReadonlySet<IrType["kind"]> = new Set([
  "string",
  "f64",
  "bool",
  "bigint",
  "nullT",
  "undefinedT",
]);

function stringifiableKey(lowerer: Lowerer, type: IrType): boolean {
  if (type.kind !== "union") return STRINGIFIABLE_KEYS.has(type.kind);
  return (
    lowerer.unions.get(type.unionId)?.arms.every((arm) => STRINGIFIABLE_KEYS.has(arm.kind)) ?? false
  );
}

/** Native arrays answer property presence without boxing or copying their elements.
 * Stabilize runtime keys before the receiver to preserve JavaScript's evaluation order. */
export function lowerArrayMembership(
  lowerer: Lowerer,
  expr: ts.BinaryExpression,
  loc: SrcLoc,
): IrExpr | null {
  if (lowerer.mapTypeOf(lowerer.typeOf(expr.right))?.kind !== "array") return null;
  // Constant spelling does not erase the key expression's TDZ or other effects.
  const rawKey = lowerer.lowerExpr(expr.left);
  if (!stringifiableKey(lowerer, rawKey.type)) return null;
  const key = lowerer.ensureString(rawKey, expr.left);
  const receiver = lowerer.lowerExpr(expr.right);
  if (receiver.type.kind !== "array") return null;
  if (key.kind === "strLit") {
    return { kind: "arrayHas", arr: receiver, index: key, type: BOOL, loc };
  }
  const local = lowerer.declareHiddenLocal("%arrayInKey", key.type);
  return {
    kind: "seqExpr",
    stmts: [{ kind: "varDecl", localId: local.id, init: key, loc }],
    result: {
      kind: "arrayHas",
      arr: receiver,
      index: varRef(local.id, key.type, loc),
      type: BOOL,
      loc,
    },
    type: BOOL,
    loc,
  };
}
