$(function(){
    $('.gallery2').click(function(e){
        e.preventDefault();
        $('#show2').children('img').attr('src', $(this).attr('href'));

    });






})