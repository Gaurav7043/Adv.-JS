let data = require("./data.json")
// console.log("data:", data)

// print city name based on population
function get_city_by_population(popu){
    let data_pop = data.filter((e)=>{
        // console.log("--->", e);
        return e.population > popu
    })
    // console.log("data_pop:", data_pop)
    let city_arr = data_pop.map((e)=>{
        // console.log("e", e);
        return e.city
    })
    // console.log("city_arr:", city_arr)
    return city_arr
}

let city_list = get_city_by_population(10494000)
console.log("city_list:", city_list)
