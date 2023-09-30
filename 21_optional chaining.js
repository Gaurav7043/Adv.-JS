let user ={
    name : "Gaurav",
    age : 22
}
// console.log("x:", user.address)
let x = user ? (user.address ? user.address.city : undefined) : undefined
console.log("🚀 ~ file: 21_Optional chaining.js:7 ~ x:", x)

let y = user?.address?.city?.pincode
console.log("🚀 ~ file: 21_Optional chaining.js:10 ~ y:", y)

user?.print?.() // give error - we can't use (?) at left end side
user.address={city:"surat"}

let data = "null";
data?.map?.((e)=>{
    console.log(e);
})