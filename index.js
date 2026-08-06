//<-----------------functionality section 1 (for displaying counter start from 0 and hit target value on scroll).---------------->


//fucntion for scroll behaviour trigger another functions.
window.onscroll(scrollfunction());

function scrollfunction(){
startcounter('.stat_1_value',99,40);
startcounter('.stat_2_value',56,50);
startcounter('.stat_3_value',249,20);
}

//fucntion for counter update and display as per provided selctor,targetvalue,and speed.
function startcounter(selector,targetValue,speed){

    const TimerId = setInterval(()=>{

    let element = document.querySelector(selector);
    element.innerText++;

    //stops counter when targetvalue hit.
    if(element.innerText >= targetValue){
        clearInterval(TimerId);
    }
    },speed);
}



//  <-----------------------intial ruff , practice code of functions building.------------------------------->

// let element = document.querySelector('.stat_1_value');
// let element1 = document.querySelector('.stat_2_value');
// let element2 = document.querySelector('.stat_3_value');


// let TimerId=null;
// let TimerId1=null;
// let TimerId2=null;


// function calculation(){

//     element.innerText++;

//     //stops counter when 99 hit.
//     if(element.innerText >= 99){
//         clearInterval(TimerId);
//     }
// }

// function scrollstart(){
//     TimerId = setInterval(calculation,40);
// }

// scrollstart();


// function calculation1(){

//     element1.innerText++;

//     //stops counter when 56 hit.
//     if(element1.innerText >= 56){
//         clearInterval(TimerId1);
//     }
// }

// function scrollstart1(){
//     TimerId1 = setInterval(calculation1,50);
// }

// scrollstart1();


// function calculation2(){

//     element2.innerText++;

//     //stops counter when 249 hit.
//     if(element2.innerText >= 249){
//         clearInterval(TimerId2);
//     }
// }

// function scrollstart2(){
//     TimerId2 = setInterval(calculation2,20);
// }

// scrollstart2();
