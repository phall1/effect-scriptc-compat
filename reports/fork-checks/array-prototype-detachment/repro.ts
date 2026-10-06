const detached: number[] = [1];
Object.setPrototypeOf(detached, null);
console.log("null", "map" in detached, "0" in detached);
