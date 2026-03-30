const score = 400.2435235;
//console.log(score); // 400

const balance = new Number(100);
//console.log(balance); // [Number: 100]


console.log(score.toFixed(2));// adds decimal point // 400.00

let anotherNumber = 234.3455;
//console.log(anotherNumber.toPrecision(4));

let indianSystem = 100000;
console.log(indianSystem.toLocaleString('en-IN'));


//===================================================================================//

//+++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++//

// console.log(Math.abs(-4)); // turns neg value into positive.
// console.log(Math.round(4.6)); // round off // this will give 5
// console.log(Math.ceil(4.3));// 5
// console.log(Math.floor(4.6));//4
// console.log(Math.max(4, 5, 2, 7));// 7
// console.log(Math.min(4, 5, 2, 7));// 2


console.log(Math.random()); // give values between 0-1;
console.log(Math.floor(Math.random()*10)+1); //

const max=20;
const min=10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);// best practice;