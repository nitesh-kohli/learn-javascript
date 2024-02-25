//here we are understanding basics in reference to store info of user who visit our e-commerce site🤩.

//we can create constant variable by only one method i.e. using const keyword
const accountId = 34567

//but we can create variables using two keywords i.e. let and var
//but when we use let and when we use var?
/* 
we prefer not to use var because it 
arises issues in block and functional scopes
*/
let accountEmail = "nitesh@gmail.com"
var accountPassword = "12345"
accountCity = "palwal" // a variable can also be declared like this but not preferable!!
let accountState; //so here we just declared a variable and not assigned it so it has undefined value by default.

// accountId = 123 //this is not possible
accountEmail = "stark@gmail.com" //this is possible
accountPassword = "0000" //this is possible
accountCity = "Bangluru"

console.log(accountCity);
//so it become a tedious task to console all variables and check value do we have any other method to print more than
// one variables???
// yes we have console.table([...]) let's see how we use it below
console.table([accountId,accountEmail,accountPassword, accountCity,accountState])

