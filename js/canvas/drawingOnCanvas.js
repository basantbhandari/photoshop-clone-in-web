// drawing properties
let myDraw__color = COLOR;
let myDraw_width = "2";
let is_drawing = false;

myCanvas.addEventListener("touchstart", startDrawing, false);
myCanvas.addEventListener("touchmove", drawDrawing, false);
myCanvas.addEventListener("mousedown", startDrawing, false);
myCanvas.addEventListener("mousemove", drawDrawing, false);
;
myCanvas.addEventListener("touchend", stopDrawing,false);
myCanvas.addEventListener("mouseup", stopDrawing,false);
myCanvas.addEventListener("mouseout", stopDrawing,false);

function startDrawing(event){
    console.log(event);
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
    console.log(event);

    if(is_drawing){
        context.lineTo(
            event.clientX - myCanvas.offsetLeft, 
            event.clientY - myCanvas.offsetTop
        );
        console.log(event.clientX - myCanvas.offsetLeft, event.clientY - myCanvas.offsetTop);
        context.strokeStyle = getUpdatedColor();
        context.lineWidth = myDraw_width;
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