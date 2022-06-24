var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var middle_div = document.getElementsByClassName("bodycontainer__middle")[0];
const canvasOffset = 4;
myCanvas.width = middle_div.offsetWidth - canvasOffset;
myCanvas.height = middle_div.offsetHeight - canvasOffset;
context.fillStyle = "white";
context.fillRect(0,0, myCanvas.width, myCanvas.height);


function clearCanvas() {
    context.fillStyle = "white";
    context.clearRect(0,0, myCanvas.width, myCanvas.height);

    
}

class MyCanvas{
    constructor(index){

    }
}
