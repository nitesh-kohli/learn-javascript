"use strict" //treat all JS code as newer version

//alert(3 + 3) // we cannot use alert in nodejs we can use it in browser

//primitve data types
//nn ss bb u datatypes in JS
//number null string symbol boolean bigInt undefined
let name = "Nitesh" //string
let age = 22 //Number
let isLoggedIn = false //boolean
//bigInt
//null => standalone value
//undefined
//symbol => used in react for uniqueness

// non-primitve data type - object

console.log(typeof null) //that means null is type of object
console.log(typeof undefined) // typeof undefined


/*
data are divided into two categories on the basis of how they stored in memory and how you can access them.
1.) primitive (they are call by value)
2.) non-primitve/reference datatype (they are call by reference)

//******primitive********
7 types:-
1.)Null
2.)number
3.)string
4.)symbol
5.)boolean
6.)bigInt
7.)undefined

//*******non-primitive*******
1.) arrays
2.) objects
3.) functions

//javascript is dynamically typed language
*/

//use of symbol
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); //both are different
const bigNumber = 345664345754335335n //bigInt
console.log(typeof bigNumber);

//arrays
const heroes = ["ironman","thor","hulk"]
console.log(heroes);

let obj = {
    name:"nitesh",
    age : 22,
}
console.log(obj);

//function
const sum = function (x,y){
    return x+y;
}

console.log(sum(2,3));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// stack (primitive), heap (non-primitve)
let Name = "nitesh"
let firstName = Name

firstName = "anju"
console.log(Name);
console.log(firstName);

let obj1 = {
    name: "nitesh",
    email:"nitesh@gmail.com"
}

let obj2 = obj1
obj2.name = "anju"

console.log(obj1.name)
console.log(obj2.name);

