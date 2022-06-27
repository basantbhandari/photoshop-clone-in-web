class MyCanvas{
    constructor(index){
        this.globalCoordinateObjectHistry = {
            "shape":{
                    "mouseDownPoint": {
                        "x": 0,
                        "y": 0
                    },
                    "mouseMovePoint": [

                    ],
                    "mouseUpPoint": {
                        "x": 0,
                        "y": 0
                    },
                },
            "text":{
                "mouseDownPoint": {
                    "x": 0,
                    "y": 0
                },
                "mouseMovePoint": [
                    
                ],
                "mouseUpPoint": {
                    "x": 0,
                    "y": 0
                },
            },
            "eraser":{
                "mouseDownPoint": {
                    "x": 0,
                    "y": 0
                },
                "mouseMovePoint": [
                        
                ],
                "mouseUpPoint": {
                    "x": 0,
                    "y": 0
                },
            },
            "draw":{
                "mouseDownPoint": {
                    "x": 0,
                    "y": 0
                },
                "mouseMovePoint": [
                        
                ],
                "mouseUpPoint": {
                    "x": 0,
                    "y": 0
                },
            },
            "crop":{
                "mouseDownPoint": {
                    "x": 0,
                    "y": 0
                },
                "mouseMovePoint": [
                        
                ],
                "mouseUpPoint": {
                    "x": 0,
                    "y": 0
                },
            },
            "move":{
                "mouseDownPoint": {
                    "x": 0,
                    "y": 0
                },
                "mouseMovePoint": [
                            
                ],
                "mouseUpPoint": {
                    "x": 0,
                    "y": 0
                },
            },
            "rotate":{
                "mouseDownPoint": {
                    "x": 0,
                    "y": 0
                },
                "mouseMovePoint": [
                        
                ],
                "mouseUpPoint": {
                    "x": 0,
                    "y": 0
                },
            },
            "scale":{
                "mouseDownPoint": {
                    "x": 0,
                    "y": 0
                },
                "mouseMovePoint": [
                        
                ],
                "mouseUpPoint": {
                    "x": 0,
                    "y": 0
                },
            },          
            "image":{
                "mouseDownPoint": {
                    "x": 0,
                    "y": 0
                },
                "mouseMovePoint": [
                        
                ],
                "mouseUpPoint": {
                    "x": 0,
                    "y": 0
                },
            },


        }

        this.canvasIndex = index || 0;
        this.canvasOffset = 4;
        this.lineWidth = 10;
        this.canvas = document.createElement("canvas");
        this.myCanvasWrapper = document.getElementById("myCanvasWrapper");
        this.myCanvasWrapper.style.position = "relative";
        this.topbar__lower__shapes__list__option = document.getElementById("topbar__lower__shapes__list__option");
        this.myCanvasWrapper.appendChild(this.canvas);
        this.canvas.height = this.myCanvasWrapper.offsetHeight - this.canvasOffset;
        this.canvas.width = this.myCanvasWrapper.offsetWidth -this.canvasOffset;
        this.canvas.classList.add("eachCanvasItem");
        this.canvas.setAttribute("cindex",this.canvasIndex)
        this.canvas.style.background = `white`;
        this.canvas.style.position = "absolute";
        this.context = this.canvas.getContext("2d");
        this.addImage = document.getElementById("topbar__lower__images__add__image");
        this.myoffset = "54";
        this.is_Image__add__Clicked = false
        this.downloadHandler = document.getElementById("topbar__lower__edit__Download");
        this.toolIcons = document.getElementsByClassName("myImageIcon");


        this.shapeDrawLineFlag = false;
        this.shapeDrawTriangleFlag = false;
        this.shapeDrawRectangleFlag = false;
        this.shapeDrawPolygonFlag = false;
        this.ShapeDrawCircleFlag = false;

        this.is_drawing = false;
        this.is_texting = false;
        this.is_drawing_clicked = false;
        this.is_eraser_clicked = false;
        this.is_scale_clicked = false;
        this.is_move_clicked = false;
        this.is_rotate_clicked = false;
        this.is_text_clicked = false;
        this.is_crop_clicked = false;

        window.onresize = () => {
            this.canvas.height = this.myCanvasWrapper.offsetHeight - this.canvasOffset;
            this.canvas.width = this.myCanvasWrapper.offsetWidth -this.canvasOffset;
          }
        this.checkForTheQuickIconClick();
        this.setOnClickListenerOnQuickIcon();




























        // event detction to draw various shape
          this.canvas.addEventListener("mousedown",(event)=> {
              if(this.shapeDrawLineFlag){
                this.globalCoordinateObjectHistry.shape.mouseDownPoint = this.getMousePos(event);
                //   console.log(this.globalCoordinateObjectHistry.shape.mouseDownPoint)
              }
                if(this.shapeDrawTriangleFlag){
                    this.globalCoordinateObjectHistry.shape.mouseDownPoint = this.getMousePos(event);
                    //   console.log(this.globalCoordinateObjectHistry.shape.mouseDownPoint)
                }
                if(this.shapeDrawRectangleFlag){
                    this.globalCoordinateObjectHistry.shape.mouseDownPoint = this.getMousePos(event);
                    //   console.log(this.globalCoordinateObjectHistry.shape.mouseDownPoint)
                }
                if(this.shapeDrawPolygonFlag){
                    this.globalCoordinateObjectHistry.shape.mouseDownPoint = this.getMousePos(event);
                    //   console.log(this.globalCoordinateObjectHistry.shape.mouseDownPoint)
                }
                if(this.ShapeDrawCircleFlag){
                    this.globalCoordinateObjectHistry.shape.mouseDownPoint = this.getMousePos(event);
                    //   console.log(this.globalCoordinateObjectHistry.shape.mouseDownPoint)
                }
 
          });
          this.canvas.addEventListener("mousemove",(event)=> {
            if(this.shapeDrawLineFlag){
                this.globalCoordinateObjectHistry.shape.mouseMovePoint.push(this.getMousePos(event));
                // console.log(this.globalCoordinateObjectHistry.shape.mouseMovePoint)
            }
            if(this.shapeDrawTriangleFlag){
                this.globalCoordinateObjectHistry.shape.mouseMovePoint.push(this.getMousePos(event));
                // console.log(this.globalCoordinateObjectHistry.shape.mouseMovePoint)
            }
            if(this.shapeDrawRectangleFlag){
                this.globalCoordinateObjectHistry.shape.mouseMovePoint.push(this.getMousePos(event));
                // console.log(this.globalCoordinateObjectHistry.shape.mouseMovePoint)
            }
            if(this.shapeDrawPolygonFlag){
                this.globalCoordinateObjectHistry.shape.mouseMovePoint.push(this.getMousePos(event));
                // console.log(this.globalCoordinateObjectHistry.shape.mouseMovePoint)
            }
            if(this.ShapeDrawCircleFlag){
                this.globalCoordinateObjectHistry.shape.mouseMovePoint.push(this.getMousePos(event));
                // console.log(this.globalCoordinateObjectHistry.shape.mouseMovePoint)
            }

            
          });
          this.canvas.addEventListener("mouseup",(event)=> {
            // if(this.shapeDrawLineFlag){
            //     this.globalCoordinateObjectHistry.shape.mouseUpPoint = this.getMousePos(event);
            //     // console.log(this.globalCoordinateObjectHistry.shape.mouseUpPoint)    
            // }


            // now start drawing the shape
            let selectedLayer = document.getElementsByClassName("layer__active")[0];
            try {
                let selectedLayerIndex = selectedLayer.getAttribute("lindex");
                if( selectedLayerIndex == this.canvasIndex){
                    if(this.shapeDrawLineFlag){
                        this.globalCoordinateObjectHistry.shape.mouseUpPoint = this.getMousePos(event);
                        // console.log(this.globalCoordinateObjectHistry.shape.mouseUpPoint)

                        // lets draw line
                        this.context.beginPath();
                        this.context.moveTo(this.globalCoordinateObjectHistry.shape.mouseDownPoint.x, 
                                            this.globalCoordinateObjectHistry.shape.mouseDownPoint.y);
                        this.context.lineTo(this.globalCoordinateObjectHistry.shape.mouseUpPoint.x,
                                            this.globalCoordinateObjectHistry.shape.mouseUpPoint.y);
                        this.context.lineWidth = this.lineWidth
                        this.context.strokeStyle = getUpdatedColor();
                        this.context.stroke();
        
                    }
                    if(this.shapeDrawTriangleFlag){
                        this.globalCoordinateObjectHistry.shape.mouseUpPoint = this.getMousePos(event);
                        // console.log(this.globalCoordinateObjectHistry.shape.mouseUpPoint)

                        // lets draw triangle
                        // find the vertices of equilateral triangle from center of the circle
                        let radius = Math.sqrt(Math.pow(this.globalCoordinateObjectHistry.shape.mouseUpPoint.x - this.globalCoordinateObjectHistry.shape.mouseDownPoint.x,2) + Math.pow(this.globalCoordinateObjectHistry.shape.mouseUpPoint.y - this.globalCoordinateObjectHistry.shape.mouseDownPoint.y,2));
                        let angle = Math.atan2(this.globalCoordinateObjectHistry.shape.mouseUpPoint.y - this.globalCoordinateObjectHistry.shape.mouseDownPoint.y, this.globalCoordinateObjectHistry.shape.mouseUpPoint.x - this.globalCoordinateObjectHistry.shape.mouseDownPoint.x);
                        // get three vertices of equilateral triangle from center of the circle
                        let x1 = this.globalCoordinateObjectHistry.shape.mouseDownPoint.x + radius * Math.cos(angle + Math.PI/3);
                        let y1 = this.globalCoordinateObjectHistry.shape.mouseDownPoint.y + radius * Math.sin(angle + Math.PI/3);
                        let x2 = this.globalCoordinateObjectHistry.shape.mouseDownPoint.x + radius * Math.cos(angle - Math.PI/3);
                        let y2 = this.globalCoordinateObjectHistry.shape.mouseDownPoint.y + radius * Math.sin(angle - Math.PI/3);
                        let x3 = this.globalCoordinateObjectHistry.shape.mouseDownPoint.x + radius * Math.cos(angle);
                        let y3 = this.globalCoordinateObjectHistry.shape.mouseDownPoint.y + radius * Math.sin(angle);

                        this.context.beginPath();
                        this.context.moveTo(x1,y1);
                        this.context.lineTo(x2,y2);
                        this.context.lineTo(x3,y3);
                        this.context.closePath();
                        this.context.fillStyle = getUpdatedColor();
                        this.context.fill();
                        this.context.lineWidth = this.lineWidth;
                        this.context.strokeStyle = getUpdatedColor();
                        this.context.stroke();
                        
                    }
                    if(this.shapeDrawRectangleFlag){
                        this.globalCoordinateObjectHistry.shape.mouseUpPoint = this.getMousePos(event);
                        // console.log(this.globalCoordinateObjectHistry.shape.mouseUpPoint)

                        // lets draw rectangle
                        let x = this.globalCoordinateObjectHistry.shape.mouseDownPoint.x;
                        let y = this.globalCoordinateObjectHistry.shape.mouseDownPoint.y;
                        let width = this.globalCoordinateObjectHistry.shape.mouseUpPoint.x - this.globalCoordinateObjectHistry.shape.mouseDownPoint.x;
                        let height = this.globalCoordinateObjectHistry.shape.mouseUpPoint.y - this.globalCoordinateObjectHistry.shape.mouseDownPoint.y;

                        this.context.beginPath();
                        this.context.rect(x,y,width,height);
                        this.context.fillStyle = getUpdatedColor();
                        this.context.fill();
                        this.context.lineWidth = this.lineWidth;
                        this.context.strokeStyle = getUpdatedColor();
                        this.context.stroke();
        
                    }
                    if(this.shapeDrawPolygonFlag){
                        this.globalCoordinateObjectHistry.shape.mouseUpPoint = this.getMousePos(event);
                        // console.log(this.globalCoordinateObjectHistry.shape.mouseUpPoint)

                        // lets draw polygon
                        let x = this.globalCoordinateObjectHistry.shape.mouseDownPoint.x;
                        let y = this.globalCoordinateObjectHistry.shape.mouseDownPoint.y;
                        let radius = Math.sqrt(Math.pow(this.globalCoordinateObjectHistry.shape.mouseUpPoint.x - this.globalCoordinateObjectHistry.shape.mouseDownPoint.x,2) + Math.pow(this.globalCoordinateObjectHistry.shape.mouseUpPoint.y - this.globalCoordinateObjectHistry.shape.mouseDownPoint.y,2));
                        let angle = Math.atan2(this.globalCoordinateObjectHistry.shape.mouseUpPoint.y - this.globalCoordinateObjectHistry.shape.mouseDownPoint.y, this.globalCoordinateObjectHistry.shape.mouseUpPoint.x - this.globalCoordinateObjectHistry.shape.mouseDownPoint.x);
                        let sides = 6; // gor hixagon
                        // draw a hexagon from center of the circle with radius
                        this.context.beginPath();
                        this.context.moveTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
                        for(let i=0;i<sides;i++){
                            let x1 = x + radius * Math.cos(angle + 2*Math.PI/sides * i);
                            let y1 = y + radius * Math.sin(angle + 2*Math.PI/sides * i);
                            this.context.lineTo(x1,y1);
                        }
                        this.context.fillStyle = getUpdatedColor();
                        this.context.fill();
                        this.context.lineWidth = this.lineWidth;
                        this.context.strokeStyle = getUpdatedColor();
                        this.context.stroke();
                        this.context.closePath();
                
        
        
                    }
                    if(this.ShapeDrawCircleFlag){
                        this.globalCoordinateObjectHistry.shape.mouseUpPoint = this.getMousePos(event);
                        // console.log(this.globalCoordinateObjectHistry.shape.mouseUpPoint)

                        // lets draw circle
                        let radius = Math.sqrt(Math.pow(this.globalCoordinateObjectHistry.shape.mouseUpPoint.x - this.globalCoordinateObjectHistry.shape.mouseDownPoint.x,2) + Math.pow(this.globalCoordinateObjectHistry.shape.mouseUpPoint.y - this.globalCoordinateObjectHistry.shape.mouseDownPoint.y,2));
                        let angle = Math.atan2(this.globalCoordinateObjectHistry.shape.mouseUpPoint.y - this.globalCoordinateObjectHistry.shape.mouseDownPoint.y, this.globalCoordinateObjectHistry.shape.mouseUpPoint.x - this.globalCoordinateObjectHistry.shape.mouseDownPoint.x);
                        let x = this.globalCoordinateObjectHistry.shape.mouseDownPoint.x + radius * Math.cos(angle);
                        let y = this.globalCoordinateObjectHistry.shape.mouseDownPoint.y + radius * Math.sin(angle);

                        this.context.beginPath();
                        this.context.arc(x,y,radius,0,2*Math.PI);
                        this.context.fillStyle = getUpdatedColor();
                        this.context.fill();
                        this.context.lineWidth = this.lineWidth;
                        this.context.strokeStyle = getUpdatedColor();
                        this.context.stroke();
                  
                    }
                }
            } catch (error) {
                console.log("Please work on layer");
            }

















            this.shapeDrawLineFlag = false;
            this.shapeDrawTriangleFlag = false;
            this.shapeDrawRectangleFlag = false;
            this.shapeDrawPolygonFlag = false;
            this.ShapeDrawCircleFlag = false;


          });


















        // for implementing text on the canvas
        this.canvas.addEventListener("mousedown",(event)=>{
            if(this.is_text_clicked){
                this.globalCoordinateObjectHistry.text.mouseDownPoint = this.getMousePos(event);
            }
        }, false);

        this.canvas.addEventListener("mousemove", (event)=>{
            if(this.is_text_clicked){
                this.globalCoordinateObjectHistry.text.mouseMovePoint.push(this.getMousePos(event));
            }
        }, false);

        this.canvas.addEventListener("mouseup", (event)=>{
            if(this.is_text_clicked){
                this.globalCoordinateObjectHistry.text.mouseUpPoint = this.getMousePos(event);
                this.is_text_clicked = false;
                this.context.font = `${this.fontSize}px ${this.fontFamily}`;
                this.is_texting = true
                let textConfig = getTextInformation();
                this.context.font = `${textConfig["fontsize"]}px ${textConfig["fontstyle"]}`;
                this.context.strokeStyle = getUpdatedColor();
                this.context.strokeText(textConfig["text"], this.globalCoordinateObjectHistry.text.mouseDownPoint.x, this.globalCoordinateObjectHistry.text.mouseDownPoint.y);
            }

            if(this.is_text_clicked && this.is_texting ){
                this.is_texting = false
            }
        },false);










        // implementing the drawing on canvas
        this.canvas.addEventListener("mousedown", (event)=>{
            if(this.is_drawing_clicked){
                this.globalCoordinateObjectHistry.draw.mouseDownPoint = this.getMousePos(event);
            }
            if(this.is_eraser_clicked){
                this.globalCoordinateObjectHistry.eraser.mouseUpPoint = this.getMousePos(event);
            }


            this.is_drawing = true;
            this.context.beginPath();
            this.context.moveTo(
                event.clientX - this.canvas.offsetLeft -this.myoffset, 
                event.clientY - this.canvas.offsetTop - this.myoffset
            );
            event.preventDefault();
        }, false);

        this.canvas.addEventListener("mousemove", (event)=>{

            let drawConfig = getDrawingInformation()
            let eraserConfig =getEraserInformation()
    
            if( this.is_drawing && this.is_drawing_clicked){
                this.globalCoordinateObjectHistry.draw.mouseMovePoint.push(this.getMousePos(event));
                this.context.lineTo(
                    event.clientX - this.canvas.offsetLeft - this.myoffset , 
                    event.clientY - this.canvas.offsetTop - this.myoffset
                );
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
                this.globalCoordinateObjectHistry.eraser.mouseMovePoint.push(this.getMousePos(event));
                this.context.lineTo(
                    event.clientX - this.canvas.offsetLeft -this.myoffset, 
                    event.clientY - this.canvas.offsetTop -this.myoffset
                );
                this.context.strokeStyle = "white";
                this.context.lineWidth = eraserConfig["size"]
                this.context.setLineDash([]);
                this.context.lineCap = "round";
                this.context.lineJoin = "round";
                this.context.stroke();
            }
    
        
        }, false);

        this.canvas.addEventListener("mouseup",  (event)=>{
            if(this.is_drawing_clicked){
                this.globalCoordinateObjectHistry.draw.mouseUpPoint = this.getMousePos(event);

            }
            if(this.is_eraser_clicked){
                this.globalCoordinateObjectHistry.eraser.mouseUpPoint = this.getMousePos(event);

            }

            if(this.is_drawing){
                this.context.stroke();
                this.context.closePath();
                this.is_drawing = false
            }
            event.preventDefault();

        },false);













    // implement the addition of image on canvas
        this.canvas.addEventListener("mousedown", (event)=>{
            if(this.is_Image__add__Clicked && !this.is_crop_clicked){
                this.globalCoordinateObjectHistry.image.mouseDownPoint = this.getMousePos(event);
            }
        }, false);

        this.canvas.addEventListener("mousemove", (event)=>{
            if(this.is_Image__add__Clicked && !this.is_crop_clicked){
                this.globalCoordinateObjectHistry.image.mouseMovePoint.push(this.getMousePos(event));
            }
        }, false);
        this.canvas.addEventListener("mouseup", (event)=>{
            if(this.is_Image__add__Clicked && !this.is_crop_clicked){
                this.globalCoordinateObjectHistry.image.mouseUpPoint = this.getMousePos(event);
                var formdata = document.getElementById("topbar__lower__images__image__input");
                let uplImg = formdata.files[0];
                console.log("image addition is done")
                const imageWidth = this.globalCoordinateObjectHistry.image.mouseUpPoint.x - this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
                const imageHeight = this.globalCoordinateObjectHistry.image.mouseUpPoint.y - this.globalCoordinateObjectHistry.image.mouseDownPoint.y;


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
                            this.context.drawImage(imgObj, this.globalCoordinateObjectHistry.image.mouseDownPoint.x, this.globalCoordinateObjectHistry.image.mouseDownPoint.y, imageWidth, imageHeight);
                        }
                        imgObj.src = data
                        this.is_Image__add__Clicked = false
                    })
            }

        },false);











    // to implement crop functionality
    this.canvas.addEventListener("mousedown", (event)=>{
        if(this.is_crop_clicked && !this.is_Image__add__Clicked){
            this.globalCoordinateObjectHistry.crop.mouseDownPoint = this.getMousePos(event);
        }
    }, false);

    this.canvas.addEventListener("mousemove", (event)=>{
        if(this.is_crop_clicked && !this.is_Image__add__Clicked){
            this.globalCoordinateObjectHistry.crop.mouseMovePoint.push(this.getMousePos(event));
        }
    }, false);

    this.canvas.addEventListener("mouseup", (event)=>{
            if(this.is_crop_clicked && !this.is_Image__add__Clicked){
                this.globalCoordinateObjectHistry.crop.mouseUpPoint = this.getMousePos(event);
                // check the click point is in the image from the coordinates we have stored
                if(this.globalCoordinateObjectHistry.crop.mouseDownPoint.x >= this.globalCoordinateObjectHistry.image.mouseDownPoint.x &&
                    this.globalCoordinateObjectHistry.crop.mouseUpPoint.x <= this.globalCoordinateObjectHistry.image.mouseUpPoint.x && 
                    this.globalCoordinateObjectHistry.crop.mouseDownPoint.y >= this.globalCoordinateObjectHistry.image.mouseDownPoint.y &&
                    this.globalCoordinateObjectHistry.crop.mouseUpPoint.y <= this.globalCoordinateObjectHistry.image.mouseUpPoint.y         
                ){
                    // this means image is illigible to crop
                    console.log("image is illigible to crop")
                    // erase the image from the canvas
                    this.context.clearRect(this.globalCoordinateObjectHistry.image.mouseDownPoint.x, this.globalCoordinateObjectHistry.image.mouseDownPoint.y, this.globalCoordinateObjectHistry.image.mouseUpPoint.x - this.globalCoordinateObjectHistry.image.mouseDownPoint.x, this.globalCoordinateObjectHistry.image.mouseUpPoint.y - this.globalCoordinateObjectHistry.image.mouseDownPoint.y);
        
                    var formdata = document.getElementById("topbar__lower__images__image__input");
                    let uplCropedImage = formdata.files[0];
                    //check for file type
    
        
                    if (uplCropedImage.type.substr(0,5) !== "image"){
                        console.error("Only images");
                        return;
                    }
                        //convert uploaded image to base 64 and append it to Div
                    this.getBase64(uplCropedImage).then(
                        data => {
                            console.log(data);
                            let imgObj = new Image()
                            imgObj.onload = () => {
                                const sx = this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
                                const sy = this.globalCoordinateObjectHistry.image.mouseDownPoint.y;
                                const sWidth = this.globalCoordinateObjectHistry.image.mouseUpPoint.x - this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
                                const sHeight = this.globalCoordinateObjectHistry.image.mouseUpPoint.y - this.globalCoordinateObjectHistry.image.mouseDownPoint.y;
                                const dx = this.globalCoordinateObjectHistry.crop.mouseDownPoint.x;
                                const dy = this.globalCoordinateObjectHistry.crop.mouseDownPoint.y;
                                const dWidth = this.globalCoordinateObjectHistry.crop.mouseUpPoint.x - this.globalCoordinateObjectHistry.crop.mouseDownPoint.x;
                                const dHeight = this.globalCoordinateObjectHistry.crop.mouseUpPoint.y - this.globalCoordinateObjectHistry.crop.mouseDownPoint.y;
                                // crop the image and draw it on the canvas
                                this.context.drawImage(imgObj, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                                console.log(`sx: ${sx}, sy: ${sy}, sWidth: ${sWidth}, sHeight: ${sHeight}, dx: ${dx}, dy: ${dy}, dWidth: ${dWidth}, dHeight: ${dHeight}`)
                            }
                            imgObj.src = data
                            this.is_crop_clicked = false
                            console.log("image get cropped")
                    })
                }else{
                    // not illigible to crop
                    console.log("image is not illigible to crop")
                }
            }else{
    
            }
    
    },false);
















// for move (image) clicked
this.canvas.addEventListener("mousedown", (event)=>{
    if(this.is_move_clicked){
        this.globalCoordinateObjectHistry.move.mouseDownPoint = this.getMousePos(event);
    }
}, false);
this.canvas.addEventListener("mousemove", (event)=>{
    if(this.is_move_clicked){
        this.globalCoordinateObjectHistry.move.mouseMovePoint.push(this.getMousePos(event));
    }
}, false);
this.canvas.addEventListener("mouseup", (event)=>{
    if(this.is_move_clicked){
        this.globalCoordinateObjectHistry.move.mouseUpPoint = this.getMousePos(event);



        const width = this.globalCoordinateObjectHistry.image.mouseUpPoint.x - this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
        const height = this.globalCoordinateObjectHistry.image.mouseUpPoint.y - this.globalCoordinateObjectHistry.image.mouseDownPoint.y;

        // check the click point is in the image from the coordinates we have stored
        if(
            this.globalCoordinateObjectHistry.move.mouseDownPoint.x >= this.globalCoordinateObjectHistry.image.mouseDownPoint.x &&
            this.globalCoordinateObjectHistry.move.mouseDownPoint.y >= this.globalCoordinateObjectHistry.image.mouseDownPoint.y &&
            this.globalCoordinateObjectHistry.move.mouseDownPoint.x <= (this.globalCoordinateObjectHistry.image.mouseDownPoint.x + width) &&
            this.globalCoordinateObjectHistry.move.mouseDownPoint.y <= (this.globalCoordinateObjectHistry.image.mouseDownPoint.y + height)
        ){
            // this means image is illigible to move
            console.log("image is illigible to move")
            // erase the image from the canvas
            this.context.clearRect(this.globalCoordinateObjectHistry.image.mouseDownPoint.x, this.globalCoordinateObjectHistry.image.mouseDownPoint.y, this.globalCoordinateObjectHistry.image.mouseUpPoint.x - this.globalCoordinateObjectHistry.image.mouseDownPoint.x, this.globalCoordinateObjectHistry.image.mouseUpPoint.y - this.globalCoordinateObjectHistry.image.mouseDownPoint.y);

            var formdata = document.getElementById("topbar__lower__images__image__input");
            let uplmoveedImage = formdata.files[0];
            //check for file type


            if (uplmoveedImage.type.substr(0,5) !== "image"){
                console.error("Only images");
                return;
            }
                //convert uploaded image to base 64 and append it to Div
            this.getBase64(uplmoveedImage).then(
                data => {
                    console.log(data);
                    let imgObj = new Image()
                    imgObj.onload = () => {
                        const dx = this.globalCoordinateObjectHistry.move.mouseUpPoint.x;
                        const dy = this.globalCoordinateObjectHistry.move.mouseUpPoint.y;
                        // move the image and draw it on the canvas
                        this.context.drawImage(imgObj, dx, dy, width, height);
                        console.log(`dx: ${dx}, dy: ${dy}, dWidth: ${width}, dHeight: ${height}`)
                        
                    }
                    imgObj.src = data
                    this.is_move_clicked = false
                    console.log("image moveped")
                })
            // update the coordinate objects
                this.globalCoordinateObjectHistry.image.mouseDownPoint = this.globalCoordinateObjectHistry.move.mouseDownPoint;
                this.globalCoordinateObjectHistry.image.mouseMovePoint = this.globalCoordinateObjectHistry.move.mouseMovePoint;
                this.globalCoordinateObjectHistry.image.mouseUpPoint = this.globalCoordinateObjectHistry.move.mouseUpPoint;

            
            }else{
                // not illigible to move
                console.log("image is not selected")
            }












    }
}, false);
























// for scale (image) clicked
this.canvas.addEventListener("mousedown", (event)=>{
    if(this.is_scale_clicked){
        this.globalCoordinateObjectHistry.scale.mouseDownPoint = this.getMousePos(event);
    }
}, false);
this.canvas.addEventListener("mousemove", (event)=>{
    if(this.is_scale_clicked){
        this.globalCoordinateObjectHistry.scale.mouseMovePoint.push(this.getMousePos(event));
    }
}, false);
this.canvas.addEventListener("mouseup", (event)=>{
    if(this.is_scale_clicked){
        this.globalCoordinateObjectHistry.scale.mouseUpPoint = this.getMousePos(event);



        const width = this.globalCoordinateObjectHistry.image.mouseUpPoint.x - this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
        const height = this.globalCoordinateObjectHistry.image.mouseUpPoint.y - this.globalCoordinateObjectHistry.image.mouseDownPoint.y;

        // check the click point is in the image from the coordinates we have stored
        if(
            this.globalCoordinateObjectHistry.scale.mouseDownPoint.x >= this.globalCoordinateObjectHistry.image.mouseDownPoint.x &&
            this.globalCoordinateObjectHistry.scale.mouseDownPoint.y >= this.globalCoordinateObjectHistry.image.mouseDownPoint.y &&
            this.globalCoordinateObjectHistry.scale.mouseDownPoint.x <= (this.globalCoordinateObjectHistry.image.mouseDownPoint.x + width) &&
            this.globalCoordinateObjectHistry.scale.mouseDownPoint.y <= (this.globalCoordinateObjectHistry.image.mouseDownPoint.y + height)
        ){
            // this means image is illigible to scale
            console.log("image is illigible to scale")
            // erase the image from the canvas
            this.context.clearRect(this.globalCoordinateObjectHistry.image.mouseDownPoint.x, this.globalCoordinateObjectHistry.image.mouseDownPoint.y, this.globalCoordinateObjectHistry.image.mouseUpPoint.x - this.globalCoordinateObjectHistry.image.mouseDownPoint.x, this.globalCoordinateObjectHistry.image.mouseUpPoint.y - this.globalCoordinateObjectHistry.image.mouseDownPoint.y);

            var formdata = document.getElementById("topbar__lower__images__image__input");
            let uplscaleImage = formdata.files[0];
            //check for file type


            if (uplscaleImage.type.substr(0,5) !== "image"){
                console.error("Only images");
                return;
            }
                //convert uploaded image to base 64 and append it to Div
            this.getBase64(uplscaleImage).then(
                data => {
                    console.log(data);
                    let imgObj = new Image()
                    imgObj.onload = () => {
                        const dx = this.globalCoordinateObjectHistry.scale.mouseDownPoint.x;
                        const dy = this.globalCoordinateObjectHistry.scale.mouseDownPoint.y;
                        const dWidth = this.globalCoordinateObjectHistry.scale.mouseUpPoint.x - this.globalCoordinateObjectHistry.scale.mouseDownPoint.x;
                        const dHeight = this.globalCoordinateObjectHistry.scale.mouseUpPoint.y - this.globalCoordinateObjectHistry.scale.mouseDownPoint.y;
                        // scale the image and draw it on the canvas
                        this.context.drawImage(imgObj, dx, dy, dWidth, dHeight);
                        console.log(`dx: ${dx}, dy: ${dy}, dWidth: ${dWidth}, dHeight: ${dHeight}`)
                    }
                    imgObj.src = data
                    this.is_scale_clicked = false
                    console.log("image scaled")
                })
            // update the coordinate objects
            this.globalCoordinateObjectHistry.image.mouseDownPoint = this.globalCoordinateObjectHistry.scale.mouseDownPoint;
            this.globalCoordinateObjectHistry.image.mouseMovePoint = this.globalCoordinateObjectHistry.scale.mouseMovePoint;
            this.globalCoordinateObjectHistry.image.mouseUpPoint = this.globalCoordinateObjectHistry.scale.mouseUpPoint;

            }else{
                // not illigible to move
                console.log("image is not selected")
            }












    }
}, false);


















// for rotate (image) clicked
this.canvas.addEventListener("mousedown", (event)=>{
    if(this.is_rotate_clicked){
        this.globalCoordinateObjectHistry.rotate.mouseDownPoint = this.getMousePos(event);
    }
}, false);
this.canvas.addEventListener("mousemove", (event)=>{
    if(this.is_rotate_clicked){
        this.globalCoordinateObjectHistry.rotate.mouseMovePoint.push(this.getMousePos(event));
    }
}, false);
this.canvas.addEventListener("mouseup", (event)=>{
    if(this.is_rotate_clicked){
        this.globalCoordinateObjectHistry.rotate.mouseUpPoint = this.getMousePos(event);



        const width = this.globalCoordinateObjectHistry.image.mouseUpPoint.x - this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
        const height = this.globalCoordinateObjectHistry.image.mouseUpPoint.y - this.globalCoordinateObjectHistry.image.mouseDownPoint.y;
        const angle_of_rotation = getRotationInformation()["angle"];
        console.log(angle_of_rotation)

        // check the click point is in the image from the coordinates we have stored
        if(
            this.globalCoordinateObjectHistry.rotate.mouseDownPoint.x >= this.globalCoordinateObjectHistry.image.mouseDownPoint.x &&
            this.globalCoordinateObjectHistry.rotate.mouseDownPoint.y >= this.globalCoordinateObjectHistry.image.mouseDownPoint.y &&
            this.globalCoordinateObjectHistry.rotate.mouseDownPoint.x <= (this.globalCoordinateObjectHistry.image.mouseDownPoint.x + width) &&
            this.globalCoordinateObjectHistry.rotate.mouseDownPoint.y <= (this.globalCoordinateObjectHistry.image.mouseDownPoint.y + height)
        ){
            // this means image is illigible to rotate
            console.log("image is illigible to rotate")
            // erase the image from the canvas
            this.context.clearRect(this.globalCoordinateObjectHistry.image.mouseDownPoint.x, this.globalCoordinateObjectHistry.image.mouseDownPoint.y, this.globalCoordinateObjectHistry.image.mouseUpPoint.x - this.globalCoordinateObjectHistry.image.mouseDownPoint.x, this.globalCoordinateObjectHistry.image.mouseUpPoint.y - this.globalCoordinateObjectHistry.image.mouseDownPoint.y);

            var formdata = document.getElementById("topbar__lower__images__image__input");
            let uplrotateImage = formdata.files[0];
            //check for file type


            if (uplrotateImage.type.substr(0,5) !== "image"){
                console.error("Only images");
                return;
            }
                //convert uploaded image to base 64 and append it to Div
            this.getBase64(uplrotateImage).then(
                data => {
                    console.log(data);
                    let imgObj = new Image()
                    imgObj.onload = () => {
                        const dx = this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
                        const dy = this.globalCoordinateObjectHistry.image.mouseDownPoint.y;
                        // scale the image and draw it on the canvas
                        this.context.save();
                        this.context.translate(dx+width/2, dy+height/2);
                        this.context.rotate(angle_of_rotation*Math.PI/180.0);
                        this.context.translate(-dx-width/2, -dy-height/2);
                        this.context.drawImage(imgObj, dx, dy, width, height);
                        this.context.restore();
                    }
                    imgObj.src = data
                    this.is_rotate_clicked = false
                    console.log("image ratated")
                })
            // update the coordinate objects
            this.globalCoordinateObjectHistry.image.mouseDownPoint = this.globalCoordinateObjectHistry.rotate.mouseDownPoint;
            this.globalCoordinateObjectHistry.image.mouseMovePoint = this.globalCoordinateObjectHistry.rotate.mouseMovePoint;
            this.globalCoordinateObjectHistry.image.mouseUpPoint = this.globalCoordinateObjectHistry.rotate.mouseUpPoint;

            }else{
                // not illigible to move
                console.log("image is not selected")
            }












    }
}, false);















































   
        this.addImage.addEventListener("click", ()=>{
            let selectedLayer = document.getElementsByClassName("layer__active")[0];
            try {
                let selectedLayerIndex = selectedLayer.getAttribute("lindex");
                if( selectedLayerIndex == this.canvasIndex){
                    this.is_Image__add__Clicked = true;
                }
            } catch (error) {
                console.log("Please work on layer");
            }
        })












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
                        this.is_scale_clicked = false;
                        this.is_move_clicked = false;
                        this.is_rotate_clicked = false;
                        this.is_text_clicked = false;
                        this.is_crop_clicked = false;
                        break;
                    case "1":
                        this.is_drawing_clicked = false;
                        this.is_eraser_clicked = true;
                        this.is_scale_clicked = false;
                        this.is_move_clicked = false;
                        this.is_rotate_clicked = false;
                        this.is_text_clicked = false;
                        this.is_crop_clicked = false;
                        break;
                    case "2":
                        this.is_drawing_clicked = false;
                        this.is_eraser_clicked = false;
                        this.is_scale_clicked = true;
                        this.is_move_clicked = false;
                        this.is_rotate_clicked = false;
                        this.is_text_clicked = false;
                        this.is_crop_clicked = false;
                        break;
                    case "3":
                        this.is_drawing_clicked = false;
                        this.is_eraser_clicked = false;
                        this.is_scale_clicked = false;
                        this.is_move_clicked = true;
                        this.is_rotate_clicked = false;
                        this.is_text_clicked = false;
                        this.is_crop_clicked = false;
                        break;
                    case "4":
                        this.is_drawing_clicked = false;
                        this.is_eraser_clicked = false;
                        this.is_scale_clicked = false;
                        this.is_move_clicked = false;
                        this.is_rotate_clicked = true;
                        this.is_text_clicked = false;
                        this.is_crop_clicked = false;
                        break;
                    case "5":
                        this.is_eraser_clicked = false;
                        this.is_drawing_clicked = false;
                        this.is_scale_clicked = false;
                        this.is_move_clicked = false;
                        this.is_rotate_clicked = false;
                        this.is_text_clicked = true;
                        this.is_crop_clicked = false;
                        break;
                    
                    case "6":
                        this.is_drawing_clicked = false;
                        this.is_eraser_clicked = false;
                        this.is_scale_clicked = false;
                        this.is_move_clicked = false;
                        this.is_rotate_clicked = false;
                        this.is_text_clicked = false;
                        this.is_crop_clicked = true;
                        break;
                    
                    default:
                        this.is_drawing_clicked = false;
                        this.is_eraser_clicked = false;
                        this.is_scale_clicked = false;
                        this.is_move_clicked = false;
                        this.is_rotate_clicked = false;
                        this.is_text_clicked = false;
                        this.is_crop_clicked = false;
                                            
            }
            }       
        };

    }
    

    




}

