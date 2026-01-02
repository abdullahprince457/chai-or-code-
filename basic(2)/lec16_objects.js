 // singleton

 //object literals


const mySym = Symbol("key1")
 
const Ab = {
    name : "Abdullah",
    "full_name" : "Abdullah Shahzad",
    [mySym] : "mykey",
    age : 22,
    location: "Lahore",
    email : "Abd@gmail.com",
    isLogggedIn : false,
    lastLoginDays : "monday"

}
// console.log(Ab.email)
// console.log(Ab["email"])
// console.log(Ab["full_name"])
// console.log(Ab[mySym])


// Ab.email = "Abdullah@chatgpt.com"
// Object.freeze(Ab)
// Ab.email = "Shahzad@microsoft.com"
// console.log(Ab)


Ab.greeting = function(){
    console.log("Hello")
}
Ab.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(Ab.greeting())
console.log(Ab.greetingTwo())