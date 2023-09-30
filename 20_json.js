// in json data all key and string are must be in " " quotes
const JSONDATA = require("./20_data.json");
console.log("JSONDATA", JSONDATA);

const obj = {
    name: "urvish",
    age: 23,
    address: {
      line1: "A-308 tapti avenue",
      lendmark: "beside velentine multiplex theater",
      city: "surat",
    },
};
console.log("obj:",typeof obj, obj)

let json = JSON.stringify(obj)  
console.log("json:",typeof json, json)

let parse = JSON.parse(json)
console.log("parse:",typeof parse, parse)
