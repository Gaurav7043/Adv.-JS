const obj = require("./mul_div")
console.log("obj:", obj)

let x = obj?.mul?.(5, 2)
console.log("x:", x)

let y = obj?.div?.(20, 5)
console.log("y:", y)
