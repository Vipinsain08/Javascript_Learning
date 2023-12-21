/*
let myDate = new Date()
console.log(myDate); // it will look  like this 2023-11-24T19:51:57.745Z which is not readable
console.log(myDate.toString()); //Fri Nov 24 2023 19:53:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Fri Nov 24 2023
console.log(myDate.toLocaleString()); //11/24/2023, 7:57:30 PM
console.log(myDate.toLocaleDateString()); //11/24/2023



//creating our own date
let myCreatedDate = new  Date(2023,0,2); // month are started from '0'  Sat Jan 02 0202 00:00:00 GMT+0000 (Coordinated Universal Time)
let myCreatedDate2 = new Date (2023,0,2 , 6,7);
console.log(myCreatedDate.toString()); //Mon Jan 02 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate2.toLocaleString()); // 1/2/2023, 6:07:00 AM

let myCreatedDate3 = new Date("2023-01-08")
console.log(myCreatedDate3.toLocaleString());
*/

// creating the time stamp
let myTimeStamp = Date.now();
let createdDATE = new Date("01-04-2023");
// console.log(myTimeStamp); // it will provide the value in millisecond till now from 1 jan 1970
// console.log(createdDATE.getTime());
// // converting millisecond int second
// console.log(Math.floor(Date.now()/1000));

// getting month ,day from the date
console.log(createdDATE.getMonth());
console.log(createdDATE.getDay());

// important function to learn
createdDate.toLocalString('default',{
    weekday:'long'
});