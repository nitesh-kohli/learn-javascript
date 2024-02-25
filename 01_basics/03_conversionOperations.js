let score = "33"

//console.log(typeof score);
//console.log(typeof(score))

let valueInNumber = Number(score) // Number is used to convert string to number NOTE - N is caps here.
//console.log(typeof valueInNumber);

//what if user enter invalid string which cannot be same as number like below
score = "33abc"
valueInNumber = Number(score)
//console.log(valueInNumber); //it is NaN i.e. not a number what is it's type?
//console.log(typeof valueInNumber); //it's type is number!! that is problem here so we need to check if number is NaN or not

score = null
valueInNumber = Number(score)
//console.log(valueInNumber) // null is converted to 0
//console.log(typeof valueInNumber) //type is number

score = undefined
valueInNumber = Number(score)
//console.log(typeof valueInNumber) //number
//console.log(valueInNumber) // Nan

score = true
valueInNumber = Number(score)
//console.log(valueInNumber) // 1
//console.log(typeof valueInNumber) //number

/* short notes

"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn); //true
//console.log(typeof booleanIsLoggedIn) //boolean

// "" => false
// "nitesh" =>true

//************operations***************
// console.log(2 + 2);
// console.log(2 * 3);
// console.log(5 / 2);
// console.log(7 % 2);
// console.log(2 ** 5);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

console.log(true); //true
console.log(+true); //1
console.log(+""); //0





