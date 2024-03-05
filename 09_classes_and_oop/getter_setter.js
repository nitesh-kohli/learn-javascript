class user{
    constructor(email,passowrd){
        this.email = email;
        this.password = passowrd;
    }

    //getter setter comes simultaneously
    //every property define in class become a method and we can get and set over it
    // we cannot set property by same name as in constructor it results in call stack exceeded.
    // so we declare new variable in getter and setter
    get password(){
        return `${this._password}nitesh`
    }

    set password(value){
        this._password = value
    }
}

const nitesh  = new user('nitesh@gmail.com','abc')

console.log(nitesh.password);