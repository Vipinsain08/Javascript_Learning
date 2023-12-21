// singleton
// Object.create

// object literals

// using the symbol as a key in object
const mySym = Symbol("key1")


const JsUser = {
    name: "Vipin",
    "full name": "Vipin kachawa", // if we use this synatx for key then you only assess the value by JsUser["email"]
    [mySym]: "mykey1", // symbol as a key
    age: 18,
    location: "Jaipur",
    email: "vipin08@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "vipin08@autodesk.com";
// Object.freeze(JsUser)
JsUser.email = "vipin08@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
console.log(JsUser.greeting);// this will return the reference of the function
JsUser.greeting(); 
JsUser.greetingTwo();