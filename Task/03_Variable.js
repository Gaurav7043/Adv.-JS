/*
-> Want to re-use variable name so which variable declare method should i use
    ans: var

------------------------------------------------------------------------------------------

-> give the list which variable name not works in js
1. let a=0                     true
2. let "a"=0                   error
3. let 'a'=0                   error
4. let `10`=0                  error
5. let 1=0                     error

ans: 2,3,4,5 variable name not works in js
------------------------------------------------------------------------------------------

let x = 100
// var y = 100
// const z = 100
// const m
{
      x= 90
      // y= 90
      // z= 90
      console.log(x) __________true_________ point-x1
      console.log(y) __________true_________ point-y1
      console.log(z) __________true_________ point-z1
      console.log(m) __________error_________ point-m
} 

console.log(x) _________true__________ point-x2
console.log(y) _________true__________ point-y2
console.log(z) _________true__________ point-z2

what will print at x1-_______true
what will print at y1-_______true
what will print at z1-_______true
what will print at m-_______error
what will print at x2-_______true
what will print at y2-_______true
what will print at z2-_______true

------------------------------------------------------------------------------------------

-> task-2

console.log(x) _______error____________ point-x2
console.log(y) ________undefined___________ point-y2
console.log(z) ________error___________ point-z2

{
      let x = 100
      var y = 100
      const z = 100
}

console.log(x) _______error____________ point-x1
console.log(y) _______true____________ point-y1
console.log(z) _______error____________ point-z1


what will print at x1-_______error
what will print at y1-_______true
what will print at z1-_______error
what will print at x2-_______error
what will print at y2-_______undefined
what will print at z2-_______error

------------------------------------------------------------------------------------------

*/