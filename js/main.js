// getting the body element
var body = document.getElementsByTagName("body")[0];
var newFile = document.getElementById("newFile")
var layerItems = document.getElementsByClassName("bodycontainer__right__layer__item");
var addLayerButton = document.getElementById("topbar__lower__layers__add");


class Main{
    constructor(index){
        this.gameIndex = index;
        this.body = body
        this.body.style.border = "1px solid gray";
        this.body.style.height = "100vh";
        this.body.style.width = "100vw";
        this.layerArray = [];
        this.newFile = newFile;
        this.bgFlag = false;
        this.layerItems = layerItems;
        this.addLayerButton = addLayerButton;
        this.addLayerButton.addEventListener("click", () => {
            console.log("layer button clicked");
            if(this.bgFlag){
                let layerTemp = new MyLayer(layerItems.length + 1)
                this.layerArray.push(layerTemp);
                console.log(layerTemp)
                console.log(this.layerArray)
            }

        });
        this.newFile.addEventListener("click", (event)=>{
            this.bgFlag = true
            this.body.style.background = "black"
        })
       
        
    }

   
    
}


let main = new Main(1)