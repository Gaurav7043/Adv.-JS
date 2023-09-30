setTimeout(()=>{
    console.log("--------setTimeout----------------");
},3000)

let s = setInterval(()=>{
    console.log("--------setInterval----------------");
},2000)

setTimeout(()=>{
    clearInterval(s)
},9000)
