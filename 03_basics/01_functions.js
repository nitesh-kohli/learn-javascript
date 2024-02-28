function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName // => function reference
// sayMyName() //=> function execution

function addTwoNumbers(number1,number2){ //function parameters
   // console.log(number1+number2);
}

const result = addTwoNumbers(1,2) //function arguments
//console.log(result); // output will be undefined becoz in function definition we are not returning anything 

function loginUserMessage(username ="user"){
    if(!username){
        // console.log("please enter username!");
        return
    }else{
        return `${username} just logged in...`
    }
}

// console.log(loginUserMessage("Nitesh")) // if argument is not passed undefind will be passed

//in add to cart option on an ecommerce website we need to add items
// and we are not aware how many parameters are gonna come

//we use rest operator which bundles all arguments and give as single parameter which is an array

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,300,400)); //array of these number as output


function calculateCartPrice(val1,val2,...num1){
         return num1
     }

//console.log(calculateCartPrice(200,300,400,500,600))

const user = {
    username: "Nitesh",
    price:999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)










