/*
// var----->

var x = 100000;
console.log(" x:", x);
x = 10;
var x = 100;
console.log(" x:", x);

// let ----->

// console.log("y:", y); // give error = Cannot access 'y' before initialization
let y;
// let y; // Identifier 'y' has already been declared
y = 100;
console.log("y:", y);
{
    {
        let m = 100;
    }
    {
        console.log("🚀 ~ file: variable.js:19 ~ m:", m);
    }
}
*/

// const

// const z //Missing initializer in const declaration
// console.log("🚀z:", z) // Cannot access 'z' before initialization

const z = 100;
console.log("🚀z:", z);
// z = 500;//  Assignment to constant variable.
{
  {
    const z1 = 900;
    {
      const z1 = 1000;
      console.log("z1", z1);
    }
  }
}

// var, let, const
// ===========var===================
// var x2;
// console.log("--------a")
// var a = 50;
// var a;
// var b = 20;
// b = 30;
// {
//     x2 = 20;
//     b = 40;
//     console.log("🚀 ~ file: 02_Varibale.js:11 ~ b:", b)
// }
// console.log("🚀 ~ file: 02_Varibale.js:10 ~ x2:", x2)

// =============let=============
// let x;
// x = 40;
// let x = "Gaurav"; 
// console.log("🚀 ~ file: 02_Varibale.js:19 ~ x:", x)
// {
//     let n = 30;
//     {
//         let m = 80;
//         {
//             console.log("🚀 ~ file: 02_Varibale.js:25 ~ m:", m)
//         }
//         console.log("🚀 ~ file: 02_Varibale.js:23 ~ n:", n)
//     }
//     {
//         let o = "test";
//         o = "Gaurav";
//         console.log("🚀 ~ file: 02_Varibale.js:32 ~ o:", o)
//     }
// }

// ===================const=======================
// const x = 40;
// const x = 80;
// console.log("🚀 ~ file: 02_Varibale.js:38 ~ x:", x)
// {
//     {
//         const m = 20;
//         console.log("🚀 ~ file: 02_Varibale.js:43 ~ m:", m)
//     }
//     m = 60; //var 
//     console.log("🚀 ~ file: 02_Varibale.js:43 ~ m:", m)
// }

// install turbo console --> go to settings --> go to key bord settings --> search turbo console (display message) --> click on it --> press Ctrl+Q --> enter
// array of Object

// var x = 3;
// console.log("🚀 ~ file: 02_Varibale.js:54 ~ x:", x)
// var x = 2
// console.log("🚀 ~ file: 02_Varibale.js:56 ~ x:", x)
// let r = 3;
// console.log("🚀 ~ file: 02_Varibale.js:58 ~ r:", r)
// r = 4
// console.log("🚀 ~ file: 02_Varibale.js:60 ~ r:", r)

// hosting
var x =10
console.log("🚀 ~ file: 02_Varibale.js:63 ~ x:", x)
var x = 100;