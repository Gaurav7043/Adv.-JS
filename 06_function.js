// normal function
// fun1()
// function fun1(a, b){
//     console.log("-------fun1------------");
//     return a + b;
// }
// let s = fun1(10, 20);
// console.log("🚀 ~ file: 06_function.js:6 ~ s:", s)

// fade arrow function
// fun2() // Cannot access 'fun2' before initialization
const fun2 = () => {
  console.log("------fun2----->");
  return "test";
};
  
fun2();
// let y = fun2();
// console.log("y:", y);