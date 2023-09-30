let obj = {
    name : "Gaurav",
    age : 22,
    city : "surat",
}

// let keys = Object.keys(obj)
// console.log("🚀 ~ file: 10_object_method.js:8 ~ keys:", keys)

// let values = Object.values(obj)
// console.log("🚀 ~ file: 10_object_method.js:11 ~ values:", values)

// let entries = Object.entries(obj)
// console.log("🚀 ~ file: 10_object_method.js:14 ~ entries:", entries)
// console.log("🚀 ~ file: 10_object_method.js:14 ~ Object.entries(obj):", Object.entries(obj))
// console.log("🚀 ~ file: 10_object_method.js:17 ~ obj():", obj)

// forin loop => give a every key of object
for (const key in obj){
    console.log("🚀 ~ file: 10_object_method.js:20 ~ key:", key)
    console.log("🚀 ~ file: 10_object_method.js:20 ~ key:", obj[key])
    obj.key
    console.log("🚀 ~ file: 10_object_method.js:23 ~ obj.key:", obj.key)
}