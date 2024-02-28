const marvelHeroes = ["ironman","thor","spiderman","antman"]
const dcHeroes = ["superman","batman","wonder women","flash"]

//push work on existing array
//marvelHeroes.push(dcHeroes) // add array as element


//concat create new array
const all_heroes = marvelHeroes.concat(dcHeroes)
//console.log(all_heroes)

const all_new_heroes = [...marvelHeroes,...dcHeroes]
//console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //flat stored array elements as single elements even if they are in nested arrays

//console.log(real_another_array);


//console.log(Array.isArray("nitesh"))
//console.log(Array.from("nitesh")) //convert into array
//console.log(Array.from({name:"nitesh"})) //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

