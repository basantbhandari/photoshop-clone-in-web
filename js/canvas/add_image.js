var addImage = document.getElementById("topbar__lower__images__add__image");
var imageUrl = undefined;
var width = undefined;
var height = undefined;
var is_Image__add__Clicked = false

addImage.addEventListener("click", function(){
    width = prompt("Image Width:");
    height = prompt("Image height:");
    console.log(width, height)
    is_Image__add__Clicked = true;
})


myCanvas.addEventListener("touchstart", startImage, false);
myCanvas.addEventListener("touchmove", drawImage, false);
myCanvas.addEventListener("mousedown", startImage, false);
myCanvas.addEventListener("mousemove", drawImage, false);

myCanvas.addEventListener("touchend", stopImage,false);
myCanvas.addEventListener("mouseup", stopImage,false);
myCanvas.addEventListener("mouseout", stopImage,false);


function startImage(event){

    if(is_Image__add__Clicked){
        var currentMousePosition = getMousePos(myCanvas, event)
        var formdata = document.getElementById("topbar__lower__images__image__input");
        let uplImg = formdata.files[0];
        //check for file type
        if (uplImg.type.substr(0,5) !== "image"){
            console.error("Only images");
            return;
        }
            //convert uploaded image to base 64 and append it to Div
        getBase64(uplImg).then(
            data => {
                console.log(data);
                let imgObj = new Image()
                imgObj.onload = function(){
                    context.drawImage(imgObj, currentMousePosition.x,
                        currentMousePosition.y, width, height)
                }
                imgObj.src = data
                is_Image__add__Clicked = false
            })
    }
}
function drawImage(event){

}
function stopImage(event){

}


//convert image to base 64
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }