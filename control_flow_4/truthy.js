

// Truthy and Falsy values in JavaScript
// In JavaScript, values can be classified as "truthy" or "falsy".
// Truthy values are those that evaluate to true in a boolean context.
// Falsy values are those that evaluate to false in a boolean context.

// falsy values in JavaScript include: false, 0, "", null, undefined, and NaN,-0,bigint(0n)

//truthy values : "0" , 'false', " " ,[] ,{} , function(){} , 

const userEmail = "kuttan@example.com";
if (userEmail) {
    console.log("Email is provided:", userEmail);
} else {
    console.log("Email is not provided");
}
// here output is: Email is provided: kuttan@example.com


const UserEmail = []
if (UserEmail.length===0) {
    console.log("array is empty");
} // here output is: array is empty because UserEmail is an empty array which is falsy

const emptyObj = {}
if (Object.keys(emptyObj).length ===0){
    console.log("object is empty");
    
} // here we use the object

// nullish coalescing operator(??) : null,undefined

let val1;
//val1 = 5 ?? 20;
//val1 = null ?? 20;
//val1 = undefined ?? 77
val1 = null ?? 68 ?? 100 // here it will return the first defined value, which is 68
console.log(val1);
// null coalescing operator or ternary operator both are different

//ternary operator
// condition ? true : false

const iceTeaPrice =  100
iceTeaPrice >= 88 ? console.log("less than 80") : console.log("more than 80");

// we can control  according to situation.// we dont want execute code in all time