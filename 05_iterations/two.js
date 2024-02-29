// filter :- it returns values unlike for each and it only returns value based on certain condition in callback function

// const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (item)=> item >3 )


//const newNums = myNums.filter( (item)=> { return item >3} )
 //if you write {} then it started a scope then you must write return
//console.log(newNums);


//using for each
const anotherNums = []

// myNums.forEach( (item) =>{
//     if(item > 5){
//         anotherNums.push(item)
//     }
// } )

// console.log(anotherNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//const userBooks = books.filter( (book) => book.genre === "Science")
// const userBooks = books.filter( (book) => book.publish > 2000)
// console.log(userBooks);


//+++++++++  chaining ++++++++++++++++++++++++++++++++
const nums = [1,2,3,4,5,6]

// const nums2 = nums
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)
//                 .filter((num) => num>40)
// console.log(nums2);



//+++++++++++++++++   reducer    +++++++++++++++++++++++++++++++++
const myNums  =  [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} currval:${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce( (acc,currval) => (acc+currval),0 )
console.log(myTotal);





