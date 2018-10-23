//Funciton Declarations
function imageRatio() {
    var div = $('.page-div');
    var img = $('#about img')
    var width = div.width();
    
    div.css('height', (width*(2/3)));
    img.css('height', (width*(2/3)));
}

//Event Triggers
window.addEventListener("resize", imageRatio());
//DOM Doc Ready
$(() => {
    imageRatio();
});