
//creating the functions

function myname(){
    console.log('V');
    console.log('i');
    console.log('p');
    console.log('i');
    console.log('n');
}

// myname is called function reference and if we add () to it  then it will become it execution
//myname() // this is execution 


//parameterised function

// function addTwoNumber(num1,num2)
// {
//     console.log(num1+num2);

// }

// addTwoNumber(5,3);


// return the value from the function 

function addTwoNumber(num1,num2)
{
    //  let res = num1+num2;
    //  return res

    return num1+num2;

 }

 let result =addTwoNumber(5,3);
 //console.log("Result : ",result );


 //creating a new function
//  function  loginusermessage(username)
//  {
//     if(username===undefined)
//     {
//         console.log("please enter the name");
//         return;
//     }
//     return `${username} logged in `;
//  }

 //console.log(loginusermessage('Vipin'));
 //what if
 //console.log(loginusermessage()); // undefined logged in 



 function  loginusermessage(username='vipin') // default value
 { 
    if(!username)
    {
        console.log("please enter the name");
        return;
    }
    return `${username} logged in `;
 }

 //console.log(loginusermessage());

 // learning about rest function which (...), it is used when we have to grab multiple values in a function and we don't know the exact number 

//  function calculatePriceCart(...num1)
//  {
//     return num1;
//  }

 //console.log(calculatePriceCart(200,40,500,700,300)); //[ 200, 40, 500, 700, 300 ]

 //interview question 

function calculatePriceCart(val1,val2, ...num1)
 {
    return num1;
 }

 //console.log(calculatePriceCart(100,200,300,500,700,800));//[ 300, 500, 700, 800 ]


 //passing object in functions

const user = {
    name : 'Vipin',
    price:199
}

 function handleObject(anyobject)
 {
    console.log(`the user name is ${anyobject.name} and the price is ${anyobject.price}`);
 }

handleObject(user);

//we can also pass the object like this
handleObject({
    name:"vipin kachwaha",
    price:201
})



//passing  array in the function

const arr = [10,20,40,50,70,80];

function giveValueArray(myarr){
    return myarr[2];
}

console.log(giveValueArray(arr));

console.log(giveValueArray([10,20,40,50,70,80]));
