// let a =10
// const b =20
// var c =30

// console.log(a);
// console.log(b);
// console.log(c);

// till now it will work fine but if we go in any scope

if(true)
{
    let a =10 // this is not accessible outside this scope
    const b =20 // this is not accessible outside this scope
    var c =30   // this will accessible outside the scope
}
//console.log(a);
//console.log(b);
console.log(c); // thats why var is not used to declare a variable as the variable will  be accessbile everywhere

// learning about scope in nested functions

// function one(){
//     const username="vipin"

//     function two()
//     {
//         website="youtube"
//         console.log(username); // username is accessible inside the function
//     }
//     //console.log(website); // not accessible outside the function two
//     two()
// }

// one();

if(true)
{
    username='vipin'

    if(username==='vipin')
    {
        website='autodesk'
        console.log(username+" "+website);
    }
   // console.log(website);
}

//console.log(username);

// =========================================INTERESTING ==================================

addone()// the function will run if we call the function before its declaration
addone(num)
{
    return num+1;
}

//addone(5)  

//another way of defining the funciton is 

//addtwo(6)// this will give us error we are calling the function before its declaration
const addtwo = function (num2){
    return num2+2;
}
addtwo(6)

