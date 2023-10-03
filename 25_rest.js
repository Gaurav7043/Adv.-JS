// array
// const arr = [1, 2, 3, 4, 5, 6]

// let [a, b, ...c] = arr
// console.log("a:", a)
// console.log("b:", b)
// console.log("c:", c)

// function fun(a, b, ...c){
//     console.log("--->a:", a);
//     console.log("--->b:", b);
//     console.log("--->c:", c);
//     let total = 0
//     c.map((e)=>{
//         total += e
//     })
//     return a + b + total
// }
// let total = fun(1, 2, 3, 4, 5, 6, 7, 8)
// console.log("total:", total)

// obj
let obj = {
    d : 20,
    e : 50,
    f : 30,
    g : 90,
}
let {d, e, ...f} = obj
console.log("d:", d)
console.log("e:", e)
console.log("f:", f)