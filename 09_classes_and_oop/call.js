function SetUsername(username){
    this.username = username;
}

function createUser(username,email,password){
    
    //SetUsername(username);
     //this function is called but as function called it gets current username that
    //is stark set it to username and swap out from call stack and modified value not stored and remain 
    //unchanged

    SetUsername.call(this,username) //.call() method is used to hold the reference and give it's this
    //to called function so that called function set value in it.


    this.email = email;
    this.password = password;
}

const newUser = new createUser('stark','stark@google.com','12345')
console.log(newUser);


