$(function(){
    $('#type1').load('/view/Homepage/type1.html');
    $('#type2').load('/view/Homepage/type2.html');

    let navPos = $('.nav').offset().top;
    $(window).scroll(function() {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > navPos) {
            $('.nav').css('position', 'fixed');
        } else {
            $('.nav').css('position','static');
        }
    });
    //tab
    $('section[id!="tab1"]').hide();  
    $('a').click(function() {
        $('section').hide();
        $($(this).attr('href')).show();
    });
    //tab end

//end
});
    


