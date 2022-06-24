var quickIconState = {
    "0": false,
    "1":false,
    "2":false,
    "3":false,
    "4":false,
    "5":false,
    "6":false,
    "7":false
}


var toolIcons = document.getElementsByClassName("myImageIcon");
function setOnClickListenerOnQuickIcon(){
    for(let i = 0; i < toolIcons.length; i++){
        toolIcons[i].addEventListener("click", function(){
            console.log(`icon of index ${i}`)
            toolIcons[i].classList.add("activeImageIcon");
            resetActiveClassOnQuickIcon(i);
            updateVisibility();
            myNewCanvas.checkForTheQuickIconClick()
        });
    }
}

setOnClickListenerOnQuickIcon()

function resetActiveClassOnQuickIcon(index){
    for(let i = 0; i< toolIcons.length; i++){
        if(i == index){
            quickIconState[i] = true
            continue
        }
        if(toolIcons[i].classList.contains("activeImageIcon")){
            toolIcons[i].classList.remove("activeImageIcon");
            quickIconState[i] = false
        }
    }
    console.log(quickIconState);
}

