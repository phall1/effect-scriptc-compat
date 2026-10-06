import { expect, test } from "vitest";
import { BOOL, F64, STRING, arrayOf, type IrExpr, type IrType } from "../../ir/ir.js";
import type * as ts from "../ts7/adapter.js";
import type { Lowerer } from "./lowerer.js";
import { lowerArrayMembership } from "./array-membership.js";

const loc = { file: "membership.ts", start: 0, end: 1 };
const arr = arrayOf(F64);
const receiver: IrExpr = { kind: "call", callee: "receiver", args: [], type: arr, loc };
const expr = { left: {}, right: {} } as ts.BinaryExpression;

function stub(key: IrExpr, folded: string | null = null, mapped: IrType = arr) {
  const reads: ts.Expression[] = [];
  const lowerer = {
    unions: new Map([["optionalKey", { arms: [STRING, { kind: "undefinedT" }] }]]),
    typeOf: () => ({}),
    mapTypeOf: () => mapped,
    foldedStringKeyOf: () => folded,
    lowerExpr: (node: ts.Expression) => {
      reads.push(node);
      return node === expr.left ? key : receiver;
    },
    ensureString: (value: IrExpr): IrExpr =>
      value.type.kind === "string"
        ? value
        : { kind: "toString", operand: value, type: STRING, loc },
    declareHiddenLocal: () => ({ id: "key.0" }),
  } as unknown as Lowerer;
  return { lowerer, reads };
}

test("literal array keys query the original receiver without boxing", () => {
  const { lowerer, reads } = stub(
    { kind: "strLit", value: "~effect/Hash", type: STRING, loc },
    "~effect/Hash",
  );
  expect(lowerArrayMembership(lowerer, expr, loc)).toEqual({
    kind: "arrayHas",
    arr: receiver,
    index: { kind: "strLit", value: "~effect/Hash", type: STRING, loc },
    type: BOOL,
    loc,
  });
  expect(reads).toEqual([expr.left, expr.right]);
});

test("folded identifiers still evaluate their binding before the receiver", () => {
  const key: IrExpr = { kind: "varRef", localId: "key", type: STRING, loc };
  const { lowerer, reads } = stub(key, "0");
  expect(lowerArrayMembership(lowerer, expr, loc)).toMatchObject({
    kind: "seqExpr",
    stmts: [{ kind: "varDecl", init: key }],
  });
  expect(reads).toEqual([expr.left, expr.right]);
});

test.each([STRING, F64])("runtime $kind keys are single-evaluated before the receiver", (type) => {
  const key: IrExpr = { kind: "call", callee: "key", args: [], type, loc };
  const { lowerer, reads } = stub(key);
  const result = lowerArrayMembership(lowerer, expr, loc);
  expect(result).toMatchObject({
    kind: "seqExpr",
    stmts: [{ kind: "varDecl", localId: "key.0" }],
    result: {
      kind: "arrayHas",
      arr: receiver,
      index: { kind: "varRef", localId: "key.0", type: STRING },
    },
  });
  if (result?.kind !== "seqExpr" || result.stmts[0]?.kind !== "varDecl")
    throw new Error("missing key stabilization");
  expect(result.stmts[0].init).toEqual(
    type.kind === "string" ? key : { kind: "toString", operand: key, type: STRING, loc },
  );
  expect(reads).toEqual([expr.left, expr.right]);
});

test("optional array-derived keys stringify without copying the array", () => {
  const key: IrExpr = {
    kind: "varRef",
    localId: "key",
    type: { kind: "union", unionId: "optionalKey" },
    loc,
  };
  const { lowerer } = stub(key);
  expect(lowerArrayMembership(lowerer, expr, loc)).toMatchObject({
    kind: "seqExpr",
    stmts: [{ kind: "varDecl", init: { kind: "toString", operand: key, type: STRING } }],
    result: { kind: "arrayHas", arr: receiver },
  });
});

test("non-array receivers stay on the existing membership paths", () => {
  const { lowerer, reads } = stub({ kind: "strLit", value: "key", type: STRING, loc }, null, {
    kind: "record",
    shapeId: "r",
  });
  expect(lowerArrayMembership(lowerer, expr, loc)).toBeNull();
  expect(reads).toEqual([]);
});
