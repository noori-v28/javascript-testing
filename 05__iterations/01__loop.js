
// today we learn about loops in JavaScript
for (let index = 0; index <= 10 ; index++) {  
    const element = index;
    console.log(element);
    
}

for (let i = 0; i < 20; i++) { // if method inside a for loop  // any words can be used as index
    const element = i;
    if (element == 5 ){
        console.log( "this is the lucky number");  
    }
    console.log(element);
}


for (let index = 0; index <= 10; index++) {  //here begins the nested loop
    console.log(`outer loop value: ${index}`);

     for (let i = 0; i <=12; i++) {
        console.log(`inner loop value: ${i} and inner loop ${index}`); 
     }
}

for (let h = 2; h <= 10; h++) {  // here begins the multiplication table and loop inside 
    console.log(`outer loop value: ${h}`); // here we log the outer loop value

     for (let i = 1; i <=12; i++) {
        console.log(h + '*' + i + ' = ' + h*i ); // multiplication table
     }
} 


let myArray = ["super man" , "bat man" , "flash"] 
console.log(myArray.length); // here we check the length of the array

for (let index = 0; index < myArray.length; index++) {   // here loop begins to iterate over the array
// for (let index = 0; index <= myArray.length; index++)  // this is incorrect because it will go out of bounds and output will be undefined
// for (let index = 0; index <= myArray.length; index) // without incrementing index ++ , it will create an infinite loop  , ++ is too important
    const element = myArray[index];
    console.log(element); // here we log the element of the array
} 

// keywords 
// break and continue
for (let index = 1; index <= 20 ; index++) {
    if (index == 5) {
        console.log(`detected 5`);
         break; // this will break the loop when index is 5 , whenever we want to break the loop we use break keyword, with break keyword the loop will stop executing
        //continue; 
        // this will skip the current iteration when index is 5 , whenever we want to skip the current iteration we use continue keyword, with continue keyword the loop will continue executing
    }
    console.log(`value of i id ${index}`); 
   
    
}