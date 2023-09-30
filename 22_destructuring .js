// object
let obj ={
    a : 20,
    b : 100
}

// console.log(obj);
// let a,b
// a = obj?.a
// console.log("🚀 ~ file: 22_destructuring .js:8 ~ a:", a)
// b = obj?.b
// console.log("🚀 ~ file: 22_destructuring .js:11 ~ b:", b)

let {a, B, b} = obj
console.log("a", a);
// console.log("B", B);
console.log("b", b);

function returnobj(){
    return{
        name : "Harsh",
        city : "surat"
    }
}
// const obj2 = returnobj();
// console.log("obj2:", obj2)

const {name, city} = returnobj()
console.log("name:", name)
console.log("city:", city)

// array
let arr = [1, 2, 3, 4, 5]
let [x, y, z] = arr // depend on index number
console.log("x:", x)
console.log("y:", y)
console.log("z:", z)
