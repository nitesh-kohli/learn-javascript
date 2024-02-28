//singleton
//Object.create

//object literals
const mysym = Symbol("key2")
const user = {
    name:"Nitesh",
    age : 22,
    [mysym]:"value1"

}
//console.log(user.age);
//console.log(user[mysym]);

Object.freeze(user) //it freezes the object from changing
user.name = "anju"
console.log(user.name);

