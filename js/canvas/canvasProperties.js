class MyCanvas {
  constructor(index) {
    this.globalCoordinateObjectHistry = {
      shape: {
        mouseDownPoint: {
          x: 0,
          y: 0,
        },
        mouseMovePoint: [],
        mouseUpPoint: {
          x: 0,
          y: 0,
        },
      },
      text: {
        mouseDownPoint: {
          x: 0,
          y: 0,
        },
        mouseMovePoint: [],
        mouseUpPoint: {
          x: 0,
          y: 0,
        },
      },
      eraser: {
        mouseDownPoint: {
          x: 0,
          y: 0,
        },
        mouseMovePoint: [],
        mouseUpPoint: {
          x: 0,
          y: 0,
        },
      },
      draw: {
        mouseDownPoint: {
          x: 0,
          y: 0,
        },
        mouseMovePoint: [],
        mouseUpPoint: {
          x: 0,
          y: 0,
        },
      },
      crop: {
        mouseDownPoint: {
          x: 0,
          y: 0,
        },
        mouseMovePoint: [],
        mouseUpPoint: {
          x: 0,
          y: 0,
        },
      },
      move: {
        mouseDownPoint: {
          x: 0,
          y: 0,
        },
        mouseMovePoint: [],
        mouseUpPoint: {
          x: 0,
          y: 0,
        },
      },
      rotate: {
        mouseDownPoint: {
          x: 0,
          y: 0,
        },
        mouseMovePoint: [],
        mouseUpPoint: {
          x: 0,
          y: 0,
        },
      },
      scale: {
        mouseDownPoint: {
          x: 0,
          y: 0,
        },
        mouseMovePoint: [],
        mouseUpPoint: {
          x: 0,
          y: 0,
        },
      },
      image: {
        mouseDownPoint: {
          x: 0,
          y: 0,
        },
        mouseMovePoint: [],
        mouseUpPoint: {
          x: 0,
          y: 0,
        },
      },
    };

    this.canvasIndex = index || 0;
    this.canvasOffset = 4;
    this.lineWidth = 10;
    this.draw__config__undo = document.getElementById("draw__config__undo");
    this.draw__config__redo = document.getElementById("draw__config__redo");
    this.is__this__canvas__is__blank = true;
    this.canvas = document.createElement("canvas");
    this.canvas.style.cursor = "crosshair";
    this.myCanvasWrapper = document.getElementById("myCanvasWrapper");
    this.myCanvasWrapper.style.position = "relative";
    this.topbar__lower__shapes__list__option = document.getElementById(
      "topbar__lower__shapes__list__option"
    );
    this.myCanvasWrapper.appendChild(this.canvas);
    this.canvas.height = this.myCanvasWrapper.offsetHeight - this.canvasOffset;
    this.canvas.width = this.myCanvasWrapper.offsetWidth - this.canvasOffset;
    this.canvas.classList.add("eachCanvasItem");
    this.canvas.setAttribute("cindex", this.canvasIndex);
    this.canvas.style.background = `white`;
    this.canvas.style.position = "absolute";
    this.context = this.canvas.getContext("2d");
    this.addImage = document.getElementById(
      "topbar__lower__images__add__image"
    );
    this.uploadImageInputForm = document.getElementById(
      "topbar__lower__images__image__input"
    );
    this.uploadImageInputForm.addEventListener("change", (e) => {
      this.uploadImageOnTheCanvas();
    });
    this.myoffsetLeft = 70;
    this.myoffsetTop = 54;
    this.is_Image__add__Clicked = false;
    this.downloadHandler = document.getElementById(
      "topbar__lower__edit__Download"
    );
    this.toolIcons = document.getElementsByClassName("myImageIcon");
    // get the filter on the top bar
    this.filter__config = document.getElementsByClassName("filter__config")[0];
    this.filter__config__brightness = document.getElementById(
      "filter__config__brightness"
    );
    this.filter__config__contrast = document.getElementById(
      "filter__config__contrast"
    );
    this.filter__config__grayscale = document.getElementById(
      "filter__config__grayscale"
    );
    this.filter__config__saturation = document.getElementById(
      "filter__config__saturation"
    );
    this.filter__config__sepia = document.getElementById(
      "filter__config__sepia"
    );
    this.filter__config__hue = document.getElementById("filter__config__hue");
    // setting default value of the filter config
    this.filter__config.style.display = "none";
    this.filter__config__brightness.style.display = "none";
    this.filter__config__contrast.style.display = "none";
    this.filter__config__grayscale.style.display = "none";
    this.filter__config__saturation.style.display = "none";
    this.filter__config__sepia.style.display = "none";
    this.filter__config__hue.style.display = "none";

    // get the filter on the lower bar
    this.topbar__lower__brightness = document.getElementById(
      "topbar__lower__brightness"
    );
    this.topbar__lower__contrast = document.getElementById(
      "topbar__lower__contrast"
    );
    this.topbar__lower__grayscale = document.getElementById(
      "topbar__lower__grayscale"
    );
    this.topbar__lower__saturation = document.getElementById(
      "topbar__lower__saturation"
    );
    this.topbar__lower__sepia = document.getElementById("topbar__lower__sepia");
    this.topbar__lower__hue = document.getElementById("topbar__lower__hue");

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

    // lets get reference to the difference configs handlers
    this.draw__config = document.getElementsByClassName("draw__config")[0];
    this.erase__config = document.getElementsByClassName("erase__config")[0];
    this.text__config = document.getElementsByClassName("text__config")[0];
    this.rotate__config = document.getElementsByClassName("rotate__config")[0];
    this.filter__config = document.getElementsByClassName("filter__config")[0];

    // implementing undo operation on drawing
    this.undoFlagIndex = -1;
    this.undoStack = [];

    window.onresize = () => {
      this.canvas.height =
        this.myCanvasWrapper.offsetHeight - this.canvasOffset;
      this.canvas.width = this.myCanvasWrapper.offsetWidth - this.canvasOffset;
    };
    this.checkForTheQuickIconClick();
    this.setOnClickListenerOnQuickIcon();

    // event detction to draw various shape
    this.canvas.addEventListener("mousedown", (event) => {
      if (this.shapeDrawLineFlag) {
        this.globalCoordinateObjectHistry.shape.mouseDownPoint =
          this.getMousePos(event);
      }
      if (this.shapeDrawTriangleFlag) {
        this.globalCoordinateObjectHistry.shape.mouseDownPoint =
          this.getMousePos(event);
      }
      if (this.shapeDrawRectangleFlag) {
        this.globalCoordinateObjectHistry.shape.mouseDownPoint =
          this.getMousePos(event);
      }
      if (this.shapeDrawPolygonFlag) {
        this.globalCoordinateObjectHistry.shape.mouseDownPoint =
          this.getMousePos(event);
      }
      if (this.ShapeDrawCircleFlag) {
        this.globalCoordinateObjectHistry.shape.mouseDownPoint =
          this.getMousePos(event);
      }
    });
    this.canvas.addEventListener("mousemove", (event) => {
      if (this.shapeDrawLineFlag) {
        this.globalCoordinateObjectHistry.shape.mouseMovePoint.push(
          this.getMousePos(event)
        );
      }
      if (this.shapeDrawTriangleFlag) {
        this.globalCoordinateObjectHistry.shape.mouseMovePoint.push(
          this.getMousePos(event)
        );
      }
      if (this.shapeDrawRectangleFlag) {
        this.globalCoordinateObjectHistry.shape.mouseMovePoint.push(
          this.getMousePos(event)
        );
      }
      if (this.shapeDrawPolygonFlag) {
        this.globalCoordinateObjectHistry.shape.mouseMovePoint.push(
          this.getMousePos(event)
        );
      }
      if (this.ShapeDrawCircleFlag) {
        this.globalCoordinateObjectHistry.shape.mouseMovePoint.push(
          this.getMousePos(event)
        );
      }
    });
    this.canvas.addEventListener("mouseup", (event) => {
      // now start drawing the shape
      let selectedLayer = document.getElementsByClassName("layer__active")[0];
      try {
        let selectedLayerIndex = selectedLayer.getAttribute("lindex");
        if (selectedLayerIndex == this.canvasIndex) {
          if (this.shapeDrawLineFlag) {
            this.globalCoordinateObjectHistry.shape.mouseUpPoint =
              this.getMousePos(event);
            // lets draw line
            this.context.beginPath();
            this.context.moveTo(
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.x,
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.y
            );
            this.context.lineTo(
              this.globalCoordinateObjectHistry.shape.mouseUpPoint.x,
              this.globalCoordinateObjectHistry.shape.mouseUpPoint.y
            );
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = getUpdatedColor();
            this.context.stroke();
            this.is__this__canvas__is__blank = false;
          }
          if (this.shapeDrawTriangleFlag) {
            this.globalCoordinateObjectHistry.shape.mouseUpPoint =
              this.getMousePos(event);
            // lets draw triangle
            // find the vertices of equilateral triangle from center of the circle
            let radius = Math.sqrt(
              Math.pow(
                this.globalCoordinateObjectHistry.shape.mouseUpPoint.x -
                  this.globalCoordinateObjectHistry.shape.mouseDownPoint.x,
                2
              ) +
                Math.pow(
                  this.globalCoordinateObjectHistry.shape.mouseUpPoint.y -
                    this.globalCoordinateObjectHistry.shape.mouseDownPoint.y,
                  2
                )
            );
            let angle = Math.atan2(
              this.globalCoordinateObjectHistry.shape.mouseUpPoint.y -
                this.globalCoordinateObjectHistry.shape.mouseDownPoint.y,
              this.globalCoordinateObjectHistry.shape.mouseUpPoint.x -
                this.globalCoordinateObjectHistry.shape.mouseDownPoint.x
            );
            // get three vertices of equilateral triangle from center of the circle
            let x1 =
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.x +
              radius * Math.cos(angle + Math.PI / 3);
            let y1 =
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.y +
              radius * Math.sin(angle + Math.PI / 3);
            let x2 =
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.x +
              radius * Math.cos(angle - Math.PI / 3);
            let y2 =
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.y +
              radius * Math.sin(angle - Math.PI / 3);
            let x3 =
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.x +
              radius * Math.cos(angle);
            let y3 =
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.y +
              radius * Math.sin(angle);

            this.context.beginPath();
            this.context.moveTo(x1, y1);
            this.context.lineTo(x2, y2);
            this.context.lineTo(x3, y3);
            this.context.closePath();
            this.context.fillStyle = getUpdatedColor();
            this.context.fill();
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = getUpdatedColor();
            this.context.stroke();
            this.is__this__canvas__is__blank = false;
          }
          if (this.shapeDrawRectangleFlag) {
            this.globalCoordinateObjectHistry.shape.mouseUpPoint =
              this.getMousePos(event);
            // lets draw rectangle
            let x = this.globalCoordinateObjectHistry.shape.mouseDownPoint.x;
            let y = this.globalCoordinateObjectHistry.shape.mouseDownPoint.y;
            let width =
              this.globalCoordinateObjectHistry.shape.mouseUpPoint.x -
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.x;
            let height =
              this.globalCoordinateObjectHistry.shape.mouseUpPoint.y -
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.y;

            this.context.beginPath();
            this.context.rect(x, y, width, height);
            this.context.fillStyle = getUpdatedColor();
            this.context.fill();
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = getUpdatedColor();
            this.context.stroke();
            this.is__this__canvas__is__blank = false;
          }
          if (this.shapeDrawPolygonFlag) {
            this.globalCoordinateObjectHistry.shape.mouseUpPoint =
              this.getMousePos(event);
            // lets draw polygon
            let x = this.globalCoordinateObjectHistry.shape.mouseDownPoint.x;
            let y = this.globalCoordinateObjectHistry.shape.mouseDownPoint.y;
            let radius = Math.sqrt(
              Math.pow(
                this.globalCoordinateObjectHistry.shape.mouseUpPoint.x -
                  this.globalCoordinateObjectHistry.shape.mouseDownPoint.x,
                2
              ) +
                Math.pow(
                  this.globalCoordinateObjectHistry.shape.mouseUpPoint.y -
                    this.globalCoordinateObjectHistry.shape.mouseDownPoint.y,
                  2
                )
            );
            let angle = Math.atan2(
              this.globalCoordinateObjectHistry.shape.mouseUpPoint.y -
                this.globalCoordinateObjectHistry.shape.mouseDownPoint.y,
              this.globalCoordinateObjectHistry.shape.mouseUpPoint.x -
                this.globalCoordinateObjectHistry.shape.mouseDownPoint.x
            );
            let sides = 6; // gor hixagon
            // draw a hexagon from center of the circle with radius
            this.context.beginPath();
            this.context.moveTo(
              x + radius * Math.cos(angle),
              y + radius * Math.sin(angle)
            );
            for (let i = 0; i < sides; i++) {
              let x1 =
                x + radius * Math.cos(angle + ((2 * Math.PI) / sides) * i);
              let y1 =
                y + radius * Math.sin(angle + ((2 * Math.PI) / sides) * i);
              this.context.lineTo(x1, y1);
            }
            this.context.fillStyle = getUpdatedColor();
            this.context.fill();
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = getUpdatedColor();
            this.context.stroke();
            this.context.closePath();

            this.is__this__canvas__is__blank = false;
          }
          if (this.ShapeDrawCircleFlag) {
            this.globalCoordinateObjectHistry.shape.mouseUpPoint =
              this.getMousePos(event);
            // lets draw circle
            let radius = Math.sqrt(
              Math.pow(
                this.globalCoordinateObjectHistry.shape.mouseUpPoint.x -
                  this.globalCoordinateObjectHistry.shape.mouseDownPoint.x,
                2
              ) +
                Math.pow(
                  this.globalCoordinateObjectHistry.shape.mouseUpPoint.y -
                    this.globalCoordinateObjectHistry.shape.mouseDownPoint.y,
                  2
                )
            );
            let angle = Math.atan2(
              this.globalCoordinateObjectHistry.shape.mouseUpPoint.y -
                this.globalCoordinateObjectHistry.shape.mouseDownPoint.y,
              this.globalCoordinateObjectHistry.shape.mouseUpPoint.x -
                this.globalCoordinateObjectHistry.shape.mouseDownPoint.x
            );
            let x =
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.x +
              radius * Math.cos(angle);
            let y =
              this.globalCoordinateObjectHistry.shape.mouseDownPoint.y +
              radius * Math.sin(angle);

            this.context.beginPath();
            this.context.arc(x, y, radius, 0, 2 * Math.PI);
            this.context.fillStyle = getUpdatedColor();
            this.context.fill();
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = getUpdatedColor();
            this.context.stroke();
            this.is__this__canvas__is__blank = false;
          }
        }
      } catch (error) {
        console.log("Please work on layer");
      }
    });

    // for implementing text on the canvas
    this.canvas.addEventListener(
      "mousedown",
      (event) => {
        if (this.is_text_clicked) {
          this.globalCoordinateObjectHistry.text.mouseDownPoint =
            this.getMousePos(event);
        }
      },
      false
    );

    this.canvas.addEventListener(
      "mousemove",
      (event) => {
        if (this.is_text_clicked) {
          this.globalCoordinateObjectHistry.text.mouseMovePoint.push(
            this.getMousePos(event)
          );
        }
      },
      false
    );

    this.canvas.addEventListener(
      "mouseup",
      (event) => {
        if (this.is_text_clicked) {
          if (this.is__this__canvas__is__blank) {
            this.globalCoordinateObjectHistry.text.mouseUpPoint =
              this.getMousePos(event);
            this.context.font = `${this.fontSize}px ${this.fontFamily}`;
            this.is_texting = true;
            let textConfig = getTextInformation();
            this.context.font = `${textConfig["fontstyle"]} ${textConfig["fontsize"]}px ${textConfig["fontfamily"]}`;
            this.context.strokeStyle = getUpdatedColor();
            this.context.strokeText(
              textConfig["text"],
              this.globalCoordinateObjectHistry.text.mouseDownPoint.x,
              this.globalCoordinateObjectHistry.text.mouseDownPoint.y
            );

            if (this.is_text_clicked && this.is_texting) {
              this.is_texting = false;
            }
          } else {
            console.log("Please work on new layer");
          }
        }
      },
      false
    );

    // implementing the drawing on canvas
    this.canvas.addEventListener(
      "mousedown",
      (event) => {
        if (this.is_drawing_clicked) {
          this.globalCoordinateObjectHistry.draw.mouseDownPoint =
            this.getMousePos(event);
        }
        if (this.is_eraser_clicked) {
          this.globalCoordinateObjectHistry.eraser.mouseUpPoint =
            this.getMousePos(event);
        }

        this.is_drawing = true;
        this.context.beginPath();
        this.context.moveTo(
          event.clientX - this.canvas.offsetLeft - this.myoffsetLeft,
          event.clientY - this.canvas.offsetTop - this.myoffsetTop
        );
        event.preventDefault();
      },
      false
    );

    this.canvas.addEventListener(
      "mousemove",
      (event) => {
        let drawConfig = getDrawingInformation();
        let eraserConfig = getEraserInformation();

        if (this.is_drawing && this.is_drawing_clicked) {
          this.globalCoordinateObjectHistry.draw.mouseMovePoint.push(
            this.getMousePos(event)
          );
          this.context.lineTo(
            event.clientX - this.canvas.offsetLeft - this.myoffsetLeft,
            event.clientY - this.canvas.offsetTop - this.myoffsetTop
          );
          this.context.strokeStyle = getUpdatedColor();
          this.context.lineWidth = drawConfig["pencilsize"];
          if (drawConfig["style"] == "doted") {
            this.context.setLineDash([
              drawConfig["pencilsize"] * 1.5,
              drawConfig["pencilsize"] * 1.2,
            ]);
          } else {
            this.context.setLineDash([]);
          }
          this.context.lineCap = "round";
          this.context.lineJoin = "round";
          this.context.stroke();
          this.is__this__canvas__is__blank = false;
        }

        // eraser fuctionality
        if (this.is_drawing && this.is_eraser_clicked) {
          this.globalCoordinateObjectHistry.eraser.mouseMovePoint.push(
            this.getMousePos(event)
          );
          this.context.lineTo(
            event.clientX - this.canvas.offsetLeft - this.myoffsetLeft,
            event.clientY - this.canvas.offsetTop - this.myoffsetTop
          );
          this.context.strokeStyle = "white";
          this.context.lineWidth = eraserConfig["size"];
          this.context.setLineDash([]);
          this.context.lineCap = "round";
          this.context.lineJoin = "round";
          this.context.stroke();
          this.is__this__canvas__is__blank = false;
        }
      },
      false
    );

    this.canvas.addEventListener(
      "mouseup",
      (event) => {
        if (this.is_drawing_clicked) {
          this.globalCoordinateObjectHistry.draw.mouseUpPoint =
            this.getMousePos(event);
          // implementing the undo functionality
          this.undoStack.push(
            this.context.getImageData(
              0,
              0,
              this.canvas.width,
              this.canvas.height
            )
          );
          this.undoFlagIndex++;
        }
        if (this.is_eraser_clicked) {
          this.globalCoordinateObjectHistry.eraser.mouseUpPoint =
            this.getMousePos(event);
        }

        if (this.is_drawing) {
          this.context.stroke();
          this.context.closePath();
          this.is_drawing = false;
        }
        event.preventDefault();
      },
      false
    );

    // implement the addition of image on canvas
    this.canvas.addEventListener(
      "mousedown",
      (event) => {
        if (this.is_Image__add__Clicked && !this.is_crop_clicked) {
          this.globalCoordinateObjectHistry.image.mouseDownPoint =
            this.getMousePos(event);
        }
      },
      false
    );

    this.canvas.addEventListener(
      "mousemove",
      (event) => {
        if (this.is_Image__add__Clicked && !this.is_crop_clicked) {
          this.globalCoordinateObjectHistry.image.mouseMovePoint.push(
            this.getMousePos(event)
          );
        }
      },
      false
    );
    this.canvas.addEventListener(
      "mouseup",
      (event) => {
        if (this.is_Image__add__Clicked && !this.is_crop_clicked) {
          this.globalCoordinateObjectHistry.image.mouseUpPoint =
            this.getMousePos(event);
          var formdata = document.getElementById(
            "topbar__lower__images__image__input"
          );
          let uplImg = formdata.files[0];
          const imageWidth =
            this.globalCoordinateObjectHistry.image.mouseUpPoint.x -
            this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
          const imageHeight =
            this.globalCoordinateObjectHistry.image.mouseUpPoint.y -
            this.globalCoordinateObjectHistry.image.mouseDownPoint.y;

          //check for file type
          if (uplImg.type.substr(0, 5) !== "image") {
            console.error("Only images");
            return;
          }
          //convert uploaded image to base 64 and append it to Div
          this.getBase64(uplImg).then((data) => {
            let imgObj = new Image();
            imgObj.onload = () => {
              this.context.drawImage(
                imgObj,
                this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
                this.globalCoordinateObjectHistry.image.mouseDownPoint.y,
                imageWidth,
                imageHeight
              );
            };
            imgObj.src = data;
            // put the filter on the image
            this.filtersActivationOnThatImage(
              imgObj,
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y,
              imageWidth,
              imageHeight
            );
          });
          this.is__this__canvas__is__blank = false;
        }
      },
      false
    );

    // to implement crop functionality
    this.canvas.addEventListener(
      "mousedown",
      (event) => {
        if (this.is_crop_clicked && !this.is_Image__add__Clicked) {
          this.globalCoordinateObjectHistry.crop.mouseDownPoint =
            this.getMousePos(event);
        }
      },
      false
    );

    this.canvas.addEventListener(
      "mousemove",
      (event) => {
        if (this.is_crop_clicked && !this.is_Image__add__Clicked) {
          this.globalCoordinateObjectHistry.crop.mouseMovePoint.push(
            this.getMousePos(event)
          );
        }
      },
      false
    );

    this.canvas.addEventListener(
      "mouseup",
      (event) => {
        if (this.is_crop_clicked && !this.is_Image__add__Clicked) {
          this.globalCoordinateObjectHistry.crop.mouseUpPoint =
            this.getMousePos(event);
          // check the click point is in the image from the coordinates we have stored
          if (
            this.globalCoordinateObjectHistry.crop.mouseDownPoint.x >=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x &&
            this.globalCoordinateObjectHistry.crop.mouseUpPoint.x <=
              this.globalCoordinateObjectHistry.image.mouseUpPoint.x &&
            this.globalCoordinateObjectHistry.crop.mouseDownPoint.y >=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y &&
            this.globalCoordinateObjectHistry.crop.mouseUpPoint.y <=
              this.globalCoordinateObjectHistry.image.mouseUpPoint.y
          ) {
            // this means image is illigible to crop
            let myImage = new Image();
            myImage.src = this.canvas.toDataURL();
            // erase the image from the canvas
            this.context.clearRect(
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y,
              this.globalCoordinateObjectHistry.image.mouseUpPoint.x -
                this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
              this.globalCoordinateObjectHistry.image.mouseUpPoint.y -
                this.globalCoordinateObjectHistry.image.mouseDownPoint.y
            );

            var formdata = document.getElementById(
              "topbar__lower__images__image__input"
            );
            let uplCropedImage = formdata.files[0];
            //check for file type

            if (uplCropedImage.type.substr(0, 5) !== "image") {
              console.error("Only images");
              return;
            }

            const sx = this.globalCoordinateObjectHistry.crop.mouseDownPoint.x;
            const sy = this.globalCoordinateObjectHistry.crop.mouseDownPoint.y;
            const sWidth =
              this.globalCoordinateObjectHistry.crop.mouseUpPoint.x -
              this.globalCoordinateObjectHistry.crop.mouseDownPoint.x;
            const sHeight =
              this.globalCoordinateObjectHistry.crop.mouseUpPoint.y -
              this.globalCoordinateObjectHistry.crop.mouseDownPoint.y;

            //convert uploaded image to base 64 and append it to Div
            this.getBase64(uplCropedImage).then((data) => {
              let imgObj = new Image();
              imgObj.src = data;
              imgObj.onload = () => {
                const dx =
                  this.globalCoordinateObjectHistry.crop.mouseDownPoint.x;
                const dy =
                  this.globalCoordinateObjectHistry.crop.mouseDownPoint.y;
                const dWidth =
                  this.globalCoordinateObjectHistry.crop.mouseUpPoint.x -
                  this.globalCoordinateObjectHistry.crop.mouseDownPoint.x;
                const dHeight =
                  this.globalCoordinateObjectHistry.crop.mouseUpPoint.y -
                  this.globalCoordinateObjectHistry.crop.mouseDownPoint.y;
                // crop the image and draw it on the canvas
                this.context.drawImage(
                  myImage,
                  sx,
                  sy,
                  sWidth,
                  sHeight,
                  dx,
                  dy,
                  dWidth,
                  dHeight
                );
              };
            });

            // update the coordinate objects
            this.globalCoordinateObjectHistry.image.mouseDownPoint =
              this.globalCoordinateObjectHistry.crop.mouseDownPoint;
            this.globalCoordinateObjectHistry.image.mouseUpPoint =
              this.globalCoordinateObjectHistry.crop.mouseUpPoint;
          } else {
            // not illigible to crop
            console.log("image is not illigible to crop");
          }
        } else {
        }
      },
      false
    );

    // for move (image) clicked
    this.canvas.addEventListener(
      "mousedown",
      (event) => {
        if (this.is_move_clicked) {
          this.globalCoordinateObjectHistry.move.mouseDownPoint =
            this.getMousePos(event);
        }
      },
      false
    );
    this.canvas.addEventListener(
      "mousemove",
      (event) => {
        if (this.is_move_clicked) {
          this.globalCoordinateObjectHistry.move.mouseMovePoint.push(
            this.getMousePos(event)
          );
        }
      },
      false
    );
    this.canvas.addEventListener(
      "mouseup",
      (event) => {
        if (this.is_move_clicked) {
          this.globalCoordinateObjectHistry.move.mouseUpPoint =
            this.getMousePos(event);

          const width =
            this.globalCoordinateObjectHistry.image.mouseUpPoint.x -
            this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
          const height =
            this.globalCoordinateObjectHistry.image.mouseUpPoint.y -
            this.globalCoordinateObjectHistry.image.mouseDownPoint.y;

          // check the click point is in the image from the coordinates we have stored
          if (
            this.globalCoordinateObjectHistry.move.mouseDownPoint.x >=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x &&
            this.globalCoordinateObjectHistry.move.mouseDownPoint.y >=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y &&
            this.globalCoordinateObjectHistry.move.mouseDownPoint.x <=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x +
                width &&
            this.globalCoordinateObjectHistry.move.mouseDownPoint.y <=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y + height
          ) {
            // erase the image from the canvas
            this.context.clearRect(
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y,
              this.globalCoordinateObjectHistry.image.mouseUpPoint.x -
                this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
              this.globalCoordinateObjectHistry.image.mouseUpPoint.y -
                this.globalCoordinateObjectHistry.image.mouseDownPoint.y
            );

            var formdata = document.getElementById(
              "topbar__lower__images__image__input"
            );
            let uplmoveedImage = formdata.files[0];
            //check for file type

            if (uplmoveedImage.type.substr(0, 5) !== "image") {
              console.error("Only images");
              return;
            }
            //convert uploaded image to base 64 and append it to Div
            this.getBase64(uplmoveedImage).then((data) => {
              let imgObj = new Image();
              imgObj.onload = () => {
                const dx =
                  this.globalCoordinateObjectHistry.move.mouseUpPoint.x;
                const dy =
                  this.globalCoordinateObjectHistry.move.mouseUpPoint.y;
                // move the image and draw it on the canvas
                this.context.drawImage(imgObj, dx, dy, width, height);
              };
              imgObj.src = data;
            });
            // update the coordinate objects
            this.globalCoordinateObjectHistry.image.mouseDownPoint =
              this.globalCoordinateObjectHistry.move.mouseUpPoint;
            this.globalCoordinateObjectHistry.image.mouseUpPoint.x =
              this.globalCoordinateObjectHistry.move.mouseUpPoint.x + width;
            this.globalCoordinateObjectHistry.image.mouseUpPoint.y =
              this.globalCoordinateObjectHistry.move.mouseUpPoint.y + height;
          } else {
            // not illigible to move
            console.log("image is not selected");
          }
        }
      },
      false
    );

    // for scale (image) clicked
    this.canvas.addEventListener(
      "mousedown",
      (event) => {
        if (this.is_scale_clicked) {
          this.globalCoordinateObjectHistry.scale.mouseDownPoint =
            this.getMousePos(event);
        }
      },
      false
    );
    this.canvas.addEventListener(
      "mousemove",
      (event) => {
        if (this.is_scale_clicked) {
          this.globalCoordinateObjectHistry.scale.mouseMovePoint.push(
            this.getMousePos(event)
          );
        }
      },
      false
    );
    this.canvas.addEventListener(
      "mouseup",
      (event) => {
        if (this.is_scale_clicked) {
          this.globalCoordinateObjectHistry.scale.mouseUpPoint =
            this.getMousePos(event);

          const width =
            this.globalCoordinateObjectHistry.image.mouseUpPoint.x -
            this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
          const height =
            this.globalCoordinateObjectHistry.image.mouseUpPoint.y -
            this.globalCoordinateObjectHistry.image.mouseDownPoint.y;

          // check the click point is in the image from the coordinates we have stored
          if (
            this.globalCoordinateObjectHistry.scale.mouseDownPoint.x >=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x &&
            this.globalCoordinateObjectHistry.scale.mouseDownPoint.y >=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y &&
            this.globalCoordinateObjectHistry.scale.mouseDownPoint.x <=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x +
                width &&
            this.globalCoordinateObjectHistry.scale.mouseDownPoint.y <=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y + height
          ) {
            // erase the image from the canvas
            this.context.clearRect(
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y,
              this.globalCoordinateObjectHistry.image.mouseUpPoint.x -
                this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
              this.globalCoordinateObjectHistry.image.mouseUpPoint.y -
                this.globalCoordinateObjectHistry.image.mouseDownPoint.y
            );

            var formdata = document.getElementById(
              "topbar__lower__images__image__input"
            );
            let uplscaleImage = formdata.files[0];
            //check for file type

            if (uplscaleImage.type.substr(0, 5) !== "image") {
              console.error("Only images");
              return;
            }
            //convert uploaded image to base 64 and append it to Div
            this.getBase64(uplscaleImage).then((data) => {
              let imgObj = new Image();
              imgObj.onload = () => {
                const dx =
                  this.globalCoordinateObjectHistry.scale.mouseDownPoint.x;
                const dy =
                  this.globalCoordinateObjectHistry.scale.mouseDownPoint.y;
                const dWidth =
                  this.globalCoordinateObjectHistry.scale.mouseUpPoint.x -
                  this.globalCoordinateObjectHistry.scale.mouseDownPoint.x;
                const dHeight =
                  this.globalCoordinateObjectHistry.scale.mouseUpPoint.y -
                  this.globalCoordinateObjectHistry.scale.mouseDownPoint.y;
                // scale the image and draw it on the canvas
                this.context.drawImage(imgObj, dx, dy, dWidth, dHeight);
              };
              imgObj.src = data;
            });
            // update the coordinate objects
            this.globalCoordinateObjectHistry.image.mouseDownPoint =
              this.globalCoordinateObjectHistry.scale.mouseDownPoint;
            this.globalCoordinateObjectHistry.image.mouseUpPoint =
              this.globalCoordinateObjectHistry.scale.mouseUpPoint;
          } else {
            // not illigible to move
            console.log("image is not selected");
          }
        }
      },
      false
    );

    // for rotate (image) clicked
    this.canvas.addEventListener(
      "mousedown",
      (event) => {
        if (this.is_rotate_clicked) {
          this.globalCoordinateObjectHistry.rotate.mouseDownPoint =
            this.getMousePos(event);
        }
      },
      false
    );
    this.canvas.addEventListener(
      "mousemove",
      (event) => {
        if (this.is_rotate_clicked) {
          this.globalCoordinateObjectHistry.rotate.mouseMovePoint.push(
            this.getMousePos(event)
          );
        }
      },
      false
    );
    this.canvas.addEventListener(
      "mouseup",
      (event) => {
        if (this.is_rotate_clicked) {
          this.globalCoordinateObjectHistry.rotate.mouseUpPoint =
            this.getMousePos(event);

          const width =
            this.globalCoordinateObjectHistry.image.mouseUpPoint.x -
            this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
          const height =
            this.globalCoordinateObjectHistry.image.mouseUpPoint.y -
            this.globalCoordinateObjectHistry.image.mouseDownPoint.y;
          const angle_of_rotation = getRotationInformation()["angle"];

          // check the click point is in the image from the coordinates we have stored
          if (
            this.globalCoordinateObjectHistry.rotate.mouseDownPoint.x >=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x &&
            this.globalCoordinateObjectHistry.rotate.mouseDownPoint.y >=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y &&
            this.globalCoordinateObjectHistry.rotate.mouseDownPoint.x <=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x +
                width &&
            this.globalCoordinateObjectHistry.rotate.mouseDownPoint.y <=
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y + height
          ) {
            // erase the image from the canvas
            this.context.clearRect(
              this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
              this.globalCoordinateObjectHistry.image.mouseDownPoint.y,
              this.globalCoordinateObjectHistry.image.mouseUpPoint.x -
                this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
              this.globalCoordinateObjectHistry.image.mouseUpPoint.y -
                this.globalCoordinateObjectHistry.image.mouseDownPoint.y
            );

            var formdata = document.getElementById(
              "topbar__lower__images__image__input"
            );
            let uplrotateImage = formdata.files[0];
            //check for file type

            if (uplrotateImage.type.substr(0, 5) !== "image") {
              console.error("Only images");
              return;
            }
            //convert uploaded image to base 64 and append it to Div
            this.getBase64(uplrotateImage).then((data) => {
              let imgObj = new Image();
              imgObj.onload = () => {
                const dx =
                  this.globalCoordinateObjectHistry.image.mouseDownPoint.x;
                const dy =
                  this.globalCoordinateObjectHistry.image.mouseDownPoint.y;
                // scale the image and draw it on the canvas
                this.context.save();
                this.context.translate(
                  this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
                  this.globalCoordinateObjectHistry.image.mouseDownPoint.y
                );
                this.context.rotate((angle_of_rotation * Math.PI) / 180.0);
                this.context.translate(
                  -this.globalCoordinateObjectHistry.image.mouseDownPoint.x,
                  -this.globalCoordinateObjectHistry.image.mouseDownPoint.y
                );
                this.context.drawImage(imgObj, dx, dy, width, height);
                this.context.restore();
              };
              imgObj.src = data;
            });
            // update the coordinate objects
            this.globalCoordinateObjectHistry.image.mouseDownPoint =
              this.globalCoordinateObjectHistry.rotate.mouseDownPoint;
            this.globalCoordinateObjectHistry.image.mouseUpPoint.x =
              this.globalCoordinateObjectHistry.rotate.mouseUpPoint.x + width;
            this.globalCoordinateObjectHistry.image.mouseUpPoint.y =
              this.globalCoordinateObjectHistry.rotate.mouseUpPoint.y + height;
          } else {
            // not illigible to move
            console.log("image is not selected");
          }
        }
      },
      false
    );

    this.addImage.addEventListener("click", () => {
      this.uploadImageOnTheCanvas();
    });

    this.downloadHandler.addEventListener("click", () => {
      let highligtedLayerItem =
        document.getElementsByClassName("layer__active")[0];
      let highligtedLayerItemIndex = highligtedLayerItem.getAttribute("lindex");
      if (this.canvasIndex == highligtedLayerItemIndex) {
        if (window.navigator.msSavedBlob) {
          window.navigator.msSavedBlob(
            this.canvas.msToBlob(),
            `canvas-image${this.getFiveDigitRandomNumber()}.png`
          );
        } else {
          let a = document.createElement("a");
          document.body.appendChild(a);
          a.href = this.canvas.toDataURL();
          a.download = `canvas-image${this.getFiveDigitRandomNumber()}.png`;
          a.click();
          document.body.removeChild(a);
        }
      }
    });
    this.draw__config__undo.addEventListener("click", () => {
      this.undoLastDrawing();
    });
    this.draw__config__redo.addEventListener("click", () => {
      this.redoLastDrawing();
    });

    this.topbar__lower__shapes__list__option.addEventListener(
      "change",
      (event) => {
        let shapeValueSelected =
          this.topbar__lower__shapes__list__option.options[
            this.topbar__lower__shapes__list__option.selectedIndex
          ].value;
        // disable all the quick selection option
        this.is_drawing = false;
        this.is_texting = false;
        this.is_drawing_clicked = false;
        this.is_eraser_clicked = false;
        this.is_scale_clicked = false;
        this.is_move_clicked = false;
        this.is_rotate_clicked = false;
        this.is_text_clicked = false;
        this.is_crop_clicked = false;

        this.draw__config.style.display = "none";
        this.erase__config.style.display = "none";
        this.text__config.style.display = "none";
        this.rotate__config.style.display = "none";
        this.filter__config.style.display = "none";

        switch (shapeValueSelected) {
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
            this.ShapeDrawCircleFlag = false;
        }
      }
    );
  }

  setOnClickListenerOnQuickIcon() {
    for (let i = 0; i < this.toolIcons.length; i++) {
      this.toolIcons[i].addEventListener("click", () => {
        this.toolIcons[i].classList.add("activeImageIcon");
        for (let j = 0; j < this.toolIcons.length; j++) {
          if (j == i) {
            quickIconState[j] = true;
            continue;
          }
          if (this.toolIcons[j].classList.contains("activeImageIcon")) {
            this.toolIcons[j].classList.remove("activeImageIcon");
            quickIconState[j] = false;
          }
        }
        updateVisibility();
        this.checkForTheQuickIconClick();
      });
    }
  }

  //Get Mouse Position
  getMousePos(evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  //convert image to base 64
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  clearCanvas() {
    this.context.fillStyle = "white";
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.undo_stack = [];
    this.undoFlagIndex = -1;
  }
  undoLastDrawing() {
    if (this.undoFlagIndex <= 0) {
      this.clearCanvas();
    } else {
      this.undoFlagIndex--;
      this.context.putImageData(this.undoStack[this.undoFlagIndex], 0, 0);
    }
  }
  // implement the redo functionality
  redoLastDrawing() {
    if (this.undoFlagIndex >= this.undoStack.length - 1) {
      return;
    }
    this.undoFlagIndex++;
    this.context.putImageData(this.undoStack[this.undoFlagIndex], 0, 0);
  }
  uploadImageOnTheCanvas() {
    let selectedLayer = document.getElementsByClassName("layer__active")[0];
    // make sure that all the quick tools are disabled
    this.is_drawing_clicked = false;
    this.is_eraser_clicked = false;
    this.is_scale_clicked = false;
    this.is_move_clicked = false;
    this.is_rotate_clicked = false;
    this.is_text_clicked = false;
    this.is_crop_clicked = false;
    // resetting the shape type
    this.shapeDrawLineFlag = false;
    this.shapeDrawTriangleFlag = false;
    this.shapeDrawRectangleFlag = false;
    this.shapeDrawPolygonFlag = false;
    this.ShapeDrawCircleFlag = false;

    this.draw__config.style.display = "none";
    this.erase__config.style.display = "none";
    this.text__config.style.display = "none";
    this.rotate__config.style.display = "none";
    this.filter__config.style.display = "none";

    try {
      let selectedLayerIndex = selectedLayer.getAttribute("lindex");
      this.is_move_clicked = false;
      if (selectedLayerIndex == this.canvasIndex) {
        this.is_Image__add__Clicked = true;
      }
    } catch (error) {
      console.log("Please work on layer");
    }
  }

  checkForTheQuickIconClick() {
    let selected = document.getElementsByClassName("layer__active")[0];
    for (let key in quickIconState) {
      if (quickIconState[key] && selected != undefined) {
        switch (key) {
          case "0":
            this.is_drawing_clicked = true;
            this.is_eraser_clicked = false;
            this.is_scale_clicked = false;
            this.is_move_clicked = false;
            this.is_rotate_clicked = false;
            this.is_text_clicked = false;
            this.is_crop_clicked = false;
            this.is_Image__add__Clicked = false;
            this.draw__config.style.display = "block";
            this.erase__config.style.display = "none";
            this.text__config.style.display = "none";
            this.rotate__config.style.display = "none";
            this.filter__config.style.display = "none";

            this.shapeDrawLineFlag = false;
            this.shapeDrawTriangleFlag = false;
            this.shapeDrawRectangleFlag = false;
            this.shapeDrawPolygonFlag = false;
            this.ShapeDrawCircleFlag = false;
            break;
          case "1":
            this.is_drawing_clicked = false;
            this.is_eraser_clicked = true;
            this.is_scale_clicked = false;
            this.is_move_clicked = false;
            this.is_rotate_clicked = false;
            this.is_text_clicked = false;
            this.is_crop_clicked = false;

            this.is_Image__add__Clicked = false;

            this.draw__config.style.display = "none";
            this.erase__config.style.display = "block";
            this.text__config.style.display = "none";
            this.rotate__config.style.display = "none";
            this.filter__config.style.display = "none";

            this.shapeDrawLineFlag = false;
            this.shapeDrawTriangleFlag = false;
            this.shapeDrawRectangleFlag = false;
            this.shapeDrawPolygonFlag = false;
            this.ShapeDrawCircleFlag = false;
            break;
          case "2":
            this.is_drawing_clicked = false;
            this.is_eraser_clicked = false;
            this.is_scale_clicked = true;
            this.is_move_clicked = false;
            this.is_rotate_clicked = false;
            this.is_text_clicked = false;
            this.is_crop_clicked = false;

            this.is_Image__add__Clicked = false;

            this.draw__config.style.display = "none";
            this.erase__config.style.display = "none";
            this.text__config.style.display = "none";
            this.rotate__config.style.display = "none";
            this.filter__config.style.display = "none";

            this.shapeDrawLineFlag = false;
            this.shapeDrawTriangleFlag = false;
            this.shapeDrawRectangleFlag = false;
            this.shapeDrawPolygonFlag = false;
            this.ShapeDrawCircleFlag = false;
            break;
          case "3":
            this.is_drawing_clicked = false;
            this.is_eraser_clicked = false;
            this.is_scale_clicked = false;
            this.is_move_clicked = true;
            this.is_rotate_clicked = false;
            this.is_text_clicked = false;
            this.is_crop_clicked = false;

            this.is_Image__add__Clicked = false;

            this.draw__config.style.display = "none";
            this.erase__config.style.display = "none";
            this.text__config.style.display = "none";
            this.rotate__config.style.display = "none";
            this.filter__config.style.display = "none";

            this.shapeDrawLineFlag = false;
            this.shapeDrawTriangleFlag = false;
            this.shapeDrawRectangleFlag = false;
            this.shapeDrawPolygonFlag = false;
            this.ShapeDrawCircleFlag = false;
            break;
          case "4":
            this.is_drawing_clicked = false;
            this.is_eraser_clicked = false;
            this.is_scale_clicked = false;
            this.is_move_clicked = false;
            this.is_rotate_clicked = true;
            this.is_text_clicked = false;
            this.is_crop_clicked = false;

            this.is_Image__add__Clicked = false;

            this.draw__config.style.display = "none";
            this.erase__config.style.display = "none";
            this.text__config.style.display = "none";
            this.rotate__config.style.display = "block";
            this.filter__config.style.display = "none";

            this.shapeDrawLineFlag = false;
            this.shapeDrawTriangleFlag = false;
            this.shapeDrawRectangleFlag = false;
            this.shapeDrawPolygonFlag = false;
            this.ShapeDrawCircleFlag = false;
            break;
          case "5":
            this.is_eraser_clicked = false;
            this.is_drawing_clicked = false;
            this.is_scale_clicked = false;
            this.is_move_clicked = false;
            this.is_rotate_clicked = false;
            this.is_text_clicked = true;
            this.is_crop_clicked = false;

            this.is_Image__add__Clicked = false;

            this.draw__config.style.display = "none";
            this.erase__config.style.display = "none";
            this.rotate__config.style.display = "none";
            this.filter__config.style.display = "none";
            this.text__config.style.display = "block";

            this.shapeDrawLineFlag = false;
            this.shapeDrawTriangleFlag = false;
            this.shapeDrawRectangleFlag = false;
            this.shapeDrawPolygonFlag = false;
            this.ShapeDrawCircleFlag = false;
            break;

          case "6":
            this.is_drawing_clicked = false;
            this.is_eraser_clicked = false;
            this.is_scale_clicked = false;
            this.is_move_clicked = false;
            this.is_rotate_clicked = false;
            this.is_text_clicked = false;
            this.is_crop_clicked = true;

            this.is_Image__add__Clicked = false;

            this.draw__config.style.display = "none";
            this.erase__config.style.display = "none";
            this.text__config.style.display = "none";
            this.rotate__config.style.display = "none";
            this.filter__config.style.display = "none";

            this.shapeDrawLineFlag = false;
            this.shapeDrawTriangleFlag = false;
            this.shapeDrawRectangleFlag = false;
            this.shapeDrawPolygonFlag = false;
            this.ShapeDrawCircleFlag = false;
            break;

          default:
            this.is_drawing_clicked = false;
            this.is_eraser_clicked = false;
            this.is_scale_clicked = false;
            this.is_move_clicked = false;
            this.is_rotate_clicked = false;
            this.is_text_clicked = false;
            this.is_crop_clicked = false;

            this.is_Image__add__Clicked = false;

            this.draw__config.style.display = "none";
            this.erase__config.style.display = "none";
            this.text__config.style.display = "none";
            this.rotate__config.style.display = "none";
            this.filter__config.style.display = "none";

            this.shapeDrawLineFlag = false;
            this.shapeDrawTriangleFlag = false;
            this.shapeDrawRectangleFlag = false;
            this.shapeDrawPolygonFlag = false;
            this.ShapeDrawCircleFlag = false;
        }
      }
    }
  }

  filtersActivationOnThatImage(image, x, y, width, height) {
    //   adding the event listener on the filter and reset button
    this.topbar__lower__brightness.addEventListener("click", () => {
      // perform the filter on the canvas
      this.context.clearRect(x, y, width, height);
      this.filter__config.style.display = "block";
      this.draw__config.style.display = "none";
      this.erase__config.style.display = "none";
      this.text__config.style.display = "none";
      this.rotate__config.style.display = "none";

      this.filter__config__brightness.style.display = "block";
      this.filter__config__contrast.style.display = "none";
      this.filter__config__grayscale.style.display = "none";
      this.filter__config__saturation.style.display = "none";
      this.filter__config__sepia.style.display = "none";
      this.filter__config__hue.style.display = "none";

      this.applyBrightNessFilter(image, x, y, width, height);

      this.context.drawImage(image, x, y, width, height);
    });
    this.topbar__lower__contrast.addEventListener("click", () => {
      // perform the filter on the canvas
      this.context.clearRect(x, y, width, height);
      this.filter__config.style.display = "block";
      this.draw__config.style.display = "none";
      this.erase__config.style.display = "none";
      this.text__config.style.display = "none";
      this.rotate__config.style.display = "none";

      this.filter__config__brightness.style.display = "none";
      this.filter__config__contrast.style.display = "block";
      this.filter__config__grayscale.style.display = "none";
      this.filter__config__saturation.style.display = "none";
      this.filter__config__sepia.style.display = "none";
      this.filter__config__hue.style.display = "none";
      this.applyContrastFilter(image, x, y, width, height);
      this.context.drawImage(image, x, y, width, height);
    });
    this.topbar__lower__grayscale.addEventListener("click", () => {
      // perform the filter on the canvas
      this.context.clearRect(x, y, width, height);
      this.filter__config.style.display = "block";
      this.draw__config.style.display = "none";
      this.erase__config.style.display = "none";
      this.text__config.style.display = "none";
      this.rotate__config.style.display = "none";
      this.filter__config__brightness.style.display = "none";
      this.filter__config__contrast.style.display = "none";
      this.filter__config__grayscale.style.display = "block";
      this.filter__config__saturation.style.display = "none";
      this.filter__config__sepia.style.display = "none";
      this.filter__config__hue.style.display = "none";
      this.applyGrayScaleFilter(image, x, y, width, height);

      this.context.drawImage(image, x, y, width, height);
    });
    this.topbar__lower__saturation.addEventListener("click", () => {
      // perform the filter on the canvas
      this.context.clearRect(x, y, width, height);
      this.filter__config.style.display = "block";
      this.draw__config.style.display = "none";
      this.erase__config.style.display = "none";
      this.text__config.style.display = "none";
      this.rotate__config.style.display = "none";
      this.filter__config__brightness.style.display = "none";
      this.filter__config__contrast.style.display = "none";
      this.filter__config__grayscale.style.display = "none";
      this.filter__config__saturation.style.display = "block";
      this.filter__config__sepia.style.display = "none";
      this.filter__config__hue.style.display = "none";
      this.applySaturationFilter(image, x, y, width, height);

      this.context.drawImage(image, x, y, width, height);
    });

    this.topbar__lower__sepia.addEventListener("click", () => {
      // perform the filter on the canvas
      this.context.clearRect(x, y, width, height);
      this.filter__config.style.display = "block";
      this.draw__config.style.display = "none";
      this.erase__config.style.display = "none";
      this.text__config.style.display = "none";
      this.rotate__config.style.display = "none";
      this.filter__config__brightness.style.display = "none";
      this.filter__config__contrast.style.display = "none";
      this.filter__config__grayscale.style.display = "none";
      this.filter__config__saturation.style.display = "none";
      this.filter__config__sepia.style.display = "block";
      this.filter__config__hue.style.display = "none";
      this.applySepiaFilter(image, x, y, width, height);

      this.context.drawImage(image, x, y, width, height);
    });
    this.topbar__lower__hue.addEventListener("click", () => {
      // perform the filter on the canvas
      this.context.clearRect(x, y, width, height);
      this.filter__config.style.display = "block";
      this.draw__config.style.display = "none";
      this.erase__config.style.display = "none";
      this.text__config.style.display = "none";
      this.rotate__config.style.display = "none";
      this.filter__config__brightness.style.display = "none";
      this.filter__config__contrast.style.display = "none";
      this.filter__config__grayscale.style.display = "none";
      this.filter__config__saturation.style.display = "none";
      this.filter__config__sepia.style.display = "none";
      this.filter__config__hue.style.display = "block";
      this.applyHueFilter(image, x, y, width, height);
      this.context.drawImage(image, x, y, width, height);
    });

    // lets apply onchange event listener on the slider
    this.filter__config__brightness.onchange = () => {
      this.context.clearRect(x, y, width, height);
      this.applyBrightNessFilter(image, x, y, width, height);
      this.context.drawImage(image, x, y, width, height);
    };
    this.filter__config__contrast.onchange = () => {
      this.context.clearRect(x, y, width, height);
      this.applyContrastFilter(image, x, y, width, height);
      this.context.drawImage(image, x, y, width, height);
    };
    this.filter__config__grayscale.onchange = () => {
      this.context.clearRect(x, y, width, height);
      this.applyGrayScaleFilter(image, x, y, width, height);
      this.context.drawImage(image, x, y, width, height);
    };
    this.filter__config__saturation.onchange = () => {
      this.context.clearRect(x, y, width, height);
      this.applySaturationFilter(image, x, y, width, height);
      this.context.drawImage(image, x, y, width, height);
    };
    this.filter__config__sepia.onchange = () => {
      this.context.clearRect(x, y, width, height);
      this.applySepiaFilter(image, x, y, width, height);
      this.context.drawImage(image, x, y, width, height);
    };
    this.filter__config__hue.onchange = () => {
      this.context.clearRect(x, y, width, height);
      this.applyHueFilter(image, x, y, width, height);
      this.context.drawImage(image, x, y, width, height);
    };
  }

  applyBrightNessFilter(image, x, y, width, height) {
    let brightness_value = this.filter__config__brightness.value;
    this.context.filter = "brightness(" + brightness_value + "%)";
  }
  applyContrastFilter(image, x, y, width, height) {
    let contrast_value = this.filter__config__contrast.value;
    this.context.filter = "contrast(" + contrast_value + "%)";
  }
  applyGrayScaleFilter(image, x, y, width, height) {
    let grayscale_value = this.filter__config__grayscale.value;
    this.context.filter = "grayscale(" + grayscale_value + "%)";
  }
  applySaturationFilter(image, x, y, width, height) {
    let saturation_value = this.filter__config__saturation.value;
    this.context.filter = "saturate(" + saturation_value + "%)";
  }

  applySepiaFilter(image, x, y, width, height) {
    let sepia_value = this.filter__config__sepia.value;
    this.context.filter = "sepia(" + sepia_value + "%)";
  }
  applyHueFilter(image, x, y, width, height) {
    let hue_value = this.filter__config__hue.value;
    this.context.filter = "hue-rotate(" + hue_value + "deg)";
  }
  getFiveDigitRandomNumber() {
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }
}
