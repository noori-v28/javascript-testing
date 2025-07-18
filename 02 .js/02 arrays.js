// today we leanrn about arrays in javascript
// array is an object
//arrays are used to store multipul values in a singel veriable
// () => this is a perentheses function
// [] => this is a bracket array
// {} => this is a curly brace 

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //this is an simple array , square brackets are used to define an array, elements are separated by commas and it can be any  data type 

const myHeroes = ["black widow" , "thor" , "iron man"]

const array2 = new Array(1,4,5,7,9) // with this perenthesis we can create an array, this is another way to create an array , and automatically it add square brackets
console.log(myArr[0]);

// methods of array

myArr.push(7)
console.log(myArr); // push method is used to add an element at the end of the array
myArr.pop()
console.log(myArr); // pop method is used to remove the last element of the array

myArr.unshift(5) // unshift method is used to add an element at the beginning of the array
console.log(myArr);

myArr.shift() // shift method is used to remove the first element of the array
console.log(myArr);

console.log(myArr.includes(6)); // includes method is used to check if an element is present in the array, it returns true or false

console.log(myArr.indexOf(19)); // indexOf method is used to find the index of an element in the array, it returns -1 if the element is not present

const newArray = myArr.join() // join method is used to convert the array into a string, it joins the elements with a comma by default
console.log(myArr); // it does not change the original array
console.log(newArray); // it returns a new string with the elements of the array joined by a comma
console.log(typeof newArray); // it returns the type of the newArray variable

// slice and splice methods 
console.log("a ",myArr);
const myn1 = myArr.slice(1 , 3); // slice method is used to extract a part of the array, it does not change the original array, it returns a new array with the elements from index 1 to index 3 (not including index 3)
console.log(myn1);
console.log("b ", myArr);


const myn2 = myArr.splice(1 , 3) // splice method is used to remove elements from the array, it changes the original array, it removes elements from index 1 to index 3 (not including index 3) and returns a new array with the removed elements
console.log("c ", myArr);

console.log(myn2);


