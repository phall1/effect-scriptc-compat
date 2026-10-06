import { expect, test } from "vitest";
import { F64, UNDEFINED_T, arrayOf, type IrType } from "../../ir/ir.js";
import type { Lowerer } from "./lowerer.js";
import { hasArrayReference } from "./array-values.js";

const lowerer = {
  unions: new Map([
    ["optionalArray", { arms: [arrayOf(F64), UNDEFINED_T] }],
    ["optionalNumber", { arms: [F64, UNDEFINED_T] }],
  ]),
} as unknown as Lowerer;

test.each<[IrType, boolean]>([
  [arrayOf(F64), true],
  [{ kind: "union", unionId: "optionalArray" }, true],
  [{ kind: "union", unionId: "optionalNumber" }, false],
  [{ kind: "union", unionId: "unknown" }, false],
  [F64, false],
])("checked array reference recognition: %j", (type, expected) => {
  expect(hasArrayReference(lowerer, type)).toBe(expected);
});
