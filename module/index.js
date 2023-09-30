const obj = require("./sum.js")
const SUB = require("./sub.js")
console.log("obj:", obj)
console.log("SUB:", SUB)

require("./test.js"); // when we jsut want to run a file, does't need to store in any variable we jsut require a file

let total = obj.sum(30, 40)
console.log("total:", total)

// let total = obj?.sum?.(30, 40)
// console.log("total:", total)

let y = SUB(50, 80)
console.log("y:", y)
