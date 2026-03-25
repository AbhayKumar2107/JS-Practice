//Data types define what kind of value a variable holds
let name2 = "Abhay"; // string
let age2 = 21;       // number

//---------------------------------------------------------------------------------------------//

// Two Main Types of Data Types

// 1. Primitive Data Types (Basic / Immutable) : These store actual values (not references)

//Types:

//1. String : text data within "".
let name = "Abhay";


//2. Number: includes number and decimals, integers are limited by ±(253-1).
let age = 21;
let price = 99.99;


//3. Boolean: only true and false.
let isLoggedIn = true;


//4. Undefined: variable declared but not assigned.
let x;
console.log(x); // undefined


//5. Null: A standalone value / Representation of empty value.
let data = null;


//6. BigInt: for very large number.
let big = 123456789012345678901234567890n; 


//7. Symbol: Unique Identifier.
let id = Symbol("id");

//------------------------------------------------------------------------------//

// 2. Non-Primitive (Reference Types) : These store reference (address in memory)

// Types:

// 1. Object: 
let user = {
  name: "Abhay",
  age: 21
};

//2. Array:
let fruits = ["apple", "banana", "mango"];


//3. Functions:
function greet() {
  console.log("Hello");
}

//--------------------------------------------------------------------------------------------//

/* 
 Final Interview Answer (Perfect)

If interviewer asks:

 “Are primitives stored in stack and objects in heap?”

Answer: Primitives are typically stored directly in stack memory, 
        while non-primitives are stored in heap memory with references in the stack.
        However, this is an abstraction, as JavaScript engines manage memory internally.
*/

//-----------------------------------------------------------------------------------------//


/* type of undefined -> undefined  ||   null ->  object. */