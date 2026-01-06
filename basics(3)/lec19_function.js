function sayMyName(){
    console.log("A")
    console.log("b")
    console.log("d")
    console.log("u")
    console.log("l")
    console.log("l")
    console.log("a")
    console.log("h")
}



// sayMyName()

// function addTwoNumber(number1, number2){
//     // let result = number1 + number2

//     return number1 + number2 
    
    
// }
// console.log(number1 + number2);


// function addTwoNumber(number1, number2){
//     // console.log(number1 + number2);
// }
// addTwoNumber(3 , 9 )


function logInUserMessage(username = "Abd"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged In`
}
// console.log(logInUserMessage("Abdullah"))
console.log(logInUserMessage("Abdullah"))
