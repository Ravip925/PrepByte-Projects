function displayTime(){                     //will show time in clock 
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('sessions');
    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';   //AM will show if time less than 12
    }
    if(hrs > 12){
        hrs = hrs - 12;      // to show 12hr clock format
    }
    document.getElementById('hours').innerHTML = hrs;     //hrs assigned to hours span tag
    document.getElementById('minutes').innerHTML = min;   //min assigned to minutes span tag
    document.getElementById('seconds').innerHTML = sec;   //sec assigned to seconds span tag
   
}

setInterval(displayTime,1000);

// -----------------------------------------


let greetTextOne = document.getElementById('greettext');        //selecting greeting text 1
let greetTextTwo = document.getElementById('greettext2');       //selecting greeting text 2


let elementOne = document.querySelector('#morning');
let textOne = document.getElementById('#pOne');
textOne = elementOne.options[elementOne.selectedIndex].value;

let elementTwo = document.querySelector('#afternoon');
let textTwo = document.getElementById('#pTwo');
textTwo = elementTwo.options[elementTwo.selectedIndex].value;

let elementThree = document.querySelector('#evening');
let textThree = document.getElementById('#pThree');
textThree = elementThree.options[elementThree.selectedIndex].value;

let elementFour = document.querySelector('#night');
let textFour = document.getElementById('#pFour');
textFour = elementFour.options[elementFour.selectedIndex].value;


function clickMe(){
    textOne = elementOne.options[elementOne.selectedIndex].value;
    textTwo = elementTwo.options[elementTwo.selectedIndex].value;
    textThree = elementThree.options[elementThree.selectedIndex].value;
    textFour = elementFour.options[elementFour.selectedIndex].value;
    document.querySelector('#pOne').textContent = textOne;
    document.querySelector('#pTwo').textContent = textTwo;
    document.querySelector('#pThree').textContent = textThree;
    document.querySelector('#pFour').textContent = textFour;
}



function getOption(){                                //on clicking following values will get from select
    
    
    let arrayOne =  new Array();                    //created array to store option value
    arrayOne = textOne.split(" ");                  // splits num and word i.e. 12, AM.
    arrayTwo = textTwo.split(" ");
    arrayThree = textThree.split(" ");
    arrayFour = textFour.split(" ");

    let timeNumOne = arrayOne[0];                   //Only time will show here
    let timeNumTwo = arrayTwo[0];
    let timeNumThree = arrayThree[0];
    let timeNumFour = arrayFour[0];
    let sessionTextOne = arrayOne[1];               //will show AM or PM
    let sessionTextTwo = arrayTwo[1];
    let sessionTextThree = arrayThree[1];
    let sessionTextFour = arrayFour[1];
    
    // Time and Date
    let dateTimes = new Date();
    let hrss = dateTimes.getHours();
    let minn = dateTimes.getMinutes();
    let secc = dateTimes.getSeconds();
    let sessionn = document.getElementById('sessions');
    //console.log(dateTimes);
    if(hrss >= 12){
        sessionn.innerHTML = 'PM';
    }else{
        sessionn.innerHTML = 'AM';
    }
    if(hrss > 12){
        hrss = hrss - 12;
    }

    //To change text and Images according to time

    let image = document.getElementById("imageTwo");

    if(timeNumOne == hrss &&  sessionn.innerHTML === sessionTextOne){           //morning time
        greetTextOne.innerHTML = "GOOD MORNING !! WAKE UP !!";
        greetTextTwo.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
        image.src = "./Component30.png";
    }

    if(timeNumTwo == hrss &&  sessionn.innerHTML === sessionTextTwo){           //Afternoon time
        greetTextOne.innerHTML = "GOOD AFTERNOON !! LUNCH TIME!";
        greetTextTwo.innerHTML = "LET'S HAVE SOME LUNCH !! YEAH!";
        image.src = "./Component31.png";   
    }

    if(timeNumThree == hrss &&  sessionn.innerHTML === sessionTextThree){       //Evening time
        greetTextOne.innerHTML = "GOOD EVENING !! TEA TIME!";
        greetTextTwo.innerHTML = "STOP YAWNING !! GET SOME TEA.";
        image.src = "./lunch_image.png";    
    }

    if(timeNumFour == hrss &&  sessionn.innerHTML === sessionTextFour){         //night time
        greetTextOne.innerHTML = "GOOD NIGHT !! SLEEP TIGHT!";
        greetTextTwo.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP !!";
        image.src = "./Component32.png";
    }
    
}

setInterval(getOption,1000);


