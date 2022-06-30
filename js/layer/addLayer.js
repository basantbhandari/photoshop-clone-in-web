class MyLayer {
  constructor(index) {
    this.layerIndex = index;
    this.myLayer = document.createElement("div");
    this.myLayer.classList.add("bodycontainer__right__layer__item");
    this.myLayer.setAttribute("lindex", this.layerIndex);
    this.myLayer.setAttribute("layerPriorityOrder", this.layerIndex);
    this.myLayer.style.top = "40px";
    // open eye by default
    this.toggle = true;
    this.layerContainer = document.getElementsByClassName(
      "bodycontainer__right"
    )[0];
    this.myLayer.innerHTML = `<img class="bodycontainer__right__layer__item__visibilitySign" src="./images/icons/eye.png" alt="icon">
        <p class="bodycontainer__right__layer__item__para">Layer ${this.myLayer.getAttribute(
          "layerPriorityOrder"
        )}</p>`;
    this.layerContainer.appendChild(this.myLayer);
    this.myLayerCanvas = new MyCanvas(this.layerIndex);
    this.myLayerCanvas.canvas.position = "absolute";
    this.layerItemEye = document.getElementsByClassName(
      "bodycontainer__right__layer__item__visibilitySign"
    );

    this.myLayer.children[0].addEventListener("click", () => {
      if (this.toggle) {
        this.myLayer.children[0].src = "../../images/icons/eye-off.png";
      } else {
        this.myLayer.children[0].src = "../../images/icons/eye.png";
      }
      this.toggle = !this.toggle;
      // get all the canvas
      let allCanvas = document.getElementsByClassName("eachCanvasItem");
      for (let i = 0; i < allCanvas.length; i++) {
        let canvasIndex = allCanvas[i].getAttribute("cindex");
        if (this.layerIndex == canvasIndex && this.toggle) {
          // display
          allCanvas[i].style.display = "block";
        } else {
          allCanvas[i].style.display = "none";
        }
      }
    });
    this.myLayer.children[1].addEventListener("click", () => {
      let allLayerItem = document.getElementsByClassName(
        "bodycontainer__right__layer__item"
      );
      for (let j = 0; j < allLayerItem.length; j++) {
        if (allLayerItem[j].getAttribute("lindex") == this.layerIndex) {
          allLayerItem[j].classList.add("layer__active");
          continue;
        }
        if (allLayerItem[j].classList.contains("layer__active")) {
          allLayerItem[j].classList.remove("layer__active");
        }
      }
      // get all the canvas
      let allCanvas = document.getElementsByClassName("eachCanvasItem");
      for (let i = 0; i < allCanvas.length; i++) {
        let canvasIndex = allCanvas[i].getAttribute("cindex");
        if (this.layerIndex == canvasIndex && this.toggle) {
          allCanvas[i].style.zIndex = "10";
          allCanvas[i].style.display = "block";
        } else {
          allCanvas[i].style.zIndex = "-10";
          allCanvas[i].style.display = "none";
        }
      }
    });
  }
}
