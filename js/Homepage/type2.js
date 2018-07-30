$(function(){
    $('#info').children('section[id!="text1"]').hide();
    $('.gallery2').click(function(e){
        e.preventDefault();
        $('#show2').children('img').attr('src', $(this).attr('href'));
        //$('#info').
    });






})