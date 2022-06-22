// get the color reference
var myColor = document.getElementById("colorpicker");
console.log(myColor);
var COLOR = myColor.value;
console.log(COLOR)
myColor.addEventListener("change", function(){
    COLOR = myColor.value
    console.log(COLOR)
})
function getUpdatedColor(){
    return COLOR;
}