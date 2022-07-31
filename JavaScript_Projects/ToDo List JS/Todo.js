let btnOne = document.getElementById("popup");
let topHeading = document.getElementById("top");
let bodyMain = document.getElementById("main")
let btnTwo = document.getElementById("popup2");
let pop = document.getElementById("block");
let startup = document.getElementById("startup");
let popTwo = document.getElementById("block1");
let blockbtn = document.getElementById("block1btn");
let mainOne = document.getElementById("main1");
let blockOneAdd = document.getElementById("block1add");
let cardButton = document.getElementById("buttonOne");
let indexOne = document.getElementById("index1");
let taskDiv = document.getElementById("taskdoneindexone");
let spanPendingTwo = document.getElementById("spanPendingindexone");
let markDoneTwo = document.getElementById("btnDone2");
let indexOnePageTitle = document.getElementById("index1pagetitle");
let indexOnePageBoxTitle = document.getElementById("index1pageboxtitle");
let indexOneBack = document.getElementById("index1back");
let indexOneImgBack = document.getElementById("index1imgback");
let indexOneImgAdd = document.getElementById("index1imgadd");
let plusTwo = document.getElementById("plus2");
let deleteTwo = document.getElementById("delete2");

// --------------------------------------------------------------------------------

//main addtask button popup
function toggle(){
    
    pop.style.display = "block";
    topHeading.style.filter ="blur(6px)";
    startup.style.filter ="blur(6px)";
    topHeading.style.pointerEvents = "none";
    topHeading.style.userSelect = "none";
    bodyMain.style.filter = "blur(6px)";
    bodyMain.style.pointerEvents = "none";
    bodyMain.style.userSelect = "none";
}
// ----------------------------------------------------------------------------------
function showMainPage(){
    indexOne.style.display = "none";
    topHeading.style.display = "block";
    bodyMain.style.display = 'flex';
    bodyMain.style.filter = "blur(0)";
    topHeading.style.filter = "blur(0)";
    bodyMain.style.userSelect = "auto";
    bodyMain.style.pointerEvents = "all";
    topHeading.style.pointerEvents = "all";
    topHeading.style.userSelect = "auto";
}

function showMainPagePopupTwo(){
    popTwo.style.display = "block";
    topHeading.style.filter ="blur(6px)";
    topHeading.style.pointerEvents = "none";
    topHeading.style.userSelect = "none";
    bodyMain.style.filter = "blur(6px)";
    bodyMain.style.pointerEvents = "none";
    bodyMain.style.userSelect = "none";
}

function CloseMainPagePopupTwo(){
    popTwo.style.display = "none";
    topHeading.style.filter = "none";
    bodyMain.style.filter = "none";
    topHeading.style.pointerEvents = "all";
    topHeading.style.userSelect = "auto";
    bodyMain.style.pointerEvents = "all";
    bodyMain.style.userSelect = "auto";
    mainOne.style.position = 'static';
}

function showSecondPage(){
    topHeading.style.display = "none";
    bodyMain.style.display = "none"
    pop.style.display = "none";
    popTwo.style.display = "none";
    startup.style.display = "none";
    indexOne.style.display = "block";
    indexOne.style.filter = "blur(0)";
}

