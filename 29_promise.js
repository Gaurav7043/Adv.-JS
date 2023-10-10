// a promise is an object representing the eventual completion or failure of an asynchronous operation.
// const p1 = new Promise((resolve, rejeact)=>{
//     // console.log("resolve", resolve);
//     // console.log("rejeact", rejeact);
//     const arr = [1, 2, 3, 4, 5]
//     let isexist = arr.includes(5)
//     // throw new Error("---manually generated Error")
//     if(isexist){
//         resolve("5 is Available")
//     }else{
//         rejeact("5 is not in array")
//     }
//     console.log("isexist:", isexist)
// })

// p1.then((res)=>{
//     console.log("------res-001---------->", res);
//     return "-----test-----"
// }).then((res2)=>{
//     JSON.parse({})
//     console.log("------res-002---------->", res2);
//     return {data: "gaurav"}
// }).then((res3)=>{
//     console.log("------res-003---------->", res3);
// }).catch((err)=>{
//     console.log("err:", err.message);
// });

const p2 = new Promise((resolve, rejeact)=>{
    setTimeout(()=>{
        resolve("-----resolve-------")
    }, 5000)
})
console.log(p2);