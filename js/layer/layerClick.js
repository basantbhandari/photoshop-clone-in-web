function onClickFunction(){
    var layerItems = document.getElementsByClassName("bodycontainer__right__layer__item");
    for(let i = 0; i< layerItems.length; i++){
        layerItems[i].addEventListener("click", function(){
            console.log(`layer ${i}`)
            layerItems[i].classList.add("layer__active");
            resetActiveNessOnLayerItem(i)
            
        });
    };
}
onClickFunction()
function resetActiveNessOnLayerItem(index){
    for(let i = 0; i< layerItems.length; i++){
        if(i == index){
            continue
        }
        if(layerItems[i].classList.contains("layer__active")){
            layerItems[i].classList.remove("layer__active");
        }
    }
}