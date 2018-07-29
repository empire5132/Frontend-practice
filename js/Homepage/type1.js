$(function(){
    $("a").click(function(){
        //好像是錯在這行
        //$('#show').children('img').attr('src', '$(this).attr('href')');
        //上面那行
        alert($(this).attr('href'));



       return false 
    });






})