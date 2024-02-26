//Dates

let myDate = new Date()
//console.log(myDate.toString());

let myCreatedDate = new Date("2023-01-14")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime()); //the value of time is in mili-seconds

//console.log(Math.floor(myTimeStamp/1000)); //converting time from mili-second to second

const todayDate = myDate.toLocaleString('default',{
    weekday:"long"
})

console.log(todayDate);