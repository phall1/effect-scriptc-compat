// Published Result examples. Each call is a documented one-liner with a fixed result.
import * as Option from "effect/Option"
import * as Result from "effect/Result"

const observed = [
  Result.succeed(42),
  Result.fail("Something went wrong"),
  Result.failVoid,
  Result.fromNullishOr(1, () => "fallback"),
  Result.fromNullishOr(null, () => "fallback"),
  Result.fromOption(Option.some(1), () => "missing"),
  Result.fromOption(Option.none(), () => "missing"),
  Result.try(() => JSON.parse('{"name": "Alice"}')),
  Result.isResult(Result.succeed(1)),
  Result.getSuccess(Result.succeed("ok")),
  Result.getSuccess(Result.fail("err")),
  Result.getFailure(Result.succeed("ok")),
  Result.getFailure(Result.fail("err")),
  Result.merge(Result.succeed(42)),
  Result.merge(Result.fail("error")),
  Result.getOrElse(Result.succeed(1), () => 0),
  Result.getOrElse(Result.fail("err"), () => 0),
  Result.getOrNull(Result.succeed(1)),
  Result.getOrNull(Result.fail("err")),
  Result.getOrUndefined(Result.succeed(1)),
  Result.getOrUndefined(Result.fail("err")),
  Result.getOrThrowWith(Result.succeed(1), () => new Error("fail")),
  Result.getOrThrow(Result.succeed(1)),
  Result.all([Result.succeed(1), Result.succeed("two")]),
  Result.flip(Result.succeed(42)),
  Result.flip(Result.fail("error")),
  Result.transposeOption(Option.some(Result.succeed(42))),
  Result.succeedNone,
  Result.succeedSome(42),
]
console.log(JSON.stringify(observed))
