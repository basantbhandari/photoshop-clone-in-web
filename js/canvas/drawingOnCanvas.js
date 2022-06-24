// drawing properties
let is_drawing = false;
let is_texting = false;
let is_drawing_clicked = false;
let is_eraser_clicked = false;
let is_text_clicked = false;

function checkForTheAuickIconClick(){
    for(let key in quickIconState) {
        if(quickIconState[key]){
            console.log(key);
            console.log(typeof key)
            checkMultipleCases(key);
        }       
    };
}

checkForTheAuickIconClick()

function checkMultipleCases(index){
    switch(index){
         case "0":
            is_drawing_clicked = true;
            is_eraser_clicked = false;
            is_text_clicked = false;
            break;
        case "1":
            is_drawing_clicked = false;
            is_eraser_clicked = true;
            is_text_clicked = false;
            break;
        case "6":
            is_eraser_clicked = false;
            is_drawing_clicked = false;
            is_text_clicked = true;
            break;
        
        default:
            is_drawing_clicked = false;
            is_eraser_clicked = false;
            is_text_clicked = false;
            
    }
}



myCanvas.addEventListener("touchstart", startDrawing, false);
myCanvas.addEventListener("touchmove", drawDrawing, false);
myCanvas.addEventListener("mousedown", startDrawing, false);
myCanvas.addEventListener("mousemove", drawDrawing, false);

myCanvas.addEventListener("touchend", stopDrawing,false);
myCanvas.addEventListener("mouseup", stopDrawing,false);
myCanvas.addEventListener("mouseout", stopDrawing,false);





function startDrawing(event){
    is_drawing = true;
    context.beginPath();
    context.moveTo(
        event.clientX - myCanvas.offsetLeft, 
        event.clientY - myCanvas.offsetTop
    );
    console.log(event.clientX - myCanvas.offsetLeft, event.clientY - myCanvas.offsetTop);
    event.preventDefault();
    console.log("start drawing");


}

function drawDrawing(event){
    let drawConfig = getDrawingInformation()
    let eraserConfig =getEraserInformation()

    if( is_drawing && is_drawing_clicked){
        context.lineTo(
            event.clientX - myCanvas.offsetLeft, 
            event.clientY - myCanvas.offsetTop
        );
        console.log(event.clientX - myCanvas.offsetLeft, event.clientY - myCanvas.offsetTop);
        context.strokeStyle = getUpdatedColor();
        context.lineWidth = drawConfig["pencilsize"];
        if(drawConfig["style"] == "doted"){
            context.setLineDash([drawConfig["pencilsize"]*1.5,drawConfig["pencilsize"]*1.2]);
        }else{
            context.setLineDash([]);
        }
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
        console.log("draw drawing");
    }

    // eraser functionality
    if(is_drawing && is_eraser_clicked){
        context.lineTo(
            event.clientX - myCanvas.offsetLeft, 
            event.clientY - myCanvas.offsetTop
        );
        console.log(event.clientX - myCanvas.offsetLeft, event.clientY - myCanvas.offsetTop);
        context.strokeStyle = "white";
        context.lineWidth = eraserConfig["size"]
        context.setLineDash([]);
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
        console.log("draw drawing");
    }

   
}

function stopDrawing(event){
    if(is_drawing){
        context.stroke();
        context.closePath();
        is_drawing = false
    }
    event.preventDefault();

}

