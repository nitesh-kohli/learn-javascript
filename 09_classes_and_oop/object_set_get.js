const user = {
    _email : 'nitesh@gmail.com',
    _password : 123,

    //i don't want anybody can access these properties directly.

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}