const array1 = [1,2,3,4,5]; 
const array2 = [6,7,8,9,10]; 

const array = [...array1, ...array2]; 
//console.log(array);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);


console.log(Array.isArray("Hitesh")) // cheacks that give is an array or not.
console.log(Array.from("Hitesh"))// create array from string


console.log(Array.from({name: "hitesh"})) // interesting // can't work diretly on object but can on
//  properties


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //returns a new array  with give element.