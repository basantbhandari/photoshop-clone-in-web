
//  lets handle the click event on top bar upper
var topbar__upper__file = document.getElementById("topbar__upper__file");
var topbar__upper__edit = document.getElementById("topbar__upper__edit");
var topbar__upper__view = document.getElementById("topbar__upper__view");
var topbar__upper__images = document.getElementById("topbar__upper__images");
var topbar__upper__layers = document.getElementById("topbar__upper__layers");
var topbar__upper__filters = document.getElementById("topbar__upper__filters");
var topbar__upper__shapes = document.getElementById("topbar__upper__shapes");
var topbar__upper__help = document.getElementById("topbar__upper__help");


// lets handle the click event on top bar lower
var topbar__lower__file = document.getElementById("topbar__lower__file");
var topbar__lower__edit = document.getElementById("topbar__lower__edit");
var topbar__lower__view = document.getElementById("topbar__lower__view");
var topbar__lower__images = document.getElementById("topbar__lower__images");
var topbar__lower__layers = document.getElementById("topbar__lower__layers");
var topbar__lower__filters = document.getElementById("topbar__lower__filters");
var topbar__lower__shapes = document.getElementById("topbar__lower__shapes");
var topbar__lower__help = document.getElementById("topbar__lower__help");

// default state of the top bar
if( topbar__lower__file.classList.contains("topbar__upper__hide_menu") ) {
    topbar__lower__file.classList.remove("topbar__upper__hide_menu");
}
topbar__lower__edit.classList.add("topbar__upper__hide_menu");
topbar__lower__view.classList.add("topbar__upper__hide_menu");
topbar__lower__images.classList.add("topbar__upper__hide_menu");
topbar__lower__layers.classList.add("topbar__upper__hide_menu");
topbar__lower__filters.classList.add("topbar__upper__hide_menu");
topbar__lower__shapes.classList.add("topbar__upper__hide_menu");
topbar__lower__help.classList.add("topbar__upper__hide_menu");

// lets handle the click event on top bar upper
topbar__upper__file.addEventListener("click", function() {
    if( topbar__lower__file.classList.contains("topbar__upper__hide_menu") ) {
        topbar__lower__file.classList.remove("topbar__upper__hide_menu");
    }
    topbar__lower__edit.classList.add("topbar__upper__hide_menu");
    topbar__lower__view.classList.add("topbar__upper__hide_menu");
    topbar__lower__images.classList.add("topbar__upper__hide_menu");
    topbar__lower__layers.classList.add("topbar__upper__hide_menu");
    topbar__lower__filters.classList.add("topbar__upper__hide_menu");
    topbar__lower__shapes.classList.add("topbar__upper__hide_menu");
    topbar__lower__help.classList.add("topbar__upper__hide_menu");
    });

topbar__upper__edit.addEventListener("click", function() {
    if( topbar__lower__edit.classList.contains("topbar__upper__hide_menu") ) {
        topbar__lower__edit.classList.remove("topbar__upper__hide_menu");
    }
    topbar__lower__file.classList.add("topbar__upper__hide_menu");
    topbar__lower__view.classList.add("topbar__upper__hide_menu");
    topbar__lower__images.classList.add("topbar__upper__hide_menu");
    topbar__lower__layers.classList.add("topbar__upper__hide_menu");
    topbar__lower__filters.classList.add("topbar__upper__hide_menu");
    topbar__lower__shapes.classList.add("topbar__upper__hide_menu");
    topbar__lower__help.classList.add("topbar__upper__hide_menu");
    });

topbar__upper__view.addEventListener("click", function() {
    if( topbar__upper__view.classList.contains("topbar__upper__hide_menu") ) {
        topbar__upper__view.classList.remove("topbar__upper__hide_menu");
    }
    topbar__lower__file.classList.add("topbar__upper__hide_menu");
    topbar__lower__edit.classList.add("topbar__upper__hide_menu");
    topbar__lower__images.classList.add("topbar__upper__hide_menu");
    topbar__lower__layers.classList.add("topbar__upper__hide_menu");
    topbar__lower__filters.classList.add("topbar__upper__hide_menu");
    topbar__lower__shapes.classList.add("topbar__upper__hide_menu");
    topbar__lower__help.classList.add("topbar__upper__hide_menu");
    });

