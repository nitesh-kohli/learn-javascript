//this keyword refer to current context

const user = {
    username:"nitesh",
    age:22,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "anju" //context changed
//console.log(this); //becoz we are working with node output will be empty object

//but in case of browser the output will be window object

// function chai(){
//     const name = "biscuit"
//     console.log(this.name);
// }

//chai() // => undefined , that means this keyword work in objects not in functions




//this will also give same output =>undefined
// const chai = function(){
//     const name = "biscuit"
//     console.log(this.name);
// }

// chai()


//++++++++++++++++++++++++++++++++++++++++++++++++++==================
//arrow function
const chai  = () =>{
    const name = "biscuit"
    //console.log(this.name);
}
chai() // => undefined

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//implicit return
// const addTwo  = (num1,num2) =>  num1+num2

//+++++++++++++++++   important      +++++++++++++++====
 // curly braces use kroge to return likhna pdega bro,parenthesis mai nhi likhna
 //const addTwo  = (num1,num2) =>  (num1+num2)

// console.log(addTwo(2,3))

const addTwo  = (num1,num2) =>  ({username:"nitesh"}) //while returning object wrap it in parenthesis

console.log(addTwo(2,3));










