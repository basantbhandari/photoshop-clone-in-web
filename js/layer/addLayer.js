class MyLayer{
    constructor(index){
        this.layerIndex = index
        this.removeLayerButton = document.getElementById("topbar__lower__layers__remove");
        this.myLayer = document.createElement("div")
        this.myLayer.classList.add("bodycontainer__right__layer__item");
        this.myLayer.setAttribute("lindex",this.layerIndex);
        this.myLayer.style.top = '40px';
        // open eye by default
        this.toggle = true;
        this.layerContainer = document.getElementsByClassName("bodycontainer__right")[0]
        this.myLayer.innerHTML = `<img class="bodycontainer__right__layer__item__visibilitySign" src="./images/icons/eye.png" alt="icon">
        <p class="bodycontainer__right__layer__item__para">Layer ${this.layerIndex}</p>`
        this.layerContainer.appendChild(this.myLayer);
        this.myLayerCanvas = new MyCanvas(this.layerIndex); 
        this.myLayerCanvas.canvas.position ="absolute";
        this.layerItemEye = document.getElementsByClassName("bodycontainer__right__layer__item__visibilitySign");
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
        this.removeLayerButton.addEventListener("click", ()=>{
            let layerItems = document.getElementsByClassName("bodycontainer__right__layer__item");
            for(let i = 0; i< layerItems.length; i++){
                if(layerItems[i].classList.contains("layer__active")){
                    layerItems[i].parentNode.removeChild(layerItems[i]);
                }
            };
        });
        this.myLayer.children[0].addEventListener("click", ()=>{
                    if (this.toggle) {
                        this.myLayer.children[0].src  = '../../images/icons/eye-off.png';
                    }else{
                        this.myLayer.children[0].src = '../../images/icons/eye.png';
                    }
                    this.toggle = !this.toggle;
                    // get all the canvas 
                    let allCanvas = document.getElementsByClassName("eachCanvasItem");
                    for(let i= 0; i< allCanvas.length; i++){
                        let canvasIndex = allCanvas[i].getAttribute("cindex");
                        if(this.layerIndex == canvasIndex && this.toggle){
                            // display
                            allCanvas[i].style.display = "block"

                        }else{
                            allCanvas[i].style.display = "none"
                        }                        
                    }

                
        })
        this.myLayer.children[1].addEventListener("click", ()=>{
                console.log(this.myLayer)
                let allLayerItem = document.getElementsByClassName("bodycontainer__right__layer__item")
                for(let j = 0; j< allLayerItem.length; j++){
                    if(j == this.layerIndex-1){
                        allLayerItem[j].classList.add("layer__active");
                        continue
                    }
                    if(allLayerItem[j].classList.contains("layer__active")){
                        allLayerItem[j].classList.remove("layer__active");
                    }
                }
                // get all the canvas 
                let allCanvas = document.getElementsByClassName("eachCanvasItem");
                for(let i= 0; i< allCanvas.length; i++){
                    let canvasIndex = allCanvas[i].getAttribute("cindex");
                    if(this.layerIndex == canvasIndex && this.toggle){
                        allCanvas[i].style.zIndex = "10"
                        allCanvas[i].style.display = "block"
    
                    }else{
                        allCanvas[i].style.zIndex = "-10"
                        allCanvas[i].style.display = "none"

                    }
                }
        });










    }






}

