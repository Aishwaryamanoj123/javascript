// Strings in JS

// methods:
// toUpper
let str = "  Hello FriEnds  "
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.substring(6,7))
console.log(str.slice(6,7))
console.log(str.replace(" ","oo"))
console.log(str.concat(" Watsuppp"))
console.log(str.trim(" "))
console.log(str.includes("he"))
console.log(str.includes("He"))
// Convert to uppercase
// to lowercase
// get the substring 'Fri' by slice,substring method
// replace space with "oo"
// make the string as hello Friends watsUpp
// trim - trim the space in front and back
// check whether it contais "he"

// 4.  empty space with yy
// 5.  trim th white space
// 6.  Addhow are you to the given string
// 7.  Store your name in a variable and print the statement "hello 'your name' ,where are you going"


let s='Hi shada, You\'re welcome'
console.log(s)

let name = "shada"
// let welcome = "hello "+ name + ", Welcome to heaven"
// console.log(welcome)

let welcome = `hello ${name}, Welcome to heaven`
console.log(welcome)


// 1. get the letter 'F' of the Array
// 3. get all first letters and make it capital ['S','A','B','G']
// 2. given an array ,  coonvert all item such that it cntaine first caps and all others small

let quest1=['shaDa','alpHA','BEta','gAMMA']
let updatedNamelist=quest1.map((str)=>{
    str = str[0].toUpperCase()
    return str
})
console.log(updatedNamelist)

// return list of items with no happy
let messages=["Happy Onam","Happy Eid","merry Christmas","Happy New year","Namaste"]

let res = [];
messages.forEach((item) => {
  if (!item.includes("Happy")) {
    res.push(item);
  }
});

console.log(res);