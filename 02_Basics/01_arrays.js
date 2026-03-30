//An Array is collection of data values of any data type.
// Arrays are fundamental data structures and are used to store and ,amipulate data.

// There are threee way to define an array:

//1. the most common way is to use square brackets[].
const array_name = [1, 2, 3];

//2. another way to define array is to use Array() constructor.
const myArray = new Array(1, 2, 3, 4);

//3. We can use the Array.form() method to create a new array form an existing array-like, or
// iterable object or from a string.
const myString = 'hello';
const newArray = Array.from(myString); // ['h', 'e', 'l', 'l', 'o'];

//-----------------------------------------------------------------------------------------------//

//Accessing an arrray:

//1. Using Square Brackets:
const myArray2 = [1, 2, 4, 5, 6];
myArray2[2]; // 4


//2. Using .at():
myArray2.at(1); // 2


//----------------------------------------------------------------------------------------------//

//built-in methods
// Iteration: forEach(), map(), filter(), reduce(), every(), some()
// Search: find(), findIndex(), indexOf(), includes()
// Mutation: push(), pop(), shift(), unshift(), splice()
// Reorder: sort(), reverse()
// Utility: slice(), concat(), join()
// there are many more..

let empty2 = ['Apple', 'Orange', 'Mango', 'Grapes', 'Banana', 'WaterMelon']; // with values.

empty2.pop()
//console.log(empty2.pop()); // This will remove the last value present in the array.

empty2.push()
//console.log(empty2.push('Mango'));// This will add the given value in the end of an array-
// and return the length of the array.

empty2.shift()
//console.log(empty2.shift()); // THis will remove the value from the start of the arrray.

empty2.unshift()
//console.log(empty2.unshift('Carrot')); // This will add the value in the start of the array.
// and this will also give the length of the array.

empty2.slice()
//console.log(empty2.slice(2)); //[ 'Mango', 'Grapes', 'Banana', 'WaterMelon' ]
//console.log(empty2.slice(-2)); //[ 'Banana', 'WaterMelon' ]
//Return new array containing remaing element.
//this will return elements from the start of the array after 2 index(0,1),[with Positive(+) value]
//and with [negative(-) value] it will remove from the end of the array.

empty2.splice()
//array.splice(start, deleteCount, item1, item2, item3);
//console.log(empty2.splice(3, 1, 'StrawBerry')); // this will update the array 
// and we can add n number of elements.
// Modifies original array
// Returns the removed elements

empty2.sort()
//console.log(empty2.sort());// this will sort the array in ascending order.// by first letter
// and also effect the casing of element if it is uperr case it have more precidence than 
// lower case letters.
// Modifies original array
// Returns reference to same array
//console.log(empty2.sort((a,b)=> b.localeCompare(a))); // descending order
//console.log(empty2.sort((a,b)=> b-a).reverse());// it first sort and then reverse the array.

empty2.indexOf()
// console.log(empty2.indexOf("Mango"));//returns the first found element
// Returns the index (position) of a value in the array
// If not found → returns -1
// Works with exact value match
// Cannot use conditions (like >, <, etc.)
// You are checking primitive values (number, string)

empty2.concat()
// return a new array that combines two or more arrays
//const city1 = ["jaipur", "mumbai"];
//const city2 = ["kota", "shimla", "gurgaon"];
//const mergeCity = city1.concat(city2);

empty2.includes()
//const arr90 = ["apple", "banana"];
//console.log(arr90.includes("apple")); // true ✅
//console.log(arr90.includes("grape")); // false ❌
//Checks if value exists
//Returns true / false

empty2.join()
//const arr = ["Hello", "World"];
//const result13 = arr.join(" ");
//console.log(result13); // "Hello World"
//Converts array → string
//You can control the separator

empty2.reverse()
//const arr14 = [1, 2, 3];
//arr14.reverse();
//console.log(arr14); // [3, 2, 1]
// Reverses array
// Modifies original array


//------------------------------ Most important higher order Methods -------------------//


//.map() : Think: “Change each item”;
const array4 = [1, 4, 9, 16];
const mapped = array4.map((x) => x * 2); 
// returns a new array with modified values and does not modify the original array.
// Resulting array has the same length as the original array, with each elemet transformed
// based on the logic defined in the callback function.


