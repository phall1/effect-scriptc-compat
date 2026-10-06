// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/http/FindMyWay";
const router = M.make<string>();
router.on("GET", "/items/:id", "read-item");
const match = router.find("GET", "/items/42?view=full");
console.log(JSON.stringify([match, router.has("POST", "/items/42")]));
