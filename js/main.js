// getting the body element
var body = document.getElementsByTagName("body")[0];
var newFile = document.getElementById("newFile")
var layerItems = document.getElementsByClassName("bodycontainer__right__layer__item");
var addLayerButton = document.getElementById("topbar__lower__layers__add");
var myCanvasWrapper = document.getElementById("myCanvasWrapper");

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
        this.myCanvasWrapper = myCanvasWrapper;
        this.layerItems = layerItems;
        this.addLayerButton = addLayerButton;
        this.myCanvasWrapper.style.background = "cyan";
        this.myCanvasWrapper.innerHTML = `<h1 style="text-align: center;padding-top:40%">Please add file first</h1>`;

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
            this.myCanvasWrapper.innerHTML = "";
            this.myCanvasWrapper.style.background = "white"
        })
       
        
    }

   
    
}


let main = new Main(1)