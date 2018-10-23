//Funciton Declarations
function imageRatio() {
    var div = $('.page-block');
    var project = $('.project-wrapper');
    var width = div.width();
    
    div.css('height', (width*(2/3)));
    project.css('height', width*(.82));
}

//Event Triggers
window.addEventListener("resize", imageRatio());
//DOM Doc Ready
$(() => {
    imageRatio();
});