//today we learn about strings in javascript
 


const name = "rsvi teja"
const repoNumber = 14

// console.log(name + repoNumber + "value"); // this is not a good way to write code

console.log(`hello my name is ${name} and my repo number is ${repoNumber}`); // this is readable and better way to write code , this is the mordern way to write code


const gameName = new String("battle ground")

console.log(gameName[0]); //this is how we can access the key value of the string

console.log(gameName.__proto__); // this is how we can access the prototype of the string

console.log(gameName.length); // we can access the length of the any string

console.log(gameName.toUpperCase()); //this is convert the uppercase of the string

 console.log((gameName.charAt(4))); // here we can pass the index number and it will return the character at that index
 
 console.log(gameName.indexOf('g')); // this is how we know the index number using any character of the string
 
 console.log(gameName.toLowerCase()); // this is convert the lowercase of the string

 const newString = gameName.substring(0, 5)
 console.log(newString); // here if we notice that the last index in not included in the output, it will only return the string from 0 to 5 index,it never include the last index , here we can`t use negative value
 
 const anotherString = gameName.slice(-6, 5) // it is starting from the end of the sting and it will return the string from the end to the 5th index ,it give us reverse output ,we can use negative value only in slice method

console.log(anotherString);

const string2 = "  kunnu manali   "

console.log(string2); // this is how we can create a string with extra space in the start and end of the string

console.log(string2.trim()); // trim value is used to remove the extra space from the string, it will remove the space from the start and end of the string 

const url = "https://instagram.com/ravis%30kumar"

console.log(url.replace("%30","-")); // this is how we can replace any character in the string, it will replace the first occurrence of the character, if we want to replace all the occurrences then we can use regular expression

console.log(url.includes("ravis")); // this is how we can check if the string includes the given character or not, it will return true or false 

console.log(gameName.split(' ')); // split method is used to split the string into an array, here we can pass the character on which we want to split the string, it will return an array of strings


