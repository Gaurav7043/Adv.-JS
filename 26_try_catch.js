try {
    let no = fun2({name: "gaurav", age: 22})
    let x = sum(no, 30)
    console.log("x:", x)
    // let nomaldata = JSON.parse({})
} catch (err) {
    console.log("-----err------->", err.message);
}

function sum(a, b){
    try {
        // console.log("==========--------========");
        return a + b
    } catch (error) {
        return error.messagex
    }
}

function fun2({name, age}){
    console.log("name:", name)
    console.log("age:", age)
    let arr = [1, 2, 3, 4, 50]
    let x = arr.find((e) => e > 10)
    console.log("x:", x);
    if(!x){
        throw new Error("---------no is not find------------")
    }
    return x
}