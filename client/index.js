

window.addEventListener("load",onPageLoadComplate, false);
function onPageLoadComplate(){
    $("body").bind("touchmove", function(e){e.preventDefault()} );
}
