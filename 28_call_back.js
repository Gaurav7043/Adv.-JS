// call back
// function fun1(cb){
//     // for(let i = 0; i < 1000000000000; i++)
//     setTimeout(()=>{
//         console.log("------->fun1");
//         cb()
//     }, [5000])
// }

// function fun2() {
//     console.log("------>fun2");
// }

// fun1(fun2) // pass karvana kahata hai
// fun2() // call karvana kahata hai

// call back hell means 2 fun se jada fun hota hai tab use aata hai (function inherit)
function fun1(arrg, cb){
    setTimeout(()=>{
        console.log("------->fun1");
        cb(arrg)
    }, 2000)
}

function fun2(cb2){
    setTimeout(()=>{
        console.log("------>fun2");
        cb2()
    }, 3000)
}

function fun3(){
    console.log("------>fun3");
}

fun1(fun3, fun2)