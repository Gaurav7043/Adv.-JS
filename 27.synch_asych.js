function fun1(){
    // for(let i = 0; i < 1000000000000; i++)
    setTimeout(()=>{
        console.log("------->fun1");
    }, [2000])
}

function fun2() {
    console.log("------>fun2");
}

fun1()
fun2()