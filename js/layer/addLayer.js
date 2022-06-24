class MyLayer{
    constructor(index){
        this.layerIndex = index
        this.removeLayerButton = document.getElementById("topbar__lower__layers__remove");
        this.myLayer = document.createElement("div")
        this.myLayer.classList.add("bodycontainer__right__layer__item");
        this.myLayer.style.top = '40px'
        this.toggle = true;
        this.layerContainer = document.getElementsByClassName("bodycontainer__right")[0]
        this.myLayer.innerHTML = `<img class="bodycontainer__right__layer__item__visibilitySign" src="./images/icons/eye.png" alt="icon">
        <p class="bodycontainer__right__layer__item__para">Layer ${this.layerIndex}</p>`
        this.layerContainer.appendChild(this.myLayer);
        this.myLayerCanvas = new MyCanvas(this.layerIndex); 
        this.layerItemEye = document.getElementsByClassName("bodycontainer__right__layer__item__visibilitySign");
        this.layerItemsPara = document.getElementsByClassName("bodycontainer__right__layer__item__para");
        this.bodycontainer__right__control__layer__move__down = document.getElementsByClassName("bodycontainer__right__control__layer__move__down")[0];
        this.bodycontainer__right__control__layer__move__up = document.getElementsByClassName("bodycontainer__right__control__layer__move__up")[0];
        this.bodycontainer__right__control__control__move__down = document.getElementsByClassName("bodycontainer__right__control__control__move__down")[0];
        this.bodycontainer__right__control__control__move__up = document.getElementsByClassName("bodycontainer__right__control__control__move__up")[0];
        this.bodycontainer__right__control__layer__move__down.addEventListener("click",()=>{
            // move down the layer item
            console.log(`move down the layer item ${this.layerIndex}`)
            });
        this.bodycontainer__right__control__layer__move__up.addEventListener("click", ()=>{
            // move up the layer item
            console.log(`move up the layer item ${this.layerIndex}`)

            });
        
        this.bodycontainer__right__control__control__move__down.addEventListener("click", ()=>{
            // move down the layer selection
            console.log(`move down the layer selection ${this.layerIndex}`)

            });
        this.bodycontainer__right__control__control__move__up.addEventListener("click", ()=>{
            // move up the layer selection
            console.log(`move up the layer selection ${this.layerIndex}`)

            });
        this.paraLayerClickFunction();
        this.toggleVisibility();
        this.removeLayerButton.addEventListener("click", ()=>{
            let layerItems = document.getElementsByClassName("bodycontainer__right__layer__item");
            for(let i = 0; i< layerItems.length; i++){
                if(layerItems[i].classList.contains("layer__active")){
                    layerItems[i].parentNode.removeChild(layerItems[i]);
                }
            };
        });




    }

    toggleVisibility(){
        for(let i =0; i< this.layerItemEye.length; i++){
            this.layerItemEye[i].addEventListener("click", ()=>{
                if (this.toggle) {
                    this.layerItemEye[i].src  = '../../images/icons/eye-off.png';
                }
                 else {
                    this.layerItemEye[i].src = '../../images/icons/eye.png';
               }
               this.toggle = !this.toggle
            })
        }
        
    }
    paraLayerClickFunction(){
        for(let i = 0; i< this.layerItemsPara.length; i++){
            this.layerItemsPara[i].addEventListener("click", function(){
                let parentLayerItem = document.getElementsByClassName("bodycontainer__right__layer__item");
                parentLayerItem[i].classList.add("layer__active");
                for(let j = 0; j< parentLayerItem.length; j++){
                    if(j == i){
                        continue
                    }
                    if(parentLayerItem[j].classList.contains("layer__active")){
                        parentLayerItem[j].classList.remove("layer__active");
                    }
                }
            });
        };
    }



}

