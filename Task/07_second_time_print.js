// show second
// set interval & get date ka use karka ek function banana hai aur second print karvana hai aur start karvana hai
setInterval(()=>{
    let s = new Date()
    let seconds = s.getSeconds()
    let str = seconds.toString()
    if(seconds < 10){
        console.log("0" + str);
    }else{
        console.log(str);
    }
}, 1000)

// show time
// date method aur set interval ka use karka time print karvana hai
// let x = setInterval(()=>{
//     let date = new Date()
//     let time = date.getHours()
//     let mi = date.getMinutes()
//     console.log(time, ":", mi)
// }, 1000)

// setTimeout(()=>{
//     clearInterval(x)
// }, 1000)