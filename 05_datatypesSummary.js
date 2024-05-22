// javascript is a Dynamically typed language

// Primary (call by value)

// 7 types : String, Number, Boolean, null, undefines, symbol, BigInt  

let str1 = "mayur"

const score = 100

const isLoggedIn = true

const outsidetemp = null

// const useremail

const userId = Symbol('123')

const bigNumber = 457865459642

// Reference (Non Primitive)

// Arrays,  Objects, Functions

// const heros = ["Shaktiman", "nagraj", "Doga"]
// let myObj = { name: "Mayur"
//      age = 25
// }

// const myfunction() = function(){
//     console.log("Hello World");
// }


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),  Heap (Non Primitive)
// got Copy of original       ,   got Reference of original 


let myPhone = "Realme";

let mummys_Phone = myPhone;
mummys_Phone = "moto";

console.log(myPhone);
console.log(mummys_Phone);

let userOne = {
    email: "mayur@google.com",
    upi: "mayur@ybl"
}

let userTwo = userOne

userTwo.email = "hello@google.com"

console.log(userOne.email);
console.log(userTwo.email);





