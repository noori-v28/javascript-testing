

//const tinderUser = new Object()    // ** this is a singleton object

const tinderUser = {} // ** this is a nonsingleton object ************// both are declear object with same value ,no internal deffrence

tinderUser. id = "45365hdfc"
tinderUser. name = "khan mastan"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const touristUser = {          // this is a object literal syntex
    email:"sonu nigam .gmail.com", 
    fullname:{
        username:{
            firstname:"maangus",
            lastname:"chatopadhiyai",
        }
    }

}

//console.log(touristUser.fullname.username.firstname);


const obj1 ={1:"raat", 2:"din"}
const obj2 = {3:"gas", 4: "hota hai" }

//const obj3 = {obj1,obj2}  ///*** wrong way

//const obj3 = Object. assign({},obj1,obj2)  // empty {}  is opstional ,  this method  will marge the object(value) , but we are not using this methos much

const obj3 = {...obj1,...obj2} // same spread methode like arrray ,we will using this method 90 % of the time


// console.log(obj3);

// when data base give us some value which syntex we will use  ? 

// const users = [ 
//     {
//         id:1,
//         email:"kutiya.gmail.com", // most of the this type of coma sepreted value came 
//     }
// ]

//user [1].email //***** */ here we use dote notesion syntex



// when we need the whole keys so which syntex we wll use
console.log(tinderUser);
console.log(Object.keys(tinderUser));   // whenever we use object method we need to express which keys we have to run becouse object dont know we keys we want to run **** with this method the out put value come with dta type
console.log(Object.values(tinderUser)); //with values
console.log(Object.entries(tinderUser)); // with this syntex output come with array under array , first property will be the key and the second property will be the valuue



// when the value is not exist then we use the syntex , asking

console.log(tinderUser.hasOwnProperty('isLogged')); // we have to ask using this method




//how to desturcture values

const course = { 
    coursename: "basic javascript",
    price:"999",
    courseInstructor:"kuttub"
}


const {courseInstructor : instructor} =course     // this is a destructuring syntex , we can use any name for the value , here we use instructor as a value of courseInstructor
//console.log(courseInstructor);
console.log(instructor);


// json informetion


// {
//     "name": "pashuprahar",
//     "courseName": "javascript",
//     "prize":"free",

// }

// [
//     {}
//     {}
//     {}
// ]