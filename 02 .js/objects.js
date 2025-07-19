// today learn about object 
// one side "singleton " is an object
// and author side its multipul instence

// object literals
// object. create ,, // this is  call constructor methode ke through and inside is singleton


const mySym = Symbol("key1") // this is symbol 


const rootUser={
    name:"chamunda",
    "full name" :"chamunda kuttub",
    [mySym]:"mykey1",
    age: 1000,
    location:"kutta nagar",
    email:"chamunda_google.com",
    isLoggedIn:false,
    lastLoggedIn:["monday","friday"],

    
}
//console.log(rootUser.email);       //this is not a good way to exucute value
console.log(rootUser["email"]);      // this is better way to run code with squer breacket and string not an dote
//console.log(rootUser."full name"); // its give error becouse the dote notesion
console.log(rootUser["full name"]);  // this is the right and only way 
//console.log(rootUser.mySym);       // here are the same problem dote notesion now this value no useing like a symbol
console.log(rootUser [mySym]);      // this is the right way to know the symbol
console.log(typeof rootUser[mySym]);



//
// how to change the value

rootUser.email="khabbis.chatgpt.com"
//object.freeze (rootUser)   //the freeze methode
//rootUser.email= "kalo.google.com"
console.log(rootUser);



rootUser.greeting = function(){
    console.log("hello root User");
    
}

  ///console.log(rootUser.greeting);    //function is not exicute , just giving an refrance
console.log(rootUser.greeting()); //now exicute in right output

rootUser.greeting2 = function(){
    console.log(`hello root User, ${this.name}`); // this is call string interpuletion
    
}


console.log(rootUser.greeting());
console.log(rootUser.greeting2());

