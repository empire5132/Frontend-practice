$(function(){
    $('.gallery').click(function(e){
        e.preventDefault();
        $('#show').children('img').attr('src', $(this).attr('href'));

    });






})