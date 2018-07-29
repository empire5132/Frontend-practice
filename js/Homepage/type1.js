$(function(){
    $("a").click(function(){
        $('#show').children('img').attr('src',$(this).attr('href'));


       return false 
    });






})