$(function(){
    $('#info').children('section[id!="graphic1"]').hide();
    $('.gallery2').click(function(e){
        e.preventDefault();
        $('#show2').children('img').attr('src', $(this).attr('href'));
        $('#info').children('section').hide();
        // console.log(this);
        let name2 = $(this).attr('href').split('/')[2].split('.')[0];
        //console.log(name2);
        $('#info').children('section[id='+name2+']').show();
    });






})