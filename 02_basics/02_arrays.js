const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["batman", "flash", "superman"];

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
//limited to one value
// console.log(allHeroes);


//spread operator
const allNewHeroes = [...marvel_heroes,...dc_heroes]
// console.log(allNewHeroes);


const another_array = [1,2,3,[4,5,6],7,[6,5,4,[3,2,1]]]
const new_array = another_array.flat(2)

// console.log(new_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("gaurav"))

console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));