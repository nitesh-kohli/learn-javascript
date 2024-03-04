//how to create promise
// const promiseOne = new Promise(function(resolve,reject){
//     //do an async task
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('promise consumed');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async2 is completed');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('async2 is resolved');
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:'nitesh',email:'nitesh@gmail.com'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:'nitestark',password:'123'})
//         }else{
//             reject('ERROR: something went wrong')
//         }
//     },1000)
// })

// //you can't return  a value and save into variable you have to use another then block
// promiseFour
// .then( (user)=>{
//     console.log(user);
//     return user.username
// } )
// .then( (username) =>{
//     console.log(username);
// } )
// .catch( (error) => {
//     console.log(error);
// }).finally(()=>console.log('promise is either resolved or rejected'))


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:'iron-man',password:'1234'})
//         } else{
//             reject('error: avengers went wrong')
//         }
//     },1000)
// })

// async function consumePromisefive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);   
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromisefive()

// async function getAllUsers(){
//     try{
//         //fetch is a object which also return a promise so we must await
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         //converting string into json is also takes time so we must await here also
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("E :",error);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
})
.catch(function (error) {
    console.log(error);
})