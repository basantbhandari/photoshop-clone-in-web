var myCanvasWrapper = document.getElementById("myCanvasWrapper");
var downloadHandler = document.getElementById("topbar__lower__edit__Download");
var toolIcons = document.getElementsByClassName("myImageIcon");
var topbar__lower__shapes__list__option = document.getElementById("topbar__lower__shapes__list__option");

class MyCanvas{
    constructor(index){
        this.canvasIndex = index || 0;
        this.canvasOffset = 4;
        this.canvas = document.createElement("canvas");
        this.myCanvasWrapper = myCanvasWrapper;
        this.myCanvasWrapper.style.position = "relative";
        this.topbar__lower__shapes__list__option = topbar__lower__shapes__list__option;
        this.myCanvasWrapper.appendChild(this.canvas);
        this.canvas.height = this.myCanvasWrapper.offsetHeight - this.canvasOffset;
        this.canvas.width = this.myCanvasWrapper.offsetWidth -this.canvasOffset;
        this.canvas.classList.add("eachCanvasItem");
        this.canvas.setAttribute("cindex",this.canvasIndex)
        this.canvas.style.background = `white`;
        this.canvas.style.position = "absolute";
        this.context = this.canvas.getContext("2d");
        this.addImage = document.getElementById("topbar__lower__images__add__image");
        this.width = undefined;
        this.height = undefined;
        this.myoffset = "54"
        this.is_Image__add__Clicked = false
        this.downloadHandler = downloadHandler;
        this.toolIcons = toolIcons;

        this.shapeDrawLineFlag = false;
        this.shapeDrawTriangleFlag = false;
        this.shapeDrawRectangleFlag = false;
        this.shapeDrawPolygonFlag = false;
        this.ShapeDrawCircleFlag = false;

        this.is_drawing = false;
        this.is_texting = false;
        this.is_drawing_clicked = false;
        this.is_eraser_clicked = false;
        this.is_text_clicked = false;
        window.onresize = () => {
            this.canvas.height = this.myCanvasWrapper.offsetHeight - this.canvasOffset;
            this.canvas.width = this.myCanvasWrapper.offsetWidth -this.canvasOffset;
          }
        // event detction to draw various shape
          this.canvas.addEventListener("touchstart",(event)=> {

            let selectedLayer = document.getElementsByClassName("layer__active")[0];
            try {
                let selectedLayerIndex = selectedLayer.getAttribute("lindex");
                if( selectedLayerIndex == this.canvasIndex){
                    let currentMousePosition = this.getMousePos(event);
                    let currentColor = getUpdatedColor();
                    console.log("clicked",this.shapeDrawLineFlag)
        
                    if(this.shapeDrawLineFlag){
                        // lets draw line
                        this.context.beginPath();
                        this.context.moveTo(currentMousePosition.x, currentMousePosition.y);
                        this.context.lineTo(prompt("Enter the final x coordinate: "), 
                                            prompt("Enter the final y coordinate: "));
                        this.context.lineWidth = prompt("Enter the line width: ");
                        this.context.strokeStyle = currentColor;
                        this.context.stroke();
        
                    }
                    if(this.shapeDrawTriangleFlag){
                        // lets draw triangle
                        // the triangle
                        this.context.beginPath();
                        this.context.moveTo(currentMousePosition.x,
                            currentMousePosition.y);
                        this.context.lineTo(prompt("Enter the second coordinate x point: "),
                        prompt("Enter the second coordinate y point: "));
                        this.context.lineTo(prompt("Enter the third coordinate x point: "),
                        prompt("Enter the third coordinate y point: "));
                        this.context.closePath();
                        // the fill color
                        this.context.fillStyle = currentColor;
                        this.context.fill();
                        // the outline
                        this.context.lineWidth = prompt("Enter the line width: ");;
                        this.context.strokeStyle = currentColor
                        this.context.stroke();
                        
                    }
                    if(this.shapeDrawRectangleFlag){
                        // lets draw rectangle
                        this.context.beginPath();
                        this.context.rect(currentMousePosition.x, 
                            currentMousePosition.y,
                             prompt("Enter the width of rectangle:"), 
                             prompt("Enter the height of rectangle:"));
                        this.context.fillStyle = currentColor;
                        this.context.fill();
                        this.context.lineWidth = prompt("Enter the line width: ");
                        this.context.strokeStyle = currentColor;
                        this.context.stroke();
        
                    }
                    if(this.shapeDrawPolygonFlag){
                        // lets draw polygon
        
                        let radius = prompt("Enter the radious of the circle: ")
                        let sides = prompt("Enter how many edge you want: ");
        
                        this.regularpolygon(currentMousePosition.x, currentMousePosition.y, radius, sides, currentColor)
                    }
                    if(this.ShapeDrawCircleFlag){
                        // lets draw circle
                        this.context.beginPath();
                        this.context.arc(currentMousePosition.x,
                             currentMousePosition.y, 
                             prompt("Enter radious of circle: "), 0, 2 * Math.PI, false);
                        this.context.fillStyle = currentColor;
                        this.context.fill();
                        this.context.lineWidth = prompt("Enter the line width: ");
                        this.context.strokeStyle = currentColor;
                        this.context.stroke();
                  
                    }
                }
            } catch (error) {
                console.log("Please work on layer");
            }
          


          });
          this.canvas.addEventListener("touchmove",(event)=> {
              if(this.shapeDrawTriangleFlag){

              }
          });
          this.canvas.addEventListener("touchend",(event)=> {
            this.shapeDrawLineFlag = false;
            this.shapeDrawTriangleFlag = false;
            this.shapeDrawRectangleFlag = false;
            this.shapeDrawPolygonFlag = false;
            this.ShapeDrawCircleFlag = false;
        });
          this.canvas.addEventListener("mousedown",(event)=> {
            let selectedLayer = document.getElementsByClassName("layer__active")[0];
            try {
                let selectedLayerIndex = selectedLayer.getAttribute("lindex");
                if( selectedLayerIndex == this.canvasIndex){
                    let currentMousePosition = this.getMousePos(event);
                    let currentColor = getUpdatedColor();
                    console.log("clicked",this.shapeDrawLineFlag)
        
                    if(this.shapeDrawLineFlag){
                        // lets draw line
                        this.context.beginPath();
                        this.context.moveTo(currentMousePosition.x, currentMousePosition.y);
                        this.context.lineTo(prompt("Enter the final x coordinate: "), 
                                            prompt("Enter the final y coordinate: "));
                        this.context.lineWidth = prompt("Enter the line width: ");
                        this.context.strokeStyle = currentColor;
                        this.context.stroke();
        
                    }
                    if(this.shapeDrawTriangleFlag){
                        // lets draw triangle
                        // the triangle
                        this.context.beginPath();
                        this.context.moveTo(currentMousePosition.x,
                            currentMousePosition.y);
                        this.context.lineTo(prompt("Enter the second coordinate x point: "),
                        prompt("Enter the second coordinate y point: "));
                        this.context.lineTo(prompt("Enter the third coordinate x point: "),
                        prompt("Enter the third coordinate y point: "));
                        this.context.closePath();
                        // the fill color
                        this.context.fillStyle = currentColor;
                        this.context.fill();
                        // the outline
                        this.context.lineWidth = prompt("Enter the line width: ");;
                        this.context.strokeStyle = currentColor
                        this.context.stroke();
                        
                    }
                    if(this.shapeDrawRectangleFlag){
                        // lets draw rectangle
                        this.context.beginPath();
                        this.context.rect(currentMousePosition.x, 
                            currentMousePosition.y,
                             prompt("Enter the width of rectangle:"), 
                             prompt("Enter the height of rectangle:"));
                        this.context.fillStyle = currentColor;
                        this.context.fill();
                        this.context.lineWidth = prompt("Enter the line width: ");
                        this.context.strokeStyle = currentColor;
                        this.context.stroke();
        
                    }
                    if(this.shapeDrawPolygonFlag){
                        // lets draw polygon
        
                        let radius = prompt("Enter the radious of the circle: ")
                        let sides = prompt("Enter how many edge you want: ");
        
                        this.regularpolygon(currentMousePosition.x, currentMousePosition.y, radius, sides, currentColor)
                    }
                    if(this.ShapeDrawCircleFlag){
                        // lets draw circle
                        this.context.beginPath();
                        this.context.arc(currentMousePosition.x,
                             currentMousePosition.y, 
                             prompt("Enter radious of circle: "), 0, 2 * Math.PI, false);
                        this.context.fillStyle = currentColor;
                        this.context.fill();
                        this.context.lineWidth = prompt("Enter the line width: ");
                        this.context.strokeStyle = currentColor;
                        this.context.stroke();
                  
                    }
                }
            } catch (error) {
                console.log("Please work on layer");
            }
          


          });
          this.canvas.addEventListener("mousemove",(event)=> {
              if(this.ShapeDrawCircleFlag){

              }
          });
          this.canvas.addEventListener("mouseup",(event)=> {
            this.shapeDrawLineFlag = false;
            this.shapeDrawTriangleFlag = false;
            this.shapeDrawRectangleFlag = false;
            this.shapeDrawPolygonFlag = false;
            this.ShapeDrawCircleFlag = false;
          });








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
                event.clientX - this.canvas.offsetLeft - this.myoffset, 
                event.clientY - this.canvas.offsetTop - this.myoffset
            );
            console.log(event.clientX - this.canvas.offsetLeft - this.myoffset, event.clientY - this.canvas.offsetTop - this.myoffset);
            event.preventDefault();
            console.log("start drawing");    
        }, false);

        this.canvas.addEventListener("touchmove", 
        (event)=>{
            let drawConfig = getDrawingInformation()
            let eraserConfig =getEraserInformation()
    
            if( this.is_drawing && this.is_drawing_clicked){
                this.context.lineTo(
                    event.clientX - this.canvas.offsetLeft - this.myoffset, 
                    event.clientY - this.canvas.offsetTop -this.myoffset
                );
                console.log(event.clientX - this.canvas.offsetLeft -this.myoffset , event.clientY - this.canvas.offsetTop -this.myoffset);
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
                    event.clientX - this.canvas.offsetLeft - this.myoffset, 
                    event.clientY - this.canvas.offsetTop - this.myoffset
                );
                console.log(event.clientX - this.canvas.offsetLeft - this.myoffset, event.clientY - this.canvas.offsetTop -this.myoffset);
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
                event.clientX - this.canvas.offsetLeft -this.myoffset , 
                event.clientY - this.canvas.offsetTop - this.myoffset
            );
            console.log(event.clientX - this.canvas.offsetLeft - this.myoffset, event.clientY - this.canvas.offsetTop- this.myoffset);
            event.preventDefault();
            console.log("start drawing");    
        }, false);

        this.canvas.addEventListener("mousemove", 
        (event)=>{
            let drawConfig = getDrawingInformation()
            let eraserConfig =getEraserInformation()
    
            if( this.is_drawing && this.is_drawing_clicked){
                this.context.lineTo(
                    event.clientX - this.canvas.offsetLeft - this.myoffset , 
                    event.clientY - this.canvas.offsetTop - this.myoffset
                );
                console.log(event.clientX - this.canvas.offsetLeft - this.myoffset, event.clientY - this.canvas.offsetTop -this.myoffset);
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
                    event.clientX - this.canvas.offsetLeft -this.myoffset, 
                    event.clientY - this.canvas.offsetTop -this.myoffset
                );
                console.log(event.clientX - this.canvas.offsetLeft -this.myoffset, event.clientY - this.canvas.offsetTop -this.myoffset);
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
            let selectedLayer = document.getElementsByClassName("layer__active")[0];
            try {
                let selectedLayerIndex = selectedLayer.getAttribute("lindex");
                if( selectedLayerIndex == this.canvasIndex){
                    this.width = prompt("Image Width:");
                    this.height = prompt("Image height:");
                    this.is_Image__add__Clicked = true;
                }
            } catch (error) {
                console.log("Please work on layer");
            }
        })
        this.checkForTheQuickIconClick();
        this.downloadHandler.addEventListener("click", () => {
            let highligtedLayerItem = document.getElementsByClassName("layer__active")[0];
            let highligtedLayerItemIndex = highligtedLayerItem.getAttribute("lindex")
            if(this.canvasIndex == highligtedLayerItemIndex){
                if(window.navigator.msSavedBlob){
                    window.navigator.msSavedBlob(this.canvas.msToBlob(), "canvas-image.png")
                }else{
                    let a = document.createElement("a");
                    document.body.appendChild(a);
                    a.href = this.canvas.toDataURL();
                    a.download = "canvas-image.png";
                    a.click();
                    document.body.removeChild(a);
                }
            }
        });


        this.setOnClickListenerOnQuickIcon();

        this.topbar__lower__shapes__list__option.addEventListener("change", (event)=>{
            console.log(`${this.topbar__lower__shapes__list__option.options[this.topbar__lower__shapes__list__option.selectedIndex].value}`)
            let shapeValueSelected = this.topbar__lower__shapes__list__option.options[this.topbar__lower__shapes__list__option.selectedIndex].value;
            
            switch(shapeValueSelected){
                case "line":
                    // draw line
                    this.shapeDrawLineFlag = true;
                    this.shapeDrawTriangleFlag = false;
                    this.shapeDrawRectangleFlag = false;
                    this.shapeDrawPolygonFlag = false;
                    this.ShapeDrawCircleFlag = false;
                    console.log(this.shapeDrawLineFlag)
                    break;

                case "Triangle":
                    // draw triangle
                    this.shapeDrawLineFlag = false;
                    this.shapeDrawTriangleFlag = true;
                    this.shapeDrawRectangleFlag = false;
                    this.shapeDrawPolygonFlag = false;
                    this.ShapeDrawCircleFlag = false;

                    break; 

                case "Rectangle":
                    // draw rectangle
                    this.shapeDrawLineFlag = false;
                    this.shapeDrawTriangleFlag = false;
                    this.shapeDrawRectangleFlag = true;
                    this.shapeDrawPolygonFlag = false;
                    this.ShapeDrawCircleFlag = false;


                    break;      
                    
                case "Polygon":
                    // draw polygon
                    this.shapeDrawLineFlag = false;
                    this.shapeDrawTriangleFlag = false;
                    this.shapeDrawRectangleFlag = false;
                    this.shapeDrawPolygonFlag = true;
                    this.ShapeDrawCircleFlag = false;

                    break;
                case "Circle":
                    // draw polygon
                    this.shapeDrawLineFlag = false;
                    this.shapeDrawTriangleFlag = false;
                    this.shapeDrawRectangleFlag = false;
                    this.shapeDrawPolygonFlag = false;
                    this.ShapeDrawCircleFlag = true;

                    break;
                default:
                    this.shapeDrawLineFlag = false;
                    this.shapeDrawTriangleFlag = false;
                    this.shapeDrawRectangleFlag = false;
                    this.shapeDrawPolygonFlag = false;
                    this.ShapeDrawCircleFlag =false;

            }


        })



    }

    
    setOnClickListenerOnQuickIcon(){
        for(let i = 0; i < this.toolIcons.length; i++){
            this.toolIcons[i].addEventListener("click", () => {
                console.log(`icon of index ${i}`)
                this.toolIcons[i].classList.add("activeImageIcon");
                for(let j = 0; j< this.toolIcons.length; j++){
                    if(j == i){
                        quickIconState[j] = true
                        continue
                    }
                    if(this.toolIcons[j].classList.contains("activeImageIcon")){
                        this.toolIcons[j].classList.remove("activeImageIcon");
                        quickIconState[j] = false
                    }
                }
                updateVisibility();
                this.checkForTheQuickIconClick()
            });
        }
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
        let selected = document.getElementsByClassName("layer__active")[0];
        console.log(selected)
        for(let key in quickIconState) {
            if(quickIconState[key] && (selected != undefined)){
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
    regularpolygon(x, y, radius, sides,currentColor ) {
        if (sides < 3) return;
        this.context.beginPath();
        var a = ((Math.PI * 2)/sides);
        this.context.translate(x,y);
        this.context.moveTo(radius,0);
        for (var i = 1; i < sides; i++) {
          this.context.lineTo(radius*Math.cos(a*i),radius*Math.sin(a*i));
        }
        this.context.closePath();
        this.context.fillStyle = currentColor;
        this.context.fill()
        this.context.lineWidth = prompt("Enter the line width: ");
        this.context.strokeStyle = currentColor;
        this.context.stroke();

      }

    




}

