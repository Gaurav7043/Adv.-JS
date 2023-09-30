let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("🚀 ~ file: 11_array_method.js:2 ~ arr:", arr)

// push(...items) – adds items to the end
arr.push({name : "Gaurav", age : "22"}, [1, 2])
console.log("🚀 ~ file: 11_array_method.js:5 ~ arr_push:", arr)

// pop() – remove an item from the end
arr.pop()
console.log("🚀 ~ file: 11_array_method.js:10 ~ arr_pop:", arr)

// shift() – remove an item from the beginning(start)
arr.shift()
console.log("🚀 ~ file: 11_array_method.js:15 ~ arr_shift:", arr)

// unshift(...items) – adds items to the beginning(start)
arr.unshift(null)
console.log("🚀 ~ file: 11_array_method.js:20 ~ arr_unshift:", arr)

// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
let arr2 = [100, 200, 300]
let arr3 = [1000, 2000, 3000]
// let concat = arr.concat(arr2, arr3, "gaurav")
// console.log("🚀 ~ file: 11_array_method.js:24 ~ concat:", concat)
arr.concat(arr2, arr3, "gaurav")
console.log("🚀 ~ file: 11_array_method.js:25 ~ arr.concat(arr2, arr3, 'gaurav'):", arr.concat(arr2, arr3, "gaurav"))

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
let indexarr = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9]
let indexOf = indexarr.indexOf(5)
// let indexOf = indexarr.indexOf(5, 6)
// let indexOf = indexarr.indexOf(500) // -1
console.log("🚀 ~ file: 11_array_method.js:31 ~ indexOf:", indexOf)
let lastIndexOf = indexarr.lastIndexOf(5)
console.log("🚀 ~ file: 11_array_method.js:34 ~ lastIndexOf:", lastIndexOf)
if(lastIndexOf === indexOf){
    console.log("Five is not Duplicate in array");
}else{
    console.log("Five is duplicate in array");
}

// includes(value) – returns true if the array has value, otherwise false
let available = arr.includes(5)
// let available = arr.includes(51)
console.log("🚀 ~ file: 11_array_method.js:46 ~ available:", available)

// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
let sarr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let slicearr = sarr.slice(1, 5)
// let slicearr = sarr.slice(1, -5)
console.log("🚀 ~ file: 11_array_method.js:49 ~ slicearr:", slicearr)

// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items
let splice = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// splice.splice(1,3) // remove in array
// splice.splice(1, 3, "Gaurav") // bichma add kardega
// splice.splice(2, 0, 2.5) // contant ko add karna ke kam atta hai
splice.splice(2, 2) // khali remove karna ho toh
console.log("🚀 ~ file: 11_array_method.js:56 ~ splice:", splice)

// find/filter(func) – filter elements through the function, return first/all values that make it return true
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let findarr = arr4.find((e, i)=>{ // e => element, i => index 
    console.log("🚀 ~ file: 11_array_method.js:67 ~ findarr ~ e:", e, "i", i)
    return e > 5; // only 1 value return
    // return e > 50; // undefined
})
console.log("🚀 ~ file: 11_array_method.js:69 ~ findarr ~ findarr: ===>", findarr)

let filterarr = arr4.filter((e) => {
    console.log("🚀 ~ file: 11_array_method.js:76 ~ filterarr ~ e:", e)
    return e > 5; // sub value ma dikhata hai
})
console.log("🚀 ~ file: 11_array_method.js:75 ~ filterarr ~ filterarr: ===>", filterarr)

// findIndex is like find, but returns the index instead of a value.
let index = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("🚀 ~ file: 11_array_method.js:82 ~ findIndex ~ index:", index)
let findIndex = index.findIndex((e) => {
    console.log("🚀 ~ file: 11_array_method.js:83 ~ findIndex ~ e...:", e)
    return e > 5
})
console.log("🚀 ~ file: 11_array_method.js:85 ~ findIndex ~ findIndex ===>:", findIndex)

// forEach(func) – calls func for every element, does not return anything.
let foreachar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let foreacharr =  foreachar.forEach((e, i) => {
    console.log(i, "----e====>:", e)
})
console.log("foreacharr:", foreacharr)

// sort(func) – sorts the array in-place, then returns it
let sortarr = [1, 20, 3, 4, 5, 6, 7, 8, 9, 1]
sortarr.sort()
console.log("🚀 ~ file: 11_array_method.js:98 ~ sortarr.sort():", sortarr.sort())

// toSpliced
let to = [1, 2, 3, 4, 5]
console.log("🚀 ~ file: 11_array_method.js:102 ~ to:", to)
let toSpliced = to.toSpliced(1, 2)
console.log("🚀 ~ file: 11_array_method.js:104 ~ toSpliced:", toSpliced)

// reverse() – reverses the array in-place, then returns it
let d = [1, 2, 3, 4, 5, 6, 7, 8, "gaurav"]
let reverse = d.reverse()
console.log("🚀 ~ file: 11_array_method.js:106 ~ reverse:", reverse)

// join – convert a array into string
let j = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let join = j.join("---test----test---")
console.log("🚀 ~ file: 11_array_method.js:110 ~ join:", join)
let tostring = j.toString()
console.log("🚀 ~ file: 11_array_method.js:113 ~ tostring:", typeof tostring, tostring)

// map(func) – creates a new array from results of calling func for every element
let maparr = [1, 2, 3, 4, 5]
console.log("🚀 ~ file: 11_array_method.js:117 ~ maparr:", maparr)
let map = maparr.map((e, i)=> {
    console.log("🚀 ~ file: 11_array_method.js:119 ~ map ~ e, i:", e, i)
    return e + 5;
})
console.log("🚀 ~ file: 11_array_method.js:119 ~ map ~ map:", map)

let arrobj = [
    {
      name: "om",
      age: 22,
    },
    {
      name: "som",
      age: 30,
    }
  ]
  let namearr = arrobj.map((e)=> {
    console.log("🚀 ~ file: 11_array_method.js:135 ~ arrobj.map ~ e:", e)
    return "My Name is " + e.name
  })
  console.log("🚀 ~ file: 11_array_method.js:138 ~ namearr ~ namearr:", namearr)
//   for replace
  let nm = namearr.map((e)=>{
    return e.replace(" Name", "")
  })
  console.log("🚀 ~ file: 11_array_method.js:143 ~ nm ~ nm:", nm)

//   reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
let re = [1, 2, 3, 4, 5]
let total = re.reduce((LastReturnValue, e)=>{
    console.log("LastReturnValue", LastReturnValue);
    console.log("e", e);
    return LastReturnValue + e
}, 0)
console.log("🚀 ~ file: 11_array_method.js:151 ~ total ~ total:", total)

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false
let x = [1, 2, 3, 4, 5]
let isarr = Array.isArray(x)
console.log("🚀 ~ file: 11_array_method.js:157 ~ isarr:", isarr)
