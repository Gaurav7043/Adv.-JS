// object reference & copy

// let obj1 = {
//     a : 1000,
//     b : 200,
// }

// obj2 = obj1;
// obj1.a = 9000
// console.log("🚀 ~ file: 17_references_ copy.js:8 ~ obj1:", obj1)
// console.log("🚀 ~ file: 17_references_ copy.js:7 ~ obj2:", obj2)
// let obj3 = []
// obj3.a = obj1.a
// obj3.b = obj1.b

// for(const key in obj1){
//     console.log("key:", obj1[key]);
//     obj3[key] = obj1[key]
// }
// obj1.a = 3000

// console.log("🚀 ~ file: 17_references_ copy.js:12 ~ obj1:", obj1)
// console.log("🚀 ~ file: 17_references_ copy.js:11 ~ obj3:", obj3)

// spreead operater
// let m = {
//     name : "gaurav",
//     age : 22,
// }
// let obj3 = {...obj1, b : 9000, c : 100, ...m}
// obj1.a = 4000
// console.log("🚀 ~ file: 17_references_ copy.js:25 ~ obj1:", obj1)
// console.log("🚀 ~ file: 17_references_ copy.js:25 ~ obj3:", obj3)

// obj = {
//     a : 20,
//     b : 30,
// }
// obj2 = obj // references

// obj2 = {...obj} // copy

// array references & copy

let a1 = [1, 2, 3, 4, 5]
let a3 = ["gaurav", 342]
// let a2 = a1
let a2 = [...a1, 2000, ...a3]
a1[0] = 100
console.log("🚀 ~ file: 17_references_ copy.js:47 ~ a1:", a1)
console.log("🚀 ~ file: 17_references_ copy.js:47 ~ ...a1:", ...a1)
console.log("🚀 ~ file: 17_references_ copy.js:47 ~ a2:", a2)
