// get the color reference
var myColor = document.getElementById("colorpicker");
var COLOR = myColor.value;
myColor.addEventListener("change", function(){
    COLOR = myColor.value
})
function getUpdatedColor(){
    return COLOR;
}