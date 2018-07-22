$(function(){
    $('#menu').load('/view/Homepage/menu1.html');
    $('#type1').load('/view/Homepage/type1.html');
    $('#type2').load('/view/Homepage/type2.html');

    let navPos = $('.nav').offset().top;
    $(window).scroll(function() {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > navPos) {
            $('.nav').css('position', 'fixed');
        } else {
            $('.nav').css('position','static');
            // alert('Hello! I am an alert box!!');
        }
    });

});
    


