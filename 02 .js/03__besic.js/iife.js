// today we will learn about iife 
// iife is a function that runs as soon as it is defined.

// iife (immediately invoked function expression)

//why we use iife :- becouse sometime the global scope is polluted by the variables and functions we create. and  we need to avoid or clean that pollution.
// iife is a function that runs as soon as it is defined.

// 1. "()" here we write function definition  2."()"  execution

// example *****
// function withme(){  // here are the first "()" to define the function
//     console.log(`DB CONNECTED`);
// }()
 // with me ()  /// here are the second "()" to execute the function


(function withme(){ 
    console.log(`DB CONNECTED`);
})() ;

(function andyou (){ 
    // "andyou"  the is named iife becouse its have a name
    console.log(`DB CONNECTED again`); // here output come error becouse js have to end the previous function execution with semicolon then it will execute the next function
})(); // here output db connected again

// what if we write arrow function without name  // if we end the previous function execution with semicolon then we can execute this arrow function without name
(() => { 
    console.log(`DB CONNECTED with arrow function`);
})() ;

((name) => {   // here is no name so its a simple iife 
    console.log(`DB CONNECTED with arrow function again ${name}`); // here we can pass the parameter in arrow function
})(" noor") ;

