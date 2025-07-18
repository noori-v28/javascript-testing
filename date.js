// today we learn about dates and times 
 // date is object in javascript


 let myDate = new Date()
 console.log(myDate); // with this method we can't read the date properly , not readable
 
 console.log(myDate.toString()); // now we can see the date readable format ,this is a better way to see the date
 console.log(myDate.toLocaleString()); // this is another way to see the date in a readable format, it will show the date and time in a localized format
 console.log(myDate.toDateString()); 
 console.log(typeof myDate); // this will show the type of myDate, which is an object
 
 let creatDate = new Date (2026, 9 ,16)
 console.log(creatDate.toDateString());

 let mycreatDate = new Date (2026, 9 ,16, 5, 7, 9, 4 )
 console.log(mycreatDate.toLocaleString());

 let mycreatDate2 = new Date ("2025-08-16" ) 
console.log(mycreatDate.getTime());

 let mytime = Date.now()
 console.log(mytime); // this method shows the number of milliseconds

 console.log(Math.floor(Date.now()/ 1000 )); // this will show the number of seconds without any decimal points

 
 