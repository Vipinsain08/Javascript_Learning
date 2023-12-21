const myarr = [0,1,2,3,5,6]
const heros = ['shakitman','spiderman','naagraj']

const myArr2 = new Array(1,2,3,4,5)
//console.log(myarr[1]);

// Array methods 

myarr.push(7);
myarr.pop();

myarr.unshift(11); // shift the array by 1 value to right
myarr.shift(); // opposite to unshift


//console.log(myarr.includes(9));
//console.log(myarr.indexOf(5));


const newarr = myarr.join() // this will bind the array and also convert it into string
//console.log(myarr);
//console.log(newarr);


//slice , splice

console.log('A ',myarr);

const myn1 = myarr.slice(1,3);
console.log(myn1);
console.log("B ",myarr);

const myn2 = myarr.splice(1,3); // this will remove part 1 to 3 from original  part
console.log("C",myarr);
console.log(myn2);



