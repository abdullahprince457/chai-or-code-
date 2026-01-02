// const user = new User () //singleton object
const darazUser = {}
// console.log(user)

// darazUser.id = "123abc"
// darazUser.name = "Abdullah"
// darazUser.isLoggedIn = false
// console.log(darazUser)

const regularUser = {
    email : "some@gmail.com ", 
    fullName :{
        userFullName : {
            firstname : 'Abdullah',
            lastname : 'Shahzad'
        }
    }
}
// console.log(regularUser.fullName)

////objects combine 

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = Object.assign( obj1 , obj2)

// const obj3 = {obj1 , obj2}
// console.log(obj3);

// console.log(obj3 === obj1 );

//spreadoperater

const obj3 = {...obj1, ...obj2}
console.log(obj3)