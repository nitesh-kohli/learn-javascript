// immediately invoked function expression (iife)
//global scope k variables k wajah se function pollute ho jata hai kai baar
// to us chiz se bchane k liye hum iife ka use krte hai

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})(); //semicolon is important to write here nhi to pta nhi chlega function ko rukna kahan hai



//this will give error because chai() dont know kahan pe context rokna hai 
//that's why we need to add ; after chai() function

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("nitesh");





