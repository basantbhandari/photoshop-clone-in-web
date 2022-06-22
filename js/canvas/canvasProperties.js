var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var middle_div = document.getElementsByClassName("bodycontainer__middle")[0];
console.log(myCanvas);
const canvasOffset = 4;
myCanvas.width = middle_div.offsetWidth - canvasOffset;
myCanvas.height = middle_div.offsetHeight - canvasOffset;
context.fillStyle = "pink";
context.fillRect(0,0, myCanvas.width, myCanvas.height);
