// || returns the first truthy value.
// ?? returns the first defined value.

let y = 1;
let x = y || "gaurav" // null, false, 0, undefined, truth value ko store karta hai
let z = y ?? "gaurav" // null, undefined, value ko store karta hai
console.log("x:", x)
console.log("z:", z)