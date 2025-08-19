// today we will learn about while loops in JavaScript

let index = 0;
while (index <= 10 ) { // loop until index is less than or equal to 10
    console.log(`value of index is ${index}`); 
    index = index + 2 // increment index by 2
}

let myArray = [ "batman" , "superman" , "wonder woman" , "flash"] //
let arr =  0 
while (arr < myArray . length) {
    console.log(`value if arr is ${ myArray[arr] }`);
    arr = arr + 1
    
}

// do while loop 

let score = 1
do {
    console.log(` score is ${score}`);
    score++
} while (score <= 10);
// what if score was 11

let Score = 11
do {
    console.log(`score is ${Score}`);
    Score++  // why ++ here , because we want to increment the score , this is the increment step


} while (Score <= 10); // output will be 11 because in do while loop the code inside the block will execute first and then the condition is checked

// what is the difference between while and do while loop ?
// In a while loop, the condition is checked before the execution of the loop body. If the condition is false, the loop body will not execute at all.
// In a do while loop, the loop body is executed first, and then the condition is checked. This means that the loop body will always execute at least once, even if the condition is false.

