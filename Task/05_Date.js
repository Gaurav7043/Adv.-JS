// Today is 23, september 2023, saturday.
// let currentdate = new Date()
let currentdate = new Date("2023/09/23")
let dd = currentdate.getDate()
let mm = currentdate.getMonth()
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let yyyy = currentdate.getFullYear()
let day = currentdate.getDay()
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(`Today is ${dd}, ${month[mm]} ${yyyy}, ${weekdays[day]}`);

// Today is 24, september 2023 , today is funday
// let currentdate1 = new Date()
let currentdate1 = new Date("2023/09/24")
let dd1 = currentdate1.getDate()
let mm1= currentdate1.getMonth()
let month1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let yyyy1 = currentdate1.getFullYear()
let x = `Today is ${dd1}, ${month1[mm1]} ${yyyy1},`;
let weekdays1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day1 = currentdate1.getDay()
let y = `Today is ${weekdays1[day1]}`

if(day1==0 || day1==0){
    console.log(x, "Today is Funday");
}else{
    console.log(x, y);
}