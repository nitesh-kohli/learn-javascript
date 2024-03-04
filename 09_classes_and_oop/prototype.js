// challenge-1
// i want a method named trueLength which give me the length of string after trimming whiteSpace
// and this property should work with all the string i give in input

let myName = 'Nitesh     '
//console.log(myName.trim().length);

let myHeroes = ['ironman','batman']

let heroPower = {
    thor:'hammer',
    spiderman : 'sling',

    getSpiderPower: function(){
        console.log(`spidre power is ${this.spiderman}`);
    }
}

//as everything in javascript is object we make a prototype in object and that prototype must be 
// available to all objects

Object.prototype.nitesh = function(){
    console.log(`nitesh is present everywhere`);
}

// myHeroes.nitesh()
//heroPower.nitesh()
// myName.nitesh()

Array.prototype.heyNitesh = function(){
    console.log(`hey nitesh you are here...`);
}

//heroPower.heyNitesh() heyNitesh() is not exist for this object





// inheritance

const user = {
    name:'nitesh',
    email:'nitesh@google.com'
}

const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : true
}
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(teachingSupport,teacher)


let anotherString = "nitesh      "
String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherString.trueLength()

