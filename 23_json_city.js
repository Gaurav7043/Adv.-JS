let data = require("./23_data.json")
// console.log("data:", data)

function get_city_by_state_name(state){
    let filter = data.filter((e)=>{
        // console.log("--->", e.state_name);
        return e?.state_name === state
    });
    // console.log("filter:", filter)
    let cityarr = filter.map((e)=>{
        // console.log(e);
        return e.city;
    })
    // console.log("cityarr:", cityarr)
    return cityarr;
}
let city_list_1 = get_city_by_state_name("Delhi")
console.log("city_list_1:", city_list_1)
let city_list_2 = get_city_by_state_name("Karnātaka")
console.log("city_list_2:", city_list_2)
