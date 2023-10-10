function fun1(){
    return new Promise((resolve, reject)=>{
        reject("----------err-------")
        setTimeout(()=>{
        //     resolve({name: "gaurav", city: "surat"})
        }, 2000)
    })
}

function print(obj) {
    console.log(`My name is ${obj.name}`);
    console.log(`My city is ${obj.city}`);
}

// normal asynca-await fn
// async function mainfun() {
//     const data = await fun1()
//     console.log("data:", data)
//     print(data)
// }

// fade arrow asynca-await fn
// const mainfun = async ()=>{
//     const data = await fun1()
//     console.log("data:", data);
//     print(data)
// }

// err handle
const mainfun = async ()=>{
    try {
        const data = await fun1()
        console.log("data:", data);
        print(data)
    } catch (error) {
        console.log("-----error------", error);
    }
}

mainfun()