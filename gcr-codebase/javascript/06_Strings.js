// let string1="hello123"

// string2= new String('   I am String 2   ')

// // string is immutable
// string1="new string"
// console.log(string1)


// // methods --> slice , trim

// console.log(string2.trim()) // spaces ko hta dega ye but sentence k beech wale ni hatayega ....starting and ending ki spaces ko hta dega 

// console.log(string1.indexOf('str')) // uss substring ka first occurence dega 

// console.log(string1.slice(0,4))   // ye 0 se 4 tk jitne bhi substring hai vo sb return karega but 4th wala cover ni krta hai 

// console.log(string1.toLowerCase())  // sbko lowercase me kr dega 

// console.log(string1.toUpperCase()) // sbko upper case me kr dega 


// console.log(string1.includes('ng')) // substring ko check krta hai ki sath me hai ya nai jaise string me last me "ng" hai toh true return kr diya but agr ham "sg" search karenge toh false ayega 



// TASK

let backendUrl = "https:// mystore.com"
console.log("My backend is running on : "+backendUrl)

// template literals or string literals :

console.log(`My backend is running on : ${backendUrl}`)