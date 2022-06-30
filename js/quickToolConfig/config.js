// information for drawing
var myDrawPencilSize = document.getElementById("draw__config__size");
var myDrawStyle = document.getElementById("draw__config__style");
function getDrawingInformation() {
  return {
    pencilsize: myDrawPencilSize.value,
    style: myDrawStyle.options[myDrawStyle.selectedIndex].value,
  };
}
// information for eraser
var myEraserSize = document.getElementById("erase__config__size");
function getEraserInformation() {
  return {
    size: myEraserSize.value,
  };
}

// information for text
var myFontStyle = document.getElementById("font__config__style");
var myTextFontSize = document.getElementById("font__config__size");
var myFontFamily = document.getElementById("font__config__family");
var myText = document.getElementById("text__config__value");

function getTextInformation() {
  return {
    fontstyle: myFontStyle.options[myFontStyle.selectedIndex].value,
    fontsize: myTextFontSize.value,
    fontfamily: myFontFamily.options[myFontFamily.selectedIndex].value,
    text: myText.value,
  };
}

// information for rotation
var myRotationAngle = document.getElementById("rotate__config__angle");
function getRotationInformation() {
  return {
    angle: myRotationAngle.value,
  };
}
