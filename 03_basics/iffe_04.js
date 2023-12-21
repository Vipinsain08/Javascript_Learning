//IIFE: IMMEDIATLY INVOKED Function EXPRESSION

(function chai(){
    // named iffe
    console.log('DB connected');
}) ();
//wrapping the function into parenthesis 
// -> iffe function are used to immediatley run a function and for handling pollution from global scope


//===========let us try to declare arrow function in iffe=======
(()=>{
    console.log("DB connected two")
})(); // this function will not run because some time the code editor don't know where to stop the execution of first iffe so we have to add ';' at the end of first iffe


// +++++++++++++++++++++++++++++++ taking parameter's in iffe++++++++++++++

((name)=>{
    console.log(`DB connected three, ${name}`)
})('vipin')