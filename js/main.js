// getting the body element
var body = document.getElementsByTagName("body")[0];
var newFile = document.getElementById("newFile")
var layerItems = document.getElementsByClassName("bodycontainer__right__layer__item");
var addLayerButton = document.getElementById("topbar__lower__layers__add");
var myCanvasWrapper = document.getElementById("myCanvasWrapper");
var mergeButton = document.getElementById("topbar__lower__edit__Merge");

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
        this.bodycontainer__right__control__layer__move__down = document.getElementsByClassName("bodycontainer__right__control__layer__move__down")[0];
        this.bodycontainer__right__control__layer__move__up = document.getElementsByClassName("bodycontainer__right__control__layer__move__up")[0];
        this.bodycontainer__right__control__control__move__down = document.getElementsByClassName("bodycontainer__right__control__control__move__down")[0];
        this.bodycontainer__right__control__control__move__up = document.getElementsByClassName("bodycontainer__right__control__control__move__up")[0];
        this.myCanvasWrapper = myCanvasWrapper;
        this.layerItems = layerItems;
        this.addLayerButton = addLayerButton;
        this.mergeButton = mergeButton;
        this.myCanvasWrapper.style.background = "cyan";
        this.myCanvasWrapper.innerHTML = `<h1 style="text-align: center;padding-top:200px">Please add file first</h1>`;

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
        });
        this.mergeButton.addEventListener("click", (event)=>{
            // merge and download all the layer based on the priority of creation
            let cnvs = document.createElement('canvas');
            document.body.appendChild(cnvs);
            cnvs.height = 588;
            cnvs.width = 950;
            let cxt = cnvs.getContext('2d');

            for (let i = 0; i < this.layerArray.length; i++) {
                cxt.drawImage(this.layerArray[i].myLayerCanvas.canvas, 0, 0);
            }

            if(window.navigator.msSavedBlob){
                window.navigator.msSavedBlob(this.canvas.msToBlob(), "canvas-image.png")
            }else{
                let a = document.createElement("a");
                document.body.appendChild(a);
                a.href = cnvs.toDataURL();
                a.download = "canvas-image.png";
                a.click();
                document.body.removeChild(a);
            }
            document.body.removeChild(cnvs);
        });

        this.bodycontainer__right__control__layer__move__down.addEventListener("click",()=>{
            // move down the layer item
            console.log(`move down the layer item`)
            
            });
        this.bodycontainer__right__control__layer__move__up.addEventListener("click", ()=>{
            // move up the layer item
            console.log(`move up the layer item`)

            });
        
        this.bodycontainer__right__control__control__move__down.addEventListener("click", ()=>{
            // move down the layer selection
            console.log(`move down the layer selection`)

            });
        this.bodycontainer__right__control__control__move__up.addEventListener("click", ()=>{
            // move up the layer selection
            console.log(`move up the layer selection`)

            });
       
        
    }




   
    
}


let main = new Main(1)