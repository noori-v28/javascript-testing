//  today we learn aboutnumber and maths in javascript


const score = 200 //this is common way to declare a number
console.log(score);

const balance = new Number(1000) // this is another way to declare a number , 
console.log(balance);

console.log(balance.toString().length); // this will give the length of the number when converted to string

console.log(balance.toFixed(2)); // this will give the number with 2 decimal places,its usually use in ecommerce sites to show price,we can give any number of decimal places we want

console.log(balance.toString()); // this will convert the number to string

const balance2 = 1234.56789

console.log(balance2.toPrecision(4)); // precision is used to format the number to a specific length, it will round the number to the nearest value

const hundred = 100000000
console.log(hundred.toLocaleString());// this will convert the number to a string with commas, it will add commas to the number, its usually use US standerd
console.log(hundred.toLocaleString('en-IN')); // this will convert the number to a string with commas, it will add commas to the number, its usually use in India standerd

//++++++++++++++++++++++++++++++ maths ++++++++++++++++++++++++++++++++++++//

// maths came in javascript by default, we don't need to import anything to use maths in javascript

console.log(Math); //math is an object in javascript, it has many properties and methods
console.log(Math.abs(-17)); //this method will return the absolute value of the number, it will remove the negative sign if there is any, here posetive becomes positive amd negative becomes positive
console.log(Math.round(6.6)); // this method will round the number to the nearest integer, it will round up if the decimal is greater than or equal to 0.5, otherwise it will round down
console.log((Math.ceil(5.3))); // this method will round the number up to the nearest integer, it will always round up, even if the decimal is less than 0.5
console.log(Math.floor(5.6));  // this method will round the number down to the nearest integer, it will always round down, even if the decimal is greater than or equal to 0.5
console.log(Math.min(7,3,5,6,7,)); // this method will return the minimum value from the given numbers, it will return the smallest number from the given numbers
console.log(Math.max(1,2,3,4,5,5,6,7,8)); // this method will return the maximum value from the given numbers, it will return the largest number from the given numbers
console.log(Math.random());  //this method gite the random number between 0 to 1
console.log((Math.random() *10)+1); // this will give the random number between 1 to 10, we can change the range by changing the numbers
console.log( Math.floor(Math.random() * 10) + 1); // this will give the random number between 1 to 10, we can change the range by changing the numbers, here we are using floor to round down the number to the nearest integer
const min = 10
const max = 30
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //
