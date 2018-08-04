$(function(){
    $(".se-pre-con").delay( 800 ).fadeOut("slow");
    $('#type1').load('/view/Homepage/type1.html');
    $('#type2').load('/view/Homepage/type2.html');
    $('#tab2').load('/view/Homepage/about.html')
    $('#tab3').load('/view/Homepage/contact.html')
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
    $('.scrollmenu').children('a').click(function() {
        $('main').children('section').hide();
        //console.log(this);
        $($(this).attr('href')).show();
    });
    //tab end
//end
});
    