//.filter() : Think: “Keep only what passes condition”;
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);//
//console.log(result);
//returns a new array that satisfy a specified condition and does not modify the original array.
//The call back function provided to filter() is executed for each element, and if the return 
// value is true, the element is included in the resulting array. If the resulting value is false
// the element is executed.


//.reduce(): Think: “Combine everything into one result”;
const array = [1, 2, 3, 4];
//0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);
// console.log(sumWithInitial);
// single line answer: reducer takes an array and turns it into a single value
// Use reduce() when you want to convert an array into a single value or result.
//example: sum, total, average, counting, frequency, flatten array



//when to use map filter reduce

//| Method   | When to Use                        | Returns                             |
//| -------- | ---------------------------------- | ----------------------------------- |
//| map()    | Transform/convert each item        | New array same length               |
//| filter() | Keep only items matching condition | New shorter array                   |
//| reduce() | Aggregate/combine into one value   | Single value (number, object, etc.) |



// ------------------------------------important higher order Methods------------------//


// “indexOf() is an array method, but it relies on strict equality, so it works reliably
//  with primitive values. For objects, since comparison is by reference, we usually prefer find().”

// | Method      | Works On | How it Compares         |
// | ----------- | -------- | ----------------------- |
// | `indexOf()` | Arrays   | `===` (strict equality) |
// |             | Best for | Primitive values        |
// | `find()`    | Arrays   | Custom condition        |
// |             | Best for | Objects & complex data  |




//.find()
const arr9 = [{ id: 1 }, { id: 2 }];
const result4 = arr9.find(item => item.id === 1);
//console.log(result); // { id: 1 } ✅ //returns the first found element
// console.log(adult);
// Returns the first element that satisfies a condition and then stops the iteration.
// If not found → returns undefined
// Uses a callback function
// You’re working with objects/arrays.


//.findIndex()
const users = [
  { id: 1, name: "Abhay" },
  { id: 2, name: "Rahul" }
];
const index = users.findIndex(user => user.id === 2);
//console.log(index); // 1
//Returns the index (position) of the first element that satisfies a condition.
//If not found → returns -1
//As soon as condition is true → stops searching
//usecase: Updating an item, Removing an item

//“findIndex() is used when we need the position of an element based on a condition,
// especially useful for arrays of objects where indexOf() fails due to reference comparison.”



//----------------------------------- least used higher-order function ------------//


// every()
const arr7 = [10, 20, 30];
const result7 = arr7.every(num => num > 5);
//console.log(result); // true ✅
// Checks if ALL elements satisfy a condition
// Returns true / false
// If even one fails → false


//some()
const arr6 = [10, 20, 30];
const result6 = arr6.some(num => num > 25);
//console.log(result); // true ✅ (30 > 25)
// Checks if AT LEAST ONE element satisfies condition
// Returns true / false

//🧠 Difference:
// every() → all must pass
// some() → at least one passes


//fill()
// array.fill(value, start, end)
const arr11 = [1, 2, 3, 4];
arr11.fill(0, 1, 3);
//console.log(arr11); // [1, 0, 0, 4]
// Fills array with a value
// Modifies original array


//findLast()
const arr12 = [10, 20, 30, 40];
const result12 = arr12.findLast(num => num > 15);
//console.log(result12); // 40 ✅
//Returns last element matching condition 
//it searches the array from right to left


//findLastIndex()
const arr = [10, 20, 30, 20];
const result1 = arr.findLastIndex(num => num === 20);
//console.log(result1); // 3 ✅
//Returns index of last matching element
//it searches the array from right to left


//toString()
const arr15 = [1, 2, 3];
const result15 = arr15.toString();
// console.log(result15); // "1,2,3"
//Converts array → string (comma separated)
//No control over separator


//--------------------------------Quick summary----------------------------------//

// | Method            | Return Type | Modifies Array | Use Case                  |
// | ----------------- | ----------- | -------------- | ------------------------- |
// | `every()`         | boolean     | ❌ No          | All elements check        |
// | `some()`          | boolean     | ❌ No          | At least one check        |
// | `fill()`          | array       | ✅ Yes         | Fill values               |
// | `findLast()`      | element     | ❌ No          | Last match                |
// | `findLastIndex()` | index       | ❌ No          | Last match index          |
// | `includes()`      | boolean     | ❌ No          | Value exists check        |
// | `reverse()`       | array       | ✅ Yes         | Reverse array             |
// | `join()`          | string      | ❌ No          | Convert to string         |
// | `toString()`      | string      | ❌ No          | Convert to string (comma) |