//Funciton Declarations
function imageRatio() {
    let div = $('.page-block');
    let project = $('.project-wrapper');
    let width = div.width();
    let about = $('#about-info');
    let nameHeight = $('#name-card').height();

    //for larger resolutions
    if ($("#about-info").css("display") == "inline-block") { //black/largest media query
        console.log(nameHeight, about);
        div.css('min-height', (width*(2/3)));
        about.css('min-height', nameHeight);
        project.css('min-height', width*(.82));
    } else if ($(".mobile-nav-toggle").css("display") == "none") { //red media query
        div.css('min-height', (width*(.5)));
        project.css('min-height', width*(.66));
    } else if ($(".mobile-nav-toggle").css("font-size") == "36px") { //turquoise
        div.css('min-height', (width*(3/5)));
        project.css('min-height', width*(.75));
    } else { //For mobile resolutions
        div.css('min-height', (width));
        project.css('min-height', width*(.82));
    }
}

$('#about-nav').click(() => {
    console.log('about nav ran');
    $('html, body').animate({
        scrollTop: $('#about').offset().top - 100
    }, 200);
});
$('#skills-nav').click(() => {
    console.log('about nav ran');
    $('html, body').animate({
        scrollTop: $('#skills').offset().top - 100
    }, 200);
});
$('#projects-nav').click(() => {
    console.log('about nav ran');
    $('html, body').animate({
        scrollTop: $('#projects').offset().top - 100
    }, 200);
});
//Event Triggers
window.addEventListener("resize", imageRatio());
//DOM Doc Ready
$(() => {
    imageRatio();
});