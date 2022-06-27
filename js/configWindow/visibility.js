let draw__config = document.getElementsByClassName("draw__config")[0];
let erase__config = document.getElementsByClassName("erase__config")[0];
let text__config = document.getElementsByClassName("text__config")[0];
let rotate__config = document.getElementsByClassName("rotate__config")[0];

draw__config.style.display = "none";
erase__config.style.display = "none";
text__config.style.display = "none"
rotate__config.style.display = "none";

// checking for the quickicon activeness
let quickIconItems = document.getElementsByClassName("myImageIcon");

function updateVisibility(){
    for(let key in quickIconState) {
        if(quickIconState[key]){
            showConfigOption(key);
        }       
    };
}

updateVisibility()
function showConfigOption(index){
    let selected = document.getElementsByClassName("layer__active")[0];
    if(selected != undefined){
        switch(index){
            case "0":
                draw__config.style.display = "block";
                erase__config.style.display = "none";
                text__config.style.display = "none"
                rotate__config.style.display = "none";
                break;
    
            case "1":
                draw__config.style.display = "none";
                erase__config.style.display = "block";
                text__config.style.display = "none"
                rotate__config.style.display = "none";
                break;
            
            case "4":
                draw__config.style.display = "none";
                erase__config.style.display = "none";
                text__config.style.display = "none"
                rotate__config.style.display = "block";
                break;
            
            case "5":
                draw__config.style.display = "none";
                erase__config.style.display = "none";
                text__config.style.display = "block";
                rotate__config.style.display = "none";
                break;
            default:
                draw__config.style.display = "none";
                erase__config.style.display = "none";
                text__config.style.display = "none";
                rotate__config.style.display = "none";
        }
    }
    
}