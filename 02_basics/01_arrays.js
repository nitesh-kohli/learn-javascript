// arrays - in js array elements can have different types
// 1.) JS arrays are resizeable
// 2.) JS array-copy-operation create shallow copies(same reference)


const myArr = [1,2,3,4,5,"nitesh",true]
//console.log(myArr);
//other way of declaration of arrays
const myArr2 = new Array(1,2,3,4,5)
//console.log(myArr2[3]);

// array methods
myArr2.push(6)
//myArr2.pop()
//myArr2.unshift(9) //add element at start

//console.log(myArr2.shift());

const newArr = myArr2.join();

//console.log(typeof newArr);

//slice , splice

// in slice array do not modify and we get a range of elements start to end-1
// console.log(myArr2);
// console.log(myArr2.slice(1,4));
// console.log(myArr2);


//in splice array modify and range of elements extracted from original array
console.log(myArr2);
console.log(myArr2.splice(1,4));
console.log(myArr2);

