class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username:${this.username}`);
    }

    static createId(){
        return `123`
    }
}

//static inhibit access to some method by instance variable
const nitesh = new user('nitesh')
// console.log(nitesh.createId());

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const laptop = new teacher('realme3pro','realme@gmail.com')
laptop.createId()