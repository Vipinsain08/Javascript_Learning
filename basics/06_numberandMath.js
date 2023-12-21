/*
const score = 400
console.log(score);

const score1 = 400; // Primitive number type

const score2 = new Number(400); // Number object type , score is assigned an object of the Number wrapper type. It wraps the primitive number value 400 inside an object. This means score is no longer a primitive number; it's an instance of the Number object.
/*
console.log(typeof score1); // Output: "number"
console.log(typeof score2); // Output: "object"

console.log(score1 === 400); // Output: true
console.log(score2 === 400); // Output: false (score2 is an object, not the primitive number)

console.log(score1 + 10); // Output: 410 (primitive number arithmetic works)
console.log(score2 + 10); // Output: 410 (JavaScript automatically unwraps the object for arithmetic)



const balance = new Number(400)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

// precision function

const num = 123.8966

console.log(num.toPrecision(4)); // this will provide the precisied value or round of value


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // without 'en-IN' this it will print 1,000,000


*/

// Number has lot of function named maxInteger, minInteger etc

/***************************Maths******************/

/*
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2)); // choose bigger value

console.log(Math.min(4,7,5,1,2,11));
console.log(Math.max(4,7,5,1,2,11));

*/


console.log(Math.random()); //value is in between 0 -  1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min =10
const max =20

console.log(Math.floor(Math.random()*(max-min +1))+min);







