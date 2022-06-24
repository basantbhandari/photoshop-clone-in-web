var downloadHandler = document.getElementById("topbar__lower__edit__Download");
downloadHandler.addEventListener("click", function(){
    const a = document.createElement(("a"));
    document.body.appendChild(a);
    a.href = myCanvas.toDataURL();
    a.download = "canvas-image.png"
    a.click();
    document.body.removeChild(a);
});
