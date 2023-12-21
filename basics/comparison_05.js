console.log("2">1); //javaScript will try to convert the string to a number before making the comparison
console.log("02">1); 

console.log(null>0); //false
console.log(null==0); // false
console.log(null>=0); // true ( the reason is that an equity check == and comparison <,> <= , >= work differently) . comparison convert null to number, treating as 0

console.log(undefined==0); // undefined give 0
console.log(undefined>0);
console.log(undefined<0);


// strict check 
 
console.log("2"===2);  //this will also check the data type also 
