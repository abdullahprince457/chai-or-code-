let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023 , 0, 8 )
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023 , 0, 8  , 5, 3)
// console.log(myCreatedDate.toLocaleString())

//++++++++++++++++++time++++++++++++++++++++


let myCreated = new Date("01-14-2025")
// let myTimeStamp = Date.now()
// // console.log(myTimeStamp);
// // console.log(myCreated);

// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() +1)
// console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday : "long"
})