topbar__upper__images.addEventListener("click", function() {
    if( topbar__lower__images.classList.contains("topbar__upper__hide_menu") ) {
        topbar__lower__images.classList.remove("topbar__upper__hide_menu");
    }
    topbar__lower__file.classList.add("topbar__upper__hide_menu");
    topbar__lower__edit.classList.add("topbar__upper__hide_menu");
    topbar__lower__view.classList.add("topbar__upper__hide_menu");
    topbar__lower__layers.classList.add("topbar__upper__hide_menu");
    topbar__lower__filters.classList.add("topbar__upper__hide_menu");
    topbar__lower__shapes.classList.add("topbar__upper__hide_menu");
    topbar__lower__help.classList.add("topbar__upper__hide_menu");
    });

topbar__upper__view.addEventListener("click", function() {
    if( topbar__lower__view.classList.contains("topbar__upper__hide_menu") ) {
        topbar__lower__view.classList.remove("topbar__upper__hide_menu");
    }
    topbar__lower__file.classList.add("topbar__upper__hide_menu");
    topbar__lower__edit.classList.add("topbar__upper__hide_menu");
    topbar__lower__images.classList.add("topbar__upper__hide_menu");
    topbar__lower__layers.classList.add("topbar__upper__hide_menu");
    topbar__lower__filters.classList.add("topbar__upper__hide_menu");
    topbar__lower__shapes.classList.add("topbar__upper__hide_menu");
    topbar__lower__help.classList.add("topbar__upper__hide_menu");
    });
topbar__upper__layers.addEventListener("click", function() {
    if( topbar__lower__layers.classList.contains("topbar__upper__hide_menu") ) {
        topbar__lower__layers.classList.remove("topbar__upper__hide_menu");
    }
    topbar__lower__file.classList.add("topbar__upper__hide_menu");
    topbar__lower__edit.classList.add("topbar__upper__hide_menu");
    topbar__lower__view.classList.add("topbar__upper__hide_menu");
    topbar__lower__images.classList.add("topbar__upper__hide_menu");
    topbar__lower__filters.classList.add("topbar__upper__hide_menu");
    topbar__lower__shapes.classList.add("topbar__upper__hide_menu");
    topbar__lower__help.classList.add("topbar__upper__hide_menu");
    });

topbar__upper__filters.addEventListener("click", function() {
    if( topbar__lower__filters.classList.contains("topbar__upper__hide_menu") ) {
        topbar__lower__filters.classList.remove("topbar__upper__hide_menu");
    }
    topbar__lower__file.classList.add("topbar__upper__hide_menu");
    topbar__lower__edit.classList.add("topbar__upper__hide_menu");
    topbar__lower__view.classList.add("topbar__upper__hide_menu");
    topbar__lower__images.classList.add("topbar__upper__hide_menu");
    topbar__lower__layers.classList.add("topbar__upper__hide_menu");
    topbar__lower__shapes.classList.add("topbar__upper__hide_menu");
    topbar__lower__help.classList.add("topbar__upper__hide_menu");
    });
topbar__upper__shapes.addEventListener("click", function() {
    if( topbar__lower__shapes.classList.contains("topbar__upper__hide_menu") ) {
        topbar__lower__shapes.classList.remove("topbar__upper__hide_menu");
    }
    topbar__lower__file.classList.add("topbar__upper__hide_menu");
    topbar__lower__edit.classList.add("topbar__upper__hide_menu");
    topbar__lower__view.classList.add("topbar__upper__hide_menu");
    topbar__lower__images.classList.add("topbar__upper__hide_menu");
    topbar__lower__layers.classList.add("topbar__upper__hide_menu");
    topbar__lower__filters.classList.add("topbar__upper__hide_menu");
    topbar__lower__help.classList.add("topbar__upper__hide_menu");
    });
topbar__upper__help.addEventListener("click", function() {
    if( topbar__lower__help.classList.contains("topbar__upper__hide_menu") ) {
        topbar__lower__help.classList.remove("topbar__upper__hide_menu");
    }
    topbar__lower__file.classList.add("topbar__upper__hide_menu");
    topbar__lower__edit.classList.add("topbar__upper__hide_menu");
    topbar__lower__view.classList.add("topbar__upper__hide_menu");
    topbar__lower__images.classList.add("topbar__upper__hide_menu");
    topbar__lower__layers.classList.add("topbar__upper__hide_menu");
    topbar__lower__filters.classList.add("topbar__upper__hide_menu");
    topbar__lower__shapes.classList.add("topbar__upper__hide_menu");
    });
