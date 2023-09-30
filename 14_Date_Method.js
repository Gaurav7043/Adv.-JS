let currentdate = new Date(); // to get current date
// let currentdate = new Date(0); // to get zeroth date
// let currentdate = new Date("2023/09/23") + 1
// let currentdate = new Date("2023/09/25"); // to get zeroth date

console.log("🚀 ~ file: 14_Date_Method.js:2 ~ currentdate:", currentdate)
// console.log("🚀 ~ file: 14_Date_Method.js:2 ~ currentdate:getdate", currentdate.getDate())
// console.log("🚀 ~ file: 14_Date_Method.js:2 ~ currentdate:getmonth", currentdate.getMonth())
// console.log("🚀 ~ file: 14_Date_Method.js:2 ~ currentdate:getfullyear", currentdate.getFullYear())
// console.log("🚀 ~ file: 14_Date_Method.js:2 ~ currentdate:getday", currentdate.getDay())
// console.log("🚀 ~ file: 14_Date_Method.js:2 ~ currentdate:gettime", currentdate.getTime())
// console.log("🚀 ~ file: 14_Date_Method.js:2 ~ currentdate:getmilliseconds", currentdate.getMilliseconds())
// console.log("🚀 ~ file: 14_Date_Method.js:2 ~ currentdate:gethours", currentdate.getHours())
// console.log("🚀 ~ file: 14_Date_Method.js:2 ~ currentdate:getminutes", currentdate.getMinutes())

// dd/mm/yyyy
let dd = currentdate.getDate();
let mm = currentdate.getMonth() + 1;
let yyyy = currentdate.getFullYear();
let day = currentdate.getDay()
let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
console.log(`today date is ${dd}/${mm}/${yyyy} and today is ${weekdays[day]}`);

let milliseconds = currentdate.getTime()
let total = milliseconds + 1000 * 3600 * 24 * 5;
let dayafterfive = new Date(total)
console.log("🚀 ~ file: 14_Date_Method.js:28 ~ dayafterfive:", dayafterfive)