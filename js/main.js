// const backendURL = "http://localhost:3000/";
const backendURL = "https://snowy-different-scabiosa.glitch.me/";

class Main {
  constructor(index) {
    this.gameIndex = index;
    this.body = document.getElementsByTagName("body")[0];
    this.body.style.border = "1px solid gray";
    this.body.style.height = "100vh";
    this.body.style.width = "100vw";
    this.layerArray = [];
    this.currentMaximumLayer = 1;
    this.helpHandler = document.getElementById("topbar__lower__help__help1");
    this.startingWindow = document.createElement("div");
    this.startingWindow.style.position = "absolute";
    this.startingWindow.classList.add("startingWindow");
    this.startingWindow.style.top = "0";
    this.startingWindow.style.left = "0";
    this.startingWindow.style.position = "absolute";
    this.startingWindow.style.width = "100%";
    this.startingWindow.style.height = "100vh";
    this.startingWindow.style.zIndex = "100";
    this.numberOfDeletedLayer = 0;
    this.removeLayerButton = document.getElementById(
      "topbar__lower__layers__remove"
    );
    this.startingWindow.style.display = "flex";
    this.startingWindow.style.textAlign = "center";
    this.startingWindow.style.justifyContent = "center";
    this.startingWindow.innerHTML = `<h1 style="margin-top:20%;font-size:84px;color:white">Add workspace</h1>`;
    this.body.appendChild(this.startingWindow);
    this.helpHandler.addEventListener("click", () => {
      let helpWindow = document.createElement("div");
      helpWindow.style.position = "absolute";
      helpWindow.classList.add("helpWindow");
      helpWindow.style.top = "0";
      helpWindow.style.left = "0";
      helpWindow.style.backgroundColor = "white";
      helpWindow.style.position = "absolute";
      helpWindow.style.width = "100%";
      helpWindow.style.height = "100vh";
      helpWindow.style.zIndex = "100";
      helpWindow.style.display = "flex";
      helpWindow.style.fontSize = "30px";
      helpWindow.style.flexDirection = "column";
      helpWindow.style.textAlign = "center";
      helpWindow.style.color = "white";
      helpWindow.style.justifyContent = "center";
      helpWindow.innerHTML = `<p>
      <ul>
      <li>Should consist of feature to work on multiple layer and combine them </li>
      <li>Should have feature to upload image and download the final output</li>
      <li>Should have feature to draw with pen and color selected</li>
      <li>Should have feature to add text with different fonts style</li>
      <li>Should have feature to apply different filter on image</li>
      <li>Should have feature erase</li>
      <li>Should have feature to select image on canvas from selection tool</li>
      <li>Should have feature to create new workspace and save it to the backend and get the saved workspace</li>
      <li>Should have image cropping feature</li>
      <li>Feature to add various shape</li>
      <li>Text drag and move facility with in space</li>
      <li>Easy switch between the layer</li>
      <li>Make visible and invisible option to the layer</li>
      <li>Transform, scale and rotate the image in tha layer</li>
      <li>Configure the painting feature as per requirement</li>
      <li>Can switch the zindex of layer</li>
      <li>Focus on UI</li>
      </ul>
      </p>`;
      // craete a close botton
      let closeButton = document.createElement("button");
      closeButton.innerHTML = "Close";
      closeButton.style.backgroundColor = "white";
      closeButton.style.border = "1px solid gray";
      closeButton.style.borderRadius = "5px";
      closeButton.style.padding = "5px";
      closeButton.style.fontSize = "20px";
      closeButton.style.width = "200px";
      closeButton.style.marginLeft = "45%";
      closeButton.style.fontWeight = "bold";
      closeButton.style.cursor = "poiner";

      closeButton.style.zIndex = "200";
      closeButton.addEventListener("click", () => {
        helpWindow.remove();
      });
      helpWindow.appendChild(closeButton);
      this.body.appendChild(helpWindow);
    });
    this.removeLayerButton.addEventListener("click", () => {
      let layerItems = document.getElementsByClassName(
        "bodycontainer__right__layer__item"
      );
      if (layerItems.length > 1) {
        for (let i = 0; i < layerItems.length; i++) {
          if (layerItems[i].classList.contains("layer__active")) {
            layerItems[i].parentNode.removeChild(layerItems[i]);
            // remove the layer from the layer array
            this.layerArray.splice(i, 1);
            this.numberOfDeletedLayer++;
            break;
          }
        }
      }
    });
    this.startingWindow.addEventListener("click", (event) => {
      this.bgFlag = true;
      this.myCanvasWrapper.innerHTML = ``;
      this.myCanvasWrapper.style.background = "white";

      let layerTemp = new MyLayer(this.layerItems.length + 1);
      this.layerArray.push(layerTemp);
      if (this.layerArray.length == 1) {
        this.layerArray[0].myLayer.classList.add("layer__active");
      }

      this.startingWindow.remove();
    });

    this.bgFlag = false;
    this.bodycontainer__right__control__control__move__down =
      document.getElementsByClassName(
        "bodycontainer__right__control__control__move__down"
      )[0];
    this.bodycontainer__right__control__control__move__up =
      document.getElementsByClassName(
        "bodycontainer__right__control__control__move__up"
      )[0];
    this.myCanvasWrapper = document.getElementById("myCanvasWrapper");
    this.layerItems = document.getElementsByClassName(
      "bodycontainer__right__layer__item"
    );
    this.addLayerButton = document.getElementById("topbar__lower__layers__add");
    this.mergeButton = document.getElementById("topbar__lower__edit__Merge");
    this.topbar__lower__file__get__all__saved__files = document.getElementById(
      "topbar__lower__file__get__all__saved__files"
    );
    this.topbar__lower__file__save__the__Selected__canvas =
      document.getElementById(
        "topbar__lower__file__save__the__Selected__canvas"
      );
    this.topbar__lower__file__merge__and__save__all__canvas =
      document.getElementById(
        "topbar__lower__file__merge__and__save__all__canvas"
      );
    this.myCanvasWrapper.innerHTML = ``;

    this.addLayerButton.addEventListener("click", () => {
      // getting the all the layers
      this.currentMaximumLayer++;

      if (this.bgFlag) {
        let layerTemp = new MyLayer(this.currentMaximumLayer);
        this.layerArray.push(layerTemp);
        if (this.layerArray.length == 1) {
          this.layerArray[0].myLayer.classList.add("layer__active");
        }
      }
    });
    this.mergeButton.addEventListener("click", (event) => {
      // merge and download all the layer based on the priority of creation
      let cnvs = document.createElement("canvas");
      document.body.appendChild(cnvs);
      cnvs.height = this.layerArray[0].myLayerCanvas.canvas.height;
      cnvs.width = this.layerArray[0].myLayerCanvas.canvas.width;
      let cxt = cnvs.getContext("2d");

      for (let i = 0; i < this.layerArray.length; i++) {
        cxt.drawImage(this.layerArray[i].myLayerCanvas.canvas, 0, 0);
      }

      if (window.navigator.msSavedBlob) {
        window.navigator.msSavedBlob(
          this.canvas.msToBlob(),
          `canvas-image${this.getFiveDigitRandomNumber()}.png`
        );
      } else {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.href = cnvs.toDataURL();
        a.download = `canvas-image${this.getFiveDigitRandomNumber()}.png`;
        a.click();
        document.body.removeChild(a);
      }
      document.body.removeChild(cnvs);
    });

    this.bodycontainer__right__control__control__move__down.addEventListener(
      "click",
      () => {
        try {
          // move down the layer selection
          let layerSelected =
            document.getElementsByClassName("layer__active")[0];
          let layerSelectedIndex = this.layerArray.findIndex(
            (layer) => layer.myLayer == layerSelected
          );
          if (layerSelectedIndex != this.layerArray.length - 1) {
            this.layerArray[layerSelectedIndex].myLayer.classList.remove(
              "layer__active"
            );
            this.layerArray[layerSelectedIndex + 1].myLayer.classList.add(
              "layer__active"
            );
          } else {
            this.layerArray[layerSelectedIndex].myLayer.classList.remove(
              "layer__active"
            );
            this.layerArray[0].myLayer.classList.add("layer__active");
          }
        } catch (error) {
          console.log(
            `error in move down the layer selection on deletion of layer`
          );
        }
      }
    );
    this.bodycontainer__right__control__control__move__up.addEventListener(
      "click",
      () => {
        try {
          // move up the layer selection
          let layerSelected =
            document.getElementsByClassName("layer__active")[0];
          let layerSelectedIndex = this.layerArray.findIndex(
            (layer) => layer.myLayer == layerSelected
          );
          if (layerSelectedIndex != 0) {
            this.layerArray[layerSelectedIndex].myLayer.classList.remove(
              "layer__active"
            );
            this.layerArray[layerSelectedIndex - 1].myLayer.classList.add(
              "layer__active"
            );
          } else {
            this.layerArray[layerSelectedIndex].myLayer.classList.remove(
              "layer__active"
            );
            this.layerArray[this.layerArray.length - 1].myLayer.classList.add(
              "layer__active"
            );
          }
        } catch (error) {
          console.log(
            `error in move up the layer selection on deletion of layer`
          );
        }
      }
    );

    this.topbar__lower__file__get__all__saved__files.addEventListener(
      "click",
      () => {
        fetch(`${backendURL}read_files`)
          .then((response) => {
            // The API call was successful!
            if (response.ok) {
              return response.json();
            } else {
              return Promise.reject(response);
            }
          })
          .then((myData) => {
            // This is the JSON from our response
            let cardContainer = document.createElement("div");
            cardContainer.classList.add("cardContainer");
            cardContainer.style.width = "100%";
            cardContainer.style.overflow = "auto";
            cardContainer.style.display = "flex";
            cardContainer.style.flexDirection = "column";
            cardContainer.style.justifyContent = "space-around";
            cardContainer.style.alignItems = "center";

            cardContainer.style.minHeight = "100%";
            cardContainer.style.background = "green";
            cardContainer.style.position = "absolute";
            cardContainer.style.top = "0";
            cardContainer.style.left = "0";
            cardContainer.style.zIndex = "100";
            document.body.appendChild(cardContainer);

            let innerCardContainer = document.createElement("div");
            innerCardContainer.classList.add("innerCardContainer");
            innerCardContainer.style.display = "flex";
            innerCardContainer.style.flexWrap = "nowrap";
            innerCardContainer.style.width = "100%";
            innerCardContainer.style.justifyContent = "space-around";
            innerCardContainer.style.alignItems = "center";
            innerCardContainer.style.flexWrap = "wrap";
            innerCardContainer.style.minHeight = "100%";
            cardContainer.appendChild(innerCardContainer);

            Object.entries(myData).map((element) => {
              let card = document.createElement("div");
              card.classList.add("card");
              card.style.minWidth = "250px";
              card.style.height = "auto";
              card.style.margin = "10px";
              card.style.background = "pink";
              card.style.borderRadius = "10px";
              card.style.flex = "1";
              card.style.zIndex = "100";
              innerCardContainer.appendChild(card);

              let cardTitle = document.createElement("h3");
              cardTitle.innerHTML = element[1].name;
              cardTitle.style.width = "100%";
              cardTitle.style.textAlign = "center";
              card.appendChild(cardTitle);

              let cardImage = document.createElement("img");
              cardImage.src = `${element[1].imagedata}`;
              cardImage.style.width = "100%";
              cardImage.style.height = "auto";
              card.appendChild(cardImage);

              let cardButton = document.createElement("button");
              cardButton.innerHTML = "download image";
              cardButton.style.width = "100%";
              cardButton.style.zIndex = "100";
              cardButton.addEventListener("click", () => {
                // download the image file
                let a = document.createElement("a");
                document.body.appendChild(a);
                a.href = `${element[1].imagedata}`;
                a.download = `canvas__image${this.getFiveDigitRandomNumber()}.png`;
                a.click();
                document.body.removeChild(a);
              });
              card.appendChild(cardButton);
            });

            let cancelButton = document.createElement("button");
            cancelButton.innerHTML = "cancel";
            cancelButton.style.borderRadius = "10px";
            cancelButton.style.border = "1px solid black";
            cancelButton.style.padding = "2px";
            cancelButton.style.minWidth = "50%";
            cancelButton.style.margin = "10%";
            cancelButton.style.padding = "10px";
            cancelButton.style.zIndex = "100";
            cardContainer.appendChild(cancelButton);
            cancelButton.addEventListener("click", () => {
              // load the file
              document.body.removeChild(cardContainer);
            });
          })
          .catch((err) => {
            // There was an error
            console.warn("Something went wrong.", err);
          });
      }
    );

    this.topbar__lower__file__save__the__Selected__canvas.addEventListener(
      "click",
      () => {
        // save the selected canvas
        let layerSelected = document.getElementsByClassName("layer__active")[0];
        if (layerSelected == undefined) {
          alert("please select a layer to save");
        } else {
          let layerSelectedIndex = this.layerArray.findIndex(
            (layer) => layer.myLayer == layerSelected
          );
          let canvasImage =
            this.layerArray[layerSelectedIndex].myLayerCanvas.canvas.toDataURL(
              "image/png"
            );
          // generate a random id using uuid
          let idOfEachCanvasSaved = Date.now();
          let canvasImageName = prompt("enter the name of the image canvas:");
          // send the data to the backend
          fetch(`${backendURL}create_file`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: idOfEachCanvasSaved,
              name: canvasImageName,
              imagedata: canvasImage,
            }),
          })
            .then((response) => {
              // The API call was successful!
              if (response.ok) {
                return response.json();
              } else {
                return Promise.reject(response);
              }
            })
            .then((myData) => {
              // This is the JSON from our response
              console.log(`the file was saved`);
            })
            .catch((err) => {
              // There was an error
              console.warn("Something went wrong.", err);
            });
        }
      }
    );

    this.topbar__lower__file__merge__and__save__all__canvas.addEventListener(
      "click",
      () => {
        // merge and download all the layer based on the priority of creation
        let canvas = document.createElement("canvas");
        canvas.width = this.layerArray[0].myLayerCanvas.canvas.width;
        canvas.height = this.layerArray[0].myLayerCanvas.canvas.height;
        let ctx = canvas.getContext("2d");
        this.layerArray.map((layer) => {
          ctx.drawImage(layer.myLayerCanvas.canvas, 0, 0);
        });
        let canvasImage = canvas.toDataURL("image/png");
        // generate a random id using uuid
        let idOfEachCanvasSaved = Date.now();
        let canvasImageName = prompt("enter the name of the image canvas:");
        // send the data to the backend
        fetch(`${backendURL}create_file`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: idOfEachCanvasSaved,
            name: canvasImageName,
            imagedata: canvasImage,
          }),
        })
          .then((response) => {
            // The API call was successful!
            if (response.ok) {
              return response.json();
            } else {
              return Promise.reject(response);
            }
          })
          .then((myData) => {
            // This is the JSON from our response
            console.log(`the file was saved`);
          })
          .catch((err) => {
            // There was an error
            console.warn("Something went wrong.", err);
          });
      }
    );
  }

  getFiveDigitRandomNumber() {
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }
}

let main1 = new Main(1);
