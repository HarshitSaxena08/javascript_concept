//  Primitive

// const { database } = require("pg/lib/defaults");

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')   // symbol datatype is used make it unique
// const anotherId = Symbol('123')  // symbol datatype is used make it unique

// console.log(id === anotherId);  //here its output is false because its value is unique

// const bigNumber = 3456545555n          // if we add n in number then it become bigint 
// console.log('====================================');
// console.log(typeof(bigNumber));
// console.log('====================================');



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "Harshit",
//     age: 22,
// }
// console.log('====================================');
// // console.log(heros);
// console.log(heros[2]);  //print index of 2 //start with 0

// console.log(myObj.name);
// console.log(myObj.age);
// console.log('====================================');
// const myFunction = function(){
//     console.log("Hello world");
// }
// console.log(typeof anotherId);
// myFunction();
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof myObj); 

// https://262.ecma-international.org/5.1/#sec-11.4.3

// JavaScript is a dynamically typed language. This means that the type of a variable is checked during runtime, as opposed to compile time. In dynamically typed languages, you do not need to explicitly declare the data type of a variable when you create it. Instead, the JavaScript engine infers the type based on the value assigned to the variable at runtime.

//  -------------------------------------------------------------------
// stack (primitive datatype )  , Heap (Non-primitive datatype)

let youtubeChannelName="safar_ki_kitab";
let youtubeUserName="Harshit Saxena";



fakeData=[
    {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facepturi optio reprehenderit",
    "body": "quia et sum est autem sunt r"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae"
  }
]
 var fakeDatabase={...fakeData};  // converting array into nested object check with this console.log(fakeDatabase);
// console.log('====================================');
// console.log(fakeData);
// console.log(typeof(fakeData));
// console.table(fakeData);
// console.log(fakeDatabase);
// console.log('====================================');

//for loop se print fakedatabase ko
for (const property in fakeDatabase) {
  console.log('======================1==============');
  console.log(fakeDatabase[property]);
  console.log('=========================2===========');
}
