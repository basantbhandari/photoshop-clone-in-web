var myCanvasWrapper = document.getElementById("myCanvasWrapper");

class MyCanvas{
    constructor(index){
        this.canvasIndex = index || 0;
        this.canvasOffset = 4;
        this.canvas = document.createElement("canvas");
        this.myCanvasWrapper = myCanvasWrapper;
        this.myCanvasWrapper.appendChild(this.canvas);
        this.canvas.height = this.myCanvasWrapper.offsetHeight - this.canvasOffset;
        this.canvas.width = this.myCanvasWrapper.offsetWidth -this.canvasOffset;
        this.canvas.style.background = 'white';
        this.context = this.canvas.getContext("2d");
        this.addImage = document.getElementById("topbar__lower__images__add__image");
        this.width = undefined;
        this.height = undefined;
        this.is_Image__add__Clicked = false

        this.is_drawing = false;
        this.is_texting = false;
        this.is_drawing_clicked = false;
        this.is_eraser_clicked = false;
        this.is_text_clicked = false;
        window.onresize = () => {
            this.canvas.height = this.myCanvasWrapper.offsetHeight - this.canvasOffset;
            this.canvas.width = this.myCanvasWrapper.offsetWidth -this.canvasOffset;
          }

        this.canvas.addEventListener("touchstart", (event)=>{
            if(this.is_text_clicked){
                this.is_texting = true
                let textConfig = getTextInformation();
                let currentMousePosition = this.getMousePos(event);
                console.log(textConfig);
                console.log(currentMousePosition)
                this.context.font = `${textConfig["fontsize"]}px ${textConfig["fontstyle"]}`;
                this.context.strokeStyle = getUpdatedColor();
                this.context.strokeText(textConfig["text"], currentMousePosition.x, currentMousePosition.y);
            }
        }, false);

        this.canvas.addEventListener("touchmove", (event)=>{
            if(this.is_texting){
    
            }
        }, false);

        this.canvas.addEventListener("mousedown",(event)=>{
            if(this.is_text_clicked){
                this.is_texting = true
                let textConfig = getTextInformation();
                let currentMousePosition = this.getMousePos(event);
                console.log(textConfig);
                console.log(currentMousePosition)
                this.context.font = `${textConfig["fontsize"]}px ${textConfig["fontstyle"]}`;
                this.context.strokeStyle = getUpdatedColor();
                this.context.strokeText(textConfig["text"], currentMousePosition.x, currentMousePosition.y);
            }
        }, false);

        this.canvas.addEventListener("mousemove", (event)=>{
            if(this.is_texting){
    
            }
        }, false);

        this.canvas.addEventListener("touchend", (event)=>{
            if(this.is_text_clicked && this.is_texting ){
                this.is_texting = false
            }
        },false);
        this.canvas.addEventListener("mouseup", (event)=>{
            if(this.is_text_clicked && this.is_texting ){
                this.is_texting = false
            }
        },false);
        this.canvas.addEventListener("mouseout", (event)=>{
            if(this.is_text_clicked && this.is_texting ){
                this.is_texting = false
            }
        },false);

        this.canvas.addEventListener("touchstart", (event)=>{
            this.is_drawing = true;
            this.context.beginPath();
            this.context.moveTo(
                event.clientX - this.canvas.offsetLeft, 
                event.clientY - this.canvas.offsetTop
            );
            console.log(event.clientX - this.canvas.offsetLeft, event.clientY - this.canvas.offsetTop);
            event.preventDefault();
            console.log("start drawing");    
        }, false);

        this.canvas.addEventListener("touchmove", 
        (event)=>{
            let drawConfig = getDrawingInformation()
            let eraserConfig =getEraserInformation()
    
            if( this.is_drawing && this.is_drawing_clicked){
                this.context.lineTo(
                    event.clientX - this.canvas.offsetLeft, 
                    event.clientY - this.canvas.offsetTop
                );
                console.log(event.clientX - this.canvas.offsetLeft, event.clientY - this.canvas.offsetTop);
                this.context.strokeStyle = getUpdatedColor();
                this.context.lineWidth = drawConfig["pencilsize"];
                if(drawConfig["style"] == "doted"){
                    this.context.setLineDash([drawConfig["pencilsize"]*1.5,drawConfig["pencilsize"]*1.2]);
                }else{
                    this.context.setLineDash([]);
                }
                this.context.lineCap = "round";
                this.context.lineJoin = "round";
                this.context.stroke();
                console.log("draw drawing");
            }
    
            // eraser fuctionality
            if(this.is_drawing && this.is_eraser_clicked){
                this.context.lineTo(
                    event.clientX - this.canvas.offsetLeft, 
                    event.clientY - this.canvas.offsetTop
                );
                console.log(event.clientX - this.canvas.offsetLeft, event.clientY - this.canvas.offsetTop);
                this.context.strokeStyle = "white";
                this.context.lineWidth = eraserConfig["size"]
                this.context.setLineDash([]);
                this.context.lineCap = "round";
                this.context.lineJoin = "round";
                this.context.stroke();
                console.log("draw drawing");
            }
    
        
        }, false);

        this.canvas.addEventListener("mousedown", (event)=>{
            this.is_drawing = true;
            this.context.beginPath();
            this.context.moveTo(
                event.clientX - this.canvas.offsetLeft, 
                event.clientY - this.canvas.offsetTop
            );
            console.log(event.clientX - this.canvas.offsetLeft, event.clientY - this.canvas.offsetTop);
            event.preventDefault();
            console.log("start drawing");    
        }, false);

        this.canvas.addEventListener("mousemove", 
        (event)=>{
            let drawConfig = getDrawingInformation()
            let eraserConfig =getEraserInformation()
    
            if( this.is_drawing && this.is_drawing_clicked){
                this.context.lineTo(
                    event.clientX - this.canvas.offsetLeft, 
                    event.clientY - this.canvas.offsetTop
                );
                console.log(event.clientX - this.canvas.offsetLeft, event.clientY - this.canvas.offsetTop);
                this.context.strokeStyle = getUpdatedColor();
                this.context.lineWidth = drawConfig["pencilsize"];
                if(drawConfig["style"] == "doted"){
                    this.context.setLineDash([drawConfig["pencilsize"]*1.5,drawConfig["pencilsize"]*1.2]);
                }else{
                    this.context.setLineDash([]);
                }
                this.context.lineCap = "round";
                this.context.lineJoin = "round";
                this.context.stroke();
                console.log("draw drawing");
            }
    
            // eraser fuctionality
            if(this.is_drawing && this.is_eraser_clicked){
                this.context.lineTo(
                    event.clientX - this.canvas.offsetLeft, 
                    event.clientY - this.canvas.offsetTop
                );
                console.log(event.clientX - this.canvas.offsetLeft, event.clientY - this.canvas.offsetTop);
                this.context.strokeStyle = "white";
                this.context.lineWidth = eraserConfig["size"]
                this.context.setLineDash([]);
                this.context.lineCap = "round";
                this.context.lineJoin = "round";
                this.context.stroke();
                console.log("draw drawing");
            }
    
        
        }, false);

        this.canvas.addEventListener("touchend", (event)=>{
            if(this.is_drawing){
                this.context.stroke();
                this.context.closePath();
                this.is_drawing = false
            }
            event.preventDefault();

        },false);

        this.canvas.addEventListener("mouseup",  (event)=>{
            if(this.is_drawing){
                this.context.stroke();
                this.context.closePath();
                this.is_drawing = false
            }
            event.preventDefault();

        },false);

        this.canvas.addEventListener("mouseout", (event)=>{
            if(this.is_drawing){
                this.context.stroke();
                this.context.closePath();
                this.is_drawing = false
            }
            event.preventDefault();

        },false);

        this.canvas.addEventListener("touchstart", (event)=>{
        if(this.is_Image__add__Clicked){
            var currentMousePosition = this.getMousePos( event)
            var formdata = document.getElementById("topbar__lower__images__image__input");
            let uplImg = formdata.files[0];
            //check for file type
            if (uplImg.type.substr(0,5) !== "image"){
                console.error("Only images");
                return;
            }
                //convert uploaded image to base 64 and append it to Div
            this.getBase64(uplImg).then(
                data => {
                    console.log(data);
                    let imgObj = new Image()
                    imgObj.onload = () => {
                        this.context.drawImage(imgObj, currentMousePosition.x,
                            currentMousePosition.y, width, height)
                    }
                    imgObj.src = data
                    this.is_Image__add__Clicked = false
                })
            }
        }, false);

        this.canvas.addEventListener("touchmove", (event)=>{

        }, false);

        this.canvas.addEventListener("mousedown", (event)=>{
            if(this.is_Image__add__Clicked){
                var currentMousePosition = this.getMousePos( event)
                var formdata = document.getElementById("topbar__lower__images__image__input");
                let uplImg = formdata.files[0];
                //check for file type
                if (uplImg.type.substr(0,5) !== "image"){
                    console.error("Only images");
                    return;
                }
                    //convert uploaded image to base 64 and append it to Div
                this.getBase64(uplImg).then(
                    data => {
                        console.log(data);
                        let imgObj = new Image()
                        imgObj.onload = () => {
                            this.context.drawImage(imgObj, currentMousePosition.x,
                                currentMousePosition.y, this.width, this.height)
                        }
                        imgObj.src = data
                        this.is_Image__add__Clicked = false
                    })
            }
        }, false);

        this.canvas.addEventListener("mousemove", (event)=>{

        }, false);
    
        this.canvas.addEventListener("touchend", (event)=>{},false);
        this.canvas.addEventListener("mouseup", (event)=>{},false);
        this.canvas.addEventListener("mouseout", (event)=>{},false);
        this.addImage.addEventListener("click", ()=>{
            this.width = prompt("Image Width:");
            this.height = prompt("Image height:");
            this.is_Image__add__Clicked = true;
        })
        this.checkForTheQuickIconClick();
        


    }

    

 
    
    //Get Mouse Position
    getMousePos(evt) {
        var rect = this.canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    //convert image to base 64
    getBase64(file) {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        });
    }

    clearCanvas() {
        this.context.fillStyle = "white";
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);    
    }

    checkForTheQuickIconClick(){
        for(let key in quickIconState) {
            if(quickIconState[key]){
                console.log(key);
                switch(key){
                    case "0":
                    this.is_drawing_clicked = true;
                    this.is_eraser_clicked = false;
                    this.is_text_clicked = false;
                    break;
                case "1":
                    this.is_drawing_clicked = false;
                    this.is_eraser_clicked = true;
                    this.is_text_clicked = false;
                    break;
                case "6":
                    this.is_eraser_clicked = false;
                    this.is_drawing_clicked = false;
                    this.is_text_clicked = true;
                    break;
                
                default:
                    this.is_drawing_clicked = false;
                    this.is_eraser_clicked = false;
                    this.is_text_clicked = false;
                    
            }
            }       
        };

}

    




}

myNewCanvas = new MyCanvas(1)

