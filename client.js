$(() => {
    var div = $('.page-div');
    var width = div.width();
    
    div.css('height', (width*(2/3)));
});