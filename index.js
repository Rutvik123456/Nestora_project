//<-----------------functionality section 1 (for displaying counter start from 0 and hit target value on scroll).---------------->

let  selectorslide = document.querySelectorAll(".reviewslide");
let curindex=0;
//fucntion for scroll behaviour trigger another functions.
// window.onscroll(scrollfunction());

let counterRun = false; 

window.onscroll = ()=>{scrollfunction()};

function scrollfunction(){
  if(!counterRun){
    counterRun=true;
  startcounter('.stat_1_value',99,40);
  startcounter('.stat_2_value',56,50);
  startcounter('.stat_3_value',249,20);
}
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



// <---------------Functionality for location of properties slider with manual navigation----------------------------------->

//function for make a linear arrangement list like queue of each slide.
let selectordr = document.querySelectorAll(".locationBox");

initslidesdr();

function initslidesdr(){
  selectordr.forEach((locationBox,index) =>{
     locationBox.style.left=`${(index- 0.35)*45}%`;
    }
  )
}

//function for updating arrangement of content after button click.
let curindexdr=0;

function updatepositiondr(){
  looplimitdr();
  selectordr.forEach(
    (locationBox)=>{
       locationBox.style.transform=`translateX(-${(curindexdr)*45}%)`;
    }
  )
}

//function for setting boundry of looping of content.
function looplimitdr(){
  if (curindexdr >= selectordr.length) {
            curindexdr = 0;
  } else if (curindexdr < 0) {
            curindexdr = selectordr.length - 1;
        }
}

//functions for displaying content based on buttons clicks.
function prevbtndr(){
  curindexdr--;
  updatepositiondr();
}


function nextbtndr(){
  curindexdr++;
  updatepositiondr();
}



// <---------------Functionality for review items slider with manual navigation----------------------------------->

//function for make a linear arrangement list like queue of each slide.
// let  selectorslide = document.querySelectorAll(".reviewslide");
// let curindex=0;

initslides();
function initslides(){  
  selectorslide.forEach((reviewslide,index)=>{reviewslide.style.left=`${index*40}%`});
}

// function for updating arrangement of content after button click.

function updateposition(){
  looplimit();
  selectorslide.forEach(
    (reviewslide)=>{
      reviewslide.style.transform=`translateX(-${curindex*20}%)`;
    }
  )
}

//function for setting boundry of looping of content.
function looplimit(){
  if (curindex >= selectorslide.length) {
            curindex = 0;
  } else if (curindex < 0) {
            curindex = selectorslide.length - 1;
        }
}

//functions for displaying content based on buttons clicks.
function prevbtnfn(){
  curindex--;
  updateposition();
}


function nextbtnfn(){
  curindex++;
  updateposition();
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
