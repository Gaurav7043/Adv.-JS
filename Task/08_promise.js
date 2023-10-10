const p1 = new Promise((resolve, rejeact)=>{
    const arr = [1, 2, 3, 4, 5]
    let isexist = arr.includes(5)
    if(isexist){
        resolve({name: "Gaurav"})
    }else{
        rejeact("5 is not in array")
    }
    console.log("isexist:", isexist)
})

p1.then((res)=>{
    console.log("------res-001---------->", res);
    return {...res, city: "Surat"}
}).then((res2)=>{
    console.log("------res-002---------->", res2);
    return {...res2, age: 22}
}).then((res3)=>{
    console.log("------res-003---------->", res3);
}).catch((err)=>{
    console.log("err:", err.message);
});