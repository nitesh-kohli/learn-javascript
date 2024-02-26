let balance = new Number(100) //object will be created

// console.log(typeof balance);
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 134.894
//console.log(otherNumber.toPrecision(3)) //interesting
//console.log(otherNumber.toPrecision(2))

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++
//console.log(Math.abs(-4));

let randomNumber = Math.random()*10; //0-9 any random number
//console.log(randomNumber + 1); //1-9 any random number but there are lots of value after decimal

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min);

