const marvel_Heros =["ironman", "thor", "natasha", "hulk", "spiderman","antman"]
const dc_heros = ["batman","superman","flash","wonderWoman"]

marvel_Heros.push (dc_heros) // push method adds an element to the end of the array
console.log(marvel_Heros);
console.log(marvel_Heros[5][2]);


const allNew_heros = [...marvel_Heros, ...dc_heros,] // spread operator is used to merge two or more arrays 
console.log(allNew_heros);

const another_arr =[1,2,3,4,[45,67,56],8,[5,6,78,[7,8,90]]]
const real_arr = another_arr.flat(Infinity)  // flat 
console.log(real_arr);


console.log (Array.isArray("camando"));
console.log (Array.from("camando"));
console.log (Array.from({name :"camando"}));


let score1 = 100
let score2 = 200
let score3 = 400


console.log(Array.of(score1,score2,score3)); 
