// today we learn about scope in javascript
//what is scope and closure 
//"{}" is a scope  ,if this curly braces come with function or "if , else , for, while" then it is a block scope ,if i write outside of function then it is a global scope
//let and const are block scope , var is global scope

//var a = 6;
let a = 8; // this is a global scope
if (true) {
  let a = 10; //this is a block scope
  const b = 20;
  console.log("inner:" , a);
  
}

console.log(a);
//console.log(b);
//console.log(c);

function one (){
  const username ="kuttan"  // when the nested function use the child function can access the parent function variable                                                                          

  function two(){
    const website = "pet.com"
    console.log(username);
    
  }
  //console.log(website);
  two();

}
one();
if (true){
  const username = "kuttan";
  if (username==="kuttan") {
    const website = " pet.com";
console.log(username + website );

  }
  //console.log(website);  // this will give an error because website is not defined in this scope
  
}
//console.log(username); // this will give an error because username is not defined in this scope



//++++++++++++++++++++++ intresting example ++++++++++++++++++++++++++++++++

addone(5)
function addone(num){ // this is a function declaration , before function addone will execute without any error
  return num + 5 

}

//addtwo (5)
const addtwo = function(num){ // this is a function expression , this will give an error because function expression is not hoisted we cant use declaration function before it is defined
  return num + 10
}
addtwo (5)
//