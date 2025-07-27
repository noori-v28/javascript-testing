// today we learn about arrow functions in javascript
// what is arrow function
// arrow function is a shorter syntax for writing function expressions
// it does not have its own this context
// it cannot be used as a constructor
// it is always anonymous
// we learn about "this " inside arrow function  ,"this" keyword is global object in arrow function // it is used to access the properties of the object in which it is defined
// how to declare function speclly through arrow function
// () => {} this is a basic arrow function syntax


 const user =  {
    username: "kim jong",
    price :999,
    welcomeMessage:function() {
        console.log(`${this.username} , welcome to website`); // "this" function is use for current context of the function
    }
}

user.welcomeMessage();
// what if we change  the username
user.username = "shamu"; // here we change the context of "this" to the user object // now if we call the welcomeMessage function again, it will use the updated username

user.welcomeMessage(); // the username is changed to shamu
///********************////

function one (){
    let username = "kunnu"; // "this" function work in object context
    console.log(this.username); // we cannot access the user variable here because "this" refers to the global object in this case, not the user object

}
one()

//********how to declare function speclly through arrow function***************
//const two = function ()  {
const two = () => {
    let username = "kunnu"; 
    console.log(this.username); // out put is undefined because arrow function does not have its own "this" context, it inherits "this" from the parent scope
    console.log(this);  /// output is empty {} 
}
two()


const addthree = (num1, num2, num3)=> { // besic arrow function syntax 
    return num1+num2+num3;
}                                       //if we wrote in curly braces we need to use return keyword to return the value , when we use return keyword its called explicit return
console.log(addthree(10,10,10));

const three = (num1, num2, num3)=> num1+num2+num3; // this is a shorter syntax for arrow function, it is called implicit return ,here we do not need to use return keyword and curly braces and it  will write in one line

console.log(three(10,10,10));

const four = (num1, num2, num3)=> (num1+num2+num3 ) // this is also an implicit return and with parentheses, but we can write it in one line without curly braces and return keyword
console.log(four(60,60,60,60));

//const five = (num1, num2, num3)=> {username: "komal"} //this will not work becouse it is in one line and its without parenthesis, so it will return undefined
const five = (num1, num2, num3)=> ({username: "komal"}) // this will work because we are returning an object with parentheses, so it will return the object
console.log(five(60,60,60,60));
