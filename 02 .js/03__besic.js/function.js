// today we learn about function
// function is a block of code that will exicute when we call it
// function is a reusable code that can be used multiple times



function sayMyName(){    // this is a function defination
    console.log("m");
    console.log("a");
    console.log("a");
    console.log("s");

}

sayMyName()

function addTwoNumber(number1, number2){                  // when we make functions definations "stirng or any data type" we call it peramiter
    console.log(number1+number2);
    
}

addTwoNumber()   // out put is NAN , we dont know the number becouse we did not put any number or any value  this is call argument 

addTwoNumber(3, 4)
addTwoNumber(3, "4")
addTwoNumber(3, "a")

function weaddTwoNumber(number1,number2) {  //

    // let result = number1 + number2
    // return result           // after return function if you give any number or value this will never exicute , if you give any value before return function it will exicute   

    return number1 + number2  // it will give directe output not any "let"
}
const result = weaddTwoNumber(3,6) // this is a function call
console.log("result:", result);  





function loginUserMessage(username){ // this is a function defination
    if(username === undefined) {
        console.log("please enter a username");
        return

    }
    return `${username} just logged in` // this is a template literal, it will return a string with the value of username

}
console.log(loginUserMessage("chaman")) 
console.log(loginUserMessage(""));   // if you put string value under the brecket it will return "just logged in"
console.log(loginUserMessage());    //if you dont put any value under the brecket it will return undefined

function calculateCardPrize (...num1){ // this is a rest operator, it will take all the values that you put in the function call and put them in an array
    return  num1

}

console.log(calculateCardPrize(2000, 5000 , 1000));
// rest operator is used to take multiple values in a function call and put them in an array






const user = {
    username:"harry",
    price:1999
}
function handleObject(anyobject){ //this anyobject is a prameter, in this we can put any object and it will return the object
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  //

}
handleObject(user) // now we are passing the onject to the function, this is an argument






//how to pass array in function

const myNewArray =[400,600,100,999] // this is an array, we can put any value in it and it will return the array
function returnSecondValue(){
    return myNewArray[3] // this function will return the second value of the array, we can also put any index number in the array to get the value
}

console.log(returnSecondValue(myNewArray)); // this will return 999
