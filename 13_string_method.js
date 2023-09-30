let str = "Gaurav Hello World"
console.log("🚀 ~ file: 13_string_method.js:2 ~ str:", str.length)
console.log("str", "Test Test".length);

for (let i = 0; i < str.length; i++) {
    console.log("🚀 ~ file: 13_string_method.js:6 ~ str[i]:", str[i])
}
// charAt()	It provides the char value present at the specified index
str[0]
console.log("🚀 ~ file: 13_string_method.js:9 ~ str[0]:", str[0])
str.charAt(3)
console.log("🚀 ~ file: 13_string_method.js:12 ~ str.charAt(3):", str.charAt(3))

// concat()	It provides a combination of two or more strings.
let str1 = "....."
let concat = str.concat(str1, str1, "----!")
console.log("🚀 ~ file: 13_string_method.js:17 ~ concat:", concat)

// indexOf()	It provides the position of a char value present in the given string
let indexOf = str.indexOf("Hell")
console.log("🚀 ~ file: 13_string_method.js:21 ~ indexOf:", indexOf)

// lastIndexOf()	It provides the position of a char value present in the given string by searching a character from the last position
let lastIndexOf = str.lastIndexOf("l")
console.log("🚀 ~ file: 13_string_method.js:25 ~ lastIndexOf:", lastIndexOf)

// replace()	It replaces a given string with the specified replacement
let replace = str.replace("Gaurav", "Harsh")
console.log("🚀 ~ file: 13_string_method.js:29 ~ replace:", replace)

// substr()	It is used to fetch the part of the given string on the basis of the specified starting position and length
let substr = str.substr(0, 4)
console.log("🚀 ~ file: 13_string_method.js:33 ~ substr:", substr)

// substring()	It is used to fetch the part of the given string on the basis of the specified index
let substring = str.substring(2, 4)
console.log("🚀 ~ file: 13_string_method.js:37 ~ substring:", substring)

// slice()	It is used to fetch the part of the given string. It allows us to assign positive as well negative index
let slice = str.slice(3, -3)
console.log("🚀 ~ file: 13_string_method.js:41 ~ slice:", slice)

// toLowerCase()	It converts the given string into lowercase letter
let toLowerCase = str.toLowerCase()
console.log("🚀 ~ file: 13_string_method.js:45 ~ toLowerCase:", toLowerCase)

// toLocaleLowerCase()	It converts the given string into lowercase letter on the basis of host?s current locale
let toLocaleLowerCase = str.toLocaleLowerCase()
console.log("🚀 ~ file: 13_string_method.js:49 ~ toLocaleLowerCase:", toLocaleLowerCase)

// toUpperCase()	It converts the given string into uppercase letter
let toUpperCase = str.toUpperCase()
console.log("🚀 ~ file: 13_string_method.js:53 ~ toUpperCase:", toUpperCase)

// toLocaleUpperCase()	It converts the given string into uppercase letter on the basis of host?s current locale
let toLocaleUpperCase = str.toLocaleUpperCase()
console.log("🚀 ~ file: 13_string_method.js:57 ~ toLocaleUpperCase:", toLocaleUpperCase)

// toString()	It provides a string representing the particular object
let to = 1000
let toString = to.toString()
console.log("🚀 ~ file: 13_string_method.js:62 ~ toString:",typeof toString, toString)

// trim()	It trims the white space from the left and right side of the string
let trim = "               test               "
console.log("🚀 ~ file: 13_string_method.js:66 ~ trim:", trim.trim())
console.log("🚀 ~ file: 13_string_method.js:66 ~ trim:", trim)

// split()	It splits a string into substring array, then returns that newly created array
// let split = str.split("ll")
// let split = str.split(" ")
let split = str.split("")
let reverse = split.reverse()
console.log("🚀 ~ file: 13_string_method.js:71 ~ split:", split)
let join = split.join("")
console.log("🚀 ~ file: 13_string_method.js:74 ~ join:", join)

// includes()
let includes = str.includes("Gaur")
console.log("🚀 ~ file: 13_string_method.js:80 ~ includes:", includes)

// startswidth
let startswidth = str.startsWith("Gau")
console.log("🚀 ~ file: 13_string_method.js:84 ~ startswidth:", startswidth)

// endswidth
let endsWith = str.endsWith("d")
console.log("🚀 ~ file: 13_string_method.js:88 ~ endsWith:", endsWith)
