const data = require("./data.json")
// console.log(data)

// want all object where state_name key value is Karnātaka
function state(){
    let filterdata = data.filter((e)=>{
        return e.state_name === "Gujarāt";
    })
    console.log("filterdata:", filterdata)
}
state("Gujarāt")

// const data = require("./data.json");
// console.log("data", typeof data);
// function getCityByStateName(state) {
//     let filteredData = data.filter((e) => {
//     // console.log("--->", e);
//     return e.state_name === state;
//   });
// //   console.log("filteredData", filteredData);
//     let cityArr = filteredData.map((e) => e.city);
//     return cityArr;
// }
// let x = getCityByStateName("Delhi");
// let y = getCityByStateName("Karnātaka");
// console.log("x---->", x);
// console.log("y---->", y);