//normal function
// function fun(){
//     console.log("--->")
// }
// fun();

function fun(a, b, c) {
    console.log("🚀 ~ file: 04_function.js:7 ~ fun ~ a, b, c:", a, b, c)
    console.log("----->")
    return [1, 2, 2]
}


let x = fun(1, [1, 2, 3, 3])
console.log("🚀 ~ file: 04_function.js:13 ~ x:", x)


let fun2 = function(){
    console.log("----------->")
}
fun2();

// fade arrow function
const fun3 = (x, e) => {
    console.log("---fun3---->", x, e)
}
fun3(1000000, "gaurav")