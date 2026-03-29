let score = "69";
let valueInNumber = Number(score); //Converts string into number

//console.log(typeof(valueInNumber)); // number
//console.log(valueInNumber); // 69

// ---------------------------------------------------------------------------------------//
let score2 = "45acs";
let valueInNumber2 = Number(score2); //Converts string into number

//console.log(typeof(valueInNumber2)); // number
//console.log(valueInNumber2); // NaN - [Not a number]


//---------------------------------------------------------------------------------------//
let score3 = null;
let valueInNumber3 = Number(score3); //Converts string into number

//console.log(typeof(valueInNumber3)); // number
//console.log(valueInNumber3); // 0


//---------------------------------------------------------------------------------------//
let score4 = undefined;
let valueInNumber4 = Number(score4); //Converts string into number

//console.log(typeof(valueInNumber4)); // number
//console.log(valueInNumber4); // NaN

//---------------------------------------------------------------------------------------//
let score5 = undefined;
let valueInNumber5 = Number(score5); //Converts string into number

//console.log(typeof(valueInNumber5)); // number
//console.log(valueInNumber5); // NaN /and type of NaN is also numebr.

//true ->1 and false->0

// ---------------------------------------------------------------------------------------//

//Operations
/*
2+2
2-2
2/2
2%2
2*2
2**2
*/

console.log("1" +2); //12
console.log(1 + "2"); //12
console.log(1 + 2 + "2"); //32
console.log("1" + 2 + 2); //122   
console.log(+true);// 1
console.log(+true);// Error
console.log(+"");// 0