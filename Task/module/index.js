const obj1 =require("./add_sub")
const obj2 = require("./mul_div")
console.log("obj1:", obj1)
console.log("obj2:", obj2)

let z = obj1?.sum?.(100, 50)
console.log("z:", z);

let w = obj1?.sub?.(100, 30)
console.log("w", w);

let x = obj2?.mul?.(5, 2)
console.log("x:", x)

let y = obj2?.div?.(20, 5)
console.log("y:", y)
