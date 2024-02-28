function one(){
    const username = "nitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);

    two()
}

//one()

//++++++++++++++=interesting+++++++++++++++++++++++++++++
console.log(addOne(5)) //access addone if function define like below

function addOne(num){
    return num+1
}

console.log(addTwo(5)) // cannot access function if function definition assigned to a variable

const addTwo =  function(num){
    return num+2
}


