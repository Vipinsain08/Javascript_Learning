// let score = 44 datatype is number 

let score = "33" // datype is string 

//converting the string into number 
let valueNumber = Number(score) // using this we can do  type conversion 

//console.log(typeof valueNumber);


// but there is an issue in type conversion 
let age = "21abc"
let numAge = Number(age) // this will convert it into number which is not possible 

// console.log(typeof numAge); 

// console.log(numAge); // try to printing the value so value is "NaN"=> Not A Number

let check = null 
let checkNum = Number(check)

// console.log(typeof checkNum); // in this case it will be 0

// in case of undefined it will give output as NaN


let num = 33

let stringNum = String(num);
// console.log(stringNum);
// console.log(typeof stringNum);




// ***********Operations********************

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power
// console.log(2/2);
// console.log(2%2);


let str1 = "same "
let str2 = "as java"

let str3 = str1+str2
console.log(str3);

console.log("1"+2);//12
console.log(2+"1");//21
console.log("1"+2+2);//122
console.log(1+2+"2"); //32


// prifx and suffix are same as java ,c++