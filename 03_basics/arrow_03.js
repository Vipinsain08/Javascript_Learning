const user={
    username:'Vipin',
    prince:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // checking what will this print , mean what value this having
       // console.log(this); 

    }
}

// user.welcomeMessage() //Vipin, welcome to website
// user.username= 'adib';
// user.welcomeMessage() //adib, welcome to website

// lets check  in global what this have 


//console.log(this); // firstly javascript is only run on browser(as browser have engine to run javascript ) then we extracted the engine and make engines to run javascript so when we run this on browser it will give "windows and some more values" as outcome but in engines like node it will give empty object


// let check what this will give us in function

function chai(){
    let username='vipin'
    console.log(this); // it will give you lots of value but" this" is only be used in object it will not perform anything in function
    console.log(this.username);//undefined
    
}


//chai();

// const chai = function()
// {
//     let username='vipin'
//     console.log(this); // it will give you lots of value but" this" is only be used in object it will not perform anything in function
//     console.log(this.username);//undefined

// }


// =================================================arrow functions===========================================================

const  chai2 =()=>{
    let usernam="Vipin"
    console.log(this); // 'this' is also not used in arrow function , it will return {} empty object here
}

// const addTwo =(num1,num2)=>{
//     return num1+num2;
// }

// another way to write it is 

//const addTwo =(num1,num2)=> num1+num2;
// another way of doing the same is 

//const addTwo =(num1,num2)=> (num1+num2); // this syntax is mostly used in react

// to return object from arrow function we have to use ()

const addTwo =(num1,num2)=> ({
    username:'vipin',
    website:'youtube'
}); 

console.log(addTwo(4,2));
