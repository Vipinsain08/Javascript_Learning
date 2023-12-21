//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // value of two same symbol is even not same 

// const bigNumber = 3456543576654356754n

//************************************************************************************************ 

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];


// object are formed using the curly brackets , and we can define the object into the variable (myObj in this case)

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/****************** Memory allocation ************/
// primitive datatype : stack memory
// non -primitive datatype : head memory 


let myName = "vipin"

let anotherName = myName

// here both the variable anotherName have the copy of the myName so if we change the value of anotherName the myName value will not change

anotherName = "hero"
 
console.log(myName);
console.log(anotherName);

// but in case of dynamic variables or non primitive type they will provide the  reference to original location 

let myObject = {
    email :"vipin@gmail.com",
     emailId : "check"
}

let otherObject = myObject

console.log("values of myObject");
console.log(myObject.email);
console.log(myObject.emailId);

console.log("values of otherObject");
console.log(otherObject.email);
console.log(otherObject.emailId);

// lets chagne the value of one 

otherObject.email="heros@gmail.com"
otherObject.emailId ="test"

console.log("values of myObject");
console.log(myObject.email);
console.log(myObject.emailId);

console.log("values of otherObject");
console.log(otherObject.email);
console.log(otherObject.emailId);
