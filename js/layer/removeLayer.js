var removeLayerButton = document.getElementById("topbar__lower__layers__remove");
var layerItems = document.getElementsByClassName("bodycontainer__right__layer__item");
/**
 * click event listener function to remove the layer
 * */ 
removeLayerButton.addEventListener("click", function(){
    console.log("remove layer clicked");
    for(let i = 0; i< layerItems.length; i++){
        if(layerItems[i].classList.contains("layer__active")){
            layerItems[i].parentNode.removeChild(layerItems[i]);
        }
    };
});
