// We can declare variables to store data by using let, var, and const keyword.

// -------------------------------------------------------------------------------------------//
// 1. let: Block scoped { }
//         Value can be reassigned
//         Cannot be redeclared in same scope
// -------------------------------------------------------------------------------------------//
//Example:
let age = 20;
age = 25; //  allowed

if (true) {
  let name = "Abhay";
  //console.log(name); //  works
}
//console.log(name); //  Error (block scoped)


// -------------------------------------------------------------------------------------------//
// 2. var: Function scoped/ global scope (NOT block scoped )
//         Can be redeclared
//         Hoisted (moves to top with undefined)
// --------------------------------------------------------------------------------------------//
//Example:
if (true) {
  var city = "Lucknow";
}
//console.log(city); //  works (but SHOULD NOT ideally)

//console.log(a); // undefined (not error )
var a = 10; //This causes bugs → that’s why we avoid var in modern JS.


//-------------------------------------------------------------------------------------------//
// 3. const:  Primitive values cannot change
//            Objects/arrays can be modified (but not reassigned)
// -------------------------------------------------------------------------------------------//
//Example:
const pi = 3.14;
//pi = 3.15; //  Error

const user = { name: "Abhay" };
user.name = "Patel"; //  allowed (modifying)
//user = {}; //  not allowed (reassigning)


// -------------------------------------------------------------------------------------------//
//key difference:

//| Feature         | `var` (Function Scope) | `let` (Block Scope) |
//| --------------- | ---------------------- | ------------------- |
//| Scope boundary  | Function `{}`          | Block `{}`          |
//| Inside `if/for` | Accessible outside     | Not accessible      |
//| Bug risk        | High                   | Low                 |
// --------------------------------------------------------------------------------------------//

function house() {
  if (true) {
    var a = "var room";
    let b = "let room";
  }

 // console.log(a); // 
 // console.log(b); // 
}

// --------------------------------------------------------------------------------------------//
/* If interviewer asks:
  “Why prefer let over var?”
   Answer:
   Because let is block-scoped, which prevents unintended access and bugs caused by variable 
   leakage, unlike var which is function-scoped.*/
// --------------------------------------------------------------------------------------------//