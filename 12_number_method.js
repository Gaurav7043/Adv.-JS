// parseInt, parseFloat => to convert string in to number
let x = "12"
let y = Number.parseInt(x)
console.log("🚀 ~ file: 12_number_method.js:4 ~ y:", typeof y, y)

let d = "12.3"
let e = Number.parseFloat(d)
console.log("🚀 ~ file: 12_number_method.js:8 ~ e:", typeof e, e)

+x
console.log("🚀 ~ file: 12_number_method.js:10 ~ +x:",typeof +x, +x)

let z = 1.2362373228
let s = z.toFixed(2)
console.log("🚀 ~ file: 12_number_method.js:12 ~ s:", typeof s, s)