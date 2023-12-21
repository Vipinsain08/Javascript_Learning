let myName = "vipin"
let fatherName = "vijender"
let motherName = "santosh"

console.log("my name is "+myName+" my father name is : "+ fatherName+" and my mother name is : "+motherName);

//BUT THE ABOVE METHOD IS OUTDATAED

//NEW METHOD IS USING THE ``backticks
console.log(`my name is ${myName} my father name is ${fatherName} and my mother name is ${motherName}`);


//another way of making the string is using dynamic allocation

let gameNme = new String("vipin");

/*
console.log(gameNme[0]);
console.log(gameNme.__proto__)

console.log(gameNme.length);
console.log(gameNme.toLocaleUpperCase())
console.log(gameNme);
console.log(gameNme.charAt(2));
console.log(gameNme.indexOf('i'));

*/

let newNme = gameNme.substring(0,4)
console.log(newNme);

// it will count from the end if negative value is given
const anotherstring = gameNme.slice(-4,4)
console.log(anotherstring);

const newStringOne = "   hitesh    "
console.log(newStringOne.trim()); // it will remove the space from the string
console.log(newStringOne);



const url = "https://vipin.com/vipin%07vipin"

console.log(url.replace('07','_')); //https://vipin.com/vipin%_vipin

console.log(url.includes('vipin'))

//spliting the string into array

let varch = "vipin_214_hero_"
console.log(varch.split('_')); //[ 'vipin', '214', 'hero', '' ]



