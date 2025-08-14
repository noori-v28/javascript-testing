// today we learn about control flow in JavaScript

// if statements

//if the condition is true then it will execute the code block inside the if statement
// if condition is false then it will not execute the code block inside the if statement

// if(condition){

// }

const isloggedIn = true

if (isloggedIn){
    console.log("welcome");
    
}
else{
     console.log("not loggedIn");
     
}

const student =50
if (student < 60 ){
    console.log("student is less then 60");
    
}
else{
    console.log("student greater the 52 ");
    
}


// "<" this is less than
// ">" this is greater than
// "<=" this is less than or equal to
// ">=" this is greater than or equal to
// "==" this is equal to
// "===" this is equal to and also checks the type
// "!=" this is not equal to
// "!==" this is not equal to and also checks the type
const result = 48 % 2;
if  (result === 40 ){
    console.log("true");
    
}

else{
    console.log("false");
    
}

const balance = 2000
if (balance >= 40000){
    console.log("you have enough balance");

}
    
else{
    console.log("you have under 3000");
    
}

const ACbalance = 60000 
// if ( ACbalance === 7000) console.log("you have enough balance") , console.log("you have under 3000") , console.log("you have 60000"); // this is not correct way to write if statement
if (ACbalance < 500 ) {
    console.log("less than 500");
    
}else if (ACbalance < 600 ){

console.log(" less than 600");

} else if (ACbalance < 900){
    console.log( " less than 900");
    
}else  {
    console.log("less than 70000");
}
// "&&" this is logical AND operator , it checks whether both conditions are true

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const LoggedInFromEmail = true
if (userLoggedIn && debitCard && 2==2){  // here we can check multiple conditions but only if all are true 
    console.log("allow you buy course");
}
if (loggedInFromGoogle || LoggedInFromEmail ){ //" || "  this is called logical OR operator, it checks whether at least one condition is true , multiple conditions can be checked using this operator
    console.log("userLoggedIn");
}
