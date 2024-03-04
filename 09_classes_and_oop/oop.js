// const user = {
//     username:"nitesh",
//     loginCount:5,

//     getUserDetails: function(){
//         console.log(`username:${this.username}`); //this keyword required to tell current context
//     }
// }

// console.log(user.getUserDetails());


//constructor function - new keyword
// const promiseOne = new Promise()
// const date = new Date()


function user(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}
//implicitly this is returned

const  userOne = new user('nitesh',5,true)
const userTwo  = new user('anju',10,false)

//value overwrite if do not i

console.log(userTwo);

