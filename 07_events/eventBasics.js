    // not best approach because it provides less number of features.

    // document.getElementById('sky').onclick = function(){
    //     alert("sky clicked")
    // }
    //attachEvent - used in internet explorer


    //+++++++++++=important eveListener to study +++++++++++++++++++++++++++++++++=
    // type, timestamp, deafaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY,
    // altkey, ctrlkry, shiftkey, keyCode

    //third approach

    // document.getElementById('images').addEventListener('click',function(e){
    //     console.log("clicked inside the ul");
    // },false)
    // document.getElementById('sky').addEventListener('click',function(e){
    //    console.log("sky clicked");
    //    e.stopPropagation() // stop the event bubbling.(means inside event not activate outside event)
    // },false)

    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault() //prevent default behaviour
    //     e.stopPropagation()
    //     console.log('google clicked');
    // })




    // now we do a basic task that is whenever we click image get removed
    
    document.querySelector('#images').addEventListener('click',function(e){
        console.log(e.target.tagName);
        if(e.target.tagName === 'IMG'){
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
        // removeIt.parentNode.removeChild(removeIt)

    },false)
