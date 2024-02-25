// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);

// console.log("2" > 1); //true
// console.log("02" > 1); //true

console.log(null > 0) //false null => 0
console.log(null == 0) //false 
console.log(null < 0) //false null => 0

//true why??? {equality check and comparison works differently. comparison convert null to number,treating it as 0}
//
console.log(null >= 0) //null => 0 so answer become true

