$(function(){
    $('#info1').children('section[id!="ui1"]').hide();


    $('.gallery').click(function(e){
        e.preventDefault();
        $('#show1').children('img').attr('src', $(this).attr('href'));
        $('#info1').children('section').hide();
        // console.log(this);
        let name1 = $(this).attr('href').split('/')[2].split('.')[0];
        //console.log(name2);
        $('#info1').children('section[id='+name1+']').show();




    });






})