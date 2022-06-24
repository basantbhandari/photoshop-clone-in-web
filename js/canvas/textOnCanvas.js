myCanvas.addEventListener("touchstart", startText, false);
myCanvas.addEventListener("touchmove", drawText, false);
myCanvas.addEventListener("mousedown", startText, false);
myCanvas.addEventListener("mousemove", drawText, false);

myCanvas.addEventListener("touchend", stopText,false);
myCanvas.addEventListener("mouseup", stopText,false);
myCanvas.addEventListener("mouseout", stopText,false);




function startText(event){
    if(is_text_clicked){
        is_texting = true
        let textConfig = getTextInformation();
        let currentMousePosition = getMousePos(myCanvas, event);
        console.log(textConfig);
        console.log(currentMousePosition)
        context.font = `${textConfig["fontsize"]}px ${textConfig["fontstyle"]}`;
        context.strokeStyle = getUpdatedColor();
        context.strokeText(textConfig["text"], currentMousePosition.x, currentMousePosition.y);
    }
}

function drawText(event){
    if(is_texting){

    }
}
function stopText(event){
    if(is_text_clicked && is_texting ){
        is_texting = false
    }
}

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}