const backendURL = "http://localhost:3000/";

class Main{
    constructor(index){
        this.gameIndex = index;
        this.body = document.getElementsByTagName("body")[0];
        this.body.style.border = "1px solid gray";
        this.body.style.height = "100vh";
        this.body.style.width = "100vw";
        this.layerArray = [];
        this.newFile = document.getElementById("newFile");
        this.bgFlag = false;
        this.bodycontainer__right__control__control__move__down = document.getElementsByClassName("bodycontainer__right__control__control__move__down")[0];
        this.bodycontainer__right__control__control__move__up = document.getElementsByClassName("bodycontainer__right__control__control__move__up")[0];
        this.myCanvasWrapper =  document.getElementById("myCanvasWrapper");
        this.layerItems = document.getElementsByClassName("bodycontainer__right__layer__item");
        this.addLayerButton = document.getElementById("topbar__lower__layers__add");
        this.mergeButton = document.getElementById("topbar__lower__edit__Merge");
        this.topbar__lower__file__get__all__saved__files = document.getElementById("topbar__lower__file__get__all__saved__files");
        this.topbar__lower__file__save__the__Selected__canvas = document.getElementById("topbar__lower__file__save__the__Selected__canvas");
        this.topbar__lower__file__merge__and__save__all__canvas = document.getElementById("topbar__lower__file__merge__and__save__all__canvas");
        this.myCanvasWrapper.innerHTML = `<img src="./images/mainbg.jpg" alt="mmy main bg" style="width:100%; height:99.5%" />
        <h1 style="text-align: center;margin-top:-400px; color:white; font-style: italic; font-size: 38px;">Please add file first</h1>`;

        this.addLayerButton.addEventListener("click", () => {
            console.log("layer button clicked");
            if(this.bgFlag){
                let layerTemp = new MyLayer(this.layerItems.length + 1)
                this.layerArray.push(layerTemp);
                if(this.layerArray.length == 1){
                    this.layerArray[0].myLayer.classList.add("layer__active")
                }
                console.log()
            }

        });
        this.newFile.addEventListener("click", (event)=>{
            this.bgFlag = true
            this.myCanvasWrapper.innerHTML = ``;
            this.myCanvasWrapper.style.background = "white"
            let layerTemp = new MyLayer(this.layerItems.length + 1)
            this.layerArray.push(layerTemp);
            if(this.layerArray.length == 1){
                    this.layerArray[0].myLayer.classList.add("layer__active")
            }
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


        this.bodycontainer__right__control__control__move__down.addEventListener("click", ()=>{
            // move down the layer selection
            console.log(`move down the layer selection`)
            let layerSelected = document.getElementsByClassName("layer__active")[0];
            let layerSelectedIndex = this.layerArray.findIndex(layer => layer.myLayer == layerSelected);
            if(layerSelectedIndex != this.layerArray.length - 1){
                this.layerArray[layerSelectedIndex].myLayer.classList.remove("layer__active");
                this.layerArray[layerSelectedIndex + 1].myLayer.classList.add("layer__active");
            }else{
                this.layerArray[layerSelectedIndex].myLayer.classList.remove("layer__active");
                this.layerArray[0].myLayer.classList.add("layer__active");
            }

            });
        this.bodycontainer__right__control__control__move__up.addEventListener("click", ()=>{
            // move up the layer selection
            console.log(`move up the layer selection`)
            let layerSelected = document.getElementsByClassName("layer__active")[0];
            let layerSelectedIndex = this.layerArray.findIndex(layer => layer.myLayer == layerSelected);
            if(layerSelectedIndex != 0){
                this.layerArray[layerSelectedIndex].myLayer.classList.remove("layer__active");
                this.layerArray[layerSelectedIndex - 1].myLayer.classList.add("layer__active");
            }else{
                this.layerArray[layerSelectedIndex].myLayer.classList.remove("layer__active");
                this.layerArray[this.layerArray.length - 1].myLayer.classList.add("layer__active");
            }

            });
        
        this.topbar__lower__file__get__all__saved__files.addEventListener("click", ()=>{
            
            fetch(`${backendURL}read_files`).then(response=> {
                // The API call was successful!
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            }).then( (myData)=> {
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

                console.log(typeof myData);
                Object.entries(myData).map(element => {
                    console.log(element);




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
                    cardButton.addEventListener("click", ()=>{
                        // download the image file
                        console.log(`load the file`)
                        let a = document.createElement("a");
                        document.body.appendChild(a);
                        a.href = `${element[1].imagedata}`;
                        a.download = "canvas-image.png";
                        a.click();
                        document.body.removeChild(a);
                    }
                    );
                    card.appendChild(cardButton);



                

              
          
                })

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
                cancelButton.addEventListener("click", ()=>{
                    // load the file
                    console.log(`remove the card container file`)
                    document.body.removeChild(cardContainer);
                });
               

            }).catch((err) =>{
                // There was an error
                console.warn('Something went wrong.', err);
            });



             
            

        
    });





        this.topbar__lower__file__save__the__Selected__canvas.addEventListener("click", ()=>{
            // save the selected canvas
            console.log(`save the selected canvas`)
            let layerSelected = document.getElementsByClassName("layer__active")[0];
            if(layerSelected == undefined){
                alert("please select a layer to save");
            }else{

            let layerSelectedIndex = this.layerArray.findIndex(layer => layer.myLayer == layerSelected);
            let canvasImage = this.layerArray[layerSelectedIndex].myLayerCanvas.canvas.toDataURL("image/png");
            console.log(canvasImage);
            // generate a random id using uuid
            let idOfEachCanvasSaved = Date.now();
            console.log(idOfEachCanvasSaved);
            let canvasImageName = prompt("enter the name of the image canvas:");
            console.log(canvasImageName);
            // send the data to the backend
            fetch(`${backendURL}create_file`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: idOfEachCanvasSaved,
                    name: canvasImageName,
                    imagedata: canvasImage
                })
            }).then(response=> {
                // The API call was successful!
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            }).then( (myData)=> {
                // This is the JSON from our response
                console.log(myData);
                console.log(`the file was saved`);
            }).catch((err) =>{
                // There was an error
                console.warn('Something went wrong.', err);
            });
            }
        });






        this.topbar__lower__file__merge__and__save__all__canvas.addEventListener("click", ()=>{
            // merge and download all the layer based on the priority of creation
            console.log(`merge  all the layer based on the priority of creation and save`)
            let canvas = document.createElement("canvas");
            canvas.width = this.layerArray[0].myLayerCanvas.canvas.width;
            canvas.height = this.layerArray[0].myLayerCanvas.canvas.height;
            let ctx = canvas.getContext("2d");
            this.layerArray.map(layer => {
                ctx.drawImage(layer.myLayerCanvas.canvas, 0, 0);
            })
            let canvasImage = canvas.toDataURL("image/png");
            console.log(canvasImage);
            // generate a random id using uuid
            let idOfEachCanvasSaved = Date.now();
            console.log(idOfEachCanvasSaved);
            let canvasImageName = prompt("enter the name of the image canvas:");
            console.log(canvasImageName);
            // send the data to the backend
            fetch(`${backendURL}create_file`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: idOfEachCanvasSaved,
                    name: canvasImageName,
                    imagedata: canvasImage
                })
            }).then(response=> {
                // The API call was successful!
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            }).then( (myData)=> {
                // This is the JSON from our response
                console.log(myData);
                console.log(`the file was saved`);
            }).catch((err) =>{
                // There was an error
                console.warn('Something went wrong.', err);
            });
        });
       
        
    }



   
    
}


let main = new Main(1)