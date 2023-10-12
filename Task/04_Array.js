let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log("array:", array)

// -> create array which have 1 to 9 no
// let arr = array.splice(1, 9)
// console.log("arr:", arr)

// 1. print 9th and 10th index of array
// let a = array.slice(9, 11)
// console.log("1. print 9th and 10th index of array");
// console.log("x:", a)

// 2. print every element of array by map and for loop
// map
// let arr = array.map((e)=>{
//   return e;
// })
// console.log("2. print every element of array by map and for loop");
// console.log("every element in map :", arr)

// for-loop
// for (let i = 1; i < array; i++) {
//   const element = arr[i];
// }
// console.log("every element in for loop :", array);

// 3. change a value of 6th index with 100
// let arr = array.splice(6, 1, 100)
// console.log("3. change a value of 6th index with 100");
// console.log("x:", array)

// 4. print a array till element value not grater then 100
// let aray = [10, 30, 50, 100, 300, 400]
// let arr = aray.filter((e)=>{
//   return e < 100
// })
// console.log("4. print a array till element value not grater then 100");
// console.log("x:", arr)

// 5. add 1 in every element of an array
// let arr = array.map((e)=>{
//   return e + 1;
// })
// console.log("5. add 1 in every element of an array");
// console.log("x:", arr)

// 6. add 0 in start of array
// let aray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// aray.unshift(0)
// console.log("6. add 0 in start of array");
// console.log("x:", aray)

// 7. add 99 in end of array
// let a = [1, 2, 3, 4, 5, 6] 
// a.splice(6, 0, 99)
// console.log("7. add 99 in end of array");
// console.log("x:", a)

// 8. remove 1 element from start of  array
// array.splice(0,1)
// console.log("8. remove 1 element from start of  array");
// console.log("x:", array)

// 9. remove 1 element from end of array
// array.splice(13)
// console.log("9. remove 1 element from end of array");
// console.log("x:", array)

// 10. do sum of all value of an array with use of map, reduce and for-loop
// let ar = [1, 2, 3, 4, 5]
// console.log("10. do sum of all value of an array with use of map, reduce and for-loop");

// for map
// let s= 0
// ar.map(e=> s += e)
// console.log("sum with map :", s)

// reduce
// let total = ar.reduce((LastReturnValue, e)=>{
//   return LastReturnValue + e
// })
// console.log("sum with reduce :", total)

// for-loop
// let a = 0
// ar.forEach(e=> a += e)
// console.log("sum with for-loop :", s)

// 11. sort a array in acending decending
// console.log("11. sort a array in acending decending");
// let ac = [1, 2, 4, 5, 9, 2, 3, 8]
// acending
// let s = ac.sort((a, b)=>{
//   return b - a
// })
// console.log("acending :", s)

// decending
// let sort = ac.sort()
// console.log("decending :", sort)

// 12. reverse an array with use of method
// array.reverse()
// console.log("x :", array)

// 13. reverse an array with use of for-loop
// let r =[]
// for (let i = array.length - 1; i >= 0; i--) {
//   r.push(array[i])
// }
// console.log("x:", r)

// =============task-2==============
let array1 = [1,2,3,6,7,9,3,56,8]
// console.log("array1 :", array1)

// 1. give all value which can devided by 2 - not use filter
// console.log("1. give all value which can devided by 2 - not use filter");
// let a = array1.map((e)=>{
//   return e / 2;
// })
// console.log("x :", a)

// 2. give all value above 3 by use of filter
// console.log("2. give all value above 3 by use of filter");
// let filterarr = array1.filter((e) => {
//   return e > 3;
// })
// console.log("x :", filterarr)

// 3. give index of 56
// let index = array1.indexOf(56)
// console.log("3. give index of 56");
// console.log("index no :", index)

// 4. give true/false result when check given value is exists in array or not
// console.log("4. give true/false result when check given value is exists in array or not");
// let a = array1.includes(100)
// console.log("a :", a)
// let b = array1.includes(5)
// console.log("b :", b)

// =============task-3==============
// 1. ['i','am', 'urvish'] ==> want ['urvish','am','i'] by use of map and loop
// console.log("1. ['i','am', 'urvish'] ==> want ['urvish','am','i'] by use of map and loop");
// let rev = [`i`, `am`, `urvish`]
// let b =[];
// use map
// rev.map((e)=>{
//   b.unshift(e)
// })
// console.log("map :", b)

// let revarray = rev.map((e, i)=>
//   rev[rev.length-i-1]
// )
// console.log("map :", revarray)

// for loop
// let c = []
// for(let i = rev.length - 1; i>= 0; i--){
//   c.push(rev[i])
// }
// console.log("loop :", c)

// 2. want "i am urvish" without use join method
// let s = ['i', `am`, `urvish`]
// console.log(`2. want "i am urvish" without use join method`);
// let str = ``;
// for (let i = 0; i < s.length; i++) {
//   str += s[i];
//   if (i !== s.length - 1) {
//     str += " ";
//   }
// }
// console.log(str);

// =============task-4==============
// 1. ['i','am', 'urvish'] ==> want ['hsivru','ma','i'] by use of loop
let name = ["i", "am", "urvish"];
let newArr = [];
for (let i = 0; i < name.length; i++) {
  let x = name[i].split("").reverse().join("");
  newArr.unshift(x);
  // console.log("x:", x);
}
console.log("newArr:", newArr);