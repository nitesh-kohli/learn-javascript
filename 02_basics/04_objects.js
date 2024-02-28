const instagramUser = new Object() //singleton objects
//console.log(instagramUser);

const tinderUser = {} //this is also a way to declare an object

//this is how we assign key-value pair in objects
tinderUser.id = "123adc"
tinderUser.name = "nitesh"
tinderUser.age = 22
//console.log(tinderUser);

const regularUser = {
    email:"nitesh@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Nitesh",
            lastName:"kohli"
        }
    }
}
//console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:'a',2:'b'}
const obj2 = {2:'c',3:'d'}

//question - there are two objects obj1 and obj2 and you need to combine these two into one single object

//solution:
const obj3 = Object.assign({},obj1,obj2) // {} <=this is target where source object's value assigned into
//later source properties overwrite earlier once
//console.log(obj3);

//alternate way
const obj4 = {...obj1,...obj2}
//console.log(obj4);


//how to get keys of an object to iterate over them

// console.log(Object.keys(tinderUser)) // array of keys
// console.log(Object.values(tinderUser)) // array of values
// console.log(Object.entries(tinderUser)) // array of key-value pair
// console.log(tinderUser.hasOwnProperty("isLoggedIn")) // to check whether the property exist or not

//destructuring of objects
const course = {
    courseName : "reactjs course",
    price:999,
    courseInstructor: "Nitesh"
}

const {courseName,price,courseInstructor} = course //destructuring
console.log(courseName,price,courseInstructor);




