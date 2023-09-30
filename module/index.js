const SUM = require("./sum.js")
const SUB = require("./sub.js")
console.log("SUM:", SUM)
console.log("SUB:", SUB)

require("./test.js"); // when we jsut want to run a file, does't need to store in any variable we jsut require a file

let x = SUM.sum(30, 40)
console.log("x:", x)

let y = SUB(50, 80)
console.log("y:", y)
