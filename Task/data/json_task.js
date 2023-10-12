let data = require("./data.json")

// 1. import data from json
// console.log("data:", data);

// 2. give all city name of state which one give by user
console.log("2. give all city name of state which one give by user");
function get_city_name_by_state_name(state){
    let filter = data.filter((e)=>{
        // console.log('e', e);
        return e.state_name === state
    })
    // console.log("filter", filter);
    let cityarr = filter.map((e)=>{
        // console.log(e);
        return e.city
    })
    // console.log("cityarr:", cityarr)
    return cityarr
}

let city_arr = get_city_name_by_state_name("Delhi")
console.log("city_arr:", city_arr)

// 3. give all city name , which have more character than user given input
console.log("3. give all city name , which have more character than user given input");
function get_city_by_ch_length(length) {
    let filter = data.filter((e)=>{
        return e.city.length > length
    })
    let cities = filter.map((e)=>{
        return e.city
    })
    return cities
}

let city = get_city_by_ch_length(15)
console.log("city:", city)

// 4. city list which has population more then user give
console.log("4. city list which has population more then user give");
function get_city_name_by_population(pop){
    let filter = data.filter((e)=>{
        return e.population > pop
    })
    let city_arr = filter.map((e)=>{
        return e.city
    })
    return city_arr
}

let city_list = get_city_name_by_population(12395000)
console.log("city_list:", city_list)

// 5. acending decending population wise


// 6. top 5 city population wise [only name of city]
console.log("6. top 5 city population wise [only name of city]");
function get_city_name_by_population(pop){
    let filter = data.filter((e)=>{
        return e.population > pop
    })
    let city_arr = filter.map((e)=>{
        return e.city
    })
    return city_arr
}

let city_list_2 = get_city_name_by_population(10494000)
console.log("city_list:", city_list_2)

// 7. give total populatin of state which give by user
console.log("7. give total populatin of state which give by user");
function total_population_by_state_name(pop){
    let filter = data.filter((e)=>{
        return e.state_name === pop
    })
    let p = filter.map((e)=>{
        return e.population
    })
    return p
}

let d = total_population_by_state_name("Delhi")
console.log("d:", d);

// 8. give top 5 state name population wise
console.log("8. give top 5 state name population wise");
function top_Five_State_Population_Wise(data, count) {
    let arr = [];
    data.map((ele) => {
        let index = arr.findIndex((e) => e.stateName === ele.state_name);
        if (index === -1) {
            arr.push({ stateName: ele?.state_name, population: +ele?.population });
        } else {
            arr[index].population += +ele.population;
        }
    });
    arr.sort((a, b) => b.population - a.population);
    return arr.slice(0, count);
}

let x = top_Five_State_Population_Wise(data, 5);
console.log("x", x);