//Funciton Declarations
function imageRatio() {
    let div = $('.page-block');
    let project = $('.project-wrapper');
    let width = div.width();
    

    //for larger resolutions
    if ($("#about-info").css("display") == "inline-block") { //black/largest media query
        div.css('min-height', (width*(2/3)));
        project.css('min-height', width*(.82));
        let nameHeight = $('#name-card').height();
        let about = $('#about-info');
        if (about.height() < nameHeight) {
            // console.log('name card is more');
            about.css('min-height', nameHeight);
        } else if (nameHeight < about.height()){ 
            // console.log('about is more');
            $('#name-card').css('min-height', about.height());
        };
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
//Event Triggers
$('#about-nav').click(() => {
    // console.log('about nav ran');
    $('html, body').animate({
        scrollTop: $('#about').offset().top - 100
    }, 200);
});
$('#skills-nav').click(() => {
    // console.log('about nav ran');
    $('html, body').animate({
        scrollTop: $('#skills').offset().top - 100
    }, 200);
});
$('#projects-nav').click(() => {
    // console.log('about nav ran');
    $('html, body').animate({
        scrollTop: $('#projects').offset().top - 100
    }, 200);
});
// When User clicks on Mobile menu, display or hide nav bar
$('.mobile-nav-toggle').click(()=> {
    $('nav').toggle();
    $('.navbar-header').hide();
})
$('nav').click(() => {
    if ($('.mobile-nav-toggle').css('display') == 'block') {
        // console.log('Mobile nav displayed');
        $('nav').hide();
    }
})

window.addEventListener("resize", imageRatio());
// window.addEventListener("resize", () => console.log(window.width()));
//DOM Doc Ready
$(() => {
    imageRatio();
});