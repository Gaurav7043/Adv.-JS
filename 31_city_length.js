let data = require("./23_data.json")
// console.log("data:", data)

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
