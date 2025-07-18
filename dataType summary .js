//today we summarize the data type

// how to store data in memory and and how to accese,in this bases here are two categorization (1) primitive , (2) non primitive .
             // 1. primitive

                // here are 7 primitive data type  : string , number , boolean , null , undefined ,symbol , bigint 



            
                const score = 100
                const scorevalue = 100.5

                const isLoggedin = false
                const outsideTemp = null
                let userEmail;

                // here we see that userEmail is undefined because we have not assigned any value to it

                console.log(typeof userEmail);

                const id = Symbol ('1234')
                const anotherId = Symbol ('1234')

                console.log(id === anotherId);

                // here we see that the value of id and anotherId is not equal because symbol is unique and it is used to create unique identifiers


                

                const bigNumber = 679875329784537627892n

                console.log(typeof bigNumber);

                // here we see that the value of bigNumber is a bigint because it is a large integer







            

                // 2. reference (non primitive)

                // array , object , functions 


                const hero =["saktiman", "naagraj", "bisvanaath"]

                let myobj = {
                    name: "suryavanshi",
                    Age: 19, 

                }



                const myfunction = function(){
                    console.log("hello world");
                }


                // here we see that the value of hero is an array, myobj is an object and myfunction is a function



                console.log((typeof bigNumber));
                





//************************************************************************************************************//               

//today we learn about stack and heap memory

// we focus on memory and how to work memory in javascript


// here are two type of memory (1) stack memory , (2) heap memory

// stack memory is used for primitive data type and, heap memory is used for non-primitive data type

// 1. stack memory(primitive data type) 

// 2. heap memory(non-primitive data type)



// 1. stack memory(primitive data type)

let myfacebookName = "mumtaj devi"

let anothername = myfacebookName

anothername = "tulsi das khan"

console.log(myfacebookName);

console.log(anothername);

// here we see that the value of myfacebookName is not changed because it is stored in stack memory and anothername is also stored in stack memory

// so when we change the value of anothername it does not affect the value of myfacebookName

// but when we change the value of myfacebookName it will affect the value of anothername because both are pointing to the same memory location

// so we can say that primitive data type is stored in stack memory and it is immutable

// but non-primitive data types are stored in heap memory and they are mutable

//here we change copy of myfacebookName to anothername


// 2. heap memory(non-primitive data type)

let userId ={
    userEmail: "mumtaj.devi@example.com",
    userUpi :"userId@upi"
}

let userId2 = userId
userId2.userEmail = "tulsi.das@.com"

console.log(userId.userEmail);
console.log(userId2.userEmail);

//here we change the real value of userId2.userEmail to "tulsi.das@.com"

// here we see that the value of userId is changed because it is stored in heap memory and userId2 is also pointing to the same memory location

// so when we change the value of userId2 it will affect the value of userId

// so we can say that non-primitive data type is stored in heap memory and it is mutable

// in conclusion we can say that primitive data types are stored in stack memory and they are immutable and non-primitive data types are stored in heap memory and they are mutable








