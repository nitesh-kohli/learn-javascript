for (let index = 0; index < 10; index++) {
   // console.log("hello nitesh you will get job till june");   
}

//array specific loops
//for of loop
//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for(const num of arr){
//   console.log(num);
}

//map
//store unique values in same order
const map = new Map()
map.set(121102,"palwal")
map.set(124001,"rohtak")
map.set(124001,"rohtak")

//console.log(map);

// for(const key of map){
//     console.log(key);
// }

//destructuring values of map
for(const [key,value] of map){
    //console.log(key,"->",value)
}

const Games = {
    game1:"pubg",
    game2:"call Of Duty",
    game3:"valorant",
    game4:"Days gone",
    game5:"need for speed"
}

// for(const [key,value] of Games){ //games is not iterable
//     //console.log(key,value);
// }

// for(const key in Games){
//     console.log(Games[key]);
// }





//for each loop
const coding = ["js","python","c++","java","swift"]

// coding.forEach( function (item){
//     console.log(item);
// } )

// another way
// coding.forEach( (item) =>{
//     console.log(item);
// } )


//another way

// function print(item){
//     console.log("hii",item);
// }

// coding.forEach(print)

coding.forEach( (item,index,array) =>{
    console.log(item,index,array);
} )

//for-each do not return values
