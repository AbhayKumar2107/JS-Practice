let myDate = new Date(); // created new date object.

//console.log(myDate.toString()); //Mon Mar 30 2026 08:59:02 GMT+0530 (India Standard Time)
 
// console.log(myDate.toDateString()); // Mon Mar 30 2026

// console.log(myDate.toLocaleString());// 30/3/2026, 8:57:29 am

// console.log(myDate.toJSON()); // 2026-03-30T03:27:29.499Z

// console.log(myDate.toISOString()); // 2026-03-30T03:27:29.499Z

// console.log(myDate.toTimeString()); // 08:57:29 GMT+0530 (India Standard Time)


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); //gives numeric values.

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",

})// use ctrl + space to get suggestion inside the object
