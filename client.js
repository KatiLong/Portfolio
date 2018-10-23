//Funciton Declarations
function imageRatio() {
    var div = $('.page-block');
    var width = div.width();
    
    div.css('height', (width*(2/3)));
}

//Event Triggers
window.addEventListener("resize", imageRatio());
//DOM Doc Ready
$(() => {
    imageRatio();
});