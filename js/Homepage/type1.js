$(function(){
    $('#test').load('/view/Homepage/ui1.html');



    $('.gallery').click(function(e){
        e.preventDefault();
        $('#show').children('img').attr('src', $(this).attr('href'));
//load html




    });






})