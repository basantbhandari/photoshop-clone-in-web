
/**
 * function that detect the selection of layer
 * */ 
function onClickFunction(){
    var layerItems = document.getElementsByClassName("bodycontainer__right__layer__item__para");
    for(let i = 0; i< layerItems.length; i++){
        layerItems[i].addEventListener("click", function(){
            console.log(`layer ${i}`)
            layerItems[i].parentElement.classList.add("layer__active");
            resetActiveNessOnLayerItem(i)
            
        });
    };
}
onClickFunction()
/**
 * function to reset back to the previous selection
 * @param {integer} index - index of the current selection
 * */ 
function resetActiveNessOnLayerItem(index){
    console.log("called 1")
    var parentLayerItem = document.getElementsByClassName("bodycontainer__right__layer__item");

    for(let i = 0; i< parentLayerItem.length; i++){
        console.log("called 2")

        if(i == index){
            continue
        }
        if(parentLayerItem[i].classList.contains("layer__active")){
            console.log("called")
            parentLayerItem[i].classList.remove("layer__active");
        }
    }
}