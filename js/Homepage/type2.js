$(function(){
    $('#info2').children('section[id!="graphic1"]').hide();
    $('.gallery2').click(function(e){
        e.preventDefault();
        $('#show2').children('img').attr('src', $(this).attr('href'));
        $('#info2').children('section').hide();
        // 
        let name2 = $(this).attr('href').split('/')[2].split('.')[0];
        //console.log(name2);
        $('#info2').children('section[id='+name2+']').show();
    });






})