// ---------------------------------------------------------------------------------
//after clicking add cards will be created
function addCard(){

    startup.style.display = "none";
    let input = document.getElementById("inputOne").value;
    
    if(input == ""){
        alert("Please add some Task");
        return false;
    }
    if(input != ""){
        //card created
        let main = document.getElementById("main");
        let box = document.createElement("div");
        box.setAttribute("class","box");

        main.appendChild(box);

        let pOne = document.createElement("p");
        pOne.setAttribute("class","p0")

        box.appendChild(pOne);

        let spanOne = document.createElement("p");//ptag
        spanOne.setAttribute("class","pc");
        spanOne.innerText = "Hello";

        pOne.appendChild(spanOne);

        let hr1 = document.createElement("hr");
        hr1.setAttribute("class","hr1");

        box.appendChild(hr1);

        let imgOne = document.createElement("img");
        imgOne.setAttribute("id","popup2");
        imgOne.setAttribute("class","img3");
        imgOne.setAttribute("src","./images/plus.png");

        box.appendChild(imgOne);

        let imgTwo = document.createElement("img");
        imgTwo.setAttribute("id","deletebtn")
        imgTwo.setAttribute("class","delete");
        imgTwo.setAttribute("src","./images/delete.png");

        box.appendChild(imgTwo);

        spanOne.innerText = input; //input value assigned to span
        box.style.userSelect = "auto";
        

        let taskDone = document.createElement("div"); //2nd page card inner div
        taskDone.setAttribute("id","taskdone");
        

        //trip to text onclick function [2nd page]
        spanOne.onclick = function(){
            showSecondPage();

            taskDiv.innerHTML = taskDone.innerHTML;
            let taskDoneButton2 = document.getElementById("btnDone");
            let spanPending = document.getElementById("spanPending");
            let inputTwoS = document.getElementById("inputTwo").value;
    
            if(taskDiv.hasChildNodes()){  //to mark done tasks
                taskDoneButton2.onclick = function(){
                    spanPending.style.color = "red";
                    spanPending.style.fontSize = "1.1em";
                    spanPending.style.textDecoration = "line-through 2px";
                    taskDoneButton2.style.display = "none"
                
                }
            }

            indexOneBack.onclick = function(){ //return to main page
                showMainPage();
            }
            indexOneImgBack.onclick = function(){  //return to main page
                showMainPage();
            }

            indexOnePageTitle.innerText = input;
            indexOnePageBoxTitle.innerText = input;

            indexOneImgAdd.onclick = function(){  //2nd page top add button
                toggle();
                indexOne.style.filter = "blur(6px)";
                cardButton.onclick = function(){
                    addCard();
                    showMainPage();
                    pop.style.display = "none";
                }
            
            }
            indexOnePageBoxTitle.onclick = function(){
                popTwo.style.display = "block";
                indexOne.style.filter = "blur(6px)";
                indexOne.style.pointerEvents = "none";
                
                blockbtn.onclick = function(){
                    popTwo.style.display = "none";
                    indexOne.style.filter = "blur(0)";
                    indexOne.style.pointerEvents = "all";
                }
                blockOneAdd.onclick = function(){
                    
                    popTwo.style.display = "none";
                    indexOne.style.filter = "blur(0)";
                    indexOne.style.pointerEvents = "all";
                }
            }
            plusTwo.onclick =function(){
                popTwo.style.display = "block";
                indexOne.style.filter = "blur(6px)";
                indexOne.style.pointerEvents = "none";
                
                blockbtn.onclick = function(){
                    popTwo.style.display = "none";
                    indexOne.style.filter = "blur(0)";
                    indexOne.style.pointerEvents = "all";
                }
                blockOneAdd.onclick = function(){
                    
                    popTwo.style.display = "none";
                    indexOne.style.filter = "blur(0)";
                    indexOne.style.pointerEvents = "all";
                }
            }
            deleteTwo.onclick = function(){  // to delete 2nd page card
                indexOne.style.display = "none";
                box.style.display = "none";
                showMainPage();
            }
        }
    
        //1st page inner task add button
        imgOne.onclick = function(){
            showMainPagePopupTwo();
           
            //after clicking add button from popup two tasks are added to card
            blockOneAdd.onclick = function(){
                let inputTwo = document.getElementById("inputTwo").value;
                if(inputTwo == ""){
                    alert("Please add your task!");
                }
                if(inputTwo != ""){
                    
                    let pendingtask = document.createElement("p");
                    pendingtask.setAttribute("id","taskpending");
                
                    let spanPending = document.createElement("span");
                    spanPending.setAttribute("id","spanPending");
                    spanPending.innerText = "";
                
                    let taskDoneButton = document.createElement("button");
                    taskDoneButton.setAttribute("id","btnDone");
                    taskDoneButton.setAttribute("class","btnDone10");
                    taskDoneButton.innerHTML = "Mark Done";

                    box.appendChild(taskDone);
                    taskDone.appendChild(pendingtask);
                    pendingtask.appendChild(spanPending);
                    pendingtask.appendChild(taskDoneButton);
                    box.style.userSelect = "auto";

                    spanPending.innerText = inputTwo; //input assigned to span

                    taskDoneButton.onclick = function(){
                        spanPending.style.color = "red";
                        spanPending.style.fontSize = "1.1em";
                        spanPending.style.textDecoration = "line-through 2px";
                        taskDoneButton.style.display = "none"
                    }

                    //to close popup after adding tasks in the card
                    CloseMainPagePopupTwo();
                }
            }
        }
        //delete button
        imgTwo.onclick = function(){
            box.style.display = 'none'; 
        }
    }
    
}

// --------------------------------------------------------------------------------------------------------

//main page first popup close button
function closePopup(){
    startup.style.filter = "blur(0)";
    indexOne.style.filter = "blur(0)"
    bodyMain.style.filter = "blur(0)";
    topHeading.style.filter = "blur(0)";
    pop.style.display = "none";
    topHeading.style.pointerEvents = "all";
    topHeading.style.userSelect = "auto";
    bodyMain.style.pointerEvents = "all";
    bodyMain.style.userSelect = "auto";
    
    //block1 close after clicking add
    blockbtn.onclick = function(){
        showMainPage();
        popTwo.style.display = "none";
    
    }  
}












