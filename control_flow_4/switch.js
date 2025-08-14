// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }               // this will match the key with the value and execute the corresponding block of code 
// when we use // switch statement, we can use break to exit the switch block after executing a case
const month = 5
switch (month) {
    case 1:
        console.log("january");
        break; // break is used to exit the switch block after executing the case
    case 2:
        console.log("feb");
        break;
    
    case 3:
        console.log("march");
        break;
    
    case 4:
        console.log("april");
        break;
    
    case 5:
        console.log("may");
        break;
    
    case 6:
        console.log("june");
        break;
    
    default:
        console.log(" not valid match");
        
        break;
}
// WHAT IF string value come

const monthName = "may";

switch (monthName) {
    case "january":
        console.log("jan");
        break;
    case "february":
        console.log("feb");
        break;
    case "march":
        console.log("mar");
        break;
    case "april":
        console.log("apr");
        break;
    case "may":
        console.log("may");
        break;
    case "june":
        console.log("jun");
        break;
    default:
        console.log(" not valid match");
        break;
}
// switch statement can also be used with strings, it will match the string value with the case value
