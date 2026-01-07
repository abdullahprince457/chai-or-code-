const user = {
    username : "Abdullah",
    price: 999,

    WelcomeMessage : function(){
        // console.log(`${this.username} welcome to website`);
        // console.log(this)
    }
}

// user.WelcomeMessage()
// user.username = "Abd"
// user.WelcomeMessage()

// console.log(this);


// function chai(){
//     console.log(this)
// }
// chai()

// const chai =  () => {
//     let username = "Abdullah"
//     console.log(this.username)
// }
// let chai = () => {
//     let username = "Abdullah"
//     console.log(this)
// }
// chai.username = "abd"
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>   num1 + num2
// const addTwo = (num1, num2) =>   (num1 + num2)
 
// object arraow function

const addTwo = (num1 , num2) => ({username: "Abdullah"})
console.log(addTwo(3,4))

