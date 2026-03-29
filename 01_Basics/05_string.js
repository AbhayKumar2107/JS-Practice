//A string is a primitive data type used to represent and manipulate sequences of text characters

//Searching & Checking (VERY IMPORTANT)
//Used in: filtering, validation, search features
let str1 = "hello world";
str1.includes("world");   // true
str1.startsWith("hello"); // true
str1.endsWith("world");   // true
str1.indexOf("o");        // 4


// Extracting Strings
//Most used method for slicing strings
//Prefer slice() over substring()
let str2 = "javascript";
str2.slice(0, 4);   // "java"



// Replacing Text
//Used in: formatting, cleaning input
let str3 = "hello world";
str3.replace("world", "JS");        // "hello JS"
str3.replaceAll("l", "x");          // "hexxo worxd"



//Case Conversion
//Used in: search, comparisons, normalization
"hello".toUpperCase();  // "HELLO"
"HELLO".toLowerCase();  // "hello"



//Trimming (VERY COMMON)
//Used in: form inputs, user data cleaning
"  hello  ".trim();   // "hello"



//Splitting Strings
//Used in: parsing data (CSV, tags, etc.)
"a,b,c".split(",");   // ["a", "b", "c"]



// Combining Strings
"hello".concat(" world"); // "hello world"
//But in modern JS, we prefer:
`hello ${"world"}`  // template literals ✅



//Repeating & Padding
//Used in: formatting numbers, UI display
"ha".repeat(3);        // "hahaha"
"5".padStart(3, "0");  // "005"

//------------------------------------------------------------------------------------------------

//Interview Questions

//--------------------------------------------------Easy Level

//check if string contains a word
function containsWord(str, word){
    return str.includes(word);
}

//convert to upperCase
function toUpper(srt){
    return srt.toUpperCase();
}

//trim space
function trimString(str){
    return str.trim();
}

//find the first occurance of the character
function findIndex(str, char){
    return str.indexOf(char);
}

//split sentence into words
function splitWords(str){
    return str.split(" ");// return an array of words splited by space.
}

//------------------------------------------------Medium Level

//Replace spaces with hypens
function replaceSpaces(str){
    return str.replaceAll(" ", "-");
}

//extract first 5 character
function firstfive(str){
    return str.slice(0,5);
}

//count occurance of the character
function occurance(str, char){
    return  str.split(char).length -1;
}
// console.log(occurance("count occurance of the character", "c")); // 6


//check start and end 
function checkStartEnd(str, start, end){
    return str.startsWith(start) && str.endsWith(end);
}
// console.log(checkStartEnd("count occurance of the character", "c", "r")); //true


function capatilize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}
// console.log(capatilize("capatilize")); // Capatilize


//------------------------------------------------Hard Level


// Question: [ Title case conversion ]

//convert  "hello world from js" -> "Hello World From Js".
//logic: split sentencet into words 
//       capatilize first char of each word
//       join back it into sentence.

function toTitleCase(str){
    return str.split(" ")
    .map((word)=> word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
//Explain: "I use split + map to transform each word individually."



//Question: [Reverse a String]

// convert  "hello" -> "olleh".
//Logic: Convert string → array
//       Reverse array
//       Join back


function reverseString(str) {
  return str.split("").reverse().join("");
}

//They may ask: Can you do it without using reverse()?"

function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}


//Question :[Palimdrome check]

// check: "madam" → true , "hello" → false

function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}

//Interview Advanced Version Ignore spaces & special chars:

function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(" ", "");
  return str === str.split("").reverse().join("");
}
//They LOVE asking: "A man a plan a canal Panama"



//Question: [Truncate String]
// Problem
//"JavaScript is awesome", limit = 10
//→ "JavaScript..."

function truncate(str, limit) {
  return str.length > limit 
    ? str.slice(0, limit) + "..." 
    : str;
}
// Mention: "I check length first to avoid unnecessary slicing."




//Question: [Remove Duplicate Characters]
// "programming" → "progamin"

//Logic: We need unique characters only

function removeDuplicates(str) {
  return [...new Set(str)].join("");
}

// Interview Follow-up (IMPORTANT)

// If they say:
// "Do it without Set"

function removeDuplicates(str) {
  let result = "";
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}

// Final Interview Insight
// For hard problems, interviewers check:

// Can you break problem into steps
// Can you choose correct string methods
// Can you optimize / give alternate solution