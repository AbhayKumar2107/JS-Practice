//An object is a dynamic data structure that stores related data as key-value pairs,
//where each key uniquely identifies its value.

//The values of properties can be primitives, objects, or functions (known as methods when defined
// inside an object).
// Objects are mutable and dynamic properties can be added, modified, or deleted at any time.
// Objects allow data grouping and encapsulation, making it easier to manage related information and 
// behaviour together.

// --------------------------------------------------------------------------------------//

//There are two primary ways to create an object in JavaScript:

//1. Creation Using Object Literal:
//The object literal syntax allows you to define and initialize an object with curly braces {},
// setting properties as key-value pairs.
let obj1 = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};

//2. Creation Using new Object() Constructor:
//objects when created with constructor is a singleton objects.
let obj2 = new Object();
obj2.name= "Sourav",
obj2.age= 23,
obj2.job= "Developer"

//-----------------------------------------------------------------------------------------//

//There are two ways to access the properties in objects.

//1. Using Dot Notation:
const user = { name: "Abhay", age: 22 };
console.log(user.name);

//2.Using Bracket Notation:
console.log(user["name"]);


//-----------------------------------------------------------------------------------------//

const mySym = Symbol("key1")


const JsUser = {
    name: "Abhay",
    "full name": "Abhay Kumar Pate",
    [mySym]: "mykey1", // symbol always define with []
    age: 18,
    location: "Lucknow",
    email: "abhay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // access symbol wih [] wihout "".


JsUser.email = "abhay@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "abhay@microsoft.com"
// console.log(JsUser);

// =================================================================================//
//5.Object.freeze(): Prevents changes.
const obj = { name: "Abhay" };
Object.freeze(obj);
obj.name = "Rahul"; // ❌ won't change

//6. Object.seal(): Can modify values but cannot add/remove properties.
const obj = { name: "Abhay" };
Object.seal(obj);
obj.name = "Rahul"; // ✅ allowed
obj.age = 22; // ❌ not allowed
// =================================================================================//

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());  // return function
console.log(JsUser.greetingTwo());