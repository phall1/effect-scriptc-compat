// A missing string-array read widens its lexical global to a boxed union.
// The uninitialized pointer must remain distinct from an initialized undefined arm.
function membership(): void {
  try {
    console.log("membership", key in [1]);
  } catch (error) {
    console.log("reference-error", error instanceof ReferenceError);
  }
}

membership();
const keys = ["0"];
const key = keys[5];
membership();
console.log("initialized", key === undefined);
