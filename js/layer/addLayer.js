// get the container of the layer
var layerContainer = document.getElementsByClassName("bodycontainer__right")[0];
// add button reference
var layerItems = document.getElementsByClassName("bodycontainer__right__layer__item");
var addLayerButton = document.getElementById("topbar__lower__layers__add");
addLayerButton.addEventListener("click", function() {
    console.log("add layer button clicked");
    let mylayer = document.createElement("div")
    mylayer.classList.add('bodycontainer__right__layer__item');
    mylayer.style.top = '40px'
    mylayer.innerHTML = `<img class="bodycontainer__right__layer__item__visibilitySign" src="./images/icons/eye.png" alt="icon">
    <p class="bodycontainer__right__layer__item__para">Layer ${layerItems.length + 1}</p>`
    layerContainer.appendChild(mylayer);
    onClickFunction();
});


