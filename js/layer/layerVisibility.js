/**
 * function for the toggle of eye image 
 */

var layerItemEye = document.getElementsByClassName("bodycontainer__right__layer__item__visibilitySign");

for(let i =0; i< layerItemEye.length; i++){
    layerItemEye[i].toggle = true;
    layerItemEye[i].addEventListener("click", function(){
        console.log(i)
        chngichangeImage(i)
    })
}

/**
 * function to toggle the image
 * @param {string} index - index of the layer
 * */ 
function chngichangeImage(index) {
    
    if (layerItemEye[index].toggle) {
        layerItemEye[index].src  = '../../images/icons/eye-off.png';
    }
     else {
        layerItemEye[index].src = '../../images/icons/eye.png';
   }
   layerItemEye[index].toggle = !layerItemEye[index].toggle
}