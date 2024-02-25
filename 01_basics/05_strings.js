let firstName = "Nitesh"
let lastName = "Kohli"
let age = 22

//string interpolation
//console.log(`hello ${firstName.toUpperCase()} ${lastName.toUpperCase()} how are you.Your age is ${age}.`);

//another way of declaring string
const animeName = new String("black clover") //object
//console.log(typeof animeName);

//animeName is a string object so we have different prototypes and we can access them as
// console.log(animeName.__proto__) //this will give an object

//console.log(animeName.charAt(2));
//console.log(animeName.indexOf('v'));

const newString = animeName.substring(0,9) //in substring we cannot give -ve values
//console.log(newString);

const anotherString = animeName.slice(-2,11) // in slice we can give -ve values
//console.log(anotherString);

const string1 = "   nitesh   "
//console.log(string1);
//console.log(string1.trim()); //trim remove white space

const url = "https://www.youtube.com/watch?v=sscX432bMZo&t=1379s&ab_channel=ChaiaurCode"
//console.log(url.replace('=','_'));

const string2 = "demon-slayer-swordsman-village-arc"
console.log(string2.split('-')); //create array of words separated by -