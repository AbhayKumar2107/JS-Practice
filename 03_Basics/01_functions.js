//A function in JS is a block of code that performs a sepcific task. it taks input(parameters) 
// and return a value or perfoms an action.

// WHy useFunction?
/*  Reusability: You can reuse code by calling the same function multiple times.
    Modularity: functions help in breaking down complex code into smaller, more managable part.
    DRY(Do not Repeat youself): Functions help you avoide writing repetitive code.

    A function can return a value. If it doesn’t, then its result is undefined.
*/


//-------------------------------------------------------------------------------------//

//1. Function Declaration (Normal Function)
function greet(name) {
  return "Hello " + name;
}

// ✅ Key Features:
// Function declaration are hoisted, meaning they are moved to the top of the current scope during 
// the compilation phase.
// it has its own this.

greet("Abhay"); // ✅ works
function greet(name) {
  return "Hello " + name;
}

// 🧠 When to use:
// When you want a reusable function
// When function should be available everywhere in the scope
// Good for utility functions

//-------------------------------------------------------------------------------------//

//2. Function Expression

const greet = function(name) {
  return "Hello " + name;
};

// ✅ Key Features:
// Function Expression is not hoisted and must be defined before they are called.
// Stored in a variable
// Can be anonymous, arrow function, IIFE.

greet("Abhay"); // ❌ error (if called before definition)

// 🧠 When to use:
// When you want functions as values
// Used in:
// callbacks
// assigning functions dynamically


//-------------------------------------------------------------------------------------//

//3. Arrow Function (ES6)

const greet = (name) => {
  return "Hello " + name;
};

// ✅ Key Features:
// Short syntax ✨
// Implicit return feature. The return statement is not required if the unction body consist of a
// single expression.
// No 'this' of its own (inherits from parent)
// Not hoisted ❌

const greet = name => "Hello " + name;//Short form:

//Important Difference: this

const obj = {
  name: "Abhay",
  normalFunc: function() {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  }
};

obj.normalFunc(); // "Abhay" ✅
obj.arrowFunc();  // undefined ❌ Arrow function doesn’t have its own this


//-------------------------------------------------------------------------------------//

// Feature	      Function Declaration	  Function Expression	   Arrow Function
// Hoisting	        ✅ Yes	                    ❌ No	            ❌ No
// this binding	     Own this	                 Own this	           No this
// Syntax	            Normal	                  Normal	            Short
// Use as callback	   ✅	                      ✅	             ✅ (best)
// Readability	      High	                    Medium	         High (short)


//-------------------------------------------------------------------------------------//

//4. Pure And Impure Function

// A pure function is a function that always produces the same output for the same input and 
// does not cause any side effects.
// It only relies on its arguments and does not modifies any external state.
// These are Predictable, easier to test, and promote code reusability.

function add(a,b){
  return a+b;
}


//Impure functions is a function that can produce different outputs for the same inputs or 
// cause side effects by modifying external state.
// It may rely on variables outside its scope or perform actions like modifying global variables or
// making netwrok request.

let counter = 0;
function increment(){
  counter ++;
}

//-----------------------------------------------------------------------------------------//

// higher order function 

// in JS higher-order functions is a function that can accept other functions as arguments
// or return a function as its result.
// thses functions are often referred to as callback function or function parameter and these
// function invoke at specific time or condition.
// higher-order function can als return functions as their resutl.
// common example are: map(), filter(), reduce().

// =======================================================================================//

//rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))


//-----------------------------------------------------------------------------------------//
//objects in function
const user = {
    username: "hitesh",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
//-----------------------------------------------------------------------------------------//

//arrays in functions
